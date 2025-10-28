import express from 'express';
import StatusController from '../controllers/statusController.js';

const router = express.Router();
const statusController = new StatusController();

// Expose root route so final path becomes /api/status
router.get('/', statusController.getStatus.bind(statusController));

// Sub-resources
router.get('/account', statusController.getAccount.bind(statusController));
router.get('/requests', statusController.getRequests.bind(statusController));
router.get('/headers', statusController.getHeaders.bind(statusController));
router.get('/cache', statusController.getCache.bind(statusController));

export default router;