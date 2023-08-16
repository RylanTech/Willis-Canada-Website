import { Router } from 'express';
import { addPhotos, getAllPhotos, getPhotos, removePhotos } from '../controllers/photoController';

const router = Router();

router.get("/getall", getAllPhotos);
router.get("/:id", getPhotos);
router.post("/", addPhotos);
router.delete("/:id", removePhotos);

export default router; 
