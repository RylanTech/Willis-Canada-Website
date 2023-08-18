import { Router } from 'express';
import { addPhotos, editPhoto, getAllPhotos, getPhotos, removePhotos } from '../controllers/photoController';

const router = Router();

router.get("/getall", getAllPhotos);
router.get("/:id", getPhotos);
router.post("/", addPhotos);
router.put("/:id", editPhoto)
router.delete("/:id", removePhotos);

export default router; 
