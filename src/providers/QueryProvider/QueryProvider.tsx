import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type FC } from "react";
import { type IQueryProvider } from "../types";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const QueryProvider: FC<IQueryProvider> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
