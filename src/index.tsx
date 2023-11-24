import React from 'react';
import ReactDOM from 'react-dom/client';
import './Global.scss';
import reportWebVitals from './reportWebVitals';

import { QueryClient, QueryClientProvider } from "react-query";
import Provaider from './Context/ProductsContext';
import Rout from './Route';

const queryclient = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
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

reportWebVitals();
