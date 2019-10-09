class PostInterface {
    async getPosts() {
        console.warn('not implemented');
        return [];
    }
    async getPostById(id) {
        console.warn('not implemented');
        return {};
    }
    async getPostsByUserId(id) {
        console.warn('not implemented');
        return [];
    }
    async createPost(post) {
        console.warn('not implemented');
        return false;        
    }
    async updatePost(id) {
        console.warn('not implemented');
        return false;        
    }
    async deletePost(id) {
        console.warn('not implemented');
        return false;        
    }

}

module.exports = PostInterface;