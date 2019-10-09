class PostModel {
    constructor(data) {
        this.title = data.title;
        this.id = data.id;
        this.uid = data.uid;
        this.contents = data.contents;
        this.timePublished = data.timePublished;
    }
}

module.exports = PostModel;