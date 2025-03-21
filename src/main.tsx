import React, {  } from "react";
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { QueryClientProvider, QueryClient } from 'react-query'


const client = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
            <QueryClientProvider client={client}>
                <RouterProvider router={router} />
            </QueryClientProvider>
    </React.StrictMode>
)

