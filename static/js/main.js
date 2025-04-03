// Global variables
let tasks = [];
let currentFilter = 'all';
let currentView = 'list';
const DateTime = luxon.DateTime;
const bootstrap = window.bootstrap; // Access Bootstrap through the window object

// DOM Elements
const tasksContainer = document.getElementById('tasks-container');
const filterButtons = document.querySelectorAll('#filter-buttons button');
const viewButtons = document.querySelectorAll('#view-buttons button');
const addTaskBtn = document.getElementById('add-task-btn');
const saveTaskBtn = document.getElementById('save-task-btn');
let taskModal;
let dayTasksModal;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Bootstrap modals
    taskModal = new bootstrap.Modal(document.getElementById('task-modal'));
    dayTasksModal = new bootstrap.Modal(document.getElementById('day-tasks-modal'));
    
    // Load tasks from the server
    fetchTasks();
    
    // Set up event listeners
    setupEventListeners();
});

// Fetch tasks from the server
async function fetchTasks() {
    try {
        const response = await fetch('/api/tasks');
        tasks = await response.json();
        renderTasks();
        initializeCalendar();
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            renderTasks();
        });
    });
    
    // View buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentView = button.dataset.view;
            toggleView();
        });
    });
    
    // Add task button
    addTaskBtn.addEventListener('click', () => {
        document.getElementById('modal-title').textContent = 'Add New Task';
        document.getElementById('task-form').reset();
        document.getElementById('task-id').value = '';
        
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('task-due-date').min = today;
        
        taskModal.show();
    });
    
    // Save task button
    saveTaskBtn.addEventListener('click', saveTask);
}

// Toggle between list and calendar views
function toggleView() {
    const listView = document.getElementById('list-view');
    const calendarView = document.getElementById('calendar-view');
    
    if (currentView === 'list') {
        listView.classList.remove('d-none');
        calendarView.classList.add('d-none');
    } else {
        listView.classList.add('d-none');
        calendarView.classList.remove('d-none');
        renderCalendar();
    }
}

// Render tasks based on current filter
function renderTasks() {
    tasksContainer.innerHTML = '';
    
    // Group tasks by month
    const tasksByMonth = groupTasksByMonth();
    
    // Check if there are any tasks after filtering
    const hasFilteredTasks = Object.values(tasksByMonth).some(monthTasks => 
        monthTasks.filter(task => filterTask(task)).length > 0
    );
    
    if (!hasFilteredTasks) {
        renderEmptyState();
        return;
    }
    
    // Render tasks by month
    for (const [monthYear, monthTasks] of Object.entries(tasksByMonth)) {
        const filteredMonthTasks = monthTasks.filter(task => filterTask(task));
        
        if (filteredMonthTasks.length === 0) continue;
        
        // Create month section
        const monthSection = document.createElement('div');
        monthSection.className = 'month-section';
        
        // Create month header
        const monthHeader = document.createElement('div');
        monthHeader.className = 'month-header';
        
        const monthTitle = document.createElement('h2');
        monthTitle.className = 'h4';
        monthTitle.innerHTML = `<i class="bi bi-calendar3"></i> ${monthYear}`;
        
        monthHeader.appendChild(monthTitle);
        monthSection.appendChild(monthHeader);
        
        // Add month theme if available
        const theme = getMonthTheme(monthYear);
        if (theme) {
            const monthTheme = document.createElement('p');
            monthTheme.className = 'month-theme';
            monthTheme.textContent = `Theme: ${theme}`;
            monthSection.appendChild(monthTheme);
        }
        
        // Sort tasks by due date
        filteredMonthTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        
        // Create task cards
        filteredMonthTasks.forEach(task => {
            const taskCard = createTaskCard(task);
            monthSection.appendChild(taskCard);
        });
        
        tasksContainer.appendChild(monthSection);
    }
}

