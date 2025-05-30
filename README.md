# Meet-AI

Meet-AI lets users have meetings with AI agents—creating personalized agents for each user, and transcribing the meetings automatically.

## Features

- **Personalized AI Agents:** Each user can create and interact with their own AI-driven meeting assistants.
- **Meeting Transcription:** Meetings are automatically transcribed for easy reference.
- **Modern Tech Stack:** Built with TypeScript, Next.js 15, and Drizzle ORM (PostgreSQL).

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- PostgreSQL database

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/omarcea343/Meet-AI.git
   cd Meet-AI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment:**
   - Copy `.env.example` to `.env` and update the variables, especially `DATABASE_URL` for PostgreSQL access.

4. **Run database migrations (if needed):**
   ```bash
   npm run db:push
   ```

### Running the App

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to get started.

## Technologies Used

- **TypeScript**
- **Next.js 15** ([docs](https://nextjs.org/docs))
- **Drizzle ORM** for PostgreSQL
- **Radix UI** components
- **tRPC** for type-safe APIs

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run db:push` – Push Drizzle ORM migrations
- `npm run db:studio` – Open Drizzle Studio
