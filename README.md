# Arkeero Demo

This is a [Next.js](https://nextjs.org/) project to demo a client list and form ui. This includes the use of global context for shared form data, the use of layout context to provide multiple pages with the access of the same component as the modal among others important react functionalities.

## Deployed URL

https://arkeero-ashy.vercel.app/

## Getting Started

### Prerequisites

To run the project first clone this repository locally and then open your terminal within the location that you downloaded. It is important to have Node.js installed.

Required Node.js 18.17.0 or more recent, I recomend version 20.12.1

install modules

```
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Folder Structure

```
arkeero/
    src/
    ├── app/
    │   ├── api/               # Internal API handlers for server-side logic
    │   ├── users/             # Possibly user-related utilities or hooks
    │   ├── add-user/          # Components or logic specifically for adding users
    │   ├── page.tsx           # Main page component
    │   └── layout.tsx         # Layout component used across the application
    ├── api/
    │   └── users/             # External API calls to get users from a third-party service
    ├── helpers/
    │   └── submit.ts          # Helper functions for submitting forms to the server
    ├── providers/             # Context providers for global state management
    ├── types/                 # TypeScript type definitions and interfaces
    ├── ui/
    │   ├── components/        # Reusable UI components
    │   └── shared/            # Shared UI components or utilities
    ├── next.config.js           # Configuration file for Next.js
    └── README.md                # Documentation about the project
```

## Theme and styling

I use tailwind as it comes for the deafult setup with next.js for classes and use the default fonts.

## Perfomance and optimizacion

Some components as the list item are being memoized to avoid additional renders when something in the list changes. Also, the result itself of some functions has been integrated with useMemo to avoid additional renders when executed as it should not change too often.


## Tests

This project does not include unit tests because of the time limitations but I would use the react test library with Jest.js to add at list of unit tests to important components and their basic functionalities for example complete the form or dot not allow it to continue if there is any missing field.
