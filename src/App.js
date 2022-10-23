import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      {/* <Navbar /> */}
      <Main />
    </div>
  );
}

export default App;
