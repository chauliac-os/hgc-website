import type { Metadata } from "next";
import Image from "next/image";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Médias — Huguette Grémy-Chauliac",
  description:
    "Photographies, vidéos, émissions de radio et archives d'Huguette Grémy-Chauliac, claveciniste.",
};

export default function Medias() {
  return (
    <div className="wrap">
      <section>
        <h1>Médias</h1>
        <p className="lead" style={{ marginTop: "16px" }}>
          Photographies, vidéos, émissions de radio et archives — mis en ligne
          progressivement.
        </p>
      </section>

      <section>
        <Divider />
        <h2>Vidéo</h2>
        <p style={{ margin: "12px 0" }}>
          Le cadeau musical des 95 ans — enregistrement du concert du 8 juillet 2023.
        </p>
        <div className="placeholder">
          [Vidéo YouTube à intégrer — lien à confirmer. Un film-portrait est par
          ailleurs en préparation&nbsp;; il sera ajouté après sa présentation
          officielle.]
        </div>
      </section>

      <section>
        <Divider />
        <h2>À la radio</h2>
        <p style={{ margin: "12px 0" }}>
          Deux émissions de Radio France lui sont consacrées et restent disponibles à
          l&rsquo;écoute.
        </p>
        <div className="placeholder">
          [Liens Radio France à confirmer — émissions disponibles sur radiofrance.fr.]
        </div>
      </section>

      <section>
        <Divider />
        <h2>Photographies</h2>
        <ul className="gallery" style={{ marginTop: "16px" }}>
          <li>
            <figure>
              <Image
                src="/images/portrait-1948.jpg"
                alt="Huguette Grémy-Chauliac au clavier, photographie en noir et blanc"
                width={1796}
                height={1669}
              />
              <figcaption className="caption" style={{ marginTop: "6px" }}>
                La photographie de couverture du livre.
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Image
                src="/images/hgc-au-clavecin.jpg"
                alt="Huguette Grémy-Chauliac au clavecin, crayon à la main"
                width={2984}
                height={2436}
              />
              <figcaption className="caption" style={{ marginTop: "6px" }}>
                Au clavecin, crayon à la main. [Légende à préciser]
              </figcaption>
            </figure>
          </li>
        </ul>
        <div className="placeholder" style={{ marginTop: "20px" }}>
          [Galerie en cours de constitution — les photographies d&rsquo;archives du
          livre et de la famille seront ajoutées ici.]
        </div>
      </section>

      <section>
        <Divider />
        <h2>Archives</h2>
        <p style={{ margin: "12px 0" }}>
          L&rsquo;ancien site <em>Œuvres de clavecin</em> n&rsquo;existe plus&nbsp;;
          une capture de 2019 en est conservée par la Wayback Machine&nbsp;:
        </p>
        <p>
          <a
            href="https://web.archive.org/web/20190605191258/http://oeuvresdeclavecin.com/"
            rel="noopener"
          >
            oeuvresdeclavecin.com — capture du 5 juin 2019 →
          </a>
        </p>
      </section>
    </div>
  );
}
