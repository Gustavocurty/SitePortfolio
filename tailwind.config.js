/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Garante que o Tailwind funcione nos arquivos do React
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"], // Define Poppins como uma fonte personalizada
        },
      },
    },
    plugins: [],
  };
  