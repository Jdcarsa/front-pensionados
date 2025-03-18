import React, { useContext, createContext, useState } from "react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;
type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("system");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-right"
      expand={false}
      duration={4000}
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success:
            "group-[.toaster]:bg-[#D8EFD1] group-[.toaster]:border-l-4 group-[.toaster]:border-l-[#249337] group-[.toast]:text-[#249337] group-[.toast]:shadow-[0_0_10px_rgba(36,147,55,0.2)] [&_svg]:text-[#249337]",
          info:
            "group-[.toaster]:bg-[#D6E2FF] group-[.toaster]:border-l-4 group-[.toaster]:border-l-[#0053A0] group-[.toast]:text-[#0053A0] group-[.toast]:shadow-[0_0_10px_rgba(0,83,160,0.2)] [&_svg]:text-[#0053A0]",
          error:
            "group-[.toaster]:bg-[#FFE6E6] group-[.toaster]:border-l-4 group-[.toaster]:border-l-[#D03838] group-[.toast]:text-[#D03838] group-[.toast]:shadow-[0_0_10px_rgba(208,56,56,0.2)] [&_svg]:text-[#D03838]",
          warning:
            "group-[.toaster]:bg-[#FFF4D6] group-[.toaster]:border-l-4 group-[.toaster]:border-l-[#D97706] group-[.toast]:text-[#D97706] group-[.toast]:shadow-[0_0_10px_rgba(217,119,6,0.2)] [&_svg]:text-[#D97706]",
        },
      }}
      {...props}
    />
  );
};

const App = () => (
  <ThemeProvider>
    <Toaster />
  </ThemeProvider>
);

export { Toaster, ThemeProvider, App };
