import { Router } from 'express';
import { adduagb, approve, disapprove, getAllagb, getAlluagb, remove } from '../controllers/guestbookController';

const router = Router();

router.get("/getallagb", getAllagb);
router.get("/getalluagb", getAlluagb);
router.post("/", adduagb);

router.get("/approve/:id", approve);
router.get("/disapprove/:id", disapprove);

router.delete("/:id", remove);

export default router; 