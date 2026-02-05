/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1400px",
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",

        card: "var(--color-card)",
        "card-foreground": "var(--color-card-foreground)",

        popover: "var(--color-popover)",
        "popover-foreground": "var(--color-popover-foreground)",

        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",

        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",

        secondary: "var(--color-secondary)",
        "secondary-foreground": "var(--color-secondary-foreground)",

        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",

        destructive: "var(--color-destructive)",
        "destructive-foreground": "var(--color-destructive-foreground)",

        success: "var(--color-success)",
        "success-foreground": "var(--color-success-foreground)",

        warning: "var(--color-warning)",
        "warning-foreground": "var(--color-warning-foreground)",

        error: "var(--color-error)",
        "error-foreground": "var(--color-error-foreground)",
      },
      borderRadius: {
        "organic-sm": "30px",
        "organic-md": "40px",
        "organic-lg": "60px",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
