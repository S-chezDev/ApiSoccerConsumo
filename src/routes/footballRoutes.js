import express from 'express';
import FootballController from '../controllers/footballController.js';

const router = express.Router();
const controller = new FootballController();

router.get('/available', controller.available.bind(controller));
router.get('/status', controller.status.bind(controller));
router.get('/timezone', controller.timezone.bind(controller));
router.get('/seasons', controller.seasons.bind(controller));
router.get('/leagues', controller.leagues.bind(controller));
router.get('/teams', controller.teams.bind(controller));
router.get('/teams/statistics', controller.teamsStatistics.bind(controller));
router.get('/players', controller.players.bind(controller));
router.get('/players/statistics', controller.playersStatistics.bind(controller));
router.get('/games', controller.fixtures.bind(controller));
router.get('/games/quarters', controller.fixturesQuarters.bind(controller));
router.get('/games/events', controller.fixturesEvents.bind(controller));
router.get('/games/statistics/teams', controller.fixturesStatisticsTeams.bind(controller));
router.get('/games/statistics/players', controller.fixturesStatisticsPlayers.bind(controller));
router.get('/standings', controller.standings.bind(controller));
router.get('/odds', controller.odds.bind(controller));
router.get('/odds/bookmakers', controller.oddsBookmakers.bind(controller));
router.get('/odds/bets', controller.oddsBets.bind(controller));

export default router;
