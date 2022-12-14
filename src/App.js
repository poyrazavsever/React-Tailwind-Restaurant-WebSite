import MobileNavbar from './Components/Navbar/MobileNavbar'
import DesktopNavbar from './Components/Navbar/DesktopNavbar'
import { Routes, Route } from "react-router-dom"
import {routes} from "./routes"

import "./index.css"

function App() {

  return (
      <div className='bg-primary h-screen text-white overflow-x-hidden relative'>

            <nav className='desktop:hidden z-20 fixed bg-primary'>
              <MobileNavbar/>
            </nav>

            <nav className='mobile:hidden z-20 fixed bg-primary'>
              <DesktopNavbar />
            </nav> 

            
        <div className='mx-auto'>

            <Routes>

                {routes.map((route) => {
                  return(
                    <Route key={route.path} path={route.path} element={<route.component/>} />
                  )

                })}

            </Routes>

        </div>

      </div>
  );
}

export default App;
