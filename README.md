# Word Analytics

A simple, client-side text analytics tool built with HTML, CSS, and JavaScript. It analyzes user input in real-time and displays word count, character count, and remaining character limits for Twitter and Reddit.

---

## ✨ Features

- 📝 **Word Counter** — Counts words in real-time
- 🔤 **Character Counter** — Counts all characters (including spaces)
- 🐦 **Twitter Limit** — Shows remaining characters (limit: 200)
- 👽 **Reddit Limit** — Shows remaining characters (limit: 350)
- 🔴 **Visual Warning** — Turns red when limit is exceeded
- 📱 **Responsive Design** — Works on desktop and mobile
- ⚡ **Real-Time Analysis** — Updates as you type

---

## 🛠️ Tech Stack

| Technology | Usage |
| --- | --- |
| HTML5 | Page structure and layout |
| CSS3 | Styling, Grid, Flexbox, Media Queries |
| JavaScript | Real-time text analysis and DOM manipulation |

---

## 📂 Project Structure

```text
word-analytics/
├── index.html
├── style.css
└── script.js
```

---

## 🚀 How to Use

1. Open `index.html` in a modern browser.
2. Type or paste text into the textarea.
3. The counters update automatically as you type.

No installation or build step required.

---

## 🔍 How It Works

The JavaScript code listens to the `input` event on the textarea and runs four operations:

1. **Character Count** — Uses `value.length` to count all characters.
2. **Word Count** — Splits text by whitespace (`/\s+/`) and counts the resulting array.
3. **Twitter Limit** — Subtracts character count from 200.
4. **Reddit Limit** — Subtracts character count from 350.

If either limit becomes negative, the number turns red.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
| --- | --- |
| **> 520px** | Two-column layout (textarea + outputs side-by-side) |
| **≤ 520px** | Vertical layout (textarea on top, outputs below) |
| **≤ 400px** | Smaller font size for textarea |
| **≤ 260px** | Compact layout with 2×2 grid |

---

## 📬 Contact

- **Website:** https://mozafaridev.github.io
- **GitHub:** https://github.com/MozafariDev
- **Email:** tahamozafari8660@gmail.com

---

## 📌 Project Status

This is a learning project. It is functional and stable, but may receive minor updates or improvements in the future.

---

<p align="center">
  ⭐ Thanks for checking out this project.
</p>
