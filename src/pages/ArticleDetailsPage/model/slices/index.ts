import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsComments';
import { articleDetailsRecommendationsReducer } from '../../model/slices/articleDetailsRecommendations';

export const articleDetailsPageReducer = combineReducers({
  recommendations: articleDetailsRecommendationsReducer,

  comments: articleDetailsCommentsReducer
});
