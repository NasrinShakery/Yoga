import React from "react";
import "./App.scss";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home/Home";
const queryClient = new QueryClient();

const App = () => {
   const router = useRoutes(routes);
   return (
      <QueryClientProvider client={queryClient}>
         {/* {router} */}
         <Home/>
      </QueryClientProvider>
   );
};

export default App;