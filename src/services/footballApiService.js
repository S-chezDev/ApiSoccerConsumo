import axios from 'axios';
import apiConfig from '../config/apiConfig.js';

const client = axios.create({
    baseURL: apiConfig.baseURL,
    headers: apiConfig.headers,
    timeout: 10000,
});

const request = async (path, params = {}) => {
    try {
        const res = await client.get(path, { params });
        return { data: res.data, headers: res.headers };
    } catch (error) {
        // Normalize error message
        throw new Error(`Error fetching ${path} from the football API: ${error.message}`);
    }
};

// Specific helpers for common endpoints
const getAvailable = (params) => request('/available', params);
const getStatus = (params) => request('/status', params);
const getTimezone = (params) => request('/timezone', params);
const getSeasons = (params) => request('/seasons', params);
const getLeagues = (params) => request('/leagues', params);
const getTeams = (params) => request('/teams', params);
const getTeamsStatistics = (params) => request('/teams/statistics', params);
const getPlayers = (params) => request('/players', params);
const getPlayersStatistics = (params) => request('/players/statistics', params);
// games -> fixtures in API naming
const getFixtures = (params) => request('/fixtures', params);
const getFixturesQuarters = (params) => request('/fixtures/quarters', params);
const getFixturesEvents = (params) => request('/fixtures/events', params);
const getFixturesStatisticsTeams = (params) => request('/fixtures/statistics/teams', params);
const getFixturesStatisticsPlayers = (params) => request('/fixtures/statistics/players', params);
const getStandings = (params) => request('/standings', params);
const getOdds = (params) => request('/odds', params);
const getOddsBookmakers = (params) => request('/odds/bookmakers', params);
const getOddsBets = (params) => request('/odds/bets', params);

export default {
    request,
    getAvailable,
    getStatus,
    getTimezone,
    getSeasons,
    getLeagues,
    getTeams,
    getTeamsStatistics,
    getPlayers,
    getPlayersStatistics,
    getFixtures,
    getFixturesQuarters,
    getFixturesEvents,
    getFixturesStatisticsTeams,
    getFixturesStatisticsPlayers,
    getStandings,
    getOdds,
    getOddsBookmakers,
    getOddsBets
};