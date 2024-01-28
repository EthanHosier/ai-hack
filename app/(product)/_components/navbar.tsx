import { Logo } from "@/app/_components/templates/Logo";
import { Button } from "@/components/ui/button";
import { BarChart2, Home, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full shadow flex px-4 py-2 items-center justify-center">
      <div className="flex justify-between max-w-6xl flex-1 ">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div>
          <Button variant="ghost">
            <Home />
          </Button>
          <Button variant="ghost">
            <BarChart2 />
          </Button>
          <Button variant="ghost">
            <User />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
