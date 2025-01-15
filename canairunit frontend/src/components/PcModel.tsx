import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

export default function PCModelDropdown() {
  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="min-w-96">PC Model</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator className="w-96" />
            <DropdownMenuItem className="justify-center text-xl">Dell XPS</DropdownMenuItem>
            <DropdownMenuItem className="justify-center text-xl">Macbook Pro</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
