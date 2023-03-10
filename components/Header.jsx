import Image from "next/image";
import React from "react";
import HeaderItem from "../components/HeaderItem";
import Link from "next/link";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header
      className="flex flex-col sm:flex-row m-5 justify-between
    items-center h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
     <Link href={'/'}><HeaderItem title="HOME" Icon={HomeIcon} /></Link>
        
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
      <Link href={'/Profile'}><HeaderItem title="ACCOUNT" Icon={UserIcon} /></Link>
      
        
      </div>

      <Image
        className="object-contain"
        src="/aio-logo_v2.svg"
        alt="logo"
        width={100}
        height={50}
      />
    </header>
  );
};

export default Header;
