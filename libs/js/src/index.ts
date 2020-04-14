import classifiers from "./classifiers.json";

export interface Classifier {
  code: string;
  short: string;
  alternatives: string[];
  description: string;
  examples: string;
  category:
    | "Plastics"
    | "Batteries"
    | "Paper"
    | "Metals"
    | "Organic"
    | "Glass"
    | "Composites";
}

export const getAll = () => classifiers as Classifier[];

export const getByCode = (code: string) =>
  getAll().find(classifier => classifier.code === code);
