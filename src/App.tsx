import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersGrid } from "./components/users-grid";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersGrid />
    </QueryClientProvider>
  );
};

export default App;
