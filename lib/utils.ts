import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { LogBase } from "@/types/log"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateResponseTime(requestTime: string, responseTime: string): string {
  const requestDate = new Date(requestTime);
  const responseDate = new Date(responseTime);
  const responseTimeInSeconds = (responseDate.getTime() - requestDate.getTime()) / 1000;
  return `${responseTimeInSeconds}s`;
}

export function getUniqueProjects(logs: LogBase[]): string[] {
  let uniqueProjects: Set<string> = logs.reduce((projectSet, log) => {
    if (log.project) {
      projectSet.add(log.project.title);
    }
    return projectSet;
  }, new Set<string>());

  return Array.from(uniqueProjects);
}

export function getUniqueTags(logs: LogBase[]): string[] {
  let uniqueTags: Set<string> = logs.reduce((tagSet, log) => {
    if (log.tags) {
      log.tags.forEach(tag => tagSet.add(tag));
    }
    return tagSet;
  }, new Set<string>());

  return Array.from(uniqueTags);
}

export function getUniqueModels(logs: LogBase[]): string[] {
  let uniqueModels: Set<string> = logs.reduce((modelSet, log) => {
    if (log.model) {
      modelSet.add(log.model);
    }
    return modelSet;
  }, new Set<string>());

  return Array.from(uniqueModels);
}

export function inferInputVariables(prompt: string): string[] {
  const regex = /\{+(.*?)\}+/g
  const matches = []
  let match
  while ((match = regex.exec(prompt)) !== null) {
    matches.push(match[1])
  }
  return matches
}

export function formatDateTime(date: Date): string {
  return `${new Date(date).toLocaleTimeString()} ${new Date(date).toDateString()}`
}
