import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Coaches } from "./screens/Coaches";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Coaches />
  </StrictMode>,
);
