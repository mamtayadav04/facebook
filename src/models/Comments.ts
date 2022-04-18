import * as mongoose from 'mongoose';
import { Schema,model } from 'mongoose';

const commentsSchema = new mongoose.Schema({

    comment_id: {
        
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    post_Id: {

        type: String,
        ref: "post"
    },

   user_comment:{
        type:String
    },

     update_comment:{
       
        type: String,

     },

    deleted_comment: {

        type: Boolean
    },
    created_at: {

        type: String
    },
    updated_at:
    {
        type: String
    }

});
export default model('comments', commentsSchema);