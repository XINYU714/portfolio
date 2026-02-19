// 定義 CMS 內容類型
export type ArticleType = 'title' | 'content' | 'image' | 'link' | 'subtitle' | 'quote';

export interface ArticleBaseItem {
  type: ArticleType;
  class?: string;
}

export interface ArticleTitleItem extends ArticleBaseItem {
  type: 'title';
  content: string;
}

export interface ArticleContentItem extends ArticleBaseItem {
  type: 'content';
  content: string;
}

export interface ArticleImageItem extends ArticleBaseItem {
  type: 'image';
  path: string;
  alt?: string;
  content?: string; // 圖片標題 (Caption)
}

export interface ArticleLinkItem extends ArticleBaseItem {
  type: 'link';
  content: string;
  path: string;
}

export interface ArticleSubtitleItem extends ArticleBaseItem {
  type: 'subtitle';
  content: string;
}

export interface ArticleQuoteItem extends ArticleBaseItem {
  type: 'quote';
  content: string;
}

export type ArticleItem =
  | ArticleTitleItem
  | ArticleContentItem
  | ArticleImageItem
  | ArticleLinkItem
  | ArticleSubtitleItem
  | ArticleQuoteItem;

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  path: string;
  tags: string[];
  date: string;
  itemList: ArticleItem[];
}

export interface ExperienceItem {
  id: number;
  jobTitle: string;
  date: string;
  description: any;
  skills: string[];
}

