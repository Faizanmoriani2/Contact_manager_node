# Contact Manager - Node.js/Express.js CRUD Application

Welcome to the Contact Manager! This project is a simple yet powerful application designed to help you manage your contacts. Built with Node.js and Express.js, it serves as an excellent hands-on introduction to backend development. Additionally, the project incorporates JWT authentication for secure access to the API, providing a practical implementation of authentication in a real-world scenario.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [JWT Authentication](#jwt-authentication)
- [Technologies Used](#technologies-used)
- [Learning Objectives](#learning-objectives)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Contact Manager is a CRUD (Create, Read, Update, Delete) application, a foundational project for learning how to build and interact with APIs using Node.js and Express.js. It includes JWT (JSON Web Token) authentication to secure the API, making this project an essential learning exercise for anyone diving into backend development.

## Features

- **Create**: Add new contacts to the list.
- **Read**: View details of all contacts or a specific contact.
- **Update**: Modify existing contact details.
- **Delete**: Remove contacts from the list.
- **JWT Authentication**: Secure API endpoints with JWT, ensuring only authorized users can access them.

## Getting Started

These instructions will guide you through setting up and running the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/contact-manager.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd contact-manager
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Usage

1. **Set up environment variables**:
   Create a `.env` file in the project root and add the following configuration:
   ```env
   JWT_SECRET=your_jwt_secret_key
   ```

2. **Start the server**:
   ```bash
   npm start
   ```

3. **Access the application**:
   Open your web browser and navigate to `http://localhost:3000`.

## API Endpoints

Here are the API endpoints available in this project:

- **POST /auth/login**: Authenticate a user and retrieve a JWT token.
- **POST /auth/register**: Register a new user.

- **GET /contacts**: Retrieve a list of all contacts (requires authentication).
- **GET /contacts/:id**: Retrieve a specific contact by ID (requires authentication).
- **POST /contacts**: Create a new contact (requires authentication).
- **PUT /contacts/:id**: Update an existing contact by ID (requires authentication).
- **DELETE /contacts/:id**: Delete a contact by ID (requires authentication).

### Example Request

To add a new contact, you can send a `POST` request to `/contacts` with the contact's details in the request body and include the JWT in the `Authorization` header:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123-456-7890"
}
```

Authorization header example:
```
Authorization: Bearer your_jwt_token
```

## JWT Authentication

This project uses JWT to secure API endpoints. JWT is a compact, URL-safe means of representing claims to be transferred between two parties. The implementation includes:

1. **User Registration**: Users can register an account by sending their details to the `/auth/register` endpoint.
2. **User Login**: Registered users can authenticate by sending their credentials to the `/auth/login` endpoint to receive a JWT.
3. **Protected Routes**: The CRUD operations on contacts are protected by JWT authentication. Accessing these routes requires a valid JWT, which must be included in the `Authorization` header of the request.

### Example Flow

1. **Register**: Send a `POST` request to `/auth/register` with user details to create an account.
2. **Login**: Send a `POST` request to `/auth/login` with user credentials to receive a JWT.
3. **Access Protected Routes**: Use the JWT in the `Authorization` header to access protected contact routes.

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express.js**: Web application framework for Node.js, providing robust features for building APIs.
- **jsonwebtoken**: Library to sign, verify, and decode JSON Web Tokens.
- **bcryptjs**: Library to hash and compare passwords for secure authentication.
- **nodemon**: Utility that automatically restarts the server upon file changes, aiding development.

## Learning Objectives

By working on this project, you will:

- Gain a solid understanding of Node.js and Express.js fundamentals.
- Learn how to set up a basic Express server and handle routing.
- Understand the process of creating and consuming RESTful APIs.
- Implement JWT authentication for securing API endpoints.
- Explore middleware and how to use it effectively in Express.js.
- Practice managing data using a simple in-memory approach or integrating with a database.

This Contact Manager project is a must-do for anyone wanting to master Node.js and Express.js, laying the groundwork for more complex applications.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create an issue or submit a pull request.

---

Feel free to customize this README further based on your project specifics. Happy coding!

---

For more information, visit the [official Node.js documentation](https://nodejs.org/en/docs/) or the [Express.js documentation](https://expressjs.com/).

---

Made with ❤️ by [Faizan Ali](https://github.com/Faizanmoriani2).

---

If you found this project helpful, please give it a ⭐ on (https://github.com/Faizanmoriani2/Contact_manager_node)!

---

