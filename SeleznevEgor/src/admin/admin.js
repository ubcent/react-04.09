const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const command = process.argv[2];


mongoose.set('bufferCommands', false);
switch (command) {
    case 'addUser':
        user = (require('./user.json'));
        if (user.login && user.password) addUser(user.login, user.password, user.userpic);
        break;
    case 'addCategory':
        category = process.argv[3];
        category ? addCategory(category): console.log('category not entered');
        break;
    case 'addPost':
        addPost();
        break;
    default:
        console.log('unknow command');
}

function addCategory(category) {
    const { Category } = require('./models');
    mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true}).then(
        ()=>{
            Category.find({}, function (err, docs) {
                if(err){
                    mongoose.disconnect();
                    return console.log(err);
                }
                if (docs.length < 10){
                    const newCategory = new Category ({
                        name: category,
                    });
                    newCategory.save(function (err) {
                        mongoose.disconnect();
                        if (err) return console.log(err);
                        console.log('Category saved', newCategory);
                    })
                }else{
                    mongoose.disconnect();
                    console.log('Too much categories');
                    console.log(docs);
                }
            })
        },
        err => {
            console.log(err);
        });
}

function addUser(login, password, userpic) {
    const { User } = require('./models');
    mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true}).then(
        ()=>{
            User.find({login: login}, function (err, docs) {
                if (docs.length){
                    mongoose.disconnect();
                    console.log('User already exist');
                    console.log(docs);
                }else{
                    const user = new User ({
                        login:login,
                        password: password,
                        userpic:userpic
                    });
                    user.save(function (err) {
                        mongoose.disconnect();
                        if (err) return console.log(err);
                        console.log('User saved', user);
                    })
                }
                if(err){
                    mongoose.disconnect();
                    console.log(err);
                }
            })
        },
        err => {
            console.log(err);
        }
    );
}

function addPost() {
    post = (require('./post.json'));
    const { Post, User, Category } = require('./models');
    mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true}).then(
        () =>{
            User.findOne({login: post.autor}, function (err, user) {
                if (err){
                    mongoose.disconnect();
                    return console.log(err);
                }
                if (user){
                    Category.findOne({name: post.category}, function (err, cat) {
                        if(err){
                            mongoose.disconnect();
                            return console.log(err);
                        }
                        if(cat){
                            const newPost = new Post({
                                title: post.title,
                                author: user._id,
                                prevText : post.prevText,
                                prevImg: post.prevImg,
                                date : Date.now(),
                                body : post.body,
                                category: cat._id,
                            });
                            user.posts = user.posts.concat([newPost._id]);
                            console.log(user.posts);

                            newPost.save(function (err) {
                                User.updateOne({_id: user._id},{posts: user.posts}, (err)=>{
                                    console.log(err);
                                    mongoose.disconnect();
                                });

                                if (err) return console.log(err);
                                console.log('Added sucsesfuul');
                            });
                        }
                    })
                } else {
                    console.log('User is not exist');
                }
            })
        },
        err => {
            console.log(err);
        }
    );
}

