import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import { db } from './models';
import eventRoutes from './routes/eventRoutes'
import itemRoutes from './routes/itemRoutes'
import photoRoutes from './routes/photoRoutes'
import postRoutes from './routes/postRoutes'
import slideRoutes from './routes/slideRoutes'
import userRoutes from './routes/userRoutes'
import storeItemRoutes from './routes/storeItemRoutes'
import guestbookRoutes from './routes/guestBookRoutes'
import { verify } from './controllers/userController';
import multer from 'multer'
import path from 'path';
import { user } from './models/user';
import { verifyUser } from './services/authService';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// incoming requests
const cors = require('cors');
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Uploads will be stored in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension); // Rename the file to include a timestamp
  },
});
const upload = multer({ storage: storage });

// Routing Middleware
app.use('/api/item', itemRoutes);
app.use('/api/post', postRoutes);
app.use('/api/slide', slideRoutes);
app.use('/api/user', userRoutes);
app.use('/api/photo', photoRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/storeitem', storeItemRoutes)
app.use('/api/guestbook', guestbookRoutes);
app.use('/api/verify', verify);
app.post("/api/upload-audio", upload.single("audio"), async (req, res) => {
  try {
    let user: user | null = await verifyUser(req);
    if (!user) {
      return res.status(403).send();
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const audioUrl = `/uploads/${req.file.filename}`;

    res.status(200).json({ audioUrl });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "file upload failed." });
  }
});


app.use(( req: Request, res: Response, next: NextFunction ) => {
  res.status(404).send("This is not the URL you are looking for!");
})


// Syncing DB
db.sync().then(() => {
  console.info("Connected to the database!")
});


app.listen(3001);