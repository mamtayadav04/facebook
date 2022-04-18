import User from "../models/User"
import { Schema, model, Document, Types } from 'mongoose';
import Posts from "../models/Posts";

export class UserController {
    static userPost(arg0: string, userPost: any) {
        throw new Error('Method not implemented.');
    }

    static async signUp(req, res, next) {
        console.log("signUp",req,req.body)
        
        const first_Name = req.body.first_Name;
        const last_Name = req.body.last_Name;
        const email = req.body.email;
        const password = req.body.password;
        const username = req.body.username;
        const  phoneNumber = req.body. phoneNumber;
        const data = {
            first_Name: first_Name,
            last_Name: last_Name,
            email: email,
            password: password,
            username: username,
            phoneNumber: phoneNumber,
            created_at: new Date(),
            updated_at: new Date()
        };
        try {
            let user = await new User(data).save();
            
            res.send(user);
        } catch (e) {
            next(e);
        }
    }
   
    
    static async getPost(req,res,next){

        
        
        try {
            const  posts =  await Posts.findOne({_Id:req.body._Id}).populate('user_Id') 
            res.send(posts);
            
        } 
         // findOne({_id: user_Id });
            // populate("post_Id") 
           
           
        catch(e){
            next(e);
        }

    }
    // static async userComment(req,res,next){
    //     const post_Id =req.body.post_Id;
    //     const user_Id = req.body.user_Id;
    //     const uplode_Picture = req.body.uplode_Picture
    //     const data = {
    //         post_Id : post_Id,
    //         user_id : user_Id,
    //         uplode_Picture: uplode_Picture,

    //     } ;
    //     try {
    //         // findOne({_id: user_Id });
    //         // populate("post_Id") 
    //         let user = await new User(data).save();
    //         res.send(user);
    //     }catch(e){
    //         next(e);
    //     }

// }
}

