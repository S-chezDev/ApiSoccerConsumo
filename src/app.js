import express from 'express';
import initRoutes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import headersHandler from './middlewares/headersHandler.js';
import rateLimiter from './middlewares/rateLimiter.js';

const app = express();

app.use(express.json());
app.use(headersHandler);
app.use(rateLimiter);

// Initialize routes (will mount under /api)
initRoutes(app);

app.use(errorHandler);

export default app;