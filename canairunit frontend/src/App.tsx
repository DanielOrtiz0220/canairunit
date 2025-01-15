import "./App.css";
import OperatingSystemDropdown from "./components/OperatingSystemDropdown";
import PCModelDropdown from "./components/PcModel";
import { ProcessorInput } from "./components/ProcessorInput";
import { MemoryInput } from "./components/MemoryInput";
import { GraphicsCardInput } from "./components/GraphicsCardInput";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-2xl gap-32 mx-auto pb-10">
        <div>
          <OperatingSystemDropdown />
        </div>
        <div>
          <PCModelDropdown />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-3xl pb-10">OR</div>
      <div className="flex flex-col gap-16 justify-center items-center mx-auto w-96">
        <ProcessorInput />
        <GraphicsCardInput />
        <MemoryInput />
      </div>
    </div>
  );
}

export default App;
