const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const PostInterface = require('../interfaces/PostInterface');
const PostModel = require('../../models/PostModel');
const POSTS_FILE = path.resolve(__filename, '../Posts.json');

class PostDAO extends PostInterface {
    
    async getPosts() {
        const dbData = await this._readDB();
        const Posts = dbData.map(item => new PostModel(item));
        return Posts;
    }
    
    async getPostById(id) {
        const dbData = await this._readDB();
        const itemData = dbData.find(item => item.id == id);
        if(!itemData) throw 'item not found';
        const Post = new PostModel(itemData);
        return Post;
    }
    
    async getPostsByUserId(id) {
        const dbData = await this._readDB();
        const filteredItems = dbData.filter(item => item.uid == id);
        const Posts = filteredItems.map(item => new PostModel(item));
        return Posts;
    }
    
    async createPost(Post) {
        const dbData = await this._readDB();
        Post.id = Math.random();
        if(!Post.valid) return Post;
        
        const data = this._parsePostToDataObject(Post);
        dbData.push(data);
        await this._writeDB(dbData);
        return Post;
    }
    
    async updatePost(Post) {
        const dbData = await this._readDB();
        if(!Post.valid) return Post;
        
        const data = this._parsePostToDataObject(post);
        const index = dbData.findIndex(item => item.id == Post.id);
        dbData[index] = data;
        await this._writeDB(dbData);
        return Post;
    }
    
    async deletePostById(id) {
        const dbData = await this._readDB();
        const filteredData = dbData.filter(item => item.id != id);
        try {
            await this._writeDB(filteredData);
            return true;
        } catch(e) {
            return false;
        }
    }
    
    async _readDB() {
        const buffer = await readFile(POSTS_FILE);
        const DB = JSON.parse(buffer.toString());
        return DB;
    }
    
    async _writeDB(data) {
        return await writeFile(POSTS_FILE, JSON.stringify(data, null, 2));
    }

    _parsePostToDataObject(post) {
        return {
            id: post.id,
            uid: post.uid,
            title: post.title,
            contents: post.contents,
            timePublished: post.timePublished,
        }
    }
}

module.exports = PostDAO;