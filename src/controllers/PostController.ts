import Likes from "../models/Likes";
import Posts from "../models/Posts";


export class PostController {
    static async userPost(req,res,next){
        const post_Id =req.body.post_Id;
        const user_Id = req.body.user_Id;
        const uplode_Picture = req.body.uplode_Picture
        try {
            const data = {
                post_Id : post_Id,
                user_Id : user_Id,
                uplode_Picture: uplode_Picture,
    
            } ;
        // const userData=  await Posts.findOne({id: user_Id }).populate("user_Id")   // findOne({_id: user_Id });
            // populate("post_Id") 
            let user = await new Posts(data).save();
            res.send(user);
        }catch(e){
            next(e);
        }

    }
    
        static async likePost(req,res,next){
            const post_Id =req.body.post_Id;
            const user_Id = req.body.user_Id;
            const unlike_Post =req.body.unlike_Post;
            const like_post = req.body.like_post
            try {
                const data = {
                    post_Id : post_Id,
                    user_Id : user_Id,
                    unlike_Post:unlike_Post,
                    like_post:like_post
                   } ;
                   
                   const  likes =  await Likes.findOne({_Id:req.body.post_Id} ,data); 
                   res.send(likes);
                let user = await new Likes(data).save();
                res.send(user);
            }catch(e){
                next(e);
            }
    
        }
         

}