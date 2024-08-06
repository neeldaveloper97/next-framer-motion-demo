"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/NavbarMenu";
import { cn } from "../../../lib/utils";
import Link from "next/link";
import LanguageToggleButton from "../LanguageSwitcher";

export default function Navbar() {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 navbar")}>
      <Menu setActive={setActive}>
        <Link href={"/en"}>
          <MenuItem setActive={setActive} active={false} item="Home">
          </MenuItem>
        </Link>
        <Link href={"/en/pricing"}>
          {" "}
          <MenuItem setActive={setActive} active={false} item="Pricing">
          </MenuItem>
        </Link>
          <Link href={"/en/editor"}>
            <MenuItem setActive={setActive} active={false} item="Create Blog">
            </MenuItem>
          </Link>
        
      <LanguageToggleButton />
      </Menu>
    </div>
  );
}
