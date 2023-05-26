import "../../styles/tools-styles.css"
import SideBar from "@/components/sidebar-component";
import NavBar from "@/components/navbar-component";
const ToolsLayout = ({ children })=> {
  return (
    <div className=" my-main-container flex flex-col">
        <NavBar />
        <SideBar />
        <div className="main_part">{children}</div>
    </div>
  )
}

export default ToolsLayout;