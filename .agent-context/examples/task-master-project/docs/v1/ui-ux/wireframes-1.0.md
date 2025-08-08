# 📐 Wireframes: TaskMaster v1.0

This document provides ASCII wireframes for TaskMaster, a personal task management web application. Each wireframe shows the layout, functionality, and user interactions for different screens and states.

---

## 📁 Index

1. [Landing Page](#1-landing-page)
2. [Task Dashboard (Main View)](#2-task-dashboard-main-view)
3. [Task Creation Modal](#3-task-creation-modal)
4. [Task Detail View](#4-task-detail-view)
5. [Categories & Organization](#5-categories--organization)
6. [Search & Filter Interface](#6-search--filter-interface)
7. [Progress & Statistics](#7-progress--statistics)
8. [Settings & Preferences](#8-settings--preferences)
9. [Mobile Responsive Views](#9-mobile-responsive-views)

---

## 1. Landing Page

```
╔══════════════════════════════════════════════════════════════════╗
║  🎯 TaskMaster                    [Dark Mode 🌙] [Get Started]    ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║        📋 Simple Task Management for Everyone                    ║
║                                                                  ║
║    ┌────────────────────────────────────────────────────────┐   ║
║    │  ✓ Buy groceries              [Today] [High Priority]  │   ║
║    │  ○ Review project proposal    [Tomorrow] [Medium]      │   ║
║    │  ✓ Call dentist               [Overdue] [Low]          │   ║
║    │  ○ Plan weekend trip          [This Week] [Medium]     │   ║
║    └────────────────────────────────────────────────────────┘   ║
║                                                                  ║
║    [🚀 Start Managing Your Tasks] [Learn More] [See Demo]       ║
║                                                                  ║
║  Features: ✅ Quick Task Creation • 📊 Progress Tracking         ║
║            🏷️ Smart Categories • 🔍 Powerful Search            ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

**Key Elements:**
- Clean hero section with value proposition
- Interactive demo showing task list preview
- Clear call-to-action buttons
- Feature highlights
- Theme toggle in header

---

## 2. Task Dashboard (Main View)

```
╔══════════════════════════════════════════════════════════════════╗
║ 🎯 TaskMaster    📊 Stats  ⚙️ Settings  🌙 Theme    👤 Profile   ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  [+ Add New Task]  🔍[Search tasks...]  📂[All] 🔥[Priority]    ║
║                                                                  ║
║  ┌─ Today's Tasks ──────────────────────────── 4 of 6 done ──┐   ║
║  │                                                           │   ║
║  │  ☑️ Buy groceries for dinner     🏠Personal  🔴High       │   ║
║  │  ☑️ Submit quarterly report      💼Work      🟡Medium     │   ║
║  │  ☑️ Call mom about weekend       🏠Personal  🟢Low        │   ║
║  │  ☑️ Review code merge request    💼Work      🟡Medium     │   ║
║  │                                                           │   ║
║  │  ⭕ Plan team meeting agenda     💼Work      🔴High        │   ║
║  │     📅 Due: Today 3:00 PM                                │   ║
║  │                                                           │   ║
║  │  ⭕ Book dentist appointment     🏥Health    🟢Low         │   ║
║  │     📅 Due: Tomorrow                                      │   ║
║  └───────────────────────────────────────────────────────────┘   ║
║                                                                  ║
║  ┌─ Upcoming Tasks ──────────────────────────────────────────┐   ║
║  │  ⭕ Prepare presentation         💼Work      🟡Medium      │   ║
║  │     📅 Due: Friday 2:00 PM                               │   ║
║  │                                                           │   ║
║  │  ⭕ Weekend hiking trip prep     🎨Hobbies   🟢Low         │   ║
║  │     📅 Due: Saturday                                      │   ║
║  └───────────────────────────────────────────────────────────┘   ║
║                                                                  ║
║  ┌─ Overdue (2) ─────────────────────────── ⚠️ Needs Action ─┐   ║
║  │  ⭕ File tax documents           💰Finance   🔴High         │   ║
║  │     📅 Was due: 2 days ago                                │   ║
║  │                                                           │   ║
║  │  ⭕ Doctor checkup               🏥Health    🟡Medium      │   ║
║  │     📅 Was due: 1 day ago                                 │   ║
║  └───────────────────────────────────────────────────────────┘   ║
╚══════════════════════════════════════════════════════════════════╝
```

**Key Elements:**
- Header with app name, navigation, and user controls
- Quick add task button prominently placed
- Search and filter controls
- Task groupings: Today, Upcoming, Overdue
- Task items with completion checkbox, title, category, priority, due date
- Visual priority indicators (colored dots)
- Category icons and labels
- Progress indicator for today's tasks

---

## 3. Task Creation Modal

```
╔══════════════════════════════════════════════════════════════════╗
║                    Background (Dimmed)                           ║
║                                                                  ║
║      ┌─── ✏️ Create New Task ──────────────────── ❌ ────────┐    ║
║      │                                                     │    ║
║      │  Task Title: *                                      │    ║
║      │  [________________________________]               │    ║
║      │                                                     │    ║
║      │  Description (optional):                           │    ║
║      │  [________________________________]               │    ║
║      │  [________________________________]               │    ║
║      │                                                     │    ║
║      │  Category: [Work ▼]    Priority: [Medium ▼]       │    ║
║      │                                                     │    ║
║      │  Due Date: [📅 Select Date]  Time: [⏰ Optional]   │    ║
║      │                                                     │    ║
║      │  Tags: [#meeting] [#urgent] [+ Add Tag]           │    ║
║      │                                                     │    ║
║      │  ┌─ Quick Templates ────────────────────────────┐   │    ║
║      │  │  📞 Call Someone    📝 Write Document         │   │    ║
║      │  │  📧 Send Email      🛒 Shopping Item          │   │    ║
║      │  │  💡 Brainstorm      📅 Schedule Meeting       │   │    ║
║      │  └──────────────────────────────────────────────┘   │    ║
║      │                                                     │    ║
║      │              [Cancel]  [Create Task] 💾            │    ║
║      └─────────────────────────────────────────────────────┘    ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

**Key Elements:**
- Modal overlay with dimmed background
- Required and optional fields clearly marked
- Dropdown selectors for category and priority
- Date/time pickers
- Tag system with autocomplete
- Quick templates for common task types
- Save and cancel actions

---

## 4. Task Detail View

```
╔══════════════════════════════════════════════════════════════════╗
║ ← Back to Dashboard                                   [Edit] [⋮] ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  ☑️ Prepare quarterly team presentation                          ║
║                                                                  ║
║  Status: ✅ Complete    Category: 💼 Work    Priority: 🔴 High    ║
║  Due: Friday, Mar 15, 2:00 PM    Completed: Today, 10:30 AM     ║
║                                                                  ║
║  Tags: #presentation #quarterly #team-meeting #revenue           ║
║                                                                  ║
║  ┌─ Description ────────────────────────────────────────────┐    ║
║  │  Create comprehensive presentation covering:            │    ║
║  │  • Q1 performance metrics and KPIs                     │    ║
║  │  • Team accomplishments and milestones                 │    ║
║  │  • Challenges faced and solutions implemented          │    ║
║  │  • Q2 goals and strategic initiatives                  │    ║
║  │  • Resource requirements and budget requests           │    ║
║  └─────────────────────────────────────────────────────────┘    ║
║                                                                  ║
║  ┌─ Subtasks (3 of 4 complete) ─────────────────────────────┐    ║
║  │  ☑️ Gather performance data from analytics               │    ║
║  │  ☑️ Interview team leads for accomplishments             │    ║
║  │  ☑️ Create slide deck template                           │    ║
║  │  ⭕ Practice presentation timing                          │    ║
║  └─────────────────────────────────────────────────────────┘    ║
║                                                                  ║
║  ┌─ Activity Log ───────────────────────────────────────────┐    ║
║  │  Today 10:30 AM    ✅ Task marked as complete           │    ║
║  │  Today 9:45 AM     📝 Added subtask: Practice timing    │    ║
║  │  Yesterday 4:20 PM  ✏️ Updated description              │    ║
║  │  2 days ago        📅 Due date moved to Friday 2 PM     │    ║
║  │  Mar 10           🏷️ Added tags: #revenue               │    ║
║  │  Mar 8            📋 Task created                        │    ║
║  └─────────────────────────────────────────────────────────┘    ║
║                                                                  ║
║  [🔄 Mark as Incomplete] [🗂️ Duplicate] [🗑️ Delete]           ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

**Key Elements:**
- Back navigation and action menu
- Complete task information display
- Visual status indicators
- Editable tags display
- Subtask management within main task
- Activity log showing task history
- Action buttons for task management

---

## 5. Categories & Organization

```
╔══════════════════════════════════════════════════════════════════╗
║ 🎯 TaskMaster > 📂 Categories & Organization                     ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  [+ Add Category]                                  View: [Grid▼] ║
║                                                                  ║
║  ┌─ 💼 Work (12 tasks) ──────┐ ┌─ 🏠 Personal (8 tasks) ──────┐  ║
║  │  🔴 High Priority: 3      │ │  🔴 High Priority: 1         │  ║
║  │  🟡 Medium Priority: 6    │ │  🟡 Medium Priority: 4       │  ║
║  │  🟢 Low Priority: 3       │ │  🟢 Low Priority: 3          │  ║
║  │                           │ │                              │  ║
║  │  📅 Due Today: 2          │ │  📅 Due Today: 1             │  ║
║  │  ⏰ Overdue: 1            │ │  ⏰ Overdue: 0               │  ║
║  │                           │ │                              │  ║
║  │  [View Tasks] [Edit]      │ │  [View Tasks] [Edit]         │  ║
║  └───────────────────────────┘ └──────────────────────────────┘  ║
║                                                                  ║
║  ┌─ 🛒 Shopping (5 tasks) ───┐ ┌─ 🏥 Health (3 tasks) ───────┐  ║
║  │  🔴 High Priority: 1      │ │  🔴 High Priority: 0         │  ║
║  │  🟡 Medium Priority: 2    │ │  🟡 Medium Priority: 2       │  ║
║  │  🟢 Low Priority: 2       │ │  🟢 Low Priority: 1          │  ║
║  │                           │ │                              │  ║
║  │  📅 Due Today: 0          │ │  📅 Due Today: 0             │  ║
║  │  ⏰ Overdue: 0            │ │  ⏰ Overdue: 1               │  ║
║  │                           │ │                              │  ║
║  │  [View Tasks] [Edit]      │ │  [View Tasks] [Edit]         │  ║
║  └───────────────────────────┘ └──────────────────────────────┘  ║
║                                                                  ║
║  ┌─ Popular Tags ────────────────────────────────────────────┐   ║
║  │  #urgent (6)   #meeting (4)   #call (3)   #email (8)    │   ║
║  │  #review (5)   #research (2)  #planning (7)  #admin (3)  │   ║
║  │  #creative (2) #learning (4)  #health (3)   #social (2)  │   ║
║  └───────────────────────────────────────────────────────────┘   ║
║                                                                  ║
║  ┌─ Create New Category ────────────────────────────────────────┐ ║
║  │  Category Name: [_______________]                          │ ║
║  │  Color: 🔵 🟢 🟡 🔴 🟣 🟤 ⚫ ⚪    Icon: [💼▼]           │ ║
║  │  Description: [Optional description...]                   │ ║
║  │                               [Cancel] [Create Category]  │ ║
║  └───────────────────────────────────────────────────────────┘ ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

**Key Elements:**
- Category grid view with statistics
- Priority distribution within categories
- Due date and overdue indicators per category
- Tag cloud with frequency counts
- Inline category creation form
- Color and icon selection for categories

---

## 6. Search & Filter Interface

```
╔══════════════════════════════════════════════════════════════════╗
║ 🔍 Search & Filter Tasks                           [Clear All]   ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Search: [team meeting agenda____________] 🔍                    ║
║                                                                  ║
║  ┌─ Filters ─────────────────────────────────────────────────┐   ║
║  │  Status:     [☑️ Active] [☑️ Complete] [⚠️ Overdue]      │   ║
║  │  Category:   [💼 Work] [🏠 Personal] [🛒 Shopping] [+]   │   ║
║  │  Priority:   [🔴 High] [🟡 Medium] [🟢 Low]             │   ║
║  │  Due Date:   [📅 Today] [📅 This Week] [📅 Custom...]   │   ║
║  │  Tags:       [#urgent] [#meeting] [#call] [+ More...]    │   ║
║  └───────────────────────────────────────────────────────────┘   ║
║                                                                  ║
║  ┌─ Active Filters ──────────────────────────────────────────┐   ║
║  │  "team meeting" × | Work × | High Priority × | Today ×   │   ║
║  └───────────────────────────────────────────────────────────┘   ║
║                                                                  ║
║  Results (3 found):                          Sort: [Date ▼]      ║
║                                                                  ║
║  ┌─────────────────────────────────────────────────────────────┐ ║
║  │  ⭕ Plan team meeting agenda     💼Work      🔴High         │ ║
║  │     📅 Due: Today 3:00 PM                                 │ ║
║  │     📝 Prepare agenda items, book conference room         │ ║
║  │                                                           │ ║
║  │  ⭕ Review team meeting notes    💼Work      🟡Medium      │ ║
║  │     📅 Due: Today 5:00 PM                                │ ║
║  │     📝 Follow up on action items from last meeting       │ ║
║  │                                                           │ ║
║  │  ☑️ Send team meeting invite    💼Work      🔴High        │ ║
║  │     📅 Completed: Today 9:00 AM                          │ ║
║  │     📝 Calendar invite sent to all team members          │ ║
║  └─────────────────────────────────────────────────────────────┘ ║
║                                                                  ║
║  ┌─ Saved Searches ──────────────────────────────────────────┐   ║
║  │  🔖 High Priority Work Tasks    🔖 Overdue Personal       │   ║
║  │  🔖 This Week's Meetings        🔖 Shopping List          │   ║
║  │  [+ Save Current Search as...]                            │   ║
║  └───────────────────────────────────────────────────────────┘   ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

**Key Elements:**
- Real-time search input
- Multiple filter categories with visual indicators
- Active filters display with easy removal
- Search results with highlighting
- Sort options for results
- Saved searches for common queries

---

## 7. Progress & Statistics

```
╔══════════════════════════════════════════════════════════════════╗
║ 📊 Progress Dashboard                                🔄 Refresh  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  ┌─ Today's Overview ───────────────────────────────────────────┐ ║
║  │                                                             │ ║
║  │  Tasks Completed: 6/8        Progress: ████████████░░░░ 75%  │ ║
║  │  Time Saved: ~2.5 hours      Productivity Score: 🌟🌟🌟    │ ║
║  │                                                             │ ║
║  │  🎯 Daily Goal: Complete 6 tasks ✅ ACHIEVED!              │ ║
║  └─────────────────────────────────────────────────────────────┘ ║
║                                                                  ║
║  ┌─ Weekly Trends ──────────────────────────────────────────────┐ ║
║  │                                                             │ ║
║  │  Completion Rate:           Task Distribution:              │ ║
║  │                                                             │ ║
║  │       ██                         💼 Work: 45%               │ ║
║  │       ██  ██  ██                 🏠 Personal: 30%           │ ║
║  │       ██  ██  ██  ██             🛒 Shopping: 15%           │ ║
║  │   ██  ██  ██  ██  ██             🏥 Health: 10%             │ ║
║  │   ██  ██  ██  ██  ██  ██  ██                                │ ║
║  │   Mon Tue Wed Thu Fri Sat Sun                              │ ║
║  └─────────────────────────────────────────────────────────────┘ ║
║                                                                  ║
║  ┌─ Monthly Statistics ─────────────────────────────────────────┐ ║
║  │                                                             │ ║
║  │  📈 Tasks Created: 87        📉 Tasks Completed: 79        │ ║
║  │  ⏰ Average Completion: 1.3 days    🏆 Streak: 5 days      │ ║
║  │  🎯 Goal Achievement: 85%    ⚡ Most Productive: Tuesday   │ ║
║  │                                                             │ ║
║  │  Top Categories:              Recent Achievements:          │ ║
║  │  1. 💼 Work (32 tasks)       🏅 Completed 50 tasks         │ ║
║  │  2. 🏠 Personal (28 tasks)   🎯 Week streak achieved        │ ║
║  │  3. 🛒 Shopping (19 tasks)   ⚡ 10 tasks in one day       │ ║
║  └─────────────────────────────────────────────────────────────┘ ║
║                                                                  ║
║  ┌─ Insights & Recommendations ────────────────────────────────┐ ║
║  │  💡 You're most productive between 9-11 AM                 │ ║
║  │  📅 Tuesday is your highest completion day                 │ ║
║  │  ⚠️ High-priority tasks take 40% longer than medium       │ ║
║  │  🎯 Consider breaking down large tasks for better flow     │ ║
║  └─────────────────────────────────────────────────────────────┘ ║
║                                                                  ║
║  Time Range: [Last Week▼] [Last Month▼] [Custom Range...]      ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

**Key Elements:**
- Daily overview with progress bars and achievements
- Visual charts for trends and distribution
- Key metrics and statistics
- Achievement badges and streaks
- Actionable insights and recommendations
- Time range selectors for analysis

---

## 8. Settings & Preferences

```
╔══════════════════════════════════════════════════════════════════╗
║ ⚙️ Settings & Preferences                         [Save Changes] ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  ┌─ Appearance ──────────────────────────────────────────────────┐ ║
║  │                                                             │ ║
║  │  Theme: [🌞 Light] [🌙 Dark] [🔄 System Default]           │ ║
║  │  Task Density: [Compact] [● Standard] [Spacious]           │ ║
║  │  Color Scheme: [Default] [High Contrast] [Colorblind Safe] │ ║
║  │                                                             │ ║
║  └─────────────────────────────────────────────────────────────┘ ║
║                                                                  ║
║  ┌─ Task Behavior ───────────────────────────────────────────────┐ ║
║  │                                                             │ ║
║  │  Default Priority: [Medium ▼]                              │ ║
║  │  Auto-Archive Completed Tasks: [● After 30 days] [Never]   │ ║
║  │  Task Sorting: [Due Date] [● Priority] [Creation Date]     │ ║
║  │  Show Completed Tasks: [✓] Always visible                  │ ║
║  │                                                             │ ║
║  └─────────────────────────────────────────────────────────────┘ ║
║                                                                  ║
║  ┌─ Notifications ───────────────────────────────────────────────┐ ║
║  │                                                             │ ║
║  │  Due Date Reminders:    [✓] 1 hour before                  │ ║
║  │                         [✓] 1 day before                   │ ║
║  │                         [✓] 3 days before (high priority)  │ ║
║  │                                                             │ ║
║  │  Daily Summary:         [✓] Email at 8:00 AM               │ ║
║  │  Weekly Report:         [ ] Email on Sunday                │ ║
║  │  Achievement Alerts:    [✓] Show celebration messages      │ ║
║  │                                                             │ ║
║  └─────────────────────────────────────────────────────────────┘ ║
║                                                                  ║
║  ┌─ Data & Privacy ──────────────────────────────────────────────┐ ║
║  │                                                             │ ║
║  │  Data Storage: Local storage only (no cloud sync)          │ ║
║  │  Analytics: [ ] Help improve TaskMaster (anonymous usage)  │ ║
║  │                                                             │ ║
║  │  [📤 Export Data] [📥 Import Data] [🗑️ Clear All Data]    │ ║
║  │                                                             │ ║
║  │  ⚠️ Warning: Clear All Data will permanently delete        │ ║
║  │     all tasks, categories, and settings.                   │ ║
║  │                                                             │ ║
║  └─────────────────────────────────────────────────────────────┘ ║
║                                                                  ║
║  ┌─ Keyboard Shortcuts ─────────────────────────────────────────┐ ║
║  │                                                             │ ║
║  │  Add Task: Ctrl+N         Search: Ctrl+F                   │ ║
║  │  Quick Complete: Space    Edit Task: Enter                 │ ║
║  │  Delete Task: Del         Toggle Theme: Ctrl+Shift+T       │ ║
║  │                                                             │ ║
║  │  [Customize Shortcuts...]                                  │ ║
║  │                                                             │ ║
║  └─────────────────────────────────────────────────────────────┘ ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

**Key Elements:**
- Grouped settings sections
- Visual preference controls (theme, density)
- Task behavior customization
- Notification settings with granular control
- Data management and privacy options
- Keyboard shortcut reference and customization

---

## 9. Mobile Responsive Views

### Mobile Dashboard (Portrait)

```
╔═══════════════════════════════════╗
║ 🎯 TaskMaster        ☰  🔍  👤   ║
╠═══════════════════════════════════╣
║                                   ║
║  [+ Add Task]                     ║
║                                   ║
║  📅 Today (4 of 6) ██████████░░   ║
║                                   ║
║  ┌───────────────────────────────┐ ║
║  │ ☑️ Buy groceries       🔴    │ ║
║  │    🏠 Personal                │ ║
║  └───────────────────────────────┘ ║
║                                   ║
║  ┌───────────────────────────────┐ ║
║  │ ⭕ Team meeting        🔴     │ ║
║  │    💼 Work  📅 3:00 PM       │ ║
║  └───────────────────────────────┘ ║
║                                   ║
║  ┌───────────────────────────────┐ ║
║  │ ⭕ Call dentist        🟢     │ ║
║  │    🏥 Health  📅 Tomorrow     │ ║
║  └───────────────────────────────┘ ║
║                                   ║
║  ⚠️ Overdue (2)                   ║
║                                   ║
║  ┌───────────────────────────────┐ ║
║  │ ⭕ File taxes          🔴     │ ║
║  │    💰 Finance  📅 2 days ago  │ ║
║  └───────────────────────────────┘ ║
║                                   ║
║  [View All Tasks]                 ║
║                                   ║
╚═══════════════════════════════════╝
```

### Mobile Task Creation (Portrait)

```
╔═══════════════════════════════════╗
║ ✏️ New Task              ✕       ║
╠═══════════════════════════════════╣
║                                   ║
║  Title: *                         ║
║  [_________________________]     ║
║                                   ║
║  Category: [Work ▼]               ║
║  Priority: [Medium ▼]             ║
║                                   ║
║  Due Date: [📅 Today]             ║
║  Due Time: [⏰ 3:00 PM]           ║
║                                   ║
║  Description:                     ║
║  [_________________________]     ║
║  [_________________________]     ║
║  [_________________________]     ║
║                                   ║
║  Tags: [#urgent] [+ Add]          ║
║                                   ║
║  ┌─ Quick Templates ────────────┐ ║
║  │  📞 Call    📝 Write         │ ║
║  │  📧 Email   🛒 Shopping      │ ║
║  └─────────────────────────────┘ ║
║                                   ║
║                                   ║
║  [Cancel]        [Create] 💾      ║
║                                   ║
╚═══════════════════════════════════╝
```

**Mobile-Specific Features:**
- Touch-optimized interface elements
- Hamburger menu for navigation
- Swipe gestures for task completion
- Full-screen modals for better focus
- Larger touch targets for accessibility
- Optimized keyboard on mobile devices

---

## 🎨 Design Specifications

### Layout Grid
- Desktop: 1200px max-width, 12-column grid
- Tablet: 768px breakpoint, 8-column grid
- Mobile: 375px min-width, single column

### Spacing System
- Base unit: 4px
- Small: 8px (2 units)
- Medium: 16px (4 units)
- Large: 24px (6 units)
- Extra Large: 32px (8 units)

### Typography Scale
- Heading 1: 32px (Page titles)
- Heading 2: 24px (Section headers)
- Heading 3: 20px (Card titles)
- Body: 16px (Main text)
- Small: 14px (Meta information)
- Caption: 12px (Labels, tags)

### Color Indicators
- 🔴 High Priority: #DC2626 (Red)
- 🟡 Medium Priority: #F59E0B (Amber)
- 🟢 Low Priority: #059669 (Green)
- ⚠️ Overdue: #DC2626 (Red)
- ✅ Complete: #059669 (Green)

---

## 📱 Interaction Patterns

### Task Management
- **Click/Tap checkbox**: Toggle task completion
- **Click/Tap task title**: Open task detail view
- **Swipe left (mobile)**: Reveal quick actions (edit, delete)
- **Swipe right (mobile)**: Mark as complete
- **Long press (mobile)**: Multi-select mode

### Navigation
- **Header menu**: Access main sections
- **Breadcrumbs**: Show current location
- **Back button**: Return to previous view
- **Tab navigation**: Switch between views

### Data Entry
- **Quick add**: Simple title input with smart defaults
- **Full form**: Comprehensive task creation modal
- **Inline editing**: Click to edit in place
- **Auto-complete**: Smart suggestions for categories and tags

---

*These wireframes provide the foundation for TaskMaster's user interface design, ensuring clear information hierarchy and intuitive interaction patterns across all devices.*