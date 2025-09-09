# React Todo App

This is a React Todo application demonstrating tasks creation, deletion, marking complete, using reusable components.

## Features

- Add, toggle, and delete todos.
- Reusable components: TodoItem, TodoList, AddTodo.

## Technologies Used

- React (Functional and Class Components)
- JavaScript (ES5/ES6 mix)
- CSS for basic styling

## Installation

Clone the repository:

git clone <repository-url>  
cd todo-app

Install dependencies:

npm install

Start the development server:

npm start

The app will run at http://localhost:3000.

## File Structure

src/  
├── TodoApp.js          # Main App component  
├── TodoItem.js         # Reusable TodoItem component  
├── TodoList.js         # Reusable TodoList component  
├── AddTodo.js          # Reusable AddTodo component  
├── TodoApp.css         # Styling for the app  
└── index.js            # Entry point  

## Usage

Type a task in the input box and click Add Todo.

Click on a task to toggle its completion (line-through).

Click Delete to remove a task.