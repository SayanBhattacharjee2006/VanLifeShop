import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/Layouts/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Vans from "./Pages/Vans/Vans.jsx";
import VanDetails from "./Pages/Vans/VanDetails.jsx";
import Dashboard from "./Pages/Hosts/Dashboard.jsx";
import HostLayout from "./components/Layouts/HostLayout/HostLayout.jsx";
import Income from "./Pages/Hosts/Income.jsx";
import Review from "./Pages/Hosts/Review.jsx";
import HostVans from "./Pages/Hosts/HostVans.jsx";
import HostVanDetails from "./Pages/Hosts/HostVanDetails.jsx";
import HostVanPricing from "./Pages/Hosts/HostVanPricing.jsx";
import HostVanPhotos from "./Pages/Hosts/HostVanPhotos.jsx";
import HostVanInfo from "./Pages/Hosts/HostVanInfo.jsx";
import NotFound from "./Pages/NotFound/notfound.jsx";
import Error from "./components/Error/Error.jsx";

//importing loaders
import {loader as vansLoader} from "./Pages/Vans/Vans.jsx";


//importing server
import "./server.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route 
        path="vans" 
        element={<Vans />} 
        loader={vansLoader} 
        errorElement={<Error/>}
        />
      <Route path="vans/:id" element={<VanDetails />} />
      <Route path="hosts" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="review" element={<Review />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="income" element={<Income />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
