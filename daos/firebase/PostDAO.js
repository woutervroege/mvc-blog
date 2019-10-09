const PostInterface = require('../interfaces/PostInterface');

const DEMO_POSTS = [
    {
        id: 1,
        uid: 1,
        title: 'Sam is een blije man',
        timePublished: new Date().getTime(),
        contents: `Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue.
        Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`
    },{
        id: 2,
        uid: 1,
        title: 'Sam is iets te blij',
        timePublished: new Date().getTime(),
        contents: `Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue.
        Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`
    },
    {
        id: 3,
        uid: 2,
        title: 'Wouter is een rare man',
        timePublished: new Date().getTime(),
        contents: `Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue.
        Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`
    },
    {
        id: 4,
        uid: 2,
        title: 'Wouter is helemaal gek',
        timePublished: new Date().getTime(),
        contents: `Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue.
        Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`
    }
]

class PostDAO extends PostInterface {
    getPosts() {
        return DEMO_POSTS;
    }
    getPostById(id) {
        return DEMO_POSTS.find(item => item.id == id);
    }
    getPostsByUserId(id) {
        return DEMO_POSTS.filter(item => item.uid == id);
    }
}

module.exports = PostDAO;