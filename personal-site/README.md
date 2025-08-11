# Personal Branding Website

This is a personal website designed for building a personal brand. It features an article management system, an "About Me" page, a like functionality for articles, and interactive 3D elements on the homepage.

The website is built with a modern, tech-forward aesthetic using a dark theme and a deep red primary color (`#910202`).

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **3D Rendering:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) & [Drei](https://github.com/pmndrs/drei)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)
- A running [PostgreSQL](https://www.postgresql.org/download/) database instance.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd personal-site
    ```

2.  **Install dependencies:**
    This project uses npm for package management.
    ```bash
    npm install
    ```
    *(Note: This step is currently blocked in the agent's environment but should work locally.)*

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the `personal-site` directory by copying the example file.
    ```bash
    cp env.local.example .env.local
    ```
    Now, edit the `.env.local` file and update the `POSTGRES_URL` with your actual database connection string.
    ```
    POSTGRES_URL="postgresql://YOUR_USER:YOUR_PASSWORD@YOUR_HOST:5432/YOUR_DATABASE"
    ```

4.  **Set up the database schema:**
    Connect to your PostgreSQL instance and run the SQL script located in `db/schema.sql` to create the `articles` table. You can use a tool like `psql` or any GUI database client.
    ```bash
    psql -U YOUR_USER -d YOUR_DATABASE -f db/schema.sql
    ```

### Running the Development Server

Once the setup is complete, you can start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `/src/app/`: Contains all the pages and API routes for the application.
    -   `/src/app/api/`: All backend API endpoints.
-   `/src/components/`: Shared React components used across the site (e.g., Layout, 3D Scene).
-   `/src/lib/`: Shared library/utility functions (e.g., database connection logic).
-   `/db/`: Contains database-related files, like the schema.
-   `/public/`: Static assets like images and icons.
