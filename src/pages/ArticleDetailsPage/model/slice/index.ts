import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types';
import {
  articleDetailsCommentsReducer,
} from './articleDetailsCommentsSlice';
import {
  articleDetailsRecommendationsReducer,
} from './articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsRecommendationsReducer,
});
