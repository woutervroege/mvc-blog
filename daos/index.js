const DBNAME = 'redis';
const PostDAO = require('./' + DBNAME + '/PostDAO');

module.exports = {
    Post: PostDAO
}