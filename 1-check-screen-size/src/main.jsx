import "./styles/reset.css";
import "./styles/vars.css";
import "./styles/default.css";
import styles from "./Styles.module.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./providers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <main className={styles.main}>
        <App />
      </main>
    </ThemeProvider>
  </StrictMode>
);
