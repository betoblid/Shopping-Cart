import React from 'react';
import ReactDOM from 'react-dom/client';
import './Global.scss';
import { QueryClient, QueryClientProvider } from "react-query";
import Provaider from './Context/ProductsContext';
import Rout from './Route';

const queryclient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('view') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provaider>

      <QueryClientProvider client={queryclient}>
        <Rout />
      </QueryClientProvider>
    </Provaider>

  </React.StrictMode>
);
