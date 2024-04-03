// These routes doesnt require authentication
export const publicRoutes = ["/", "/new-verification"];

// These routes are used for authentication
// will redirect logged in users to /dashboard
export const authRoutes = [
  "/login",
  "/register",
  "/error",
  "/reset",
  "/new-password",
];

// prefix for API authentication routes
// Routes that start with this prefix are used for api authentication
export const apiAuthPrefix = "/api/auth";

// the default path after logging in
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
