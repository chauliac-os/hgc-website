import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <Image src="/images/emblem-clavecin.png" alt="" width={34} height={34} className="emblem" />
        <p>
          Association PRESS — pour la conservation et la transmission du patrimoine musical
          d&rsquo;Huguette Grémy-Chauliac.
        </p>
        <nav aria-label="Liens">
          <a href="https://www.instagram.com/huguettegremychauliac" rel="noopener">Instagram</a>
          <a href="mailto:HuguetteGremyChauliac@gmail.com">HuguetteGremyChauliac@gmail.com</a>
        </nav>
      </div>
    </footer>
  );
}
