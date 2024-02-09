import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import RoleWrapper from "./components/app-layout/RoleWrapper";

const App = () => {
  const Signin = lazy(() => import("./screens/signin"));
  const Products = lazy(() => import("./screens/products"));
  const Cart = lazy(() => import("./screens/cart"));
  const Invoice = lazy(() => import("./screens/invoice"));

  const auth = true;

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            {auth ? (
              <Route path="/" element={<RoleWrapper role="ROLE_USER" />}>
                <Route
                  index
                  path="/"
                  element={
                    <Suspense>
                      <Products />
                    </Suspense>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <Suspense>
                      <Cart />
                    </Suspense>
                  }
                />
                <Route
                  path="/invoice"
                  element={
                    <Suspense>
                      <Invoice />
                    </Suspense>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            ) : (
              <Route path="/" element={<Outlet />}>
                <Route
                  index
                  element={
                    <Suspense>
                      <Signin />
                    </Suspense>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            )}
          </Route>
        )
      )}
    />
  );
};

export default App;
