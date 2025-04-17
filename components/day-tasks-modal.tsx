"use client"

import type { Task } from "@/types"
import { formatDate, getCategoryBadgeClass } from "@/lib/utils"

interface DayTasksModalProps {
  isOpen: boolean
  onClose: () => void
  date: Date
  tasks: Task[]
  onEdit: (task: Task) => void
  onDelete: (taskId: string) => void
  onToggleCompletion: (taskId: string) => void
}

export function DayTasksModal({
  isOpen,
  onClose,
  date,
  tasks,
  onEdit,
  onDelete,
  onToggleCompletion,
}: DayTasksModalProps) {
  if (!isOpen) return null

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
        <div className="border-b border-gray-200 px-6 py-4 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
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
            Tasks for {formattedDate}
          </h3>
        </div>

        <div className="overflow-y-auto flex-grow p-6">
          {tasks.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No tasks scheduled for this day.</div>
          ) : (
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`border rounded-lg overflow-hidden ${task.completed ? "bg-gray-50" : ""}`}
                >
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => onToggleCompletion(task.id)}
                          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4
                          className={`text-lg font-medium ${task.completed ? "line-through text-gray-500" : "text-gray-900"}`}
                        >
                          {task.title}
                        </h4>
                        {task.description && (
                          <p className={`mt-1 ${task.completed ? "text-gray-500" : "text-gray-700"}`}>
                            {task.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryBadgeClass(task.category)}`}
                          >
                            {task.category}
                          </span>
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
                            Due: {formatDate(task.dueDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-3 gap-2">
                      <button
                        onClick={() => onEdit(task)}
                        className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
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
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Are you sure you want to delete this task?")) {
                            onDelete(task.id)
                          }
                        }}
                        className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50"
                      >
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 px-6 py-4 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
