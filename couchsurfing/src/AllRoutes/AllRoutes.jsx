import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import SignupCard from "../Components/Authentication/Login";
import SimpleCard from "../Components/Authentication/Signin";
import Hotel from "../Components/Hotels/Hotel";
import SingleHotel from "../Components/Hotels/SingleHotel";
import Checkout from "../Components/Payments/Checkout";
import PrivateRoute from "./Privateroutes";
import Booked from "../Components/Payments/Booked";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupCard />} />
        <Route path="/signin" element={<SimpleCard />} />
        <Route path="/hotels" element={<Hotel/>}/>
        <Route path="/hotels/:id" element={<SingleHotel/>}/>
        <Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>}/>
        <Route path="/booked" element={<Booked/>}/>
      </Routes>
    </>
  );
}
export default Router;
