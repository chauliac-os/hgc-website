"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Accueil" },
  { href: "/biographie/", label: "Biographie" },
  { href: "/discographie/", label: "Discographie" },
  { href: "/medias/", label: "Médias" },
  { href: "/livre/", label: "Le livre" },
  { href: "/contact/", label: "Contact" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <header className="site">
      <div className="wrap">
        <Link href="/" className="masthead">
          <Image src="/images/emblem-clavecin.png" alt="" width={40} height={40} priority />
          <span className="name">
            <strong>Huguette Grémy-Chauliac</strong> · claveciniste
          </span>
        </Link>
        <nav className="site" aria-label="Navigation principale">
          <ul>
            {items.map((it) => {
              const current =
                it.href === "/" ? path === "/" : path.startsWith(it.href.replace(/\/$/, ""));
              return (
                <li key={it.href}>
                  <Link href={it.href} aria-current={current ? "page" : undefined}>
                    {it.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
