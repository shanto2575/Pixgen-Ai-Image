"use client";
import Image from "next/image";
import Link from "next/link";
import avater from '../../../asset/avater.jpg'
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import NavLink from "./NavLink";

const Navbar = () => {
  const { data: session, isPending, } = authClient.useSession()
  // console.log(session,'session')
  const user = session?.user;
  return (
    <div className="border-b px-2 my-6">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-photo"}>All Photos</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>Profile</NavLink>
          </li>
        </ul>

        <div>
          {isPending ? (
            <span className="loading loading-infinity loading-md text-accent"></span>
          )
            : user ? <div className="flex items-center justify-between gap-4">
              <p>Hi , {user.name}</p>
              <Image
                src={user.image || avater}
                height={400}
                width={400}
                alt="avater"
                className="w-8 h-8 object-cover rounded-full"
              />
              <Button className='rounded' onClick={async () => await authClient.signOut()}>Log Out</Button>
            </div>
              :
              <div>
                <Link href={"/signin"} className="bg-orange-900 rounded text-white font-semibold p-2">Log In</Link>
              </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;