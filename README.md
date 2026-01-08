# GameVerse

A simple game discovery app built with React. Browse, search, and bookmark your favorite video games using the RAWG API.

## Features

- **Game Listings**: Browse games with pagination
- **Search**: Search for games with debounced input for better performance
- **Genre Filtering**: Filter games by genre
- **Sorting**: Sort games by various criteria
- **Game Details**: View detailed information about each game including:
  - Full description
  - Ratings and Metacritic scores
  - Available platforms
  - Genres
  - Developers and publishers
  - Video trailers
  - Screenshots
- **Bookmarks**: Save your favorite games locally
- **Responsive Design**: Works great on mobile and desktop

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Query (TanStack Query)
- React Router
- Axios

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## API Key

This project uses the RAWG API. The current API key is hardcoded in `src/services/api.ts`. For personal use, you should get your own API key from [RAWG](https://rawg.io/apidocs) and replace it.

## Project Structure

```
src/
├── api/           # API calls
├── components/    # Reusable components
├── context/       # Context API for state management
├── hooks/         # Custom hooks
├── layout/        # Layout components
├── pages/         # Main pages
├── services/      # API services
└── types/         # TypeScript type definitions
```

## Notes

- Bookmarks are stored in localStorage
- Search uses debouncing (1 second delay)
- React Query handles caching and loading states
- Dark theme design with Tailwind CSS

## License

This project is for personal use.
