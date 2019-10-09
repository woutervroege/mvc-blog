const PostModel = require('../models/PostModel');
const DAO = require('../daos/index');
const PostDAO = DAO.Post;
const PostView = require('../views/PostView');
const PostListView = require('../views/PostListView');

class PostController {
    getUserPostsList(uid) {
        const dao = new PostDAO();
        const dbData = dao.getPostsByUserId(uid);
        const postModels = dbData.map(item => new PostModel(item));
        const postView = new PostListView(postModels);
        return postView;
    }
    getPostsList() {
        const dao = new PostDAO();
        const dbData = dao.getPosts();
        const postModels = dbData.map(item => new PostModel(item));
        const postView = new PostListView(postModels);
        return postView;
    }
    getPost(id) {
        const dao = new PostDAO();
        const dbData = dao.getPostById(id);
        const postModel = new PostModel(dbData);
        const postView = new PostView(postModel);
        return postView;
    }
}

module.exports = PostController;