export type TermsSection = {
  id: string;
  title: string;
  description: string;
  content: TermsContent[];
  icon?: string;
  effectiveDate?: string;
  lastUpdated?: string;
  importance: "high" | "medium" | "low";
};

export type TermsContentType = "text" | "list" | "table" | "timeline" | "chart" | "interactive" | "callout";

export type BaseContent = {
  id: string;
  type: TermsContentType;
  style?: "warning" | "info" | "success" | "premium";
};

export type TimelineContent = BaseContent & {
  type: "timeline";
  content: {
    title: string;
    items: TimelineItem[];
  };
};

export type InteractiveContent = BaseContent & {
  type: "interactive";
  content: {
    type: "accordion" | "tabs" | "slider" | "calculator" | "comparison";
    title: string;
    data: FacilityRule[] | MembershipPlan[];
  };
};

export type CalloutContent = BaseContent & {
  type: "callout";
  content: {
    title: string;
    message: string;
  };
};

export type TextContent = BaseContent & {
  type: "text";
  content: string;
};

export type ListContent = BaseContent & {
  type: "list";
  content: string[];
};

export type TableContent = BaseContent & {
  type: "table";
  content: TableItem;
};

export type ChartContent = BaseContent & {
  type: "chart";
  content: ChartData;
};

export type TermsContent = TimelineContent | InteractiveContent | CalloutContent | TextContent | ListContent | TableContent | ChartContent;

export type TimelineItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  icon?: string;
  status: "active" | "upcoming" | "completed";
};

export type TableItem = {
  id: string;
  headers: string[];
  rows: string[][];
  caption?: string;
};

export type ChartData = {
  id: string;
  title: string;
  labels: string[];
  data: number[];
  type: "doughnut" | "bar" | "line";
};

export type InteractiveElement = {
  id: string;
  type: "accordion" | "tabs" | "slider" | "calculator";
  title: string;
  description?: string;
  content: unknown;
};

export type FacilityRule = {
  id: string;
  category: string;
  rules: string[];
  consequences: string[];
  exceptions?: string[];
};

export type MembershipPlan = {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  restrictions: string[];
  cancellationPolicy: string;
};
