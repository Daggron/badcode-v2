export type BlogFrontMatter = {
  title: string;
  date: string;
  slug: string;
  subtitle: string;
  src: string;
  tags: string[];
  description: string;
  pageTitle: string;
};

export type BlogPostData = {
  data: BlogFrontMatter;
  filePath: string;
};
