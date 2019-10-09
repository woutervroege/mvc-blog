function main(postModel) {
    return {
        id: postModel.id,
        title: postModel.title,
        timePublished: postModel.timePublished,
        contents: postModel.contents,
    }
}

module.exports = main;