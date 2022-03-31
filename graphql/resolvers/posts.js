const Post = require('../../models/Post');

module.exports = {
  Query: {
    async getPosts() {
      try {
        console.log('------LINE 25--------');
        const posts = await Post.find();
        console.log(posts);
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
