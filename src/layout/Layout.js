import Top from "./top";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar */}
      <Sidebar className="fixed h-full" />
      
      {/* Main Content Area */}
      <div className="flex flex-col flex-grow"> 
        <Top className="fixed top-0 left-64 right-0 z-10" /> 
        <main className="bg-purple-50 h-[75%] overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
