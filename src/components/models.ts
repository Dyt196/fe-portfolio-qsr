export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Project {
  tid: number;
  name: string;
  description: string;
  fullDescription: string;
  role: string;
  tech: string[];
  responsibility: string[];
  module: Module[];
}

export interface Module {
  name: string;
  detail: string[];
}
