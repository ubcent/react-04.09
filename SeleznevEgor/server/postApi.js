const {User, Category, Post} = require('./models');
const commentApi = require('./commentApi');
const categorytApi = require('./categoryApi');

module.exports.getUserPosts = async function (userId){
    const posts = await Post.find({author:userId});
    return posts.map(async (post) =>{
        return {
            title: post.title,
            prevText: post.prevText,
            prevImg: post.prevImg,
            date: post.date,
            author:post.author,
            category: await categorytApi.getCategory(post.category),
        };
    });
};

module.exports.getPosts = async function (category, numbers){
    filter = (category === '0') ? {}:{category:category} ;
    const posts = await Post.find(filter,null, {limit: +numbers});
    const res = await Promise.all(posts.map(async (post) => {
        return {
            title: post.title,
            prevText: post.prevText,
            prevImg: post.prevImg,
            date: post.date,
            author:post.author,
            category: await categorytApi.getCategory(post.category),
            id: post._id,
        }}));
    return {
        posts: res,
        finish: (+numbers > posts.length) ,
    };
};

module.exports.getPost = async function (id, numbers){
    console.log('post', id);
    const post = await Post.findById(id , 'title author prevImg date body category');
    const comments = await commentApi.getPostComments(post._id, numbers);
    return { post: post, comments: comments};
    
};

module.exports.getPostParent = async function(id) {
    return await Post.findById(id , 'title _id');
};