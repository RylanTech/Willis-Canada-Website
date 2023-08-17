import { Router } from 'express';
import { addSlide, editSlide, getSlide, getallSlides, removeSlide } from '../controllers/slideController';

const router = Router();

router.get("/getall", getallSlides);
router.get("/:id", getSlide);
router.post("/", addSlide);
router.put("/:id", editSlide)
router.delete("/:id", removeSlide);

export default router; 
