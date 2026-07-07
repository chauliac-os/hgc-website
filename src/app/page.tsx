import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider";
import Player from "@/components/Player";

export default function Accueil() {
  return (
    <div className="wrap">
      {/* ------- Hero ------- */}
      <section className="hero">
        <Image
          src="/images/emblem-clavecin.png"
          alt=""
          width={56}
          height={56}
          className="emblem"
          priority
        />
        <h1>Huguette Grémy-Chauliac</h1>
        <p className="role">Claveciniste</p>
        <p className="lead" style={{ marginTop: "18px" }}>
          Pionnière du renouveau du clavecin français, figure majeure du retour à
          l&rsquo;interprétation historique des musiques des XVII<sup>e</sup> et
          XVIII<sup>e</sup> siècles, professeur de Scott Ross.
        </p>
        <figure>
          <Image
            src="/images/portrait-1948.jpg"
            alt="Huguette Grémy-Chauliac au clavier, photographie en noir et blanc"
            width={1796}
            height={1669}
            priority
          />
          <figcaption className="caption" style={{ marginTop: "8px" }}>
            Photographie de couverture du livre.
          </figcaption>
        </figure>
      </section>

      {/* ------- Le livre ------- */}
      <section>
        <Divider />
        <h2>Vous arrivez du livre&nbsp;? Bienvenue.</h2>
        <p style={{ marginTop: "12px" }}>
          Ce site prolonge <em>Passion d&rsquo;une claveciniste pour les générations à
          venir</em>. Des photographies, documents d&rsquo;archives, témoignages,
          enregistrements et vidéos y sont progressivement mis à disposition&nbsp;:
          des extraits de concerts, des souvenirs, et des ressources pour découvrir ou
          redécouvrir son parcours.
        </p>
        <p>
          <Link href="/livre/">Découvrir le livre →</Link>
        </p>
      </section>

      {/* ------- Écouter ------- */}
      <section>
        <Divider />
        <h2>Pour conclure en musique</h2>
        <p style={{ margin: "12px 0 18px" }}>
          Le premier mouvement de la <em>Sonate au clair de lune</em> de Beethoven,
          enregistré au clavecin en 1972, remasterisé par Nicolas Bomsel au plus proche
          du son original du vinyle.
        </p>
        <Player
          src="/audio/clair-de-lune.m4a"
          title="Beethoven — Sonate n°14, Adagio sostenuto, au clavecin"
        />
        <p className="caption" style={{ marginTop: "10px" }}>
          Beethoven — Sonate n°14 en ut dièse mineur, op. 27 n°2, «&nbsp;Clair de
          lune&nbsp;», 1<sup>er</sup> mouvement (Adagio sostenuto). Huguette
          Grémy-Chauliac, clavecin. Enregistrement 1972, remasterisation Nicolas Bomsel.
        </p>
        <p style={{ marginTop: "10px" }}>
          <Link href="/ecouter/">La page d&rsquo;écoute →</Link>
        </p>
      </section>

      {/* ------- Discographie ------- */}
      <section>
        <Divider />
        <h2>Discographie</h2>
        <p style={{ margin: "12px 0 20px" }}>
          Une discographie abondante, saluée par la critique et couronnée de plusieurs
          Diapasons d&rsquo;Or — largement consacrée aux pages méconnues de la musique
          française pour clavecin.
        </p>
        <ul className="disco">
          <li>
            <figure>
              <Image
                src="/images/jacket-beethoven-1972.jpg"
                alt="Pochette du vinyle Beethoven / Sonates, Huguette Grémy-Chauliac, clavecin"
                width={800}
                height={827}
              />
            </figure>
            <div className="meta">
              <p className="title">Beethoven — Sonates n°14, n°8 &amp; n°1</p>
              <p className="caption">Au clavecin · vinyle, 1972</p>
            </div>
          </li>
          <li>
            <div className="meta">
              <p className="title">Louis Couperin — Suites</p>
              <p className="caption">Lygia Digital, 2006</p>
              <p className="title" style={{ marginTop: "14px" }}>Charles Dieupart — Six Suites</p>
              <p className="caption">Arion / Pierre Vérany, 1999</p>
              <p className="title" style={{ marginTop: "14px" }}>
                Élisabeth Jacquet de la Guerre — Cantates
              </p>
              <p className="caption">Pierre Vérany, 2001</p>
            </div>
          </li>
        </ul>
        <p style={{ marginTop: "18px" }}>
          <Link href="/discographie/">Toute la discographie →</Link>
        </p>
      </section>

      {/* ------- Recevoir des enregistrements ------- */}
      <section>
        <Divider />
        <h2>Recevoir des enregistrements</h2>
        <p style={{ margin: "12px 0 18px" }}>
          Des disques vinyles, CD et autres documents consacrés à Huguette
          Grémy-Chauliac peuvent être obtenus à prix coûtant, dans la limite des stocks
          disponibles.
        </p>
        <p>
          <Link href="/contact/">Toute demande — la page contact →</Link>
        </p>
      </section>

      {/* ------- Soutenir ------- */}
      <section>
        <Divider />
        <h2>Soutenir</h2>
        <p style={{ margin: "12px 0" }}>
          Vous pouvez contribuer à la conservation, à la numérisation et à la
          pérennisation de ce patrimoine musical par un don à l&rsquo;association PRESS.
        </p>
        <p>
          <a
            href="https://www.helloasso.com/associations/prevention-recherche-education-a-la-sante-et-la-solidarite/boutiques/huguette-gremy-chauliac"
            rel="noopener"
          >
            Faire un don via HelloAsso →
          </a>
        </p>
      </section>
    </div>
  );
}
