const {Comment, User, Post} = require('./models');
const userApi = require('./userApi');
const postApi = require('./postApi');

module.exports.getLastComments = async function (numbers){
    const comments = await Comment.find({}, null, {limit: +numbers});
    const finish = (+numbers > comments.length);
    const res = await Promise.all(comments.map(async (comment) => {
        return {
            body: comment.body,
            author: await userApi.getCommentAuthor(comment.author),
            post: await postApi.getPostParent(comment.postParrent),
            date: comment.date,
        }})
    );
    return {
        comments: res,
        finish: finish};
};

module.exports.getPostComments = async function (postId, numbers){
    const comments = await Comment.find({postParrent:postId}, null, {limit: +numbers});
    const finish = (+numbers > comments.length);
    const res = await Promise.all(comments.map(async (comment) => {
        return {
            body: comment.body,
            author: await userApi.getCommentAuthor(comment.author),
            date: comment.date,
        }})
    );
    return {
        comments: res,
        finish: finish};
};

module.exports.getUserComments = async function (userId){
    return await Comment.find({author:userId});
};


module.exports.addComment = async function (comment){
    console.log(comment);
    const newComment = new Comment({
        body: comment.body,
        author: comment.author,
        date: Date.now(),
        postParrent: comment.postParrent});
    const user = await User.findById(newComment.author);
    console.log(user);
    user.comments = user.comments.concat([newComment._id]);
    const post = await Post.findById(newComment.postParrent);
    console.log('post', post);
    post.comments = post.comments.concat([newComment._id]);
    newComment.save((err, comment) =>{
        if (err) return console.log(err);
        console.log(comment);
       User.updateOne({_id: user._id},{comments: user.comments});
        Post.updateOne({_id: post._id},{comments: post.comments});
    })
};

