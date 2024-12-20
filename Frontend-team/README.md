# React App with Vite and Tailwind CSS

This project is a React application built using [Vite](https://vitejs.dev/) with [TypeScript](https://www.typescriptlang.org/) and [Tailwind CSS](https://tailwindcss.com/). It is organized into reusable components, hooks, and utility functions for scalability.

## Features

- ⚡ **Vite** for fast development
- ⚛️ **React** 18 for building dynamic UIs
- 🛠️ **TypeScript** for type-safe development
- 💨 **Tailwind CSS** for rapid and modern styling
- ♻️ Modular project structure with:
  - Reusable **components**
  - Custom **hooks**
  - Organized **services** and **utilities**

## Prerequisites

Ensure the following tools are installed:

- [Node.js](https://nodejs.org/) (version 16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the Repository and change directory to Frontend-team
```bash
git clone https://github.com/johnsmccain/GitEth.git
cd GitEth
cd Frontend-team
```


### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn
```

### 3. Start the Development Server

```bash
npm run dev
```

Or:

```bash
yarn dev
```

Visit [http://localhost:5173/](http://localhost:5173/) to preview the app.

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

Or:

```bash
yarn build
```

The build output is in the `dist` folder.

### 5. Preview the Production Build

```bash
npm run preview
```

Or:

```bash
yarn preview
```

## Project Structure

```plaintext
src/
│
├── assets/
│   ├── fonts/         # Custom fonts
│   ├── icons/         # SVG or other icon files
│   ├── images/        # Static images
│   └── react.svg      # Any standalone assets
│
├── components/        # Reusable UI components
│   ├── Common/        # Shared, generic components (e.g., buttons, modals, forms)
│   ├── Layout/        # Layout components (e.g., Header, Footer, Sidebar)
│   └── Specific/      # Components tightly coupled to certain features/pages
│
├── hooks/             # Custom React hooks
│
├── lib/               # Utility libraries and helpers (e.g., API clients, configs)
│
├── pages/             # Page-specific components and logic
│   ├── contributors/  # Related components and files
│   ├── dashboard/     
│   ├── exploreProject/ 
│   ├── landingPage/   
│   ├── mainApp/       
│   ├── onBoarding/    
│   ├── profile/       
│   └── projectOverview/       
│
├── services/          # External services (e.g., Firebase, API calls)
│   ├── firebase.ts    # Firebase configuration and API methods
│   └── index.ts       # Export aggregated services
│
├── store/             # State management (e.g., Redux, Context)
│   ├── actions/       # Redux action creators
│   ├── reducers/      # Redux reducers
│   ├── types/         # Redux-related TypeScript types
│   └── index.ts       # Combine store logic and export
│
├── styles/            # Global and modular styles
│   ├── App.css        # General app-wide CSS
│   ├── Fonts.css      # Custom font styles
│   └── index.css      # Base styles and global resets
│
├── utils/             # General utilities and helpers
│   ├── DomainData.json 
│   ├── DummyData.ts
│   └── index.ts       # Entry point for exporting utilities
│
├── App.tsx            # Root component
└── index.tsx          # React entry point

```

## Scripts

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the development server              |
| `npm run build` | Build the app for production              |
| `npm run preview` | Preview the production build            |
| `npm run lint`  | Lint the code (if ESLint is configured)   |
| `npm run build` | Build the app for production              |  |

## Styling with Tailwind CSS

This project uses Tailwind CSS for styling. You can customize it via `tailwind.config.js` and `postcss.config.js`.


## TypeScript

The project is written in TypeScript, offering enhanced development experience and type safety.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
