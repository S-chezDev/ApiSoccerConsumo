import footballApiService from '../services/footballApiService.js';
import { getFromCache, setCache } from '../utils/cache.js';

class StatusController {
    constructor(service = footballApiService) {
        this.footballApiService = service;
    }

    // GET /api/status
    async getStatus(req, res, next) {
        try {
            // try cache first
            const cached = getFromCache('status');
            if (cached) return res.status(200).json(cached);

            const { data } = await this.footballApiService.fetchStatus();
            // store in cache (if available)
            try { setCache('status', data); } catch (e) { /* ignore */ }
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    // GET /api/status/account
    async getAccount(req, res, next) {
        try {
            const { data } = await this.footballApiService.fetchStatus();
            const account = data && data.response && data.response.account ? data.response.account : null;
            if (!account) return res.status(404).json({ success: false, message: 'Account data not found' });
            res.status(200).json(account);
        } catch (error) {
            next(error);
        }
    }

    // GET /api/status/requests
    async getRequests(req, res, next) {
        try {
            const { data } = await this.footballApiService.fetchStatus();
            const requests = data && data.response && data.response.requests ? data.response.requests : null;
            if (!requests) return res.status(404).json({ success: false, message: 'Requests data not found' });
            res.status(200).json(requests);
        } catch (error) {
            next(error);
        }
    }

    // GET /api/status/headers
    async getHeaders(req, res, next) {
        try {
            const { headers } = await this.footballApiService.fetchStatus();
            // pick common rate-limit headers (case-insensitive)
            const pick = (h) => headers[h] || headers[h.toLowerCase()] || headers[h.toUpperCase()];
            const result = {
                'x-ratelimit-requests-limit': pick('x-ratelimit-requests-limit'),
                'x-ratelimit-requests-remaining': pick('x-ratelimit-requests-remaining'),
                'X-RateLimit-Limit': pick('X-RateLimit-Limit'),
                'X-RateLimit-Remaining': pick('X-RateLimit-Remaining')
            };
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    // GET /api/status/cache
    async getCache(req, res, next) {
        try {
            const cached = getFromCache('status');
            if (!cached) return res.status(200).json({ cached: false, message: 'No hay datos en caché para la clave status' });
            res.status(200).json({ cached: true, data: cached });
        } catch (error) {
            next(error);
        }
    }
}

export default StatusController;