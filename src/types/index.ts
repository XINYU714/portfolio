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

export interface ProjectWebsite {
  official?: string;
  github?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  itemList: ArticleItem[];
  website?: ProjectWebsite;
}

// 工作經驗詳細型別
export interface ExperienceSubItem {
  title: string;
  content: string;
}

export interface ExperienceSection {
  title: string;
  items: ExperienceSubItem[];
}

export interface ExperienceDescription {
  summary: string;
  sections: ExperienceSection[];
}

// 工作經驗型別
export interface ExperienceItem {
  id: string;
  jobTitle: string;
  date: string;
  description: ExperienceDescription;
  skills: string[];
}

