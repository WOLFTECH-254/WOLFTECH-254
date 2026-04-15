# Casper Tech Kenya - GitHub Profile README

## Overview

This is a GitHub profile README project for **Casper Tech Kenya**. It showcases the developer's skills, GitHub statistics, top projects, and social media links through a visually styled page.

## Project Structure

- `README.md` — The main profile content written in Markdown with HTML for layout
- `server.js` — Express.js server that renders the README as a styled dark-themed webpage
- `package.json` — Node.js dependencies (express, marked)

## Tech Stack

- **Runtime**: Node.js 20
- **Server**: Express.js
- **Markdown Rendering**: marked
- **Port**: 5000

## Running the App

The app is served via a Node.js Express server:

```bash
node server.js
```

This reads `README.md`, converts it to HTML using `marked`, and serves it with a custom dark theme at port 5000.

## Deployment

- **Target**: Autoscale
- **Run command**: `node server.js`
