class PostView {
    constructor(postModel) {
        return {
            id: postModel.id,
            uid: postModel.uid,
            title: postModel.title,
            timePublished: postModel.timePublished,
            contents: postModel.contents,
        }    
    }
}

module.exports = PostView;