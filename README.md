React Todo App (AST-grep Demo)

This is a React Todo application intentionally written with outdated or “bad” coding practices to demonstrate the power of AST-grep rules for automated code refactoring.

Features

Add, toggle, and delete todos.

Reusable components: TodoItem, TodoList, AddTodo.

Written with “bad practices” to show AST-grep usefulness:

var instead of let/const

== instead of ===

Nested ternary operators

Short-circuiting with &&

.bind(this) in class components

Function expressions instead of arrow functions

Technologies Used

React (Functional and Class Components)

JavaScript (ES5/ES6 mix)

CSS for basic styling

AST-grep for automated code refactoring

Installation

Clone the repository:

git clone <repository-url>
cd react-todo-astgrep


Install dependencies:

npm install


Start the development server:

npm start


The app will run at http://localhost:3000.

File Structure
src/
├── TodoApp.js          # Main App component
├── TodoItem.js         # Reusable TodoItem component
├── TodoList.js         # Reusable TodoList component
├── AddTodo.js          # Reusable AddTodo component
├── TodoApp.css         # Styling for the app
└── index.js            # Entry point

Usage

Type a task in the input box and click Add Todo.

Click on a task to toggle its completion (line-through).

Click Delete to remove a task.