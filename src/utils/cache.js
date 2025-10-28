import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 600 }); // TTL de 10 minutos

export const getFromCache = (key) => {
    return cache.get(key);
};

export const setCache = (key, value) => {
    cache.set(key, value);
};