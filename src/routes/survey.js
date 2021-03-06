import {Router} from 'express';
import passport from '../services/passport';
import * as SurveyController from '../controllers/survey.controller';


const router = new Router();

const jwtAuthMiddleware = passport.authenticate('jwt', {session: false});


router.route('/survey').get(jwtAuthMiddleware, SurveyController.getSurvey);
router.route('/survey').put(jwtAuthMiddleware, SurveyController.insertOrUpdateSurvey);
router.route('/surveyById/:id').get(SurveyController.getSurveyById);
router.route('/answers').put(SurveyController.updateSurveyWithAnswers);


export default router;
