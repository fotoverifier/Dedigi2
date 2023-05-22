import "../../styles/tools-styles.css"
import SideBar from "@/components/sidebar-component";
const ToolsLayout = ({ children })=> {
  return (
    <div className=" my-main-container">
       <SideBar/>
        <div className="main_part">{children}</div>
    </div>
  )
}

export default ToolsLayout;