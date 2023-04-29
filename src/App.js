import {
  Route,
  // Router,
  // Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import "./app.scss"
import Home from "./components/pages/Home"
import MainPage from "./components/pages/MainPage"
import AboutPage from "./components/pages/About"
import ServicePage from "./components/pages/Service"
import PricingPage from "./components/pages/Pricing"
import NotFound from "./components/pages/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<MainPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="service" element={<ServicePage />} />
      <Route path="pricing" element={<PricingPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
