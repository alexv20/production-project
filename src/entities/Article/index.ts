export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type {
  Article,
} from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { articleDetailsReducer } from './model/slice/artilceDetailsSlice';

export {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './model/selectors/articleDetails';

export { ArticleView } from './model/consts/consts';
export { ArticleType } from './model/consts/consts';
export { ArticleSortField } from './model/consts/consts';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleBlockType } from './model/consts/consts';
