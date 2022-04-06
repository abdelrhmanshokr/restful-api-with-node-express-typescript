import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

// because of typescript we need to add a user interface and export it
interface UserInterface extends mongoose.Document{
    email: String;
    name: String;
    password: String;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
};

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
    },
    passwrod: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const user = mongoose.model<UserInterface>("User", UserSchema);
export default { user };