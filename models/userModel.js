const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: String,
    user_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true   
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, 'Name must have more or equal than 2 characters']
    }
});

userSchema.pre('save', function (next) {
    this._id = this.user_id;
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;