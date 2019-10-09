const PostView = require('./PostView');

class PostsListView {
    constructor(postModels) {
        return postModels.map((postModel => new PostView(postModel)));
    }
}

module.exports = PostsListView;