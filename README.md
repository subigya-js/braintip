# User Dashboard Application - BrainTip Assessment

A simple and clean React dashboard application that displays user information fetched from JSONPlaceholder API.

## Features

- 👥 User list view with cards
- 🔍 Detailed user information modal
- 📱 Fully responsive design (mobile and desktop)
- ⚡ Built with Vite for fast development
- 🎨 Clean vanilla CSS using Flexbox and Grid
- 🎯 React Icons for consistent iconography

## Tech Stack

- **React 19** - UI library with functional components and hooks
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Context API** - Global state management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

## State Management Approach

I chose the **Context API** for global state management along with a **service layer** for handling API calls.

### Why Context API for this application?

This application is a small dashboard where user data, loading state, and error state need to be accessed by multiple components such as the user list and user detail view. Using the Context API allows this shared state to be available across the component tree without prop drilling.

Context API was preferred over other state management tools because:

- The application has simple and predictable global state
- There is no complex state logic such as caching, normalization, or frequent mutations
- Introducing libraries like Redux or Zustand would add unnecessary boilerplate for the given scope
- Context API is built into React, making the solution lightweight and easy to reason about

This approach keeps the codebase clean while remaining scalable for the current requirements. 

### Architecture Benefits:

1. **Service Layer**: Dedicated `userService` handles all API calls - single source of truth for data fetching
2. **Context API**: Manages global state (users, loading, error) and provides it to all components

## Optimization & Refactor Decision

### Service Layer Pattern (Key Optimization)

**Decision**: Instead of fetching data directly in the Context or components, I implemented a dedicated service layer (`userService.ts`).

**Why this matters**:

1. **Single Responsibility**: The service handles only API calls, Context handles only state, components handle only UI
2. **Testability**: Easy to mock `userService` in tests without touching Context or components
3. **Maintainability**: If the API changes or we switch to a different backend, we only update one file
4. **Performance**: Centralizes API logic, preventing duplicate fetch calls

**Example**:

```typescript
// Before: Fetching directly in Context
useEffect(() => {
  fetch("https://api.example.com/users")
    .then((res) => res.json())
    .then(setUsers);
}, []);

// After: Using service layer
useEffect(() => {
  const data = await userService.fetchUsers();
  setUsers(data);
}, []);
```

This pattern is used in production applications and demonstrates professional React architecture.

## What I Would Improve With More Time

1. **Introduce a custom data-fetching hook**: Extract the user-fetching logic from the Context into a dedicated custom hook (e.g., useUsers) to further separate concerns. This would keep the Context focused purely on state sharing while improving reusability and testability of the data-fetching logic.
2. **Implement search and filtering**: Add a search bar to filter users by name, email, or company
3. **Add pagination or virtual scrolling**: For better performance with larger datasets
4. **Add unit tests**: Using React Testing Library for component testing
5. **Implement error boundaries**: Better error handling at component level
6. **Add sorting options**: Allow users to sort by name, company, or city

## API Used

- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Response**: Array of 10 user objects with complete information

## Browser Support

- Chrome (latest)
- Brave (latest)
- Comet (latest)
