import * as mongoose from 'mongoose';
import * as mongoose_delete from 'mongoose-delete';

const UserSchema = new mongoose.Schema({
        _id: Number,
        email: String,
        password: String,
        user: Number,
        type: {type: String, lowercase: false, trim: true},
    },
    {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}},
);
UserSchema.plugin(mongoose_delete,  { overrideMethods: true });
UserSchema.set('toJSON', {
    transform(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.deleted;
        delete ret.__v;
    },
});
export default UserSchema;