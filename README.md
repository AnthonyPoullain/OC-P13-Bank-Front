# Project 13 - API & user authentication for an online bank

This repo contains the source code to run the **frontend** part of the **argent bank**'s app.

## Goals of this project

### What was required

- Recreate pages and components in **React** from static design files
- Implement authentication feature to enable users to login and access their accounts data via the provided API
- Setup global state with **Redux** to handle data and reactivity of the app
- Allow users to update their profile information and persist changes to the database

### Additional features implemented for better UX/DX

- Display the API's corresponding error messages to the end user
- Implement skeleton loading with **react-loading-skeleton**
- A typescript version of the project can be found on the `ts` branch

## 1. General information

This project runs in 2 parts:

- The [**backend**](https://github.com/openclassrooms-student-center/project-10-bank-api)
- The **frontend** (You are here)

Follow the installation instructions below.

## 2. Installation

### 2.1 Installing the backend

For the **frontend** to be able to access the data, the **backend** will first need to be running. to install and run the **backend**, follow the instructions from [this repo](https://github.com/openclassrooms-student-center/project-10-bank-api).

### 2.2 Installing the frontend

#### - Prerequisites

- [node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

#### - Launching the projects

1. Clone this repository
2. The `npm install` command will allow you to install the dependencies
3. The `npm run dev` command will allow you to run the React app
