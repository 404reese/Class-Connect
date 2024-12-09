"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";


const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Notes",
    path: "/notes",
  },
  {
    title: "PYQ",
    path: "/pyq",
  },
  {
    title: "Question Bank",
    path: "/qb",
  },
  {
    title: "Resources",
    path: "/resources",
  },
  {
    title: "Shop",
    path: "/shop  ",
  },
  {
    title: "About Us",
    path: "/about",
  },
];

const Links = ({session}) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {/* {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )} */}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
