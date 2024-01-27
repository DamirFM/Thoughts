# Thoughts
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![Insomnia](https://img.shields.io/badge/Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white)](https://insomnia.rest/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)


## Description

Welcome to Thoughts, the backbone of a vibrant and dynamic social network web application. Our API, built on MongoDB and Express, empowers users to seamlessly share thoughts, engage with friends, and cultivate meaningful connections online.

## Content ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 

- [Walkthrough](#Walkthrough)
- [Features](#Features)
- [Screenshots](#Screenshots)
- [Installation](#Installation)
- [Usage](#Usage)
- [Endpoints](#Endpoints)
- [Contributing](#Contributing)
- [Questions](#Questions)

## Link of Walkthrough

- https://drive.google.com/file/d/1TITkOI8x1UBCL1utXtt4USHu-IvN4Cv8/view?usp=sharing

## Features

- View all thoughts;
- View a single thought;
- Create a new thought;
- Update an existing thought;
- Delete a thought and remove it from the user;
- Add reactions to a thought;
- Remove reactions from a thought;
- Manage user accounts;
- Add and remove friends.

## Installation

Follow these steps to set up the Candy Comment App on your local machine:

1. Clone the repository;
2. Install dependencies;
3. Set up your database.

## Usage

API Usage:
    Access the API at http://localhost:3001/api.
    Use Insomnia interact with the API endpoints.
Web Application:
    Open your web browser and navigate to http://localhost:3001.
    Explore and use the web interface to interact with thoughts and user accounts.

## API Endpoints

Thoughts:
    GET /api/thoughts: Get all thoughts.
    GET /api/thoughts/:thoughtId: Get a single thought.
    POST /api/thoughts: Create a new thought.
    PUT /api/thoughts/:thoughtId: Update a thought.
    DELETE /api/thoughts/:thoughtId: Delete a thought and remove it from the user.
    POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
    DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.
Users:
    GET /api/users: Get all users.
    GET /api/users/:userId: Get a single user.
    POST /api/users: Create a new user.
    PUT /api/users/:userId: Update a user.
    DELETE /api/users/:userId: Delete a user and associated thoughts.
    POST /api/users/:userId/friends/:friendId: Add a friend to a user.
    DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user.

## Contributing

Contributions are welcome!

## Questions
If you have any questions or issues, please feel free to reach out:
- GitHub: https://github.com/DamirFM
