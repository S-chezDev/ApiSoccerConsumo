import fetch from 'node-fetch';

const retry = async (fn, retries = 3, delay = 1000) => {
    try {
        return await fn();
    } catch (error) {
        if (retries === 0) throw error;
        await new Promise(res => setTimeout(res, delay));
        return retry(fn, retries - 1, delay);
    }
};

export default retry;