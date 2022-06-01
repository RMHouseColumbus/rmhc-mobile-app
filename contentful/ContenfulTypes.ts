export interface ContentfulEntries {
  pages: {
    "care-mobile": CEntry;
    delivery: CEntry;
    "stay-involved": CEntry;
    "family-room": CEntry;
  };
  updates: Entries;
  transportation: Entries;
  beforeStay: Entries;
  duringStay: Entries;
  afterStay: Entries;
}

export interface CEntry {
  id: string;
}

export interface Entries {
  contentType: string;
}

export interface Update {
  title: string;
  type: any;
}

export interface Page {
  page: string;
  content: any;
}

export interface TransportationEntry {
  name: string;
  content: any;
  ordinal: number;
  type: "rideshare" | string;
}

export interface QuestionAnswer {
  question: string;
  answer: any;
}

export const entries: ContentfulEntries = {
  pages: {
    "care-mobile": {
      id: "79I72jx4AtLbKZfNsdsPeD",
    },
    delivery: {
      id: "iovFNJxWdCWsaMlJTnFWB",
    },
    "stay-involved": {
      id: "3czwZtkQ8zQTWR5T0SsfuC",
    },
    "family-room": {
      id: "6IN9nwNC3ktADhU17vwo6v",
    },
  },
  updates: {
    contentType: "updates",
  },
  transportation: {
    contentType: "transportation",
  },
  afterStay: {
    contentType: "afterYourStay",
  },
  beforeStay: {
    contentType: "beforeYourStay",
  },
  duringStay: {
    contentType: "duringYourStay",
  },
};
