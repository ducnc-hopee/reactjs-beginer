import React from "react";
import { createRoot } from "react-dom/client";
import { TodoList } from "./components/TodoList";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<TodoList />);
