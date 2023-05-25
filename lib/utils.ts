import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateResponseTime(requestTime: string, responseTime: string): string {
  const requestDate = new Date(requestTime);
  const responseDate = new Date(responseTime);
  const responseTimeInSeconds = (responseDate.getTime() - requestDate.getTime()) / 1000;
  return `${responseTimeInSeconds}s`;
}
