export type PrivacySection = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  subsections?: PrivacySubsection[];
};

export type PrivacySubsection = {
  id: string;
  title: string;
  content: string[];
  isImportant?: boolean;
  lastUpdated?: string;
};

export type PrivacyHighlight = {
  id: string;
  icon: string;
  title: string;
  description: string;
  isPrimary?: boolean;
};

export type PrivacyContact = {
  title: string;
  email: string;
  phone: string;
  address: string;
  hours: string[];
};
