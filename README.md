# My Express App

This is a simple Express application with Tailwind CSS and EJS for rendering views.

## Introduction

This project demonstrates a basic Express application integrated with EJS for templating and Tailwind CSS for styling. It includes functionality for creating and displaying text files.

## Features

- Render dynamic HTML with EJS
- Style using Tailwind CSS
- Create and read text files
- Serve static files

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/)

### Initialize the Project

1. Initialize a new Node.js project with default settings:
    ```bash
    npm init -y
    ```

### Install Dependencies

1. Install Express:
    ```bash
    npm install express
    ```

2. Install Nodemon for easier development (optional, but recommended):
    ```bash
    npm install nodemon 
    ```

3. Install other necessary dependencies:
    ```bash
    npm install ejs
    ```

### Set Up Environment Variables

Create a `.env` file in the root directory of the project and add any necessary environment variables:

```plaintext
PORT=3000
```


## Update the scripts section in your package.json to use Nodemon for development:

"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}

## Start the server using Nodemon for development:

npx nodemon index.js
