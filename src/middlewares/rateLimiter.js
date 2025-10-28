import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Limitar cada IP a 100 solicitudes por ventana
    message: 'Demasiadas solicitudes desde esta IP, por favor intente de nuevo más tarde.'
});

export default limiter;