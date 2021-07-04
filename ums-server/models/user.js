const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate-v2");
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require("bcryptjs")

const UserSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true, select: false },
        description: { type: String, required: true },
    }
);

UserSchema.plugin(mongoosePaginate);
UserSchema.plugin(uniqueValidator);

UserSchema.pre("save", function (next) {
    const user = this;
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, (saltError, salt) => {
            try {
                bcrypt.hash(user.password, salt, (hashErr, hash) => {
                    user.password = hash;
                    next();
                });
            } catch (error) {
                return next(error);
            }
        })
    } else {
        return next()
    }
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;