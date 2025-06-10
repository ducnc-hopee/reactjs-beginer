// index.jsx or main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// ✅ React Query imports
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ✅ Create a query client
const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);

// ✅ Wrap <App /> with QueryClientProvider
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
