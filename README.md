# To_Do_List_App

### 2. To-Do List App (`README.md`)

```markdown
# 📝 Dark Theme To-Do List App

A minimalist, aesthetic dark-themed task management application that allows users to add, mark complete, and delete tasks in real-time.

Built as a probation project for my web development society submission.

---

## 🌟 Features

- **Dark Mode UI:** Designed with a GitHub-inspired dark color palette (`#0d1117`) for high contrast and comfortable viewing.
- **Dynamic Task Creation:** Instantly creates new task items using JavaScript DOM manipulation methods (`document.createElement`).
- **Interactive Actions:**
  - **Mark Done:** Toggles a visual strikethrough and muted text color for completed items.
  - **Delete:** Removes task elements dynamically from the DOM tree.
- **Input Sanitization:** Uses `.trim()` to prevent adding empty or whitespace-only tasks.

---

## 🛠️ Tech Stack

- **HTML5:** Clean structural markup and input forms.
- **CSS3:** Custom color properties, Flexbox alignment, hover transitions, and clean typography.
- **JavaScript (ES6):** Form submit event handling, dynamic element creation (`classList`, `append`), and event listener scope management.

---

## 📁 File Structure

```text
├── index.html    # Base container and form structure
├── style2.css    # Dark theme stylesheet and UI components
└── script2.js    # Dynamic task generation and event handling logic
