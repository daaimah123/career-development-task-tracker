export type Task = {
  id: string
  title: string
  description: string
  dueDate: string
  category: string
  completed: boolean
}

export type ViewType = "list" | "calendar"
export type FilterType = "all" | "pending" | "completed" | "overdue"
