const {Comment, User, Post, Category} = require('./models');


module.exports.getCategory = async function (catId){
    return await Category.findById(catId);
};

module.exports.getCategories = async function (){
    return await Category.find({});
};
