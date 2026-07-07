import type { Metadata } from "next";
import Image from "next/image";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Discographie — Huguette Grémy-Chauliac",
  description:
    "La discographie d'Huguette Grémy-Chauliac : Beethoven au clavecin, Louis Couperin, Dieupart, Jacquet de la Guerre, Bach — vinyles, CD et plateformes.",
};

export default function Discographie() {
  return (
    <div className="wrap">
      <section>
        <h1>Discographie</h1>
        <p className="lead" style={{ marginTop: "16px" }}>
          Une discographie abondante, saluée par la critique et couronnée de plusieurs
          Diapasons d&rsquo;Or, largement consacrée aux pages méconnues de la musique
          française pour clavecin.
        </p>
        <p className="caption" style={{ marginTop: "10px" }}>
          Les enregistrements numérisés et les pochettes sont progressivement ajoutés à
          cette page.
        </p>
      </section>

      <section>
        <Divider />
        <ul className="disco">
          <li>
            <figure>
              <Image
                src="/images/jacket-beethoven-1972.jpg"
                alt="Pochette du vinyle Beethoven / Sonates — Huguette Grémy-Chauliac, clavecin"
                width={800}
                height={827}
              />
            </figure>
            <div className="meta">
              <p className="title">Beethoven — Sonates n°14 «&nbsp;Clair de lune&nbsp;», n°8 «&nbsp;Pathétique&nbsp;», n°1</p>
              <p className="caption">Au clavecin · vinyle, 1972</p>
            </div>
          </li>
          <li>
            <div className="placeholder">[Pochette à venir]</div>
            <div className="meta">
              <p className="title">Louis Couperin — Suites</p>
              <p className="caption">Lygia Digital, 2006</p>
            </div>
          </li>
          <li>
            <div className="placeholder">[Pochette à venir]</div>
            <div className="meta">
              <p className="title">Charles Dieupart — Six Suites</p>
              <p className="caption">Arion / Pierre Vérany, 1999</p>
            </div>
          </li>
          <li>
            <div className="placeholder">[Pochette à venir]</div>
            <div className="meta">
              <p className="title">Élisabeth Jacquet de la Guerre — Cantates</p>
              <p className="caption">Pierre Vérany, 2001</p>
            </div>
          </li>
          <li>
            <div className="placeholder">[Pochette à venir]</div>
            <div className="meta">
              <p className="title">Jean-Sébastien Bach — Concertos pour clavecin</p>
              <p className="caption">[Références et années à confirmer]</p>
            </div>
          </li>
          <li>
            <div className="placeholder">
              [À compléter — la collection numérisée des CD et vinyles, avec photos des
              jaquettes, est en cours de préparation.]
            </div>
          </li>
        </ul>
      </section>

      <section>
        <Divider />
        <h2>Sur les plateformes</h2>
        <p style={{ margin: "12px 0" }}>
          Une grande partie de la discographie est référencée et disponible en ligne&nbsp;:
        </p>
        <ul style={{ listStyle: "none" }}>
          <li style={{ padding: "6px 0" }}>
            <a href="https://www.discogs.com/artist/3099144-Huguette-Gremy-Chauliac" rel="noopener">Discogs — le catalogue des éditions</a>
          </li>
          <li style={{ padding: "6px 0" }}>
            <a href="https://music.apple.com/fr/artist/huguette-gr%C3%A9my-chauliac/250636909" rel="noopener">Apple Music</a>
          </li>
          <li style={{ padding: "6px 0" }}>
            <a href="https://www.deezer.com/fr/artist/1023250" rel="noopener">Deezer</a>
          </li>
          <li style={{ padding: "6px 0" }}>
            <a href="https://tidal.com/browse/artist/5543760" rel="noopener">Tidal</a>
          </li>
          <li style={{ padding: "6px 0" }}>
            <span className="caption">[Liens Qobuz, Spotify et YouTube à confirmer]</span>
          </li>
        </ul>
      </section>

      <section>
        <Divider />
        <h2>Recevoir les enregistrements</h2>
        <p style={{ margin: "12px 0" }}>
          Des vinyles, CD et autres documents peuvent être obtenus à prix coûtant, dans
          la limite des stocks disponibles — voir la page{" "}
          <a href="../contact/">contact</a>.
        </p>
      </section>
    </div>
  );
}
