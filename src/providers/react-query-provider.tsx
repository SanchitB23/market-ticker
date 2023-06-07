"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children} <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
export default ReactQueryProvider;
