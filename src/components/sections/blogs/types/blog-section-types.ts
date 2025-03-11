import { Blog, BlogCategory, BlogTag } from "./blog-types";

export interface BlogGridProps {
  blogs: Blog[];
  showFeatured?: boolean;
  columns?: 1 | 2 | 3 | 4;
  maxItems?: number;
}

export interface BlogCardProps {
  blog: Blog;
  variant?: "default" | "featured" | "minimal";
  showAuthor?: boolean;
  showExcerpt?: boolean;
  className?: string;
}

export interface BlogCategoryProps {
  category: BlogCategory;
  count: number;
  selected?: boolean;
  onClick?: () => void;
}

export interface BlogTagProps {
  tag: BlogTag;
  count: number;
  selected?: boolean;
  onClick?: () => void;
}

export interface BlogFilterProps {
  selectedCategories: BlogCategory[];
  selectedTags: BlogTag[];
  onCategoryChange: (category: BlogCategory) => void;
  onTagChange: (tag: BlogTag) => void;
  onClearFilters: () => void;
}

export interface BlogSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export interface BlogSortProps {
  sortBy: "date" | "popular" | "trending";
  onSortChange: (sort: "date" | "popular" | "trending") => void;
}

export interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface BlogAuthorCardProps {
  author: Blog["author"];
  postCount: number;
  className?: string;
}

export interface BlogFeaturedProps {
  blog: Blog;
  layout?: "horizontal" | "vertical";
  className?: string;
} 