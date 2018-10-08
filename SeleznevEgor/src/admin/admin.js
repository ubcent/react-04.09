const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
    },
    userpic: String,
    posts: {
        type: Array,
        default: [],
    },
    comments: {
        type: Array,
        default:[],
    },
});

const User = mongoose.model('User', userSchema);
//
// const newUser = new User ({
//    login: 'admin',
//    password: '456852',
//    userpic: 'content/avatar.png',
// });

// console.log(newUser);

mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true});

// newUser.save(function (err) {
//    mongoose.disconnect();
//    if (err) return console.log('err');
//     console.log('Сохранен объект ',newUser);
// });
User.find({}, function (err, docs) {

    if (err) return console.log('err');
    docs.map(function (item) {
        User.deleteOne({login: item.login}, function(err, result){
            if (err) return console.log('err');
            console.log(result);
        })
    });
    console.log(docs);
});

function addUser(login, password, userpic) {
    mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true}).then(()=>{
        User.find({login:login}, function (err, docs){
           if (err) return console.log('err');
           if (docs.length !== 0) return console.log('Login is used, please use other login');
            const user = new User({
                login:login,
                password:password,
                userpic:userpic
            });
            user.save(function (err) {
                if (err) console.log('err');
                console.log('Сохранен объект ',user);
               });
           });
    });
};

addUser('admin', '456852');
mongoose.disconnect();