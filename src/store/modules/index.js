import { games, gamesEpics } from "./games";
import { auth, authEpics } from "./auth";
import { recommendation, recommendationEpics } from "./recommendation";
import { collection, collectionEpics } from "./collection";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

export const rootReducers = combineReducers({ games, auth, recommendation, collection });
export const rootEpics = combineEpics(
    gamesEpics.getDetailGameEpic,
    gamesEpics.getQueryGamesEpic,
    gamesEpics.createRatingEpic,
    gamesEpics.updateRatingEpic,
    gamesEpics.createReviewEpic,
    gamesEpics.updateReviewEpic,
    authEpics.registerEpic,
    authEpics.loginEpic,
    authEpics.checkUserEpic,
    authEpics.logoutEpic,
    recommendationEpics.getQueryRecommendationEpic,
    collectionEpics.getQueryCollectionEpic,
);