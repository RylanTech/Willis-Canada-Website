import { Router } from 'express';

const router = Router();

router.get("/", getAllPosts);
router.get("/", getPost);
router.post("/", addPost);
router.put("/", editPost);
router.delete("/", removePost);

export default router; 
