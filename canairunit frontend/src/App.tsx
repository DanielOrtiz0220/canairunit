import "./App.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

function App() {
  return (
    <>
      {/* <div className="min-h-screen flex flex-col"> */}
      <div className="min-h-screen text-2xl justify-center grid place-items-center">
        {/* flex flex-row min-h-screen justify-center items-center */}
        <DropdownMenu>
          <DropdownMenuTrigger className="min-w-96">Operating System</DropdownMenuTrigger>

          <DropdownMenuContent>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            <DropdownMenuSeparator className="w-96" />
            <DropdownMenuItem className="justify-center text-xl">Windows</DropdownMenuItem>
            <DropdownMenuItem className="justify-center text-xl">Mac</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
