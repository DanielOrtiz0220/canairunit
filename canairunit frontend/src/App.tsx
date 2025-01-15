import "./App.css";
import OperatingSystemDropdown from "./components/OperatingSystemDropdown";
import PCModelDropdown from "./components/PcModel";

function App() {
  return (
    <div className="flex flex-col justify-center items-center text-2xl gap-32">
      <div>
        <OperatingSystemDropdown />
      </div>

      <div>
        <PCModelDropdown />
      </div>
    </div>
  );
}

export default App;
