import { Project } from "./project"

type TemplateBase = {
    prompt: string;
    input_variables: string[];
    format: string;
};

export type TemplateCreate = TemplateBase;

type Template = TemplateBase & {
    id: number;
    version: number;
    created_at: Date;
    last_used: Date | null;
};

type PromptTemplateBase = {
    title: string;
    tags: string[];
};

export type PromptTemplateCreate = PromptTemplateBase & {
    template: TemplateCreate;
    project: string | null;
};

export type PromptTemplate = PromptTemplateBase & {
    id: number;
    templates: Template[];
    project: Project | null;
};

export type PromptTemplateWithVersion = PromptTemplateBase & {
    id: number;
    version_number: number;
};

export type PromptTemplatePatch = {
    title?: string;
    tags?: string[];
    template?: TemplateCreate;
    project?: string;
};
