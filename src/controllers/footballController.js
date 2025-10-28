import footballService from '../services/footballApiService.js';

class FootballController {
    async available(req, res, next) {
        try {
            const { data, headers } = await footballService.getAvailable(req.query);
            res.set('x-ratelimit-requests-limit', headers['x-ratelimit-requests-limit'] || '');
            res.json(data);
        } catch (err) { next(err); }
    }

    async status(req, res, next) {
        try {
            const { data, headers } = await footballService.getStatus(req.query);
            res.set('x-ratelimit-requests-limit', headers['x-ratelimit-requests-limit'] || '');
            res.json(data);
        } catch (err) { next(err); }
    }

    async timezone(req, res, next) {
        try {
            const { data } = await footballService.getTimezone(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async seasons(req, res, next) {
        try {
            const { data } = await footballService.getSeasons(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async leagues(req, res, next) {
        try {
            const { data } = await footballService.getLeagues(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async teams(req, res, next) {
        try {
            const { data } = await footballService.getTeams(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async teamsStatistics(req, res, next) {
        try {
            const { data } = await footballService.getTeamsStatistics(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async players(req, res, next) {
        try {
            const { data } = await footballService.getPlayers(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async playersStatistics(req, res, next) {
        try {
            const { data } = await footballService.getPlayersStatistics(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async fixtures(req, res, next) {
        try {
            const { data } = await footballService.getFixtures(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async fixturesQuarters(req, res, next) {
        try {
            const { data } = await footballService.getFixturesQuarters(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async fixturesEvents(req, res, next) {
        try {
            const { data } = await footballService.getFixturesEvents(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async fixturesStatisticsTeams(req, res, next) {
        try {
            const { data } = await footballService.getFixturesStatisticsTeams(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async fixturesStatisticsPlayers(req, res, next) {
        try {
            const { data } = await footballService.getFixturesStatisticsPlayers(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async standings(req, res, next) {
        try {
            const { data } = await footballService.getStandings(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async odds(req, res, next) {
        try {
            const { data } = await footballService.getOdds(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async oddsBookmakers(req, res, next) {
        try {
            const { data } = await footballService.getOddsBookmakers(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }

    async oddsBets(req, res, next) {
        try {
            const { data } = await footballService.getOddsBets(req.query);
            res.json(data);
        } catch (err) { next(err); }
    }
}

export default FootballController;
