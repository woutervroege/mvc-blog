const PostModel = require('../models/PostModel');
const PostDAO = require('../daos/PostDAO');
const PostView = require('../views/PostView');
const PostListView = require('../views/PostListView');

class PostController {
    async getUserPostsList(uid) {
        const dao = new PostDAO();
        const dbData = await dao.getPostsByUserId(uid);
        const postModels = dbData.map(item => new PostModel(item));
        const postView = new PostListView(postModels);
        return postView;
    }
    async getPostsList() {
        const dao = new PostDAO();
        const dbData = await dao.getPosts();
        const postModels = dbData.map(item => new PostModel(item));
        const postView = new PostListView(postModels);
        return postView;
    }
    async getPost(id) {
        const dao = new PostDAO();
        const dbData = await dao.getPostById(id);
        const postModel = new PostModel(dbData);
        const postView = new PostView(postModel);
        return postView;
    }
    async createPost(data) {
        const postModel = new PostModel(data);
        const dao = new PostDAO();
        const result = await dao.createPost(postModel);
        return result;
    }
    async updatePost(data) {
        const postModel = new PostModel(data);
        const dao = new PostDAO();
        const result = await dao.updatePost(postModel);
        return result;
    }
    async patchPost(data) {
        const dao = new PostDAO();
        const dbData = await dao.getPostById(data.id);
        const postModel = new PostModel({...dbData, ...data});
        const result = await dao.updatePost(postModel);
        return result;
    }
    async deletePost(id) {
        const dao = new PostDAO();
        const result = await dao.deletePostById(id);
        return result;
    }
}

module.exports = PostController;