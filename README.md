# Book List Application

## Overview

This web application allows users to search for books by Title, Author, or Genre, and view them in a list. The books are displayed alphabetically by Author's name by default. The application includes a search bar for filtering results, sorting options, and displays a ‘No books found’ message if no books match the query. It is built using React, TypeScript, and Material-UI for the frontend, and a custom backend with Express.js to serve the data.

### Backend
The backend service is built using **Express.js** and is responsible for loading and merging data from `books.json` and `books.csv`. It exposes an API that the frontend communicates with to fetch and filter book data.

The backend features:
- **Books API**: Serves book data from a merged dataset of `books.json` and `books.csv`, which is loaded based on a unique ID field.
- **Data Loading and Merging**: The backend loads data from both files and merges them into a unified format.
- **Filtering**: Books can be filtered by author or genre to reduce the amount of data sent to the frontend.
- **Server-side Pagination**: For large datasets, pagination is implemented to fetch data in chunks to ensure performance.

### Frontend
The frontend is built using **React**, **TypeScript**, and **Material-UI**, and utilizes **React Query** to manage data fetching, caching, and state synchronization. The frontend communicates with the backend API to fetch the book data and performs client-side sorting, filtering, and searching.

The main features include:
- **Search Bar**: Users can enter a search query and click a search button to filter results by Title, Author, or Genre. The search function is implemented on the frontend, allowing quick updates to the UI based on the query.
- **Sorting**: Users can sort the book list alphabetically by Title, Author, or Genre. The default sort order is by Author’s name.
- **Dynamic Sorting**: The sorting of the book list updates dynamically based on the selected sort option.
- **Responsive Design**: The application is designed to be responsive, working smoothly on both desktop and mobile devices.
- **No Books Found**: If the search query does not match any books, a ‘No books found’ message is displayed.
- **Highlighted Matches**: Matching parts of the Author Name, Title, or Genre are displayed in bold and red to enhance visibility.


## Tech Stack

- **Frontend**: React, TypeScript, Material-UI, React Query
- **Backend**: Express.js, custom API endpoints for fetching and filtering books data
- **State Management**: React Query (for frontend data fetching and state management)
- **Data**: Merged data from `books.json` and `books.csv` files
- **Styling**: BEM methodology for styling and layout

## Key Functionalities

### Book Search
- Users can search for books by Title, Author, or Genre using a search bar. The results are filtered dynamically on the frontend, and matching terms are highlighted.

### Sorting by Author, Title, or Genre
- Books are displayed alphabetically by Author by default. Users can sort the list by Title or Genre as well, using a dropdown menu. The sorting updates the list dynamically.

### Infinite Scrolling
- The application implements infinite scrolling to load more books as the user reaches the bottom of the page. This helps to keep the UI responsive without overwhelming the user with too many books at once.

### Filters
- Users can filter books by Author or Genre. The filtering is done on the frontend after fetching the data.

## Getting Started

### Prerequisites

- **Node.js** (for the backend)
- **Yarn** (for dependency management, as this project uses Yarn Workspaces)
  
### Installation and Running the Application

1. Install Yarn (if you don't have it already):
   - For macOS:
     ```bash
     brew install yarn
     ```
   - For Windows:
     Download and install Yarn from [here](https://yarnpkg.com/getting-started/install) or use `npm`:
     ```bash
     npm install --global yarn
     ```

2. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/book-list-app.git
    ```
3. Navigate to the project directory:
    ```bash
    cd booksapp-enterpriseleague/
    ```
4. Install the dependencies:
    ```bash
    yarn install
    ```
4. Start the application:
    ```bash
    yarn start
    ```
This command will:
 - Start the frontend by running react-scripts start
- Start the backend by running nodemon to automatically restart the server on changes.

6. Access the App:
  ```bash
  http://localhost:3000/
  ```

  If you want to access the api endpoint:
    ```bash
    http://localhost:5000/
    ```

### Folder Structure

  ```bash
  /booksapp-enterpriseleague
├── /api                   # Backend code
│   ├── /src               # Source files for backend
│   ├── package.json       # Backend dependencies and scripts
│   └── tsconfig.json      # TypeScript configuration for backend
├── /node_modules          # Installed dependencies
├── /public                # Static assets for frontend
├── /src                   # Source files for frontend
│   ├── /components        # React components
│   ├── /hooks             # Custom React hooks
│   └── package.json       # Frontend dependencies and scripts
├── package.json           # Root package file managing workspaces
├── yarn.lock              # Yarn lockfile for dependency management
└── README.md              # This file

  ```

### Usage

* Creating a Search Query: Enter a search term in the search bar to filter books by Title, Author, or Genre.
* Sorting the Book List: Use the dropdown menu to sort books alphabetically by Title, Author, or Genre.
* View Book Details: Click on a book to view its details.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
