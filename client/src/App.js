import React from 'react';
import Home from './components/home/Home';
import Foot from './components/Foot';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Terms from './components/Terms';
import RoomsRates from './components/RoomsRates';
import RoomDetails from './components/RoomDetails';
import About from './components/about/About';
import Contact from './components/Contact';
import FetchUser from './components/FetchUser';
import GalleryView from './components/GalleryView';
import Reservation from './components/reservation/Reservation';
import { Switch, Route, } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';
import { StripeProvider } from 'react-stripe-elements';
import FindBooking from './components/FindBooking'
// import MyTrips from './components/MyTrips'
import ProtectedRoute from './components/ProtectedRoute'
import AdminProtRoute from './components/AdminProtRoute'
import AdminHome from './components/AdminHome'
import AdminBookings from './components/admin/AdminBookings'
import AdminUsers from './components/admin/AdminUsers'
import AdminCabins from './components/admin/AdminCabins'
import AdminGalleryView from './components/AdminGalleryView';
import AdminPE from './components/admin/AdminPE'
import AdminDiscounts from './components/admin/AdminDiscounts'
import UnderConstruction from './components/UnderConstruction'

const App = () => {
  return (
    <>
      <Navbar />
      <StripeProvider apiKey='pk_test_K4KS4eaxZnZBLpbElbfccWNx00evq50l7g'>
        <FetchUser>
          <Switch>
            <AdminProtRoute exact path="/admin" component={AdminHome} />
            <AdminProtRoute exact path="/adminusers" component={AdminUsers} />
            <AdminProtRoute exact path="/adminbookings" component={AdminBookings} />
            <AdminProtRoute exact path="/admincabins" component={AdminCabins} />
            <AdminProtRoute exact path="/adminpe" component={AdminPE} />
            <AdminProtRoute exact path="/admindiscounts" component={AdminDiscounts} />
            <AdminProtRoute exact path="/adminimages" component={AdminGalleryView} />
            <Route exact path="/comingsoon" component={ComingSoon} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/termsconditions" component={Terms} />
            <Route exact path="/roomsrates" component={RoomsRates} />
            <Route exact path="/roomdetails" component={RoomDetails} />
            <Route exact path="/reservation" component={Reservation} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={GalleryView} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/findmybooking" component={FindBooking} />
            <ProtectedRoute exact path="/mytrips" component={UnderConstruction} />
            <Route exact path="/underconstruction" component={UnderConstruction} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </StripeProvider >
      <Foot />
    </>
  )
};

export default App;