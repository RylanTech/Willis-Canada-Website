import { Router } from 'express';
import { addEvent, editEvent, getAllEvents, getEvent, removeEvent } from '../controllers/eventController';

const router = Router();

router.get("/getall", getAllEvents);
router.get("/:id", getEvent);
router.post("/", addEvent);
router.put("/:id", editEvent);
router.delete("/:id", removeEvent);

export default router; 