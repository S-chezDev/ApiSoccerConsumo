import express from 'express';
import statusRoutes from './statusRoutes.js';
import footballRoutes from './footballRoutes.js';

const router = express.Router();

const initRoutes = (app) => {
    app.use('/api', router);
    router.use('/status', statusRoutes);
    // Mount football endpoints under /api/football
    router.use('/football', footballRoutes);
};

export default initRoutes;