// Create a task card element
function createTaskCard(task) {
    const taskCard = document.createElement('div');
    taskCard.className = `task-card p-3 ${task.completed ? 'completed' : ''}`;
    taskCard.dataset.id = task.id;
    
    const dueDate = new Date(task.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const isOverdue = dueDate < today && !task.completed;
    
    taskCard.innerHTML = `
        <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="d-flex align-items-start">
                <div class="form-check me-2">
                    <input class="form-check-input" type="checkbox" ${task.completed ? 'checked' : ''} 
                        onchange="toggleTaskCompletion('${task.id}')">
                </div>
                <div>
                    <h5 class="task-title mb-1">${task.title}</h5>
                    <p class="task-description mb-2">${task.description}</p>
                </div>
            </div>
            <div class="d-flex flex-column flex-md-row align-items-md-center mt-2 mt-md-0">
                <span class="task-badge me-md-2 mb-2 mb-md-0 ${isOverdue ? 'bg-danger text-white' : 'bg-light'}">
                    ${isOverdue ? '<i class="bi bi-exclamation-circle"></i>' : '<i class="bi bi-calendar"></i>'} 
                    ${DateTime.fromISO(task.dueDate).toFormat('MMM d, yyyy')}
                </span>
                <span class="task-badge ${getCategoryBadgeClass(task.category)}">
                    ${task.category}
                </span>
            </div>
        </div>
        <div class="d-flex justify-content-end mt-3">
            <div class="task-actions">
                <button class="btn btn-sm btn-outline-secondary" onclick="editTask('${task.id}')">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteTask('${task.id}')">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `;
    
    return taskCard;
}

// Render empty state when no tasks match the filter
function renderEmptyState() {
    const emptyState = document.createElement('div');
    emptyState.className = 'text-center p-5 bg-white rounded shadow-sm';
    
    emptyState.innerHTML = `
        <div class="display-1 mb-3">🔍</div>
        <h3>No tasks found</h3>
        <p class="text-muted">
            ${currentFilter === 'all' 
                ? "You don't have any tasks yet. Add one to get started!" 
                : `No ${currentFilter} tasks found. Try a different filter.`}
        </p>
        ${currentFilter === 'all' ? '<button class="btn btn-primary mt-3" onclick="document.getElementById(\'add-task-btn\').click()">Add your first task</button>' : ''}
    `;
    
    tasksContainer.appendChild(emptyState);
}

// Group tasks by month
function groupTasksByMonth() {
    const tasksByMonth = {};
    
    tasks.forEach(task => {
        const date = DateTime.fromISO(task.dueDate);
        const monthYear = date.toFormat('MMMM yyyy');
        
        if (!tasksByMonth[monthYear]) {
            tasksByMonth[monthYear] = [];
        }
        
        tasksByMonth[monthYear].push(task);
    });
    
    return tasksByMonth;
}

// Get month theme
function getMonthTheme(monthYear) {
    // Get current date to calculate relative months
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Create a mapping of month/year to theme
    const monthThemes = {
        // Map month/year to theme based on current date
        [`April 2025`]: "Personal & Professional Narratives",
        [`May 2025`]: "Technical Expertise with a Fun Twist",
        [`June 2025`]: "Leadership & Advocacy",
        [`July 2025`]: "Integrative Fun & Advocacy",
        [`August 2025`]: "Advanced Content & Expanding Influence",
        [`September 2025`]: "Authority Building & Strategic Positioning"
    };
    
    return monthThemes[monthYear] || '';
}

// Filter task based on current filter
function filterTask(task) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(task.dueDate);
    
    switch (currentFilter) {
        case 'completed':
            return task.completed;
        case 'pending':
            return !task.completed && dueDate >= today;
        case 'overdue':
            return !task.completed && dueDate < today;
        default:
            return true;
    }
}

// Get category badge class
function getCategoryBadgeClass(category) {
    switch (category.toLowerCase()) {
        case 'writing':
            return 'bg-primary text-white';
        case 'short':
            return 'bg-success text-white';
        case 'networking':
            return 'bg-info text-dark';
        case 'job search':
            return 'bg-warning text-dark';
        case 'presentation':
            return 'bg-secondary text-white';
        default:
            return 'bg-light text-dark';
    }
}

