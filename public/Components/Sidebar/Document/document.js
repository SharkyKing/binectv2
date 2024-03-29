import DocumentManager from "../SidebarComponents/DocumentManager/documentmanager";
import './document.css'
import '../sidebar.css'

const DocumentSidebar = () => {
    return (  
        <div className = "sidebar-content">
            <DocumentManager/>
        </div>
    );
}
 
export default DocumentSidebar;