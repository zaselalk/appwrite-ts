# React + TypeScript + Vite + Appwrite

This template provides a minimal setup to get React working in Vite with Appwrite, TypeScript, HMR, and some ESLint rules.

## Getting Started

Follow these steps to initialize and run the project:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

### Setting Up Appwrite

1. Create an account on [Appwrite](https://appwrite.io/).
2. Create a new project in the Appwrite console.
3. Note the Project ID from the Appwrite console.
4. Create a `.env` file in the root of your project and add the following line, replacing `YOUR_PROJECT_ID` with your actual Project ID:

   ```properties
   VITE_APPWRITE_PROJECT_ID=YOUR_PROJECT_ID
   ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server and you can view the application in your browser at `http://localhost:3000`.

### Building for Production

To build the project for production, run:

```sh
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Previewing the Production Build

To preview the production build, run:

```sh
npm run preview
```

This will start a local server to serve the production build.

## License

This project is licensed under the MIT License.
