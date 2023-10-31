import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductsByUser from "./pages/ProductsByUser";
import Product from "./pages/Product";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./Context/DarkModeContext";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyles } from "./styles/GlobalStyles";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Navigate replace to="dashboard" /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/products", element: <Products /> },
      { path: "/addedByUser", element: <ProductsByUser /> },
      { path: "/products/:productId", element: <Product /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
  { path: "/login", element: <Login /> },
]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <RouterProvider router={router}></RouterProvider>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "18px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(---color-grey-0)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}
