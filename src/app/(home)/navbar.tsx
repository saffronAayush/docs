import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import SearchInpute from "./search-input";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between h-full w-full">
      <div className=" flex gap-3 items-center shrink-0 pr-6">
        <Link href={"/"}>
          <Image src={"/loOgo.svg"} alt="logo" width={36} height={36} />
        </Link>
        <div className=" text-xl">Docs</div>
      </div>
      <SearchInpute />
      <div className="flex gap-3 items-center pl-6">
        <OrganizationSwitcher
          afterCreateOrganizationUrl={"/"}
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl={"/"}
          afterSelectPersonalUrl={"/"}
        />
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
