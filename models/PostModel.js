class PostModel {
    constructor(data) {
        this.id = data.id;
        this.uid = data.uid;
        this.title = data.title;
        this.contents = data.contents;
        this.timePublished = data.timePublished;
    }

    get id() {
        return new String(this._id)
    }

    set id(id) {
        this._id = id;
    }

    get uid() {
        return new String(this._uid || '')
    }

    set uid(uid) {
        this._uid = uid;
    }

    get title() {
        return this._title || '';
    }

    set title(title) {
        this._title = title;
    }

    get contents() {
        return this._contents || '';
    }

    set contents(contents) {
        this._contents = contents;
    }

    get timePublished() {
        return new Date(this._timePublished).getTime()
    }

    set timePublished(timePublished) {
        this._timePublished = timePublished || new Date().getTime();
    }

    get valid() {
        return !!this.uid && !!this.title && !!this.contents && !!this.timePublished;
    }

}

module.exports = PostModel;