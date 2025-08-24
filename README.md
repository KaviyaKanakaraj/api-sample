# API Sample Project

This project demonstrates a simple API built with Node.js and Express.js for the backend, and a static frontend served using `http-server`.

## Folder Structure

```
api-sample/
├── backend/
│   ├── server.js          # Main backend server file
│   ├── data/
│   │   └── user-data.js   # Sample data for the API
├── frontend/
│   ├── index.html         # Main frontend HTML file
│   ├── error.html         # Error page for 404 responses
├── .gitignore             # Git ignore file
├── README.md              # Project documentation
└── package.json           # Node.js dependencies
```

## API Endpoints

### 1. **Get All Data**
- **URL**: `/getData`
- **Method**: `GET`
- **Description**: Fetches all the data from the backend.
- **Response**:
  - `200 OK`: Returns an array of all data objects.

### 2. **Get Data by ID**
- **URL**: `/getDataById/{id}`
- **Method**: `GET`
- **Description**: Fetches a specific data object by its ID.
- **Parameters**:
  - `id` (path parameter): The ID of the data object to retrieve.
- **Response**:
  - `200 OK`: Returns the data object if found.
  - `404 Not Found`: Returns an error if the ID does not exist.

### 3. **Swagger Documentation**
- **URL**: `/api-docs`
- **Method**: `GET`
- **Description**: Provides interactive API documentation using Swagger UI.

## Project Setup

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```
4. The backend will run at `http://localhost:3000`.

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install `http-server` globally if not already installed:
   ```bash
   npm install -g http-server
   ```
3. Start the frontend server:
   ```bash
   http-server
   ```
4. The frontend will be available at `http://localhost:8080` (default port).

## Notes
- Ensure that the backend server is running before accessing the API endpoints.
- Swagger documentation is available at `http://localhost:3000/api-docs`.
- The `node_modules` directory and `package-lock.json` are ignored in version control as specified in `.gitignore`.
