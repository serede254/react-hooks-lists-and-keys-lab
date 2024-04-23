import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link.toLowerCase()}`}>
          {link.toLowerCase()}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
