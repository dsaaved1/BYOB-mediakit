import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import 'react-circular-progressbar/dist/styles.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/js/custom.js";


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
