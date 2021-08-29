export type blogFrontMatter = {
  data: {
    title: string;
    date: string;
    slug: string;
    subtitle: string;
    src?: string;
    tags?: string[];
    description: string;
  },
  filePath: string,
}