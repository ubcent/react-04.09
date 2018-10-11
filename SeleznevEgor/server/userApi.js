const {User, Category, Post} = require('./models');
const postApi = require('./postApi');
const commentApi = require('./commentApi');

module.exports.AuthenticationUser =  async function (authData){
    console.log(Date.now(), 'try to auth', authData);
    const user = await User.findOne({login:new RegExp(`^${authData.login}$`, 'i')});
    if (user){
        if (user.password === authData.password){
            console.log(Date.now(),'sucsessfull');
            return {
                login: user.login,
                id: user._id,
                userpic: user.userpic ? user.userpic : false,
                logined:true,
                reason:''
            }
        }
        console.log(Date.now(),'wrong password');
        return {logined:false, reason: 'password wrong'};
    }
    console.log(Date.now(),'login error');
    return {logined:false, reason: 'login not found'};
};

module.exports.getUsers = async function (numbers) {
    console.log(Date.now(), 'get users', numbers);
    const users = await User.find({}, null, {limit: +numbers});
    return {
        users: users.map((user) => {return {
            login: user.login,
            id: user._id,
            userpic: user.userpic ? user.userpic : false,
        }}),
        finish: (+numbers > users.length) ? true: false,
    };
};

module.exports.getUser = async function (id) {
    const user = await User.findById(id);
    return {
        login: user.login,
        userpic: user.userpic ? user.userpic: false,
        id: user._id,
        posts: await postApi.getUserPosts(user._id),
        comments: await commentApi.getUserComments(user._id),
    };
};


module.exports.getCommentAuthor = async function (id) {
    return await User.findById(id, 'login _id userpic');
};
