# Blog Web App

A minimal blog web application built with Express and EJS. This repository contains a simple starter app for creating, editing, and viewing posts — ideal for learning Express, templating with EJS, and small full-stack workflows.

**Developer:** Yashswani Soni

---

## Features

- Server-rendered pages using `EJS`
- Simple CRUD-style editing flow (index + edit views)
- Lightweight: no database required for the starter (file/ memory-backed as provided)

## Prerequisites

- Node.js (v18+ recommended)
- npm (or yarn)

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Run the app

Development (auto-restart):

```bash
npm run dev
```

Production / simple run:

```bash
npm start
```

The app listens on the port configured in `index.js` (commonly `3000`). Open http://localhost:3000 in your browser.

## Project Structure

- `index.js` — app entry point and server setup
- `views/` — EJS templates (`index.ejs`, `edit.ejs`)
- `public/styles/` — static CSS (`main.css`)
- `package.json` — scripts and dependencies

## Development Notes

- The project uses `express` and `ejs`. If you add persistent storage, consider `sqlite`, `lowdb`, or a hosted DB.
- Linting and tests are not configured; consider adding `eslint` and a test runner for larger projects.

## Contributing

Contributions are welcome. For small projects like this:

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description

## License

This project is provided as-is. Add a license file if you plan to open-source it publicly.

---

If you'd like, I can also: add a `LICENSE`, wire up basic tests, or create a sample commit. What would you like next?
