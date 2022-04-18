import * as mongoose from 'mongoose';
import {model} from 'mongoose';
import { any } from 'webidl-conversions';

const userSchema = new mongoose.Schema({
    first_Name : {
        type: String
    },
    last_Name:{
        type:String
    },
    userName :{
      type: String
    },
    email:{
        type:String
    },
    password:{
        type: String
    },
   phoneNumber:{
       type:String
    },

   countryCode: {
    type: String
    },

    country: {
        type: String
    },
    city: {
        type: String
    },
    zipcode: {
        type: String
    },
    address: {
        type: String
    },
    

},{
    timestamps: { createdAt: 'created_at' }
});

export default model('User', userSchema);