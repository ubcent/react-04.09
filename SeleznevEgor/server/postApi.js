const {User, Category, Post} = require('./models');
const commentApi = require('./commentApi');

module.exports.getUserPosts = async function (userId){
    const posts = await Post.find({author:userId});
    return posts.map((post) =>{
        return {
            title: post.title,
            prevText: post.prevText,
            prevImg: post.prevImg,
            date: post.date,
            author:post.author,
            category: post.category,
        };
    });
};

module.exports.getPosts = async function (category, numbers){
    filter = (category === '0') ? {}:{category:category} ;
    const posts = await Post.find(filter,null, {limit: +numbers});
    return {
        posts: posts.map((post) => {return {
            title: post.title,
            prevText: post.prevText,
            prevImg: post.prevImg,
            date: post.date,
            author:post.author,
            category: post.category,
            id: post._id,
        }}),
        finish: (+numbers > posts.length) ? true: false,
    };
};

module.exports.getPost = async function (id, numbers){
    console.log('post', id);
    const post = await Post.findById(id , 'title author prevImg date body category');
    const comments = await commentApi.getPostComments(post._id, numbers);
    return { post: post, comments: comments};
    
};