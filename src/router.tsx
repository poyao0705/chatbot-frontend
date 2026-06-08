import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Chatbot from "@/feature/Chatbot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/chatbot",
    element: <Chatbot />,
  },
]);

export default function Router() {
  return (
    <RouterProvider router={router} />
  );
}
