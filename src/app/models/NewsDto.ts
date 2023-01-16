// Generated by https://quicktype.io

export interface NewsDto {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: Result[];
}

export interface Result {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  updated_date: string;
  created_date: string;
  multimedia: Multimedia[];
  short_url: string;
}

export interface Multimedia {
  url: string;
  height: number;
  width: number;
  caption: string;
  copyright: string;
}
