import { KeyObject } from 'crypto';
import * as mongoose from 'mongoose';
import { Schema, model } from 'mongoose';


const likesSchema = new mongoose.Schema({

    user_Id: {

        type: Schema.Types.ObjectId,
        ref: "User"
    },

    post_Id: {
        
        type: Schema.Types.ObjectId,
        ref: "post"
    },

    unlike_Post:{
        type : Boolean

    },

    like_post:{
       type : Boolean
    },

    created_At: {
        type: String
    },
    updated_At:
    {
        type: String
    }
});
export default model('likes', likesSchema);