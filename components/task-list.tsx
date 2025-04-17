"use client"

import { useState, useEffect } from "react"
import type { Task, FilterType } from "@/types"
import { formatDate, getMonthTheme, getCategoryBadgeClass, filterTask } from "@/lib/utils"

interface TaskListProps {
  tasks: Task[]
  currentFilter: FilterType
  onEdit: (task: Task) => void
  onDelete: (taskId: string) => void
  onToggleCompletion: (taskId: string) => void
}

export function TaskList({ tasks, currentFilter, onEdit, onDelete, onToggleCompletion }: TaskListProps) {
  const [confetti, setConfetti] = useState<boolean>(false)

  // Group tasks by month
  const groupTasksByMonth = () => {
    const tasksByMonth: Record<string, Task[]> = {}

    tasks.forEach((task) => {
      const date = new Date(task.dueDate)
      const monthYear = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date)

      if (!tasksByMonth[monthYear]) {
        tasksByMonth[monthYear] = []
      }

      tasksByMonth[monthYear].push(task)
    })

    return tasksByMonth
  }

  const tasksByMonth = groupTasksByMonth()

  // Check if there are any tasks after filtering
  const hasFilteredTasks = Object.values(tasksByMonth).some(
    (monthTasks) => monthTasks.filter((task) => filterTask(task, currentFilter)).length > 0,
  )

  // Show confetti animation when a task is completed
  useEffect(() => {
    if (confetti) {
      const timer = setTimeout(() => {
        setConfetti(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [confetti])

  const handleToggleCompletion = (taskId: string, currentCompleted: boolean) => {
    if (!currentCompleted) {
      setConfetti(true)
    }
    onToggleCompletion(taskId)
  }

  if (!hasFilteredTasks) {
    return (
      <div className="text-center p-10 bg-white rounded-lg shadow-sm">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold mb-2">No tasks found</h3>
        <p className="text-gray-600 mb-4">
          {currentFilter === "all"
            ? "You don't have any tasks yet. Add one to get started!"
            : `No ${currentFilter} tasks found. Try a different filter.`}
        </p>
        {currentFilter === "all" && (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => document.getElementById("add-task-btn")?.click()}
          >
            Add your first task
          </button>
        )}
      </div>
    )
  }

  return (
    <div>
      {/* Confetti effect */}
      {confetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="confetti-container">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-5%`,
                  backgroundColor: [
                    "#f44336",
                    "#e91e63",
                    "#9c27b0",
                    "#673ab7",
                    "#3f51b5",
                    "#2196f3",
                    "#03a9f4",
                    "#00bcd4",
                    "#009688",
                    "#4CAF50",
                    "#8BC34A",
                    "#CDDC39",
                    "#FFEB3B",
                    "#FFC107",
                    "#FF9800",
                    "#FF5722",
                  ][Math.floor(Math.random() * 16)],
                  transform: `rotate(${Math.random() * 360}deg)`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Tasks by month */}
      {Object.entries(tasksByMonth).map(([monthYear, monthTasks]) => {
        const filteredMonthTasks = monthTasks.filter((task) => filterTask(task, currentFilter))

        if (filteredMonthTasks.length === 0) return null

        // Sort tasks by due date
        filteredMonthTasks.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())

        return (
          <div key={monthYear} className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
            {/* Month header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {monthYear}
              </h2>
            </div>

            {/* Month theme */}
            {getMonthTheme(monthYear) && (
              <p className="px-6 py-2 text-gray-600 italic border-b border-gray-100">
                Theme: {getMonthTheme(monthYear)}
              </p>
            )}

            {/* Task cards */}
            {filteredMonthTasks.map((task) => (
              <div
                key={task.id}
                className={`px-6 py-4 border-b border-gray-100 last:border-b-0 transition-colors ${task.completed ? "bg-gray-50" : "hover:bg-gray-50"}`}
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleCompletion(task.id, task.completed)}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-medium ${task.completed ? "line-through text-gray-500" : "text-gray-900"}`}
                      >
                        {task.title}
                      </h3>
                      <p className={`mt-1 ${task.completed ? "text-gray-500" : "text-gray-700"}`}>{task.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mt-3 md:mt-0">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        !task.completed && new Date(task.dueDate) < new Date()
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {!task.completed && new Date(task.dueDate) < new Date() && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                      )}
                      {formatDate(task.dueDate)}
                    </span>

                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryBadgeClass(task.category)}`}
                    >
                      {task.category}
                    </span>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => onEdit(task)}
                    className="inline-flex items-center px-2 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mr-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      if (confirm("Are you sure you want to delete this task?")) {
                        onDelete(task.id)
                      }
                    }}
                    className="inline-flex items-center px-2 py-1 border border-gray-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
