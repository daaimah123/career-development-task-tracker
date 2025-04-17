"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { Task } from "@/types"

interface TaskModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (task: Omit<Task, "id">) => void
  task: Task | null
}

export function TaskModal({ isOpen, onClose, onSave, task }: TaskModalProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [category, setCategory] = useState("")

  // Reset form when modal opens or task changes
  useEffect(() => {
    if (isOpen) {
      if (task) {
        setTitle(task.title)
        setDescription(task.description)
        setDueDate(new Date(task.dueDate).toISOString().split("T")[0])
        setCategory(task.category)
      } else {
        // Set default values for new task
        setTitle("")
        setDescription("")
        setDueDate(new Date().toISOString().split("T")[0])
        setCategory("")
      }
    }
  }, [isOpen, task])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !dueDate || !category) {
      alert("Please fill in all required fields")
      return
    }

    onSave({
      title,
      description,
      dueDate: new Date(dueDate).toISOString(),
      category,
      completed: task ? task.completed : false,
    })

    // Reset form
    setTitle("")
    setDescription("")
    setDueDate("")
    setCategory("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">{task ? "Edit Task" : "Add New Task"}</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4">
            <div className="mb-4">
              <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="task-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="task-description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="task-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="task-due-date" className="block text-sm font-medium text-gray-700 mb-1">
                Due Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="task-due-date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="task-category" className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="task-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Writing">Writing</option>
                <option value="Short">Short</option>
                <option value="Networking">Networking</option>
                <option value="Job Search">Job Search</option>
                <option value="Presentation">Presentation</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
