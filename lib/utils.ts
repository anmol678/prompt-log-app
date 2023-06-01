import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Log } from "@/types/log"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateResponseTime(requestTime: string, responseTime: string): string {
  const requestDate = new Date(requestTime);
  const responseDate = new Date(responseTime);
  const responseTimeInSeconds = (responseDate.getTime() - requestDate.getTime()) / 1000;
  return `${responseTimeInSeconds}s`;
}

export function getUniqueProjects(logs: Log[]): string[] {
  let uniqueProjects: Set<string> = logs.reduce((projectSet, log) => {
    if (log.project) {
      projectSet.add(log.project.title);
    }
    return projectSet;
  }, new Set<string>());

  return Array.from(uniqueProjects);
}

export function getUniqueTags(logs: Log[]): string[] {
  let uniqueTags: Set<string> = logs.reduce((tagSet, log) => {
    if (log.tags) {
      log.tags.forEach(tag => tagSet.add(tag));
    }
    return tagSet;
  }, new Set<string>());

  return Array.from(uniqueTags);
}

export function getUniqueModels(logs: Log[]): string[] {
  let uniqueModels: Set<string> = logs.reduce((modelSet, log) => {
    if (log.model) {
      modelSet.add(log.model);
    }
    return modelSet;
  }, new Set<string>());

  return Array.from(uniqueModels);
}