import { Router } from 'express';
import { addBio, editBio, getBio } from '../controllers/bioController';

const router = Router();

router.get("/", getBio);
router.post("/", addBio);
router.put("/:id", editBio);

export default router; 
