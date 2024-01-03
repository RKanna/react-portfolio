import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible()],
  define: {
    "process.env.VITE_TEMPLATE_ID": process.env.VITE_TEMPLATE_ID,
  },
  envPrefix: "REACT_APP_",
});
