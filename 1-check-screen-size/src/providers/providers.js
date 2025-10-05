import { useContext } from "react";
import {
  MenuStateContext,
  MenuStateProvider,
} from "./menu-state/menu-state.jsx";
import { ThemeContext, ThemeProvider } from "./theme/theme.jsx";

function useCustomContext(_context, name) {
  const context = useContext(_context);
  if (!context) {
    throw new Error(
      `hook: use${name} must be used within a provider: ${name}Provider`
    );
  }
  return context;
}

function useTheme() {
  return useCustomContext(ThemeContext, "Theme");
}

function useMenuState() {
  return useCustomContext(MenuStateContext, "MenuState");
}

export {
  MenuStateContext,
  MenuStateProvider,
  ThemeContext,
  ThemeProvider,
  useTheme,
  useMenuState,
};
