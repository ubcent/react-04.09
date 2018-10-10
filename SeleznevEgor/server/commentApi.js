const {Comment} = require('./models');


module.exports.getUserComments = async function (userId){
    return await Comment.find({author:userId});
};