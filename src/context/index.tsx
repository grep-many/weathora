import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type React from "react";
import ThemeProvider from "./theme/ThemeProvider";

const queryClient = new QueryClient();

const AppProvider = ({ children }: React.PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>{children}</ThemeProvider>
  </QueryClientProvider>
);

export default AppProvider;
