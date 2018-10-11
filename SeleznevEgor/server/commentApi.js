const {Comment, User, Post} = require('./models');
const userApi = require('./userApi');

module.exports.getUserComments = async function (userId){
    return await Comment.find({author:userId});
};



module.exports.getPostComments = async function (postId, numbers){
    const comments = await Comment.find({postParrentr:postId}, null, {limit: +numbers});
    
    const finish = (+numbers > comments.length);
    return {
        comments: comments.map(async(item) => {
            item.author = await userApi.getCommentAuthor(id);
        }),
        finish: finish};
};


module.exports.getLastComments = async function (numbers){
    const comments = await Comment.find({}, null, {limit: +numbers});
    const finish = (+numbers > comments.length);
    return {comments: comments.map(async(item) => {
            item.author = await userApi.getCommentAuthor(id);
        }),
        finish: finish};
};

module.exports.addComment = async function (comment){
    const newComment = new Comment({
        body: comment.body,
        author: comment.author,
        date: Date.now(),
        postParrent: comment.post});
    const user = await User.findBuId(newComment.author);
    user.comments = user.comments.concat([newComment._id]);
    const post = await Post.findById(newComment.postParrent);
    post.comments = post.comments.concat([newComment._id]);
    newComment.save(async (err, comment) =>{
        if (err) return console.log(err);
        console.log(comment);
        await User.updateOne({_id: user._id},{comments: user.comments});
        await Post.updateOne({_id: post._id},{comments: post.comments});
    })
};

