"use client"

import { useState } from "react"
import type { Task } from "@/types"
import { getCategoryBadgeClass } from "@/lib/utils"

interface CalendarProps {
  tasks: Task[]
  onDayClick: (date: Date) => void
}

export function Calendar({ tasks, onDayClick }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Get first day of month and last day of month
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
  const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)

  // Get day of week for first day (0 = Sunday, 6 = Saturday)
  const firstDayOfWeek = firstDay.getDay()

  // Get tasks for a specific day
  const getTasksForDay = (date: Date) => {
    return tasks.filter((task) => {
      const taskDate = new Date(task.dueDate)
      return (
        taskDate.getFullYear() === date.getFullYear() &&
        taskDate.getMonth() === date.getMonth() &&
        taskDate.getDate() === date.getDate()
      )
    })
  }

  // Get category color class for status indicators
  const getCategoryColorClass = (category: string) => {
    const badgeClass = getCategoryBadgeClass(category)
    // Extract the color from the badge class (e.g., "bg-blue-100 text-blue-800" -> "bg-blue-500")
    const colorMatch = badgeClass.match(/bg-(\w+)-\d+/)
    if (colorMatch && colorMatch[1]) {
      return `bg-${colorMatch[1]}-500`
    }
    return "bg-gray-500" // Default fallback
  }

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Create calendar day element
  const renderDay = (date: Date | null) => {
    if (!date) {
      return <div className="bg-transparent h-28 md:h-32"></div>
    }

    const dayTasks = getTasksForDay(date)
    const today = new Date()
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()

    return (
      <div
        className={`bg-white rounded-lg shadow-sm p-2 h-28 md:h-32 flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-shadow ${
          isToday ? "ring-2 ring-blue-500 bg-blue-50" : ""
        }`}
        onClick={() => onDayClick(date)}
      >
        <div
          className={`text-sm font-semibold mb-1 ${isToday ? "bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full" : ""}`}
        >
          {date.getDate()}
        </div>

        <div className="flex-grow overflow-hidden">
          {dayTasks.length > 0 ? (
            <div className="space-y-1">
              {dayTasks.slice(0, 3).map((task) => {
                // Get the appropriate color class based on category
                const categoryColorClass = getCategoryBadgeClass(task.category)

                return (
                  <div
                    key={task.id}
                    className={`text-xs p-1 rounded truncate ${
                      task.completed
                        ? "bg-green-50 border-l-2 border-green-500 line-through text-gray-500"
                        : new Date(task.dueDate) < today && !task.completed
                          ? "bg-red-50 border-l-2 border-red-500"
                          : `${categoryColorClass.replace("text-", "border-l-2 ")} border-l-2`
                    }`}
                    title={task.title}
                  >
                    {task.title}
                  </div>
                )
              })}

              {dayTasks.length > 3 && (
                <div className="text-xs p-1 bg-gray-100 text-center italic rounded">+{dayTasks.length - 3} more</div>
              )}
            </div>
          ) : (
            <div className="text-xs text-gray-500 italic text-center mt-2">No tasks</div>
          )}
        </div>

        {/* Status indicators */}
        {dayTasks.length > 0 && (
          <div className="flex justify-end gap-1 mt-1">
            {/* Group tasks by category and show a dot for each category */}
            {Array.from(new Set(dayTasks.map((task) => task.category))).map((category, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${getCategoryColorClass(category)}`}
                title={`${category} tasks`}
              ></span>
            ))}

            {/* Show completed indicator if any tasks are completed */}
            {dayTasks.some((task) => task.completed) && (
              <span className="w-2 h-2 bg-green-500 rounded-full" title="Completed tasks"></span>
            )}
          </div>
        )}
      </div>
    )
  }

  // Create calendar grid
  const renderCalendarGrid = () => {
    const days = []
    const totalDays = 42 // 6 rows x 7 days

    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
    }

    // Add empty cells for days after last day of month
    while (days.length < totalDays) {
      days.push(null)
    }

    return days
  }

  const calendarDays = renderCalendarGrid()
  const monthName = currentMonth.toLocaleString("default", { month: "long", year: "numeric" })

  return (
    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
      {/* Calendar header */}
      <div className="bg-white px-4 py-3 flex justify-between items-center border-b border-gray-200">
        <h2 className="text-xl font-semibold">{monthName}</h2>
        <div className="flex gap-2">
          <button className="p-1 rounded-md border border-gray-300 hover:bg-gray-100" onClick={goToPreviousMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 rounded-md border border-gray-300 hover:bg-gray-100" onClick={goToNextMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 bg-white border-b border-gray-200">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center py-2 font-semibold text-sm text-gray-600">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 p-2 bg-gray-100">
        {calendarDays.map((day, index) => (
          <div key={index}>{renderDay(day)}</div>
        ))}
      </div>
    </div>
  )
}
