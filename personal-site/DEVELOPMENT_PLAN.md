# Next Steps: Development Plan

This document outlines the necessary next steps to get the website fully functional, tested, and deployed. The project's code has been fully written but remains untested due to an environmental issue blocking key actions like dependency installation and running the server.

## Phase 1: Environment Resolution & Local Setup

The immediate priority is to set up a functional local development environment.

1.  **Resolve Agent Environment (For Agent-led Testing):**
    - The core issue preventing the agent from testing is that the `run_in_bash_session` tool does not have access to the file system where the project code was written. This must be resolved at the platform level for the agent to proceed with testing.

2.  **Local Machine Setup (For Human-led Testing):**
    - Follow the instructions in `README.md` to set up the project on a local machine.
    - **Crucial Step:** Install all dependencies by running `npm install` in the `personal-site` directory.

## Phase 2: Comprehensive Testing & Debugging

This is the most critical phase, as the code was written without the ability to test it. Bugs are expected.

1.  **Database Connectivity:**
    - Ensure the application successfully connects to the PostgreSQL database using the credentials in `.env.local`.

2.  **API Endpoint Testing:**
    - Use a tool like Postman, Insomnia, or `curl` to test every API endpoint defined in `src/app/api/`.
    - Verify `GET`, `POST`, `PUT`, `DELETE` for articles.
    - Verify the `PUT` endpoint for liking articles.
    - Check all status codes, error messages, and response bodies.

3.  **Frontend Feature Testing:**
    - Launch the app with `npm run dev`.
    - **Homepage:** Verify the 3D scene loads and is interactive.
    - **Article Pages:**
        - Check if the `/articles` page correctly lists articles from the database.
        - Check if clicking an article navigates to `/articles/[id]`.
        - Verify the "Like" button works, updates the count visually, and persists the change in the database.
    - **About Page:** Ensure the `/about` page renders correctly.
    - **Admin Panel:**
        - Test creating a new article.
        - Test editing an existing article.
        - Test deleting an article.
        - Verify all actions correctly update the UI and the database.

4.  **Debugging:**
    - Systematically address and fix every bug found during testing. This will likely involve debugging both frontend React components and backend Next.js API routes.

## Phase 3: Deployment

Once the application is stable and bug-free, it can be deployed.

1.  **Choose a Hosting Provider:**
    - [Vercel](https://vercel.com/) is the recommended choice as it's built by the creators of Next.js and offers seamless deployment.
    - Other options include Netlify, AWS Amplify, or any Node.js hosting environment.

2.  **Configure for Production:**
    - Set up production environment variables (especially `POSTGRES_URL`) on the hosting provider.
    - Ensure the database is accessible from the hosting provider's servers.

3.  **Deploy:**
    - Connect the Git repository to the hosting provider and trigger a deployment.
