const PostInterface = require('../interfaces/PostInterface');
const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const POSTS_FILE = path.resolve(__filename, '../Posts.json');

class PostDAO extends PostInterface {
    
    async getPosts() {
        const POSTS = await this._readDB();
        return POSTS;
    }
    
    async getPostById(id) {
        const POSTS = await this._readDB();
        return POSTS.find(item => item.id == id);
    }
    
    async getPostsByUserId(id) {
        const POSTS = await this._readDB();
        return POSTS.filter(item => item.uid == id);
    }
    
    async createPost(postModel) {
        const POSTS = await this._readDB();
        postModel.id = Math.random();
        if(!postModel.valid) return postModel;
        
        const data = postModel.toJSON();
        POSTS.push(data);
        await this._writeDB(POSTS);
        return postModel;
    }
    
    async updatePost(postModel) {
        const POSTS = await this._readDB();
        if(!postModel.valid) return postModel;
        
        const data = postModel.toJSON();
        const index = POSTS.findIndex(item => item.id == postModel.id);
        POSTS[index] = data;
        await this._writeDB(POSTS);
        return postModel;
    }
    
    async deletePostById(id) {
        const POSTS = await this._readDB();
        const FilteredPosts = POSTS.filter(item => item.id != id);
        try {
            await this._writeDB(FilteredPosts);
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
}

module.exports = PostDAO;