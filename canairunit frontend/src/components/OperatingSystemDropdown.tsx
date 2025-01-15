import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

export default function OperatingSystemDropdown() {
  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="min-w-96">Operating System</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator className="w-96" />
            <DropdownMenuItem className="justify-center text-xl">Windows</DropdownMenuItem>
            <DropdownMenuItem className="justify-center text-xl">Mac</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
