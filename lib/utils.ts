import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import type { FilterType, Task } from "@/types"

// Format date to readable format
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

// Get month theme
export function getMonthTheme(monthYear: string): string {
  // Create a mapping of month/year to theme
  const monthThemes: Record<string, string> = {
    "May 2025": "Personal & Professional Narratives",
    "June 2025": "Technical Expertise with a Fun Twist",
    "July 2025": "Leadership & Advocacy",
    "August 2025": "Integrative Fun & Advocacy",
    "September 2025": "Advanced Content & Expanding Influence",
    "October 2025": "Authority Building & Strategic Positioning",
  }

  return monthThemes[monthYear] || ""
}

// Get category badge class
export function getCategoryBadgeClass(category: string): string {
  const categoryLower = category.toLowerCase()

  switch (categoryLower) {
    case "writing":
      return "bg-blue-100 text-blue-800"
    case "short":
      return "bg-green-100 text-green-800"
    case "networking":
      return "bg-indigo-100 text-indigo-800"
    case "job search":
      return "bg-yellow-100 text-yellow-800"
    case "presentation":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

// Filter task based on current filter
export function filterTask(task: Task, filter: FilterType): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const dueDate = new Date(task.dueDate)

  switch (filter) {
    case "completed":
      return task.completed
    case "pending":
      return !task.completed && dueDate >= today
    case "overdue":
      return !task.completed && dueDate < today
    default:
      return true
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
