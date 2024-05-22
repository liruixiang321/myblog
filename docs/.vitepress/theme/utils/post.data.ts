import { createContentLoader } from "vitepress";
// Frontmatter 默认属性
interface DefaultFrontmatter {
  hero?: Hero;
  types?: Category[];
}
// 侧边栏：类别
export interface Category {
  name: string;
  link: string;
  desc?: string;
  icon?: string;
}

// 标题
interface Hero {
  title?: string;
  desc?: string;
  subTitle?: string;
}
interface Post {
  title: string;
  url: string;
  date: {
    time: number;
    string: string;
  };
  frontmatter: DefaultFrontmatter & Record<string, any>;
}

declare const data: Post[];
export { data };

export default createContentLoader("/**/*.md", {
  transform(raw): Post[] {
    console.log(raw);
    const res = raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        frontmatter,
        date: formatDate(frontmatter.updateTime),
      }))
      .filter((post) => /.html/.test(post.url))
      .sort((a, b) => b.date.time - a.date.time);
    console.log(res);
    return res;
  },
});

/**
 * 格式化文章更新时间
 * @param raw - 日期字符串
 */
export function formatDate(raw: string | undefined): Post["date"] {
  if (!raw)
    return {
      time: 0,
      string: "",
    };
  const date = new Date(raw);
  // date.setHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
