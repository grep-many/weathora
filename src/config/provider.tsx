import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type React from 'react';

const queryClient = new QueryClient();

const AppProvider = ({ children }: React.PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default AppProvider;
