# Customer Support Dashboard

A complete, production-quality Customer Support Dashboard built with React, Vite, Tailwind CSS, and Zustand. This application allows a support team to manage customer tickets efficiently.

## Features

- **Dashboard Statistics**: View total, open, in-progress, and resolved tickets at a glance. Statistics update dynamically based on the current ticket states.
- **Ticket Listing**: A responsive data table displaying all support tickets.
- **Search & Filtering**: 
  - Search by customer name, email, ticket subject, or description.
  - Filter by ticket status and priority.
  - Search and filters work together seamlessly.
- **Status Updates**: Quickly change a ticket's status directly from the table using optimistic UI updates.
- **Ticket Details**: A dedicated page for viewing complete ticket information.
- **Conversation History**: Chat-style interface for viewing previous support interactions.
- **Responsive UI**: Fully responsive design supporting desktop, tablet, and mobile layouts.
- **State Management**: Robust state handling including loading skeletons, error states with retry functionality, and empty states.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) via [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `date-fns`, `clsx`, `tailwind-merge`

## Installation

To run this project locally, execute the following commands:

```bash
npm install
npm run dev
```

The application will typically be available at `http://localhost:5173/`.

## Build

To create a production build:

```bash
npm run build
```

## Deployment

The application can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

For example, to deploy to Vercel:
1. Push the code to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will automatically detect Vite and configure the build settings (`npm run build` and `dist` output directory).
4. Click Deploy.

## AI Usage

AI tools were used during development to assist with implementation, debugging, component structuring, and documentation. All submitted code was reviewed, understood, and structured according to best practices before submission.
