# Tags

```typescript
type Tag = {
  name: string;
  type?: "keyword" | "topic" | "style" | "domain" | "package";
  description?: string;
  aliases?: string[];
  featured?: boolean;
  icon?: string;
};
```

