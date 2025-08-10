# Guidelines for Writing and Maintaining Sprint Change Logs

This document provides detailed instructions on how to write, update, and manage sprint change logs to ensure clear, consistent, and useful tracking of ticket progress and collaboration.

---

## 1. Sprint Document Overview

Each sprint document should contain:

- **Sprint metadata:** Sprint number, start and end dates, and sprint goal.
- **Change Log:** Detailed chronological entries of status changes, assignee updates, and comments grouped by ticket.
- **Sprint Notes:** General observations, risks, blockers, or retrospectives relevant to the sprint.

---

## 2. Change Log Format

- Group logs by ticket ID and title.
- Use a markdown table with the following columns:

  | Time           | Type          | Status            | Assignee          | Comment                                               | Comment By       |

- **Time:** Timestamp in `YYYY-MM-DD HH:MM` format, representing when the entry was made.
- **Type:** One of:
  - `Status Update` — reflects a change in the ticket’s status and/or assignee.
  - `Comment` — any additional note, question, or information from any team member.
- **Status:** The ticket status at the time of the update (e.g., Draft, Backlog, Planned in Sprint, In-progress, Code review, Ready for testing, Integration testing, E2E Testing, PO Review, UAT, Done).
- **Assignee:** The person or role responsible for the ticket at that status.
- **Comment:** Free-text field for explanations, observations, or discussion points.
- **Comment By:** The role or person who authored the comment. Leave blank for status updates without comments.

---

## 3. Writing Status Updates

- When the ticket status changes, create a `Status Update` entry.
- Include the new status and current assignee in the respective columns.
- Do **not** add comments in the comment field for status updates unless absolutely necessary.
- If the assignee changes simultaneously with the status, update both in the same row as a combined assignment.
- Keep entries chronological and immutable; do not delete or alter past entries.

---

## 4. Writing Comments

- Use `Comment` type entries for any notes, clarifications, findings, or feedback related to the ticket.
- Include who is making the comment in the `Comment By` column.
- Comments should be concise but clear, providing context or actionable information.
- Comments do **not** change the ticket’s status or assignee.
- Multiple comments can appear between status updates as needed.

---

## 5. Assignees and Status Roles

Use consistent role titles to describe assignees, such as:

| Status              | Assignee Role         |
|---------------------|-----------------------|
| Draft               | Unassigned            |
| Backlog             | Unassigned            |
| Planned in Sprint    | Frontend Engineer / Backend Engineer |
| In-progress         | Frontend Engineer / Backend Engineer |
| Code review         | Code Reviewer         |
| Ready for testing   | QA Engineer           |
| Integration testing | QA Engineer           |
| E2E Testing         | QA Engineer           |
| PO Review           | Product Owner         |
| UAT                 | Product Owner         |
| Done                | Unassigned            |

---

## 6. Timestamp and Timezone

- Always use the local timezone agreed upon by the team or UTC to avoid confusion.
- Record the time of the actual update or action, not when it is documented.

---

## 7. Sprint Notes Section

- Use this section to summarize:
  - Major blockers or risks encountered during the sprint.
  - Feedback or retrospective points.
  - Any important decisions or changes in scope.
- Keep this section updated regularly throughout the sprint.

---

## 8. Best Practices

- Keep entries factual and professional.
- Avoid lengthy paragraphs; use bullet points if needed in comments.
- Reference related documents, designs, or tickets with links when applicable.
- Review and update sprint logs promptly to maintain accuracy.
- Encourage all team members to contribute comments to foster transparency.

---

By following these guidelines, sprint change logs will provide a clear, comprehensive history of ticket progress and team collaboration, aiding communication and project tracking.
