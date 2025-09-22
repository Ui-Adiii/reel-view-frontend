# Reel-Food Frontend

A React + Vite single-page application for the Reel-Food platform. It features short-form food reels, user and food partner authentication, profile and creation flows, and a mobile-friendly bottom navigation.

## Tech Stack
- React 19 (SPA)
- Vite 7 for dev/build/preview
- React Router DOM 7 for client-side routing
- Axios for HTTP
- React-Toastify for notifications
- ESLint 9 with React hooks/refresh plugins

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
This starts Vite at a local dev server. Open the printed URL in your browser.

### Build
```bash
npm run build
```
Output goes to `dist/`.

### Preview (serve build)
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Environment Variables
The app reads the backend API base URL from Vite env variables:
- `VITE_API_URL` — Base URL for the backend API

You can provide this via a `.env` file at the project root:
```
VITE_API_URL=https://api.example.com
```

## Project Structure
```
frontend/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ assets/
│  │  └─ react.svg
│  ├─ components/
│  │  ├─ BottomNav.jsx
│  │  └─ ReelFeed.jsx
│  ├─ pages/
│  │  ├─ auth/
│  │  │  ├─ ChooseRegister.jsx
│  │  │  ├─ FoodPartnerLogin.jsx
│  │  │  ├─ FoodPartnerRegister.jsx
│  │  │  ├─ UserLogin.jsx
│  │  │  └─ UserRegister.jsx
│  │  ├─ food-partner/
│  │  │  ├─ CreateFood.jsx
│  │  │  └─ Profile.jsx
│  │  └─ general/
│  │     ├─ Home.jsx
│  │     └─ Saved.jsx
│  ├─ routes/
│  │  └─ AppRoutes.jsx
│  └─ styles/
│     ├─ auth-shared.css
│     ├─ bottom-nav.css
│     ├─ create-food.css
│     ├─ profile.css
│     ├─ reels.css
│     └─ theme.css
```

## Routing
Defined in `src/routes/AppRoutes.jsx`:
- `/` — Home + `BottomNav`
- `/register` — Choose register type
- `/user/register` — User registration
- `/user/login` — User login
- `/food-partner/register` — Food partner registration
- `/food-partner/login` — Food partner login
- `/saved` — Saved feed + `BottomNav`
- `/create-food` — Create food reel (partner)
- `/food-partner/:id` — Food partner profile

## Notable UI Elements
- **BottomNav**: Mobile-friendly tab bar present on main routes
- **ReelFeed**: Vertical reels UI (styles in `styles/reels.css`)
- **ToastContainer**: Global notifications mounted in `App.jsx`

## Conventions
- Environment config via Vite `import.meta.env`
- Styles organized by feature in `src/styles`
- API base URL exported as `backendUrl` in `App.jsx`

## Scripts
- `dev`: Start Vite dev server
- `build`: Production build
- `preview`: Preview production build
- `lint`: Run ESLint

## Notes
- Ensure `VITE_API_URL` points to the backend before login/register flows.
- This repository contains only the frontend. Backend services should be run separately.
