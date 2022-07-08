export type Data = {
  tags: Tag[];
};

export type Tag = {
  name: string;
  type?: "keyword" | "topic" | "style" | "domain" | "package";
  description?: string;
  aliases?: string[];
};
