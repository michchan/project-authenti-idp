# 🧩 TaskMaster UI Component Library v1.0

This document defines reusable UI components for TaskMaster, a personal task management web application, using structured HTML examples that follow the TaskMaster Design System.

---

## 📁 Index

1. [Button](#button)
2. [Input Field](#input-field)
3. [Task Item](#task-item)
4. [Task Card](#task-card)
5. [Modal](#modal)
6. [Category Badge](#category-badge)
7. [Priority Indicator](#priority-indicator)
8. [Progress Bar](#progress-bar)
9. [Stats Card](#stats-card)
10. [Search & Filter](#search--filter)
11. [Toggle Switch](#toggle-switch)
12. [Alert](#alert)
13. [Tooltip](#tooltip)
14. [Navigation](#navigation)

---

## 🔘 Button

### HTML Preview

<button style="background-color: #3182CE; color: white; border: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; cursor: pointer; margin: 4px; transition: all 0.2s;">+ Add New Task</button>
<button style="background-color: #22C55E; color: white; border: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; cursor: pointer; margin: 4px; transition: all 0.2s;">✓ Mark Complete</button>
<button style="background-color: transparent; color: #3182CE; border: 2px solid #3182CE; padding: 10px 22px; border-radius: 6px; font-weight: 500; cursor: pointer; margin: 4px; transition: all 0.2s;">Cancel</button>
<button style="background-color: #EF4444; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 500; cursor: pointer; margin: 4px; transition: all 0.2s; font-size: 14px;">🗑️ Delete Task</button>

### Variants

- **Primary** - Main actions (add task, save, create)
- **Success** - Positive actions (mark complete, confirm)
- **Secondary** - Secondary actions (cancel, back)
- **Danger** - Destructive actions (delete, remove)
- **Outline** - Tertiary actions (edit, view details)

### States

- Normal
- Hover (slight transform and opacity change)
- Focus (ring indicator)
- Active (pressed state)
- Disabled (reduced opacity)
- Loading (with spinner)

---

## 📝 Input Field

### HTML Preview

<div style="margin-bottom: 20px; max-width: 400px;">
  <label for="task-title" style="display: block; margin-bottom: 8px; font-weight: 500; color: #404040; font-size: 14px;">Task Title *</label>
  <input type="text" id="task-title" placeholder="What needs to be done?" style="width: 100%; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px; transition: border-color 0.2s; font-family: 'Inter', sans-serif;" />
</div>

<div style="margin-bottom: 20px; max-width: 400px;">
  <label for="task-description" style="display: block; margin-bottom: 8px; font-weight: 500; color: #404040; font-size: 14px;">Description (optional)</label>
  <textarea id="task-description" placeholder="Add more details about this task..." style="width: 100%; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px; transition: border-color 0.2s; font-family: 'Inter', sans-serif; resize: vertical; min-height: 80px;"></textarea>
</div>

<div style="margin-bottom: 20px; max-width: 400px;">
  <label for="due-date" style="display: block; margin-bottom: 8px; font-weight: 500; color: #404040; font-size: 14px;">Due Date</label>
  <input type="date" id="due-date" style="width: 100%; padding: 12px 16px; border: 2px solid #3182CE; border-radius: 6px; font-size: 16px; background-color: #EBF8FF;" />
  <span style="display: block; margin-top: 4px; font-size: 12px; color: #3182CE;">📅 Focus mode: Due date selected</span>
</div>

### States

- **Default** - Clean border, placeholder text
- **Focus** - Blue border with subtle ring shadow
- **Filled** - Content with maintained focus styling
- **Error** - Red border with error message
- **Success** - Green border with success indicator
- **Disabled** - Gray background, no interaction

---

## ✅ Task Item

### HTML Preview

<div style="max-width: 600px; margin: 16px 0;">
  <!-- Completed Task -->
  <div style="background: white; border: 1px solid #E5E5E5; border-radius: 8px; padding: 16px; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 12px; opacity: 0.7; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
    <input type="checkbox" checked style="margin-top: 2px; width: 18px; height: 18px; accent-color: #22C55E; cursor: pointer;" />
    <div style="flex: 1;">
      <h4 style="margin: 0 0 4px 0; font-size: 16px; color: #737373; text-decoration: line-through; font-weight: 500;">Buy groceries for dinner</h4>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
        <span style="background-color: #D1FAE5; color: #065F46; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">🏠 Personal</span>
        <span style="background-color: #FEF2F2; color: #991B1B; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">🔴 High</span>
      </div>
      <p style="margin: 0; font-size: 14px; color: #A3A3A3;">✅ Completed 2 hours ago</p>
    </div>
  </div>
  <!-- Active Task -->
  <div style="background: white; border: 1px solid #E5E5E5; border-radius: 8px; padding: 16px; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 12px; transition: all 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
    <input type="checkbox" style="margin-top: 2px; width: 18px; height: 18px; accent-color: #3182CE; cursor: pointer;" />
    <div style="flex: 1;">
      <h4 style="margin: 0 0 4px 0; font-size: 16px; color: #171717; font-weight: 500;">Prepare quarterly team presentation</h4>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
        <span style="background-color: #DBEAFE; color: #1D4ED8; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">💼 Work</span>
        <span style="background-color: #FFFBEB; color: #92400E; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">🟡 Medium</span>
        <span style="background-color: #FEF3C7; color: #92400E; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">📅 Due Friday 2:00 PM</span>
      </div>
      <p style="margin: 0; font-size: 14px; color: #525252;">Create slides covering Q1 metrics, accomplishments, and Q2 goals</p>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <button style="background: none; border: none; padding: 4px; cursor: pointer; color: #737373; font-size: 18px;" title="Edit task">✏️</button>
      <button style="background: none; border: none; padding: 4px; cursor: pointer; color: #737373; font-size: 18px;" title="More actions">⋮</button>
    </div>
  </div>
  <!-- Overdue Task -->
  <div style="background: #FEF2F2; border: 1px solid #FECACA; border-left: 4px solid #EF4444; border-radius: 8px; padding: 16px; display: flex; align-items: flex-start; gap: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
    <input type="checkbox" style="margin-top: 2px; width: 18px; height: 18px; accent-color: #EF4444; cursor: pointer;" />
    <div style="flex: 1;">
      <h4 style="margin: 0 0 4px 0; font-size: 16px; color: #171717; font-weight: 500;">Doctor checkup appointment</h4>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
        <span style="background-color: #CCFBF1; color: #0D9488; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">🏥 Health</span>
        <span style="background-color: #FFFBEB; color: #92400E; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">🟡 Medium</span>
      </div>
      <p style="margin: 0; font-size: 14px; color: #991B1B; font-weight: 500;">⚠️ Overdue by 1 day - Was due yesterday</p>
    </div>
  </div>
</div>

### Task States

- **Complete** - Checked checkbox, strikethrough text, reduced opacity
- **Active** - Normal appearance, hover effects
- **Overdue** - Red left border, warning background, alert styling
- **Due Today** - Orange accent, today indicator
- **Due Soon** - Yellow accent, upcoming indicator

---

## 🃏 Task Card

### HTML Preview

<div style="background: white; border: 1px solid #E5E5E5; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 350px; overflow: hidden; margin: 16px 0; transition: all 0.2s;">
  <div style="padding: 20px 24px 16px 24px; border-bottom: 1px solid #E5E5E5;">
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
      <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #171717;">Project Planning</h3>
      <div style="display: flex; gap: 4px;">
        <button style="background: none; border: none; padding: 4px; cursor: pointer; color: #737373; font-size: 16px;">✏️</button>
        <button style="background: none; border: none; padding: 4px; cursor: pointer; color: #737373; font-size: 16px;">⋮</button>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
      <span style="background-color: #DBEAFE; color: #1D4ED8; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">💼 Work</span>
      <span style="background-color: #FEF2F2; color: #991B1B; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">🔴 High Priority</span>
    </div>
    <p style="margin: 0; font-size: 14px; color: #525252; line-height: 1.5;">Plan Q2 objectives, allocate resources, and schedule team meetings for upcoming project milestones.</p>
  </div>
  <div style="padding: 16px 24px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <span style="font-size: 14px; color: #737373; font-weight: 500;">Progress</span>
      <span style="font-size: 14px; color: #737373;">3 of 7 subtasks</span>
    </div>
    <div style="background-color: #E5E5E5; border-radius: 8px; height: 8px; overflow: hidden; margin-bottom: 12px;">
      <div style="background: linear-gradient(90deg, #3182CE 0%, #4299E1 100%); height: 100%; width: 43%; border-radius: 8px;"></div>
    </div>
     <div style="display: flex; justify-content: space-between; align-items: center; font-size: 14px; color: #525252;">
      <span>📅 Due: Mar 25, 2024</span>
      <span style="color: #F59E0B; font-weight: 500;">⏰ 2 days left</span>
    </div>
  </div>
  <div style="padding: 16px 24px 20px 24px; background-color: #FAFAFA; display: flex; gap: 8px;">
    <button style="background-color: #3182CE; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 500; cursor: pointer; font-size: 14px; flex: 1;">Open Task</button>
    <button style="background-color: #22C55E; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 500; cursor: pointer; font-size: 14px;">✓ Complete</button>
  </div>
</div>

### Card Features

- **Header** - Title, category, priority, action buttons
- **Content** - Description text, tags, metadata
- **Progress** - Subtask completion with visual progress bar
- **Footer** - Action buttons and due date information
- **Interactive** - Hover effects, click handlers

---

## 🪟 Modal

### HTML Preview

<div style="border: 2px dashed #D1D5DB; background-color: #FAFAFA; padding: 24px; border-radius: 12px; margin: 16px 0;">
  <p style="margin: 0 0 16px 0; font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: 0.5px; text-align: center;">Modal Example (Static Preview)</p>
  <div style="background: white; border-radius: 12px; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25); max-width: 500px; overflow: hidden; margin: 0 auto;">
        <!-- Modal Header -->
    <div style="padding: 24px 24px 0 24px; border-bottom: 1px solid #E5E5E5; display: flex; justify-content: space-between; align-items: center;">
      <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #171717;">✏️ Edit Task</h2>
      <button style="background: none; border: none; font-size: 24px; color: #737373; cursor: pointer; padding: 0;" aria-label="Close modal">×</button>
    </div>
    <!-- Modal Content -->
    <div style="padding: 24px;">
      <div style="margin-bottom: 16px;">
        <label style="display: block; margin-bottom: 6px; font-weight: 500; color: #404040; font-size: 14px;">Task Title *</label>
        <input type="text" value="Prepare quarterly team presentation" style="width: 100%; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px; font-family: 'Inter', sans-serif;" />
      </div>
      <div style="display: flex; gap: 12px; margin-bottom: 16px;">
        <div style="flex: 1;">
          <label style="display: block; margin-bottom: 6px; font-weight: 500; color: #404040; font-size: 14px;">Category</label>
          <select style="width: 100%; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px; background-color: white; cursor: pointer;">
            <option>💼 Work</option>
            <option>🏠 Personal</option>
            <option>🛒 Shopping</option>
            <option>🏥 Health</option>
          </select>
        </div>
        <div style="flex: 1;">
          <label style="display: block; margin-bottom: 6px; font-weight: 500; color: #404040; font-size: 14px;">Priority</label>
          <select style="width: 100%; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px; background-color: white; cursor: pointer;">
            <option>🔴 High Priority</option>
            <option selected>🟡 Medium Priority</option>
            <option>🟢 Low Priority</option>
          </select>
        </div>
      </div>
      <div style="margin-bottom: 16px;">
        <label style="display: block; margin-bottom: 6px; font-weight: 500; color: #404040; font-size: 14px;">Due Date & Time</label>
        <div style="display: flex; gap: 8px;">
          <input type="date" value="2024-03-22" style="flex: 2; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px;" />
          <input type="time" value="14:00" style="flex: 1; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px;" />
        </div>
      </div>
    </div>
    <!-- Modal Footer -->
    <div style="padding: 0 24px 24px 24px; display: flex; justify-content: flex-end; gap: 12px; border-top: 1px solid #E5E5E5; margin-top: 0; padding-top: 20px;">
      <button style="background-color: #F5F5F5; color: #404040; border: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; cursor: pointer;">Cancel</button>
      <button style="background-color: #3182CE; color: white; border: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; cursor: pointer;">💾 Save Changes</button>
    </div>
  </div>
</div>

### Modal Features

- **Overlay** - Semi-transparent background
- **Header** - Title and close button
- **Content** - Form fields, information display
- **Footer** - Action buttons (save, cancel)
- **Focus Management** - Keyboard navigation support
- **Responsive** - Adapts to screen size

---

## 🏷️ Category Badge

### HTML Preview

<div style="display: flex; gap: 8px; flex-wrap: wrap; margin: 16px 0;">
  <span style="background-color: #DBEAFE; color: #1D4ED8; padding: 6px 12px; border-radius: 16px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">💼 Work</span>
  <span style="background-color: #D1FAE5; color: #065F46; padding: 6px 12px; border-radius: 16px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">🏠 Personal</span>
  <span style="background-color: #EDE9FE; color: #6D28D9; padding: 6px 12px; border-radius: 16px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">🛒 Shopping</span>
  <span style="background-color: #CCFBF1; color: #0D9488; padding: 6px 12px; border-radius: 16px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">🏥 Health</span>
  <span style="background-color: #E0E7FF; color: #4F46E5; padding: 6px 12px; border-radius: 16px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">💰 Finance</span>
  <span style="background-color: #FED7AA; color: #C2410C; padding: 6px 12px; border-radius: 16px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">📚 Learning</span>
  <span style="background-color: #FCE7F3; color: #BE185D; padding: 6px 12px; border-radius: 16px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">🎨 Hobbies</span>
</div>

### Category Styles

- **Work** - Blue background with briefcase icon
- **Personal** - Green background with house icon
- **Shopping** - Purple background with cart icon
- **Health** - Teal background with medical icon
- **Finance** - Indigo background with money icon
- **Learning** - Orange background with book icon
- **Hobbies** - Pink background with art icon

---

## 🎯 Priority Indicator

### HTML Preview

<div style="display: flex; align-items: center; gap: 16px; margin: 16px 0;">
  <div style="display: flex; align-items: center; gap: 8px;">
    <div style="width: 12px; height: 12px; background-color: #EF4444; border-radius: 50%;"></div>
    <span style="font-size: 14px; font-weight: 500; color: #171717;">High Priority</span>
  </div>
  <div style="display: flex; align-items: center; gap: 8px;">
    <div style="width: 12px; height: 12px; background-color: #F59E0B; border-radius: 50%;"></div>
    <span style="font-size: 14px; font-weight: 500; color: #171717;">Medium Priority</span>
  </div>
  <div style="display: flex; align-items: center; gap: 8px;">
    <div style="width: 12px; height: 12px; background-color: #22C55E; border-radius: 50%;"></div>
    <span style="font-size: 14px; font-weight: 500; color: #171717;">Low Priority</span>
  </div>
</div>

<div style="margin: 16px 0;">
  <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 500; color: #525252;">Priority Badge Variants:</h4>
  <div style="display: flex; gap: 8px;">
    <span style="background-color: #FEF2F2; color: #991B1B; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">🔴 High</span>
    <span style="background-color: #FFFBEB; color: #92400E; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">🟡 Medium</span>
    <span style="background-color: #F0FDF4; color: #14532D; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">🟢 Low</span>
  </div>
</div>

### Priority Colors

- **High** - Red (#EF4444) for urgent tasks
- **Medium** - Orange (#F59E0B) for normal tasks
- **Low** - Green (#22C55E) for less urgent tasks

---

## 📊 Progress Bar

### HTML Preview

<div style="max-width: 400px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
    <span style="font-size: 14px; color: #404040; font-weight: 500;">Today's Progress</span>
    <span style="font-size: 14px; color: #737373;">6 of 8 tasks</span>
  </div>
  <div style="background-color: #E5E5E5; border-radius: 8px; height: 12px; overflow: hidden; margin-bottom: 16px;">
    <div style="background: linear-gradient(90deg, #22C55E 0%, #16A34A 100%); height: 100%; width: 75%; border-radius: 8px; transition: width 0.3s ease;"></div>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
    <span style="font-size: 14px; color: #404040; font-weight: 500;">Weekly Goal</span>
    <span style="font-size: 14px; color: #737373;">24 of 35 tasks</span>
  </div>
  <div style="background-color: #E5E5E5; border-radius: 8px; height: 12px; overflow: hidden; margin-bottom: 16px;">
    <div style="background: linear-gradient(90deg, #3182CE 0%, #4299E1 100%); height: 100%; width: 69%; border-radius: 8px; transition: width 0.3s ease;"></div>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
    <span style="font-size: 14px; color: #404040; font-weight: 500;">Project Completion</span>
    <span style="font-size: 14px; color: #737373;">3 of 7 subtasks</span>
  </div>
  <div style="background-color: #E5E5E5; border-radius: 8px; height: 12px; overflow: hidden;">
    <div style="background: linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%); height: 100%; width: 43%; border-radius: 8px; transition: width 0.3s ease;"></div>
  </div>
</div>

### Progress Types

- **Daily Progress** - Green gradient for daily task completion
- **Weekly Goal** - Blue gradient for weekly objectives
- **Project Progress** - Orange gradient for project milestones
- **Animated** - Smooth transitions when progress updates

---

## 📈 Stats Card

### HTML Preview

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; max-width: 800px; margin: 16px 0;">
  <!-- Tasks Completed Today -->
  <div style="background: white; border: 1px solid #E5E5E5; border-radius: 12px; padding: 20px; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <div style="font-size: 32px; margin-bottom: 8px;">✅</div>
    <div style="font-size: 28px; font-weight: 700; color: #171717; margin-bottom: 4px;">6</div>
    <div style="font-size: 14px; color: #737373; margin-bottom: 8px;">Tasks Completed Today</div>
    <div style="font-size: 12px; color: #22C55E; font-weight: 500;">+2 from yesterday</div>
  </div>
  <!-- Active Tasks -->
  <div style="background: white; border: 1px solidrgb(64, 35, 35); border-radius: 12px; padding: 20px; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <div style="font-size: 32px; margin-bottom: 8px;">📋</div>
    <div style="font-size: 28px; font-weight: 700; color: #171717; margin-bottom: 4px;">12</div>
    <div style="font-size: 14px; color: #737373; margin-bottom: 8px;">Active Tasks</div>
    <div style="font-size: 12px; color: #3182CE; font-weight: 500;">3 due today</div>
  </div>
  <!-- Productivity Score -->
  <div style="background: white; border: 1px solid #E5E5E5; border-radius: 12px; padding: 20px; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <div style="font-size: 32px; margin-bottom: 8px;">🎯</div>
    <div style="font-size: 28px; font-weight: 700; color: #171717; margin-bottom: 4px;">85%</div>
    <div style="font-size: 14px; color: #737373; margin-bottom: 8px;">Productivity Score</div>
    <div style="font-size: 12px; color: #F59E0B; font-weight: 500;">Great work!</div>
  </div>
  <!-- Current Streak -->
  <div style="background: white; border: 1px solid #E5E5E5; border-radius: 12px; padding: 20px; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <div style="font-size: 32px; margin-bottom: 8px;">🔥</div>
    <div style="font-size: 28px; font-weight: 700; color: #171717; margin-bottom: 4px;">5</div>
    <div style="font-size: 14px; color: #737373; margin-bottom: 8px;">Day Streak</div>
    <div style="font-size: 12px; color: #EF4444; font-weight: 500;">Keep it up!</div>
  </div>
</div>

### Stat Features

- **Large Numbers** - Prominent metric display
- **Icons** - Visual representation of each metric
- **Context** - Additional information or comparison
- **Color Coding** - Status indicators (green for positive, orange for neutral)

---

## 🔍 Search & Filter

### HTML Preview

<div style="max-width: 600px; margin: 16px 0;">
  <!-- Search Bar -->
  <div style="position: relative; margin-bottom: 16px;">
    <input type="search" placeholder="Search tasks..." style="width: 100%; padding: 12px 16px 12px 40px; border: 2px solid #E5E5E5; border-radius: 8px; font-size: 16px; transition: border-color 0.2s;" />
    <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #A3A3A3; font-size: 18px;">🔍</div>
  </div>
  <!-- Filter Buttons -->
  <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
    <button style="background-color: #3182CE; color: white; border: none; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500; cursor: pointer;">All Tasks</button>
    <button style="background-color: #F5F5F5; color: #525252; border: none; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500; cursor: pointer;">📅 Due Today</button>
    <button style="background-color: #F5F5F5; color: #525252; border: none; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500; cursor: pointer;">🔴 High Priority</button>
    <button style="background-color: #F5F5F5; color: #525252; border: none; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500; cursor: pointer;">💼 Work</button>
    <button style="background-color: #F5F5F5; color: #525252; border: none; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500; cursor: pointer;">+ More</button>
  </div>
  <!-- Active Filters -->
  <div style="background-color: #EBF8FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 12px; margin-bottom: 16px;">
    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
      <span style="font-size: 14px; color: #1D4ED8; font-weight: 500;">Active filters:</span>
      <span style="background-color: #3182CE; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; display: inline-flex; align-items: center; gap: 4px;">
        "team meeting" <button style="background: none; border: none; color: white; cursor: pointer; padding: 0; font-size: 14px;">×</button>
      </span>
      <span style="background-color: #3182CE; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; display: inline-flex; align-items: center; gap: 4px;">
        💼 Work <button style="background: none; border: none; color: white; cursor: pointer; padding: 0; font-size: 14px;">×</button>
      </span>
      <button style="background: none; border: none; color: #3182CE; font-size: 12px; cursor: pointer; text-decoration: underline;">Clear all</button>
    </div>
  </div>
  <!-- Results Summary -->
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
    <span style="font-size: 14px; color: #525252; font-weight: 500;">Found 3 tasks</span>
    <select style="padding: 6px 12px; border: 1px solid #D4D4D4; border-radius: 6px; font-size: 14px; background-color: white; cursor: pointer;">
      <option>Sort by Due Date</option>
      <option>Sort by Priority</option>
      <option>Sort by Category</option>
      <option>Sort by Created Date</option>
    </select>
  </div>
</div>

### Search Features

- **Real-time Search** - Instant filtering as user types
- **Filter Pills** - Visual filter selection with categories
- **Active Filters** - Display current filters with easy removal
- **Sort Options** - Multiple sorting criteria
- **Results Count** - Clear indication of filtered results

---

## 🔄 Toggle Switch

### HTML Preview

<div style="margin: 20px 0; max-width: 400px;">
  <!-- Enabled Toggle -->
  <div style="margin-bottom: 16px;">
    <label style="display: flex; align-items: center; cursor: pointer; gap: 12px;">
      <div style="position: relative; width: 48px; height: 24px; background-color: #3182CE; border-radius: 24px; transition: all 0.3s;">
        <div style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background-color: white; border-radius: 50%; transition: all 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>
        <input type="checkbox" checked style="opacity: 0; position: absolute; pointer-events: none;" />
      </div>
      <span style="font-size: 16px; color: #171717; font-weight: 500;">Enable dark mode</span>
    </label>
  </div>
  <!-- Disabled Toggle -->
  <div style="margin-bottom: 16px;">
    <label style="display: flex; align-items: center; cursor: pointer; gap: 12px;">
      <div style="position: relative; width: 48px; height: 24px; background-color: #D4D4D4; border-radius: 24px; transition: all 0.3s;">
        <div style="position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background-color: white; border-radius: 50%; transition: all 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>
        <input type="checkbox" style="opacity: 0; position: absolute; pointer-events: none;" />
      </div>
      <span style="font-size: 16px; color: #171717;">Show completed tasks</span>
    </label>
  </div>
  <!-- With Description -->
  <div style="margin-bottom: 16px;">
    <label style="display: flex; align-items: flex-start; cursor: pointer; gap: 12px;">
      <div style="position: relative; width: 48px; height: 24px; background-color: #22C55E; border-radius: 24px; transition: all 0.3s; margin-top: 2px;">
        <div style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background-color: white; border-radius: 50%; transition: all 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>
        <input type="checkbox" checked style="opacity: 0; position: absolute; pointer-events: none;" />
      </div>
      <div>
        <div style="font-size: 16px; color: #171717; font-weight: 500; margin-bottom: 4px;">Send notifications</div>
        <div style="font-size: 14px; color: #737373;">Get reminders for upcoming due dates and task completions</div>
      </div>
    </label>
  </div>
</div>

### Toggle States

- **On** - Colored background, slider to the right
- **Off** - Gray background, slider to the left
- **Disabled** - Muted colors, no interaction
- **Focus** - Ring indicator for keyboard navigation

---

## 🚨 Alert

### HTML Preview

<div style="margin: 16px 0;">
  <!-- Success Alert -->
  <div style="display: flex; align-items: flex-start; padding: 16px; margin-bottom: 12px; background-color: #F0FDF4; border: 1px solid #BBF7D0; border-left: 4px solid #22C55E; border-radius: 8px;" role="alert">
    <span style="font-size: 20px; margin-right: 12px;">✅</span>
    <div style="flex: 1;">
      <h4 style="margin: 0 0 4px 0; font-weight: 600; color: #14532D; font-size: 16px;">Task completed successfully!</h4>
      <p style="margin: 0; font-size: 14px; color: #166534;">"Prepare quarterly team presentation" has been marked as complete.</p>
    </div>
    <button style="background: none; border: none; font-size: 18px; color: #16A34A; cursor: pointer; padding: 0; margin-left: 8px;" aria-label="Dismiss">×</button>
  </div>
  <!-- Warning Alert -->
  <div style="display: flex; align-items: flex-start; padding: 16px; margin-bottom: 12px; background-color: #FFFBEB; border: 1px solid #FDE68A; border-left: 4px solid #F59E0B; border-radius: 8px;" role="alert">
    <span style="font-size: 20px; margin-right: 12px;">⚠️</span>
    <div style="flex: 1;">
      <h4 style="margin: 0 0 4px 0; font-weight: 600; color: #92400E; font-size: 16px;">Tasks due soon</h4>
      <p style="margin: 0; font-size: 14px; color: #B45309;">You have 3 tasks due today and 2 tasks due tomorrow. Stay on track!</p>
    </div>
    <button style="background: none; border: none; font-size: 18px; color: #D97706; cursor: pointer; padding: 0; margin-left: 8px;" aria-label="Dismiss">×</button>
  </div>
  <!-- Error Alert -->
  <div style="display: flex; align-items: flex-start; padding: 16px; margin-bottom: 12px; background-color: #FEF2F2; border: 1px solid #FECACA; border-left: 4px solid #EF4444; border-radius: 8px;" role="alert">
    <span style="font-size: 20px; margin-right: 12px;">❌</span>
    <div style="flex: 1;">
      <h4 style="margin: 0 0 4px 0; font-weight: 600; color: #991B1B; font-size: 16px;">Unable to save task</h4>
      <p style="margin: 0; font-size: 14px; color: #B91C1C;">Please check your internet connection and try again. Changes were not saved.</p>
    </div>
  </div>
  <!-- Info Alert -->
  <div style="display: flex; align-items: flex-start; padding: 16px; background-color: #EBF8FF; border: 1px solid #BFDBFE; border-left: 4px solid #3182CE; border-radius: 8px;" role="alert">
    <span style="font-size: 20px; margin-right: 12px;">ℹ️</span>
    <div style="flex: 1;">
      <h4 style="margin: 0 0 4px 0; font-weight: 600; color: #1E40AF; font-size: 16px;">Tip: Use keyboard shortcuts</h4>
      <p style="margin: 0; font-size: 14px; color: #1E3A8A;">Press Ctrl+N to quickly add a new task, or Space to mark tasks as complete.</p>
    </div>
    <button style="background: none; border: none; font-size: 18px; color: #2563EB; cursor: pointer; padding: 0; margin-left: 8px;" aria-label="Dismiss">×</button>
  </div>
</div>

### Alert Types

- **Success** - Green styling for positive actions
- **Warning** - Yellow styling for caution or reminders
- **Error** - Red styling for problems or failures
- **Info** - Blue styling for helpful information

---

## 💬 Tooltip

### HTML Preview

<div style="margin: 20px 0; display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
  <button style="background-color: #3182CE; color: white; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; position: relative; font-weight: 500;" title="Create a new task quickly with just a title - you can add details later">
    + Add Task
  </button>
  <button style="background-color: #EF4444; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; position: relative; font-size: 14px;" title="This will permanently delete the task and cannot be undone">
    🗑️ Delete
  </button>
  <span style="color: #737373; font-size: 14px; border-bottom: 1px dashed #A3A3A3; cursor: help;" title="Priority affects the order of tasks in your list. High priority tasks appear at the top and have red indicators.">
    ❓ Task Priority
  </span>
  <div style="display: inline-block; position: relative;">
    <span style="background-color: #DBEAFE; color: #1D4ED8; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 500; cursor: help;" title="Work category includes professional tasks, meetings, projects, and career-related activities">💼 Work</span>
  </div>
</div>

### Tooltip Features

- **Hover Activation** - Shows after 500ms delay
- **Focus Support** - Keyboard accessible
- **Auto-positioning** - Adjusts to viewport edges
- **Contextual Help** - Explains features and actions

---

## 🧭 Navigation

### HTML Preview

<div style="background: white; border-bottom: 1px solid #E5E5E5; box-shadow: 0 1px 2px rgba(0,0,0,0.05); margin: 16px 0;">
  <!-- Main Navigation -->
  <div style="padding: 16px 24px; display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 24px;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #171717; display: flex; align-items: center; gap: 8px;">🎯 TaskMaster</h1>
      <nav style="display: flex; gap: 16px;">
        <a href="#" style="text-decoration: none; color: #3182CE; font-weight: 500; padding: 8px 12px; border-radius: 6px; background-color: #EBF8FF;">📋 Dashboard</a>
        <a href="#" style="text-decoration: none; color: #525252; font-weight: 500; padding: 8px 12px; border-radius: 6px; transition: all 0.2s;">📊 Analytics</a>
        <a href="#" style="text-decoration: none; color: #525252; font-weight: 500; padding: 8px 12px; border-radius: 6px; transition: all 0.2s;">📂 Categories</a>
        <a href="#" style="text-decoration: none; color: #525252; font-weight: 500; padding: 8px 12px; border-radius: 6px; transition: all 0.2s;">⚙️ Settings</a>
      </nav>
    </div>
    <div style="display: flex; align-items: center; gap: 12px;">
      <button style="background-color: #F5F5F5; color: #525252; border: none; padding: 8px; border-radius: 6px; cursor: pointer; font-size: 18px;" title="Toggle dark mode">🌙</button>
      <button style="background-color: #3182CE; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: 500; cursor: pointer;">+ Add Task</button>
      <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #3182CE 0%, #1E40AF 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 500; font-size: 14px; cursor: pointer;">JD</div>
    </div>
  </div>
</div>
<!-- Secondary Navigation (Tabs) -->
<div style="background: white; border-bottom: 1px solid #E5E5E5; padding: 0 24px; margin-bottom: 16px;">
  <div style="display: flex; gap: 0;" role="tablist">
    <button style="background: none; border: none; padding: 16px 20px; font-weight: 600; color: #3182CE; border-bottom: 2px solid #3182CE; margin-bottom: -1px; cursor: pointer;" role="tab" aria-selected="true">All Tasks</button>
    <button style="background: none; border: none; padding: 16px 20px; font-weight: 500; color: #737373; cursor: pointer; transition: color 0.2s;" role="tab">Today</button>
    <button style="background: none; border: none; padding: 16px 20px; font-weight: 500; color: #737373; cursor: pointer; transition: color 0.2s;" role="tab">Upcoming</button>
    <button style="background: none; border: none; padding: 16px 20px; font-weight: 500; color: #737373; cursor: pointer; transition: color 0.2s;" role="tab">Completed</button>
  </div>
</div>

### Navigation Features

- **Primary Navigation** - Main app sections with icons
- **Secondary Navigation** - Content tabs for filtering views
- **User Actions** - Quick add button and user avatar
- **Theme Toggle** - Dark/light mode switcher
- **Active States** - Visual indication of current page/tab

---

## 📱 Responsive Design

### Mobile Navigation

<!-- Mobile Header -->
<div style="background: white; border-bottom: 1px solid #E5E5E5; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;">
  <button style="background: none; border: none; font-size: 20px; color: #525252; cursor: pointer;">☰</button>
  <h1 style="margin: 0; font-size: 18px; font-weight: 600; color: #171717;">🎯 TaskMaster</h1>
  <button style="background-color: #3182CE; color: white; border: none; padding: 8px 12px; border-radius: 6px; font-weight: 500; cursor: pointer; font-size: 14px;">+ Add</button>
</div>

### Responsive Breakpoints

- **Mobile**: < 640px - Single column, hamburger menu
- **Tablet**: 640px - 1024px - Two columns, condensed navigation  
- **Desktop**: > 1024px - Multi-column layout, full navigation

---

## 🎨 Implementation Notes

### CSS Custom Properties Integration

All components use the TaskMaster Design System CSS custom properties:

```css
/* Component styling example */
.btn-primary {
  background-color: var(--color-primary-500);
  color: var(--color-white);
  padding: var(--padding-btn-md);
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
  transition: var(--transition-colors);
}

.task-item {
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-sm);
}
```

### Accessibility Standards

- **WCAG 2.1 AA** compliant color contrast
- **Semantic HTML** with proper roles and labels
- **Keyboard Navigation** support for all interactive elements
- **Screen Reader** friendly with appropriate ARIA attributes
- **Focus Management** with visible focus indicators

### Usage Guidelines

- Use semantic HTML structure for better accessibility
- Apply consistent spacing using the design system scale
- Implement hover and focus states for all interactive elements
- Test components across different screen sizes
- Ensure proper color contrast in both light and dark modes

---

*This component library provides the building blocks for creating a cohesive, accessible, and user-friendly TaskMaster interface that follows modern web design principles and accessibility standards.*