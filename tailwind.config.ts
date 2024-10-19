import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     container: {
        center: true,
      
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #19478B 0%, #98DAFF 100%)',
      },
      colors: {
        'black1': '#2D2D2D',
        'black2': '#12100B',
      
        'gray1': '#656861',
      
      },
    },
  },
  plugins: [],
};
export default config;
