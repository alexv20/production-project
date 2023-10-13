export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export {
  Article, ArticleView, ArticleSortField, ArticleType,
} from './model/types/article';
export { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { articleDetailsReducer } from './model/slice/artilceDetailsSlice';

export {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './model/selectors/articleDetails';

export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';
export { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector';
export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';
