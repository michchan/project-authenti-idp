/**
 * TaskMaster JavaScript - Shared functionality for UI mockups
 * Handles navigation, theme switching, and interactive elements
 */

// Application State Management
const TaskMasterApp = {
    // Theme management
    theme: localStorage.getItem('taskmaster-theme') || 'light',
    
    // Navigation pages
    pages: {
        'landing': '01-landing.html',
        'dashboard': '02-dashboard.html',
        'task-detail': '03-task-detail.html',
        'analytics': '04-analytics.html',
        'settings': '05-settings.html'
    },
    
    // Sample task data for demos
    sampleTasks: [
        {
            id: 1,
            title: 'Prepare quarterly presentation slides',
            description: 'Create comprehensive presentation covering Q1 metrics, team accomplishments, challenges, and Q2 goals',
            category: 'work',
            priority: 'high',
            completed: false,
            dueDate: '2024-03-22T14:00:00',
            tags: ['presentation', 'quarterly', 'team-meeting'],
            createdAt: '2024-03-08T10:00:00'
        },
        {
            id: 2,
            title: 'Buy groceries for dinner party',
            description: 'Get ingredients for Saturday dinner party - check with guests about allergies',
            category: 'personal',
            priority: 'medium',
            completed: true,
            dueDate: '2024-03-20T18:00:00',
            tags: ['shopping', 'dinner-party'],
            createdAt: '2024-03-15T09:30:00',
            completedAt: '2024-03-19T16:45:00'
        },
        {
            id: 3,
            title: 'Submit tax documents',
            description: 'Gather all necessary documents and submit tax return',
            category: 'finance',
            priority: 'high',
            completed: false,
            dueDate: '2024-03-18T23:59:00', // Overdue
            tags: ['taxes', 'urgent', 'documents'],
            createdAt: '2024-03-01T12:00:00'
        },
        {
            id: 4,
            title: 'Plan weekend hiking trip',
            description: 'Research trails, check weather, pack gear',
            category: 'hobbies',
            priority: 'low',
            completed: false,
            dueDate: '2024-03-23T08:00:00',
            tags: ['hiking', 'weekend', 'outdoors'],
            createdAt: '2024-03-16T20:15:00'
        },
        {
            id: 5,
            title: 'Doctor checkup appointment',
            description: 'Annual physical examination',
            category: 'health',
            priority: 'medium',
            completed: false,
            dueDate: '2024-03-19T10:30:00', // Overdue
            tags: ['health', 'appointment'],
            createdAt: '2024-03-10T14:20:00'
        }
    ],

    // Initialize the application
    init() {
        this.initTheme();
        this.initNavigation();
        this.initInteractiveElements();
        this.initKeyboardShortcuts();
        this.setActivePage();
        console.log('TaskMaster App initialized');
    },

    // Theme Management
    initTheme() {
        document.body.classList.toggle('dark-mode', this.theme === 'dark');
        this.updateThemeToggle();
    },

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.body.classList.toggle('dark-mode', this.theme === 'dark');
        localStorage.setItem('taskmaster-theme', this.theme);
        this.updateThemeToggle();
        this.showNotification(`Switched to ${this.theme} mode`, 'info');
    },

    updateThemeToggle() {
        const toggles = document.querySelectorAll('.theme-toggle');
        toggles.forEach(toggle => {
            const icon = toggle.querySelector('.theme-icon');
            if (icon) {
                icon.textContent = this.theme === 'dark' ? '☀️' : '🌙';
            }
            toggle.setAttribute('aria-label', `Switch to ${this.theme === 'dark' ? 'light' : 'dark'} mode`);
        });
    },

    // Navigation Management
    initNavigation() {
        // Add click handlers for all navigation links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('.nav-link, .logo');
            if (link && link.href) {
                this.handleNavigation(e, link);
            }
        });

        // Handle modal triggers
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-modal]')) {
                e.preventDefault();
                this.openModal(e.target.dataset.modal);
            }
            
            if (e.target.matches('.modal-overlay, .modal-close')) {
                this.closeModal();
            }
        });

        // Handle theme toggle
        document.addEventListener('click', (e) => {
            if (e.target.matches('.theme-toggle') || e.target.closest('.theme-toggle')) {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    },

    handleNavigation(e, link) {
        // Add loading state to the link
        const originalText = link.innerHTML;
        link.classList.add('loading');
        
        // Brief loading delay for better UX
        setTimeout(() => {
            window.location.href = link.href;
        }, 200);
    },

    setActivePage() {
        const currentPage = this.getCurrentPageKey();
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && Object.values(this.pages).includes(href.split('/').pop())) {
                const pageKey = Object.keys(this.pages).find(key => 
                    this.pages[key] === href.split('/').pop()
                );
                if (pageKey === currentPage) {
                    link.classList.add('active');
                }
            }
        });
    },

    getCurrentPageKey() {
        const filename = window.location.pathname.split('/').pop();
        return Object.keys(this.pages).find(key => this.pages[key] === filename) || 'landing';
    },

    // Interactive Elements
    initInteractiveElements() {
        // Task checkbox handling
        document.addEventListener('change', (e) => {
            if (e.target.matches('.task-checkbox')) {
                this.handleTaskCompletion(e.target);
            }
        });

        // Form submission handling
        document.addEventListener('submit', (e) => {
            if (e.target.matches('.task-form')) {
                e.preventDefault();
                this.handleTaskFormSubmission(e.target);
            }
        });

        // Search functionality
        const searchInput = document.querySelector('#task-search');
        if (searchInput) {
            searchInput.addEventListener('input', this.debounce((e) => {
                this.handleSearch(e.target.value);
            }, 300));
        }

        // Filter functionality
        document.addEventListener('change', (e) => {
            if (e.target.matches('.filter-select')) {
                this.handleFilter(e.target);
            }
        });
    },

    handleTaskCompletion(checkbox) {
        const taskItem = checkbox.closest('.task-item');
        const taskTitle = taskItem.querySelector('.task-title');
        
        if (checkbox.checked) {
            taskTitle.classList.add('completed');
            taskItem.style.opacity = '0.7';
            this.showNotification('Task completed! 🎉', 'success');
            
            // Animate task to bottom
            setTimeout(() => {
                const taskList = taskItem.parentElement;
                taskList.appendChild(taskItem);
            }, 500);
        } else {
            taskTitle.classList.remove('completed');
            taskItem.style.opacity = '1';
            this.showNotification('Task marked as incomplete', 'info');
        }
    },

    handleTaskFormSubmission(form) {
        const formData = new FormData(form);
        const taskData = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            priority: formData.get('priority'),
            dueDate: formData.get('dueDate'),
            tags: formData.get('tags') ? formData.get('tags').split(',').map(tag => tag.trim()) : []
        };

        // Validate required fields
        if (!taskData.title) {
            this.showNotification('Task title is required', 'error');
            return;
        }

        // Simulate task creation
        this.showNotification('Task created successfully! ✅', 'success');
        this.closeModal();
        form.reset();

        // In a real app, this would send data to the server
        console.log('New task data:', taskData);
    },

    handleSearch(query) {
        const taskItems = document.querySelectorAll('.task-item');
        const normalizedQuery = query.toLowerCase().trim();

        taskItems.forEach(item => {
            const title = item.querySelector('.task-title').textContent.toLowerCase();
            const description = item.querySelector('.task-description')?.textContent.toLowerCase() || '';
            
            const matches = title.includes(normalizedQuery) || description.includes(normalizedQuery);
            item.style.display = matches ? 'flex' : 'none';
        });

        // Update results count
        const visibleItems = document.querySelectorAll('.task-item[style*="flex"]').length;
        this.updateSearchResults(visibleItems, query);
    },

    updateSearchResults(count, query) {
        let resultsText = '';
        if (query) {
            resultsText = count === 1 ? `${count} task found` : `${count} tasks found`;
        }
        
        const resultsElement = document.querySelector('.search-results');
        if (resultsElement) {
            resultsElement.textContent = resultsText;
        }
    },

    handleFilter(filterSelect) {
        const filterType = filterSelect.dataset.filter;
        const filterValue = filterSelect.value;
        
        console.log(`Filtering by ${filterType}: ${filterValue}`);
        this.showNotification(`Filtered by ${filterType}: ${filterValue}`, 'info');
        
        // In a real app, this would filter the task list
    },

    // Modal Management
    openModal(modalId) {
        const modal = document.querySelector(`#${modalId}`);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus first input in modal
            const firstInput = modal.querySelector('input, select, textarea');
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 100);
            }
        }
    },

    closeModal() {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    },

    // Keyboard Shortcuts
    initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Escape key closes modals
            if (e.key === 'Escape') {
                this.closeModal();
            }
            
            // Ctrl/Cmd + N opens new task modal
            if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
                e.preventDefault();
                this.openModal('new-task-modal');
            }
            
            // Ctrl/Cmd + K opens search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('#task-search');
                if (searchInput) {
                    searchInput.focus();
                }
            }
            
            // Ctrl/Cmd + / shows shortcuts help
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                this.showKeyboardShortcuts();
            }
        });
    },

    showKeyboardShortcuts() {
        const shortcuts = [
            { keys: 'Ctrl + N', description: 'Create new task' },
            { keys: 'Ctrl + K', description: 'Focus search' },
            { keys: 'Ctrl + /', description: 'Show shortcuts' },
            { keys: 'Escape', description: 'Close modal' }
        ];
        
        let shortcutsHtml = '<h3>Keyboard Shortcuts</h3><ul>';
        shortcuts.forEach(shortcut => {
            shortcutsHtml += `<li><strong>${shortcut.keys}</strong> - ${shortcut.description}</li>`;
        });
        shortcutsHtml += '</ul>';
        
        this.showNotification(shortcutsHtml, 'info', 5000);
    },

    // Notification System
    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 16px',
            borderRadius: '6px',
            color: 'white',
            fontWeight: '500',
            fontSize: '14px',
            zIndex: '10000',
            maxWidth: '400px',
            opacity: '0',
            transform: 'translateY(-10px)',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        });
        
        // Set background color based on type
        switch (type) {
            case 'success':
                notification.style.backgroundColor = '#48BB78';
                break;
            case 'error':
                notification.style.backgroundColor = '#F56565';
                break;
            case 'warning':
                notification.style.backgroundColor = '#F6AD55';
                break;
            default:
                notification.style.backgroundColor = '#4299E1';
        }
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove notification
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.parentElement.removeChild(notification);
                }
            }, 300);
        }, duration);
    },

    // Utility Functions
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const taskDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        
        if (taskDate < today) {
            const daysOverdue = Math.floor((today - taskDate) / (24 * 60 * 60 * 1000));
            return `Overdue by ${daysOverdue} day${daysOverdue > 1 ? 's' : ''}`;
        } else if (taskDate.getTime() === today.getTime()) {
            return `Today ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        } else if (taskDate.getTime() === today.getTime() + 24 * 60 * 60 * 1000) {
            return `Tomorrow ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        } else {
            return date.toLocaleDateString([], { 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }
    },

    getCategoryIcon(category) {
        const icons = {
            work: '💼',
            personal: '🏠',
            shopping: '🛒',
            health: '🏥',
            finance: '💰',
            hobbies: '🎨'
        };
        return icons[category] || '📋';
    },

    getPriorityColor(priority) {
        const colors = {
            high: 'var(--color-priority-high)',
            medium: 'var(--color-priority-medium)',
            low: 'var(--color-priority-low)'
        };
        return colors[priority] || colors.medium;
    },

    // Statistics and Analytics
    calculateStats(tasks = this.sampleTasks) {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        
        const stats = {
            total: tasks.length,
            completed: tasks.filter(task => task.completed).length,
            overdue: tasks.filter(task => {
                const dueDate = new Date(task.dueDate);
                return !task.completed && dueDate < today;
            }).length,
            dueToday: tasks.filter(task => {
                const dueDate = new Date(task.dueDate);
                const taskDate = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
                return !task.completed && taskDate.getTime() === today.getTime();
            }).length
        };
        
        stats.completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;
        stats.remaining = stats.total - stats.completed;
        
        return stats;
    },

    // Link Validation (for development)
    validateLinks() {
        const links = document.querySelectorAll('a[href]');
        links.forEach((link, index) => {
            const href = link.getAttribute('href');
            
            // Skip external links and anchors
            if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) {
                return;
            }
            
            // Check if internal link points to existing page
            if (!Object.values(this.pages).includes(href)) {
                console.warn(`Potentially broken internal link detected: ${href}`, link);
                link.style.borderLeft = '3px solid orange';
                link.title = `Warning: Link may be broken - ${href}`;
            } else {
                link.style.borderLeft = '3px solid green';
                link.title = `Valid internal link - ${href}`;
            }
        });
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    TaskMasterApp.init();
    
    // Validate links in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        setTimeout(() => TaskMasterApp.validateLinks(), 1000);
    }
});

// Make TaskMasterApp globally available for debugging
window.TaskMasterApp = TaskMasterApp;