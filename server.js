const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  const readmePath = path.join(__dirname, 'README.md');
  const markdownContent = fs.readFileSync(readmePath, 'utf-8');
  const htmlContent = marked(markdownContent);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Casper Tech Kenya</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #0d0d0d;
      color: #e0e0e0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.7;
      padding: 40px 20px;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
    }
    h1, h2, h3, h4 {
      color: #6e5cff;
      margin: 1.5em 0 0.5em;
    }
    h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.2em; }
    p {
      margin: 0.75em 0;
    }
    a {
      color: #0ff4c6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 10px auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1em 0;
    }
    th, td {
      border: 1px solid #333;
      padding: 10px 14px;
      text-align: left;
    }
    th {
      background: #1a1a2e;
      color: #6e5cff;
    }
    tr:nth-child(even) {
      background: #111;
    }
    blockquote {
      border-left: 4px solid #6e5cff;
      margin: 1em 0;
      padding: 0.5em 1em;
      color: #aaa;
      background: #111;
      border-radius: 0 6px 6px 0;
    }
    code {
      background: #1a1a2e;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Fira Code', monospace;
    }
    pre {
      background: #1a1a2e;
      padding: 16px;
      border-radius: 8px;
      overflow-x: auto;
    }
    hr {
      border: none;
      border-top: 1px solid #333;
      margin: 2em 0;
    }
    p[align="center"], div[align="center"] {
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    ${htmlContent}
  </div>
</body>
</html>`;

  res.send(html);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
