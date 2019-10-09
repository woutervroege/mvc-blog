const PostView = require('./PostView');

function main(postModels) {
    return postModels.map((postModel => PostView(postModel)));
}

module.exports = main;