// Save task (create or update)
async function saveTask() {
    const taskId = document.getElementById('task-id').value;
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;
    const category = document.getElementById('task-category').value;
    
    if (!title || !dueDate || !category) {
        alert('Please fill in all required fields');
        return;
    }
    
    const taskData = {
        title,
        description,
        dueDate: new Date(dueDate).toISOString(),
        category,
        completed: false
    };
    
    try {
        let response;
        
        if (taskId) {
            // Update existing task
            taskData.id = taskId;
            taskData.completed = tasks.find(t => t.id === taskId).completed;
            response = await fetch(`/api/tasks/${taskId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskData)
            });
        } else {
            // Create new task
            response = await fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskData)
            });
        }
        
        if (response.ok) {
            const updatedTask = await response.json();
            
            if (taskId) {
                // Update task in array
                const index = tasks.findIndex(t => t.id === taskId);
                tasks[index] = updatedTask;
            } else {
                // Add new task to array
                tasks.push(updatedTask);
            }
            
            taskModal.hide();
            renderTasks();
            if (currentView === 'calendar') {
                renderCalendar();
            }
        } else {
            alert('Error saving task');
        }
    } catch (error) {
        console.error('Error saving task:', error);
        alert('Error saving task');
    }
}

// Edit task
function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    
    document.getElementById('modal-title').textContent = 'Edit Task';
    document.getElementById('task-id').value = task.id;
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-description').value = task.description;
    document.getElementById('task-due-date').value = DateTime.fromISO(task.dueDate).toFormat('yyyy-MM-dd');
    document.getElementById('task-category').value = task.category;
    
    taskModal.show();
}

// Delete task
async function deleteTask(taskId) {
    if (!confirm('Are you sure you want to delete this task?')) return;
    
    try {
        const response = await fetch(`/api/tasks/${taskId}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            tasks = tasks.filter(task => task.id !== taskId);
            renderTasks();
            if (currentView === 'calendar') {
                renderCalendar();
            }
        } else {
            alert('Error deleting task');
        }
    } catch (error) {
        console.error('Error deleting task:', error);
        alert('Error deleting task');
    }
}

// Toggle task completion
async function toggleTaskCompletion(taskId) {
    try {
        const response = await fetch(`/api/tasks/${taskId}/toggle`, {
            method: 'PUT'
        });
        
        if (response.ok) {
            const updatedTask = await response.json();
            const index = tasks.findIndex(t => t.id === taskId);
            
            // Show confetti animation if task is completed
            if (updatedTask.completed && !tasks[index].completed) {
                showConfetti();
            }
            
            tasks[index] = updatedTask;
            renderTasks();
            if (currentView === 'calendar') {
                renderCalendar();
            }
        } else {
            alert('Error updating task');
        }
    } catch (error) {
        console.error('Error updating task:', error);
        alert('Error updating task');
    }
}

// Show confetti animation
function showConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = new ConfettiGenerator({
        target: 'confetti-canvas',
        max: 200,
        size: 1.5,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
        clock: 25
    });
    
    confetti.render();
    
    setTimeout(() => {
        confetti.clear();
    }, 3000);
}

// Show sad emoji animation
function showSadEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'sad-emoji';
    emoji.textContent = '😢';
    document.body.appendChild(emoji);
    
    setTimeout(() => {
        document.body.removeChild(emoji);
    }, 3000);
}

// Check for overdue tasks and show sad emoji
function checkOverdueTasks() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    tasks.forEach(task => {
        const dueDate = new Date(task.dueDate);
        if (!task.completed && dueDate < today) {
            // Mark as shown to avoid showing multiple times
            if (!task.overdueShown) {
                task.overdueShown = true;
                showSadEmoji();
            }
        }
    });
}

// Calendar functions
let currentCalendarMonth = new Date();

// Initialize calendar
function initializeCalendar() {
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    prevMonthBtn.addEventListener('click', () => {
        currentCalendarMonth.setMonth(currentCalendarMonth.getMonth() - 1);
        renderCalendar();
    });
    
    nextMonthBtn.addEventListener('click', () => {
        currentCalendarMonth.setMonth(currentCalendarMonth.getMonth() + 1);
        renderCalendar();
    });
    
    renderCalendar();
}

// Render calendar
function renderCalendar() {
    const calendarDays = document.getElementById('calendar-days');
    const calendarMonth = document.getElementById('calendar-month');
    
    // Set month title
    const monthYear = DateTime.fromJSDate(currentCalendarMonth).toFormat('MMMM yyyy');
    calendarMonth.textContent = monthYear;
    
    // Clear calendar
    calendarDays.innerHTML = '';
    
    // Get first day of month and last day of month
    const firstDay = new Date(currentCalendarMonth.getFullYear(), currentCalendarMonth.getMonth(), 1);
    const lastDay = new Date(currentCalendarMonth.getFullYear(), currentCalendarMonth.getMonth() + 1, 0);
    
    // Get day of week for first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();
    
    // Create empty cells for days before first day of month
    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty';
        calendarDays.appendChild(emptyDay);
    }
    
    // Create cells for each day of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(currentCalendarMonth.getFullYear(), currentCalendarMonth.getMonth(), day);
        const dayElement = createCalendarDay(date);
        calendarDays.appendChild(dayElement);
    }
}

