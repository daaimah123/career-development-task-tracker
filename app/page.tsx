"use client"

import { useState, useEffect } from "react"
import { TaskList } from "@/components/task-list"
import { Calendar } from "@/components/calendar"
import { TaskModal } from "@/components/task-modal"
import { DayTasksModal } from "@/components/day-tasks-modal"
import type { Task, ViewType, FilterType } from "@/types"
import { generateSampleTasks } from "@/lib/sample-data"

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [currentView, setCurrentView] = useState<ViewType>("list")
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all")
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)
  const [isDayTasksModalOpen, setIsDayTasksModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks")
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    } else {
      // Generate sample tasks if no tasks exist
      const sampleTasks = generateSampleTasks()
      setTasks(sampleTasks)
      localStorage.setItem("tasks", JSON.stringify(sampleTasks))
    }
    setIsLoaded(true)
  }, [])

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }, [tasks, isLoaded])

  // Add a new task
  const addTask = (task: Omit<Task, "id">) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
    }
    setTasks([...tasks, newTask])
  }

  // Update an existing task
  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
  }

  // Delete a task
  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  // Toggle task completion
  const toggleTaskCompletion = (taskId: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed }
        }
        return task
      }),
    )
  }

  // Open task modal for adding a new task
  const openAddTaskModal = () => {
    setSelectedTask(null)
    setIsTaskModalOpen(true)
  }

  // Open task modal for editing an existing task
  const openEditTaskModal = (task: Task) => {
    setSelectedTask(task)
    setIsTaskModalOpen(true)
  }

  // Open day tasks modal
  const openDayTasksModal = (date: Date) => {
    setSelectedDate(date)
    setIsDayTasksModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Task Tracker</h1>
        <p className="text-gray-600 text-lg">Organize your tasks and boost your productivity</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex gap-2 flex-wrap">
          <button
            className={`px-3 py-2 rounded-md ${currentFilter === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-300"}`}
            onClick={() => setCurrentFilter("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-2 rounded-md ${currentFilter === "pending" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-300"}`}
            onClick={() => setCurrentFilter("pending")}
          >
            Pending
          </button>
          <button
            className={`px-3 py-2 rounded-md ${currentFilter === "completed" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-300"}`}
            onClick={() => setCurrentFilter("completed")}
          >
            Completed
          </button>
          <button
            className={`px-3 py-2 rounded-md ${currentFilter === "overdue" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-300"}`}
            onClick={() => setCurrentFilter("overdue")}
          >
            Overdue
          </button>
        </div>
        <div className="flex gap-2">
          <button
            className={`px-3 py-2 rounded-md ${currentView === "list" ? "bg-gray-800 text-white" : "bg-white text-gray-700 border border-gray-300"}`}
            onClick={() => setCurrentView("list")}
          >
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              List
            </span>
          </button>
          <button
            className={`px-3 py-2 rounded-md ${currentView === "calendar" ? "bg-gray-800 text-white" : "bg-white text-gray-700 border border-gray-300"}`}
            onClick={() => setCurrentView("calendar")}
          >
            <span className="flex items-center gap-1">
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
              Calendar
            </span>
          </button>
        </div>
      </div>

      {/* Add Task Button */}
      <div className="flex justify-end mb-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1"
          onClick={openAddTaskModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Task
        </button>
      </div>

      {/* Views */}
      {currentView === "list" ? (
        <TaskList
          tasks={tasks}
          currentFilter={currentFilter}
          onEdit={openEditTaskModal}
          onDelete={deleteTask}
          onToggleCompletion={toggleTaskCompletion}
        />
      ) : (
        <Calendar tasks={tasks} onDayClick={openDayTasksModal} />
      )}

      {/* Task Modal */}
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        onSave={(task) => {
          if (selectedTask) {
            updateTask({ ...task, id: selectedTask.id })
          } else {
            addTask(task)
          }
          setIsTaskModalOpen(false)
        }}
        task={selectedTask}
      />

      {/* Day Tasks Modal */}
      {selectedDate && (
        <DayTasksModal
          isOpen={isDayTasksModalOpen}
          onClose={() => setIsDayTasksModalOpen(false)}
          date={selectedDate}
          tasks={tasks.filter((task) => {
            const taskDate = new Date(task.dueDate)
            return (
              taskDate.getFullYear() === selectedDate.getFullYear() &&
              taskDate.getMonth() === selectedDate.getMonth() &&
              taskDate.getDate() === selectedDate.getDate()
            )
          })}
          onEdit={(task) => {
            setSelectedTask(task)
            setIsDayTasksModalOpen(false)
            setIsTaskModalOpen(true)
          }}
          onDelete={deleteTask}
          onToggleCompletion={toggleTaskCompletion}
        />
      )}
    </div>
  )
}
