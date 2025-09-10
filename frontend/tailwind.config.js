// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   // eslint-disable-next-line no-undef
//   plugins: [require("daisyui")],
// };

// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [tailwindcss()],
// });

// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")], // ✅ add this
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // ❌ Do NOT add plugins: [require("daisyui")] here in v4
};