// Create a calendar day element
function createCalendarDay(date) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    
    // Check if this is today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const isToday = date.getTime() === today.getTime();
    
    if (isToday) {
        dayElement.classList.add('today');
    }
    
    // Create day number
    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = date.getDate();
    dayElement.appendChild(dayNumber);
    
    // Get tasks for this day
    const dayTasks = getTasksForDay(date);
    
    if (dayTasks.length > 0) {
        // Add tasks to day
        const tasksContainer = document.createElement('div');
        tasksContainer.className = 'day-tasks';
        
        // Sort tasks by completion status
        dayTasks.sort((a, b) => {
            if (a.completed === b.completed) return 0;
            return a.completed ? 1 : -1;
        });
        
        // Show up to 3 tasks, with a "+X more" indicator if there are more
        const tasksToShow = dayTasks.slice(0, 3);
        
        tasksToShow.forEach(task => {
            const taskElement = document.createElement('div');
            const isOverdue = new Date(task.dueDate) < today && !task.completed;
            
            taskElement.className = `day-task ${task.completed ? 'completed' : isOverdue ? 'overdue' : 'pending'}`;
            taskElement.textContent = task.title;
            taskElement.title = task.title;
            tasksContainer.appendChild(taskElement);
        });
        
        if (dayTasks.length > 3) {
            const moreElement = document.createElement('div');
            moreElement.className = 'day-task more';
            moreElement.textContent = `+${dayTasks.length - 3} more`;
            tasksContainer.appendChild(moreElement);
        }
        
        dayElement.appendChild(tasksContainer);
        
        // Add status indicators
        const statusContainer = document.createElement('div');
        statusContainer.className = 'd-flex justify-content-end mt-1';
        
        const hasCompleted = dayTasks.some(task => task.completed);
        const hasPending = dayTasks.some(task => !task.completed);
        
        if (hasCompleted) {
            const completedDot = document.createElement('span');
            completedDot.className = 'task-dot completed';
            completedDot.title = 'Completed tasks';
            statusContainer.appendChild(completedDot);
        }
        
        if (hasPending) {
            const pendingDot = document.createElement('span');
            pendingDot.className = 'task-dot pending';
            pendingDot.title = 'Pending tasks';
            statusContainer.appendChild(pendingDot);
        }
        
        dayElement.appendChild(statusContainer);
        
        // Add click event to show day tasks modal
        dayElement.addEventListener('click', () => showDayTasksModal(date, dayTasks));
    } else {
        // Show "No tasks" message
        const noTasks = document.createElement('div');
        noTasks.className = 'no-tasks';
        noTasks.textContent = 'No tasks';
        dayElement.appendChild(noTasks);
    }
    
    return dayElement;
}

// Get tasks for a specific day
function getTasksForDay(date) {
    return tasks.filter(task => {
        const taskDate = new Date(task.dueDate);
        return taskDate.getFullYear() === date.getFullYear() &&
               taskDate.getMonth() === date.getMonth() &&
               taskDate.getDate() === date.getDate();
    });
}

// Show day tasks modal
function showDayTasksModal(date, dayTasks) {
    const modalTitle = document.getElementById('day-modal-title');
    const tasksContainer = document.getElementById('day-tasks-container');
    
    modalTitle.innerHTML = `<i class="bi bi-calendar"></i> Tasks for ${DateTime.fromJSDate(date).toFormat('MMMM d, yyyy')}`;
    
    tasksContainer.innerHTML = '';
    
    if (dayTasks.length === 0) {
        tasksContainer.innerHTML = '<div class="text-center py-4 text-muted">No tasks scheduled for this day.</div>';
    } else {
        dayTasks.forEach(task => {
            const taskCard = createTaskCardForModal(task);
            tasksContainer.appendChild(taskCard);
        });
    }
    
    dayTasksModal.show();
}

// Create a task card for the day modal
function createTaskCardForModal(task) {
    const taskCard = document.createElement('div');
    taskCard.className = `card mb-3 ${task.completed ? 'bg-light' : ''}`;
    
    const dueDate = new Date(task.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const isOverdue = dueDate < today && !task.completed;
    
    taskCard.innerHTML = `
        <div class="card-body">
            <div class="d-flex align-items-start">
                <div class="form-check me-3">
                    <input class="form-check-input" type="checkbox" ${task.completed ? 'checked' : ''} 
                        onchange="toggleTaskCompletion('${task.id}')">
                </div>
                <div class="flex-grow-1">
                    <h5 class="card-title ${task.completed ? 'text-decoration-line-through text-muted' : ''}">${task.title}</h5>
                    <p class="card-text ${task.completed ? 'text-muted' : ''}">${task.description}</p>
                    <div class="d-flex flex-wrap gap-2 mt-2">
                        <span class="badge ${getCategoryBadgeClass(task.category)}">${task.category}</span>
                        <span class="badge ${isOverdue ? 'bg-danger' : 'bg-secondary'}">
                            ${isOverdue ? '<i class="bi bi-exclamation-circle"></i>' : ''} Due: ${DateTime.fromISO(task.dueDate).toFormat('MMM d, yyyy')}
                        </span>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-3">
                <button class="btn btn-sm btn-outline-secondary me-2" onclick="editTask('${task.id}'); dayTasksModal.hide();">
                    <i class="bi bi-pencil"></i> Edit
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteTask('${task.id}')">
                    <i class="bi bi-trash"></i> Delete
                </button>
            </div>
        </div>
    `;
    
    return taskCard;
}

// Initialize and run the overdue check
setInterval(checkOverdueTasks, 60000); // Check every minute

// Confetti-js
var ConfettiGenerator = window.ConfettiGenerator;