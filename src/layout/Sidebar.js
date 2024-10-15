import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [activeItem, setActiveItem] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(false); // State for collapsing the sidebar

    return (
        <div className={`bg-white  text-black ${isCollapsed ? "w-20" : "w-64"} h-screen p-5 rounded-sm shadow-md transition-all duration-300`}>
            {/* Toggle button to collapse/expand */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="mb-10 p-2 rounded-full flex items-center gap-5"
            >
              <svg
                    className="w-9 h-9 hover:text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                >
                    <path d="M488.028 207.68L487.354 205.949L422.019 34.7949C420.69 31.4404 418.336 28.5947 415.296 26.6663C412.254 24.7705 408.705 23.8575 405.129 24.0504C401.554 24.2433 398.123 25.5329 395.301 27.7451C392.51 30.0207 390.485 33.1043 389.502 36.5762L345.388 172.054H166.756L122.641 36.5762C121.685 33.0854 119.655 29.9864 116.843 27.72C114.02 25.5078 110.59 24.2182 107.014 24.0253C103.438 23.8324 99.8898 24.7454 96.8475 26.6412C93.8139 28.5774 91.4622 31.4206 90.1241 34.7698L24.6648 205.848L24.015 207.579C14.6098 232.246 13.4489 259.314 20.7073 284.701C27.9656 310.089 43.2498 332.419 64.2553 348.326L64.4803 348.501L65.0801 348.928L164.606 423.742L213.844 461.149L243.837 483.879C247.345 486.553 251.629 488 256.034 488C260.439 488 264.723 486.553 268.231 483.879L298.224 461.149L347.462 423.742L447.588 348.476L447.838 348.276C468.796 332.366 484.045 310.059 491.292 284.706C498.54 259.353 497.394 232.323 488.028 207.68Z"></path>
                </svg> 
              <Link to="/dashboard"><label className="cursor-pointer">Dashboard</label></Link>
            </button>

            {/* Menu items */}
            <ul className="space-y-3">
                <li
                    className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                        activeItem === "Basic UI Elements" ? "bg-purple-200" : ""
                    }`}
                >
                    <Link to="" onClick={() => setActiveItem("Basic UI Elements")}>
                        <span className="mr-2">📦</span>
                        {!isCollapsed && <span>Basic UI Elements</span>}
                    </Link>
                </li>
                <li
                    className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                        activeItem === "Form Elements" ? "bg-purple-200" : ""
                    }`}
                >
                    <Link to="" onClick={() => setActiveItem("Form Elements")}>
                        <span className="mr-2">📝</span>
                        {!isCollapsed && <span>Form Elements</span>}
                    </Link>
                </li>
                <li
                    className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                        activeItem === "Tables" ? "bg-purple-200" : ""
                    }`}
                >
                    <Link to="" onClick={() => setActiveItem("Tables")}>
                        <span className="mr-2">📊</span>
                        {!isCollapsed && <span>Tables</span>}
                    </Link>
                </li>
                <li
                    className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                        activeItem === "Icons" ? "bg-purple-200" : ""
                    }`}
                >
                    <Link to="" onClick={() => setActiveItem("Icons")}>
                        <span className="mr-2">🔤</span>
                        {!isCollapsed && <span>Icons</span>}
                    </Link>
                </li>
                <li
                    className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                        activeItem === "Charts" ? "bg-purple-200" : ""
                    }`}
                >
                    <Link to="/chart" onClick={() => setActiveItem("Charts")}>
                        <span className="mr-2">📈</span>
                        {!isCollapsed && <span>Charts</span>}
                    </Link>
                </li>
                <li
                    className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                        activeItem === "User Pages" ? "bg-purple-200" : ""
                    }`}
                >
                    <Link to="" onClick={() => setActiveItem("User Pages")}>
                        <span className="mr-2">👤</span>
                        {!isCollapsed && <span>User Pages</span>}
                    </Link>
                </li>
                <li
                    className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                        activeItem === "Error Pages" ? "bg-purple-200" : ""
                    }`}
                >
                    <Link to="" onClick={() => setActiveItem("Error Pages")}>
                        <span className="mr-2">⚠️</span>
                        {!isCollapsed && <span>Error Pages</span>}
                    </Link>
                </li>
                <li
                    className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                        activeItem === "General Pages" ? "bg-purple-200" : ""
                    }`}
                >
                    <Link to="" onClick={() => setActiveItem("General Pages")}>
                        <span className="mr-2">📄</span>
                        {!isCollapsed && <span>General Pages</span>}
                    </Link>
                </li>
                <li
                    className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                        activeItem === "Documentation" ? "bg-purple-200" : ""
                    }`}
                >
                    <Link to="" onClick={() => setActiveItem("Documentation")}>
                        <span className="mr-2">📚</span>
                        {!isCollapsed && <span>Documentation</span>}
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
