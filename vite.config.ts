import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import dns from "dns";

// dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react()],
//   base: "./",
//   server: { open: "/Punk-API" },
// });

export default defineConfig({
  base: "/Punk-API/",
  plugins: [react()],
});
