const CONNECTOR = 'Filesystem';
const PostDAO = require('./' + CONNECTOR + '/PostDAO');

module.exports = {
    Post: PostDAO
}