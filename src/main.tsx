import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/Routes.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from './context/ThemeContext';
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider>
            <RouterProvider router={routes} />
        </ThemeProvider>
    </Provider>
);

