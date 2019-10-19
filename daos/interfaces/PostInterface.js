const MSG = 'Method not implemented!';

class PostInterface {
    async getPosts() {
        console.warn(MSG);
        return [];
    }
    async getPostById(id) {
        console.warn(MSG);
        return {};
    }
    async getPostsByUserId(id) {
        console.warn(MSG);
        return [];
    }
    async createPost(post) {
        console.warn(MSG);
        return false;        
    }
    async updatePost(id) {
        console.warn(MSG);
        return false;        
    }
    async patchPost(id) {
        console.warn(MSG);
        return false;        
    }
    async deletePost(id) {
        console.warn(MSG);
        return false;        
    }

}

module.exports = PostInterface;