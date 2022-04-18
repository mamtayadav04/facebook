import * as mongoose from 'mongoose';
import {Schema, model } from 'mongoose';
import { boolean } from 'webidl-conversions';
import User from './User';
const postSchema = new mongoose.Schema({

    user_Id: {

        type: mongoose.Types.ObjectId,
        ref: "User"
    },

    post_Id: {

        type: String,
        ref: "post"
    },
    select_Picture: {
        type: String

    },

    uplode_Picture: {
        type: String
    },

    deleted: {
        type: Boolean
    },

    created_at: {
        type: String
    },
    updated_at:
    {
        type: String
    },



});
export default model('post', postSchema);