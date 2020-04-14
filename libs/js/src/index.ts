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

export { classifiers };

