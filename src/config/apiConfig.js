const apiKey = process.env.FOOTBALL_API_KEY || process.env.API_KEY || process.env.APIKEY;

const apiConfig = {
    // Use API root so we can call multiple endpoints (leagues, teams, fixtures, etc.)
    baseURL: "https://v3.football.api-sports.io",
    headers: {
        // API-Football (api-sports) expects these headers
        "x-apisports-host": "v3.football.api-sports.io",
        // Use apiKey (supports FOOTBALL_API_KEY or API_KEY in .env)
        "x-apisports-key": apiKey
    },
    rateLimit: {
        maxRequests: 100, // Número máximo de solicitudes permitidas
        windowMs: 15 * 60 * 1000 // Ventana de tiempo en milisegundos (15 minutos)
    }
};

export default apiConfig;