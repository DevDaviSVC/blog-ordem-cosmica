import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
        <nav>
            <h2>Navbar</h2>    
        </nav>   
        <Outlet />
    </>
  )
}
export default AppLayout;