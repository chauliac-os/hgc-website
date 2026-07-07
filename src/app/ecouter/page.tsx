import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider";
import Player from "@/components/Player";

export const metadata: Metadata = {
  title: "Écouter — Huguette Grémy-Chauliac",
  description:
    "Beethoven, Sonate au clair de lune au clavecin — l'enregistrement de 1972 remasterisé. La page d'écoute du livre.",
};

export default function Ecouter() {
  return (
    <div className="wrap">
      <section className="hero">
        <Image
          src="/images/emblem-clavecin.png"
          alt=""
          width={56}
          height={56}
          className="emblem"
          priority
        />
        <h1 style={{ fontSize: "clamp(30px, 6vw, 44px)" }}>
          Pour conclure en musique
        </h1>
        <p className="lead" style={{ marginTop: "16px", textAlign: "left" }}>
          «&nbsp;Je vous propose d&rsquo;écouter le premier mouvement de la sonate au
          clair de lune de Beethoven, que Nicolas Bomsel vient de remasteriser au plus
          proche du son original du vinyle de 1972.&nbsp;»
        </p>
      </section>

      <section>
        <Player
          src="/audio/clair-de-lune.m4a"
          title="Beethoven — Sonate n°14, Adagio sostenuto, au clavecin"
        />
        <p className="caption" style={{ marginTop: "10px" }}>
          Beethoven — Sonate n°14 en ut dièse mineur, op. 27 n°2, «&nbsp;Clair de
          lune&nbsp;», 1<sup>er</sup> mouvement (Adagio sostenuto). Huguette
          Grémy-Chauliac, clavecin. Enregistrement 1972, remasterisation Nicolas Bomsel.
        </p>
      </section>

      <section>
        <Divider />
        <h2>L&rsquo;enregistrement de 1972</h2>
        <p style={{ margin: "12px 0 20px" }}>
          Beethoven au clavecin&nbsp;: dans le titre de la sonate «&nbsp;Au clair de
          lune&nbsp;», le manuscrit autographe porte «&nbsp;per Cembalo o
          Piano-Forte&nbsp;». Cet enregistrement révélait pour la première fois une
          exécution de ces sonates dans leur version clavecin — l&rsquo;une des deux
          possibilités proposées par Beethoven lui-même.
        </p>
        <figure style={{ maxWidth: "440px" }}>
          <Image
            src="/images/jacket-beethoven-1972.jpg"
            alt="Pochette du vinyle Beethoven / Sonates — Huguette Grémy-Chauliac, clavecin"
            width={800}
            height={827}
          />
          <figcaption className="caption" style={{ marginTop: "8px" }}>
            La pochette du vinyle de 1972 — Sonates n°14 «&nbsp;Clair de lune&nbsp;»,
            n°8 «&nbsp;Pathétique&nbsp;» et n°1.
          </figcaption>
        </figure>
      </section>

      <section>
        <Divider />
        <p>
          <Link href="/">← Retour à l&rsquo;accueil</Link> ·{" "}
          <Link href="/discographie/">Toute la discographie →</Link>
        </p>
      </section>
    </div>
  );
}
