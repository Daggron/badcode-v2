export type blogPostData = {
  data: blogFrontMatter,
  filePath: string,
}

export type blogFrontMatter = {
  title: string;
  date: string;
  slug: string;
  subtitle: string;
  src?: string;
  tags?: string[];
  description: string;
  pageTitle: string;
}