import {Router} from 'express';
import { PostController} from '../controllers/PostController';
import {UserController} from '../controllers/UserController';
import{CommentsController}from '../controllers/CommentsController';

class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.putRoutes();
        
       
    }

    getRoutes() {
        
        this.router.get('/getPost',UserController.getPost);
    }

    postRoutes() {
       
        this.router.post('/signup', UserController.signUp);
        this.router.post('/userPost',PostController.userPost);
        this.router.post('/likePost',PostController.likePost);
        
    }

    putRoutes(){
        
        this.router.put('/update_comment/:comment_id',CommentsController.update_comment);
        this.router.put('/deleted_comment/:comment_id',CommentsController.deleted_comment);
        this.router.put('/Comments',CommentsController.Comments);
    }
}

export default new UserRouter().router;