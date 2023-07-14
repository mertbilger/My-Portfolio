
import { Outlet } from 'react-router-dom';
import MobileAlert from "../components/MobileAlert";
import Who from "../pages/Who";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";


const RootLayout = () => {
    return (
        <>
      
        <Outlet />
        <MobileAlert/>
        <Who />
        <Works />
        <Contact />
        <Footer />

        </>
   
    )
}
export default RootLayout;