import { Router } from 'express';
import { addSlide, getSlide, getallSlides, removeSlide } from '../controllers/slideController';

const router = Router();

router.get("/", getallSlides);
router.get("/:id", getSlide);
router.post("/", addSlide);
router.delete("/:id", removeSlide);

export default router; 
