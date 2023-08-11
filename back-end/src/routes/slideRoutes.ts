import { Router } from 'express';

const router = Router();

router.get("/", getAllSlides);
router.get("/", getSlide);
router.post("/", addSlide);
router.put("/", editSlide);
router.delete("/", removeSlide);

export default router; 
