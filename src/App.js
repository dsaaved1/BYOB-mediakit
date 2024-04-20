import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import 'react-circular-progressbar/dist/styles.css';


import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/js/custom.js";


// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'owl.carousel/dist/owl.carousel.js';

// import "./assets/css/main.css";
// import "./assets/js/main";


// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ToastContainer } from 'react-toastify';



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import BasePage from './Pages/Base.jsx';
import LeaderboardList from './Pages/Dashboard/SocialMedia';
import LeaderboardDetails from './Pages/Dashboard/SocialMediaDeals';





function App() {


  return (
    <>


      <BrowserRouter>

        <Routes>


          {/* <Route path={"/"} element={<Home />} /> */}
          <Route path='/' element={<BasePage />}>
            <Route index element={<Dashboard />} />
            <Route path={"/leaderboard"} element={<LeaderboardList />} />
            <Route path={"/leaderboard/:name"} element={<LeaderboardDetails />} />
          </Route>




        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
