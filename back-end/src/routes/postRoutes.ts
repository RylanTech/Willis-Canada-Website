import { Router } from 'express';
import { addPost, editPost, getAllPosts, getPost, removePost } from '../controllers/postController';

const router = Router();

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.put("/id", editPost);
router.delete("/:id", removePost);

export default router; 
