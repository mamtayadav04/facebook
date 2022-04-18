
import { error } from "console";
import Comments from "../models/Comments";
import User from "../models/User";

export class CommentsController {

    static async Comments(req, res) {
        const comment_id = req.body.comment_id
        const deleted_comment = req.body.deleted_comment
        const update_comment = req.body.update_comment
        const user_comment = req.body.user_comment
        try {
            const data = {
                comment_id: comment_id,
                deleted_comment: deleted_comment,
                update_comment: update_comment,
                user_comment: user_comment,
            };

            let user = await new Comments(data).save();
            res.send(user);
        } catch (e) {


        }

    }

    static async deleted_comment(req, res) {
        

        try {

            const comment_id = req.params.comment_id;
            console.log("comment deleted", req.body.user_comment)
            const data = {

                user_comment: req.body.user_comment,
                updated_at: new Date(),
            };
            const user_comment = await Comments.deleteOne({ _id: comment_id }, data);
             //await user_comment(data).save();             

            res.send(user_comment);
        } catch (e) {
            return res.json({ status: true, e })
        }
    }

    static async update_comment(req, res) {

        try {

            const comment_id = req.params.comment_id;
            console.log("update", req.body.user_comment)
            const data = {

                user_comment: req.body.user_comment,
                updated_at: new Date(),
            };
            const user_comment = await Comments.updateOne({ _id: comment_id }, data);
            //  await user_comment(data).save();             

            res.send(user_comment);
        } catch (e) {
            return res.json({ status: true, e })
        }
    }

}