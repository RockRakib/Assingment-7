Assignment7
Project Overview
Assignment7 is a web application that provides various features like user authentication, community comments, leaderboards, and supply management. The project is built using React and TypeScript, and it leverages several popular libraries and tools for development and build processes.

Table of Contents

Project Overview

Getting Started

Installation

Running the Development Server

Building the Project

Linting the Code

Previewing the Build

Project Structure

Dependencies

Routes

Scripts

Installation

To get started with the project, you need to install the dependencies. Run the following command:

bash

Copy code

npm install

Running the Development Server

To start the development server, run:

bash

Copy code

npm run dev

This will start the Vite development server, and you can access the application at http://localhost:3000.

Building the Project

To build the project for production, run:

bash

Copy code

npm run build

This will create a dist directory with the production build of the application.

Linting the Code

To lint the code using ESLint, run:

bash

Copy code

npm run lint

This will check the code for any linting errors and report unused disable directives, with a maximum warning limit of zero.

Previewing the Build
To preview the production build, run:

bash

Copy code

npm run preview

This will start a local server to preview the build.

Project Structure
The project is organized as follows:

src/: Contains the source code of the application.

@/App: The main application component.

@/Dashboard: Contains components related to the dashboard.

CreateSupply: Component to create new supply.

SupplyDetail: Component to view supply details.

comment: Component for community comments.

@/components: Contains reusable components.

LeaderBoard: Component for leaderboard.

suppplyCard: Contains SupplyCard component.

@/layout: Contains layout components.

Dashboard: Layout component for the dashboard.

@/pages: Contains page components.

login: Login page.

register: Registration page.

Dependencies

The project uses the following dependencies:

@glidejs/glide: ^3.6.0

@radix-ui/react-dialog: ^1.0.5

@radix-ui/react-label: ^2.0.2

@radix-ui/react-navigation-menu: ^1.1.4

@radix-ui/react-slot: ^1.0.2

@radix-ui/react-toast: ^1.1.5

@reduxjs/toolkit: ^2.2.4

class-variance-authority: ^0.7.0

clsx: ^2.1.1

embla-carousel-react: ^8.0.4

lucide-react: ^0.378.0

react: ^18.2.0

react-dom: ^18.2.0

react-redux: ^9.1.2

react-router-dom: ^6.23.0
tailwind-merge: ^2.3.0
tailwindcss-animate: ^1.0.7
Dev Dependencies
@types/glidejs\_\_glide: ^3.6.5
@types/node: ^20.12.11
@types/react: ^18.2.66
@types/react-dom: ^18.2.22
@typescript-eslint/eslint-plugin: ^7.2.0
@typescript-eslint/parser: ^7.2.0
@vitejs/plugin-react: ^4.2.1
autoprefixer: ^10.4.19
eslint: ^8.57.0
eslint-plugin-react-hooks: ^4.6.0
eslint-plugin-react-refresh: ^0.4.6
postcss: ^8.4.38
tailwindcss: ^3.4.3
typescript: ^5.2.2
vite: ^5.2.0
Routes
The application has the following routes:

/: Renders the App component.
/login: Renders the Login component.
/singup: Renders the Register component (Note: there is a typo in the path, it should be /signup).
/community: Renders the Comment component.
/leaderBoard: Renders the LeaderBoard component.
/supplies: Renders the SupplyCard component.
/supplies/:id: Renders the SupplyDetails component.
/dashboard: Renders the Dashboard component with a nested route:
create-testimonial: Renders the CreateSupply component.
Scripts
The following scripts are available in the project:

dev: Starts the Vite development server.
build: Compiles TypeScript and builds the project using Vite.
lint: Runs ESLint to check for linting errors.
preview: Previews the production build.
License
This project is private and not licensed for public use.

## API Reference

#### Get all items

```http
  GET /api/user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get single item

```http
  GET /api/user/${userId}
```

## 🔗 Clone This Repository

[REPOSITORY](https://github.com/RockRakib/assignment_2)

## Installation

Install my-project with npm

```bash
    cd my-project
    npm install
```

## Environment Variables

To run this project, Create a .env file in the root of your project and add the necessary environment variables. You can use the provided

`PORT=5000`

`MONGO_URI=mongodb://localhost:27017/your-database`

# Add other environment variables as needed

## Deployment

To deploy this project run

```bash
  npm run dev
```

The application will be accessible at http://localhost:5000.

## Production

To build and start the application in production mode

```bash
 npm run build
 npm start

```
