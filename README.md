# React + Express CFG to JSON Parser Web App

A full-stack web application for uploading and parsing custom configuration files.  
Built with [React](https://react.dev/) (frontend) and [Express](https://expressjs.com/) (backend).

## Features

- Upload configuration files via a simple web interface
- Backend parses uploaded files and returns structured JSON
- Modular codebase with clear separation of client and server
- Modern tooling: Vite, ESLint, React 19, Express 5

## Folder Structure

```
client/
  ├── src/
  │   ├── components/
  │   │   └── FileUpload/
  │   ├── App.jsx
  │   └── main.jsx
  ├── public/
  └── package.json
server/
  ├── parser/
  │   └── parseCFG.js
  ├── routes/
  │   └── upload.js
  ├── uploads/
  ├── server.js
  └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

### Running the App

1. **Start the backend server:**
   ```sh
   cd server
   npm start
   ```
   The server runs on [http://localhost:5000](http://localhost:5000).

2. **Start the frontend (React) dev server:**
   ```sh
   cd client
   npm run dev
   ```
   The client runs on [http://localhost:5173](http://localhost:5173) by default.

### Usage

- Open the frontend in your browser.
- Use the file input to upload a configuration file.
- The backend parses the file and returns the result as JSON.

## Customization

- **Parsing logic:**  
  Modify [`parseCFG`](server/parser/parseCFG.js) for custom file formats.
- **Frontend UI:**  
  Update [`FileUpload`](client/src/components/FileUpload/FileUpload.jsx) for improved UX.
