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

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// incoming requests
const cors = require('cors');
app.use(cors());



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


app.use(( req: Request, res: Response, next: NextFunction ) => {
  res.status(404).send("This is not the URL you are looking for!");
})


// Syncing DB
db.sync().then(() => {
  console.info("Connected to the database!")
});


app.listen(3001);