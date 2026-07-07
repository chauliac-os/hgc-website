import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Le livre — Passion d'une claveciniste pour les générations à venir",
  description:
    "Le livre d'Huguette Grémy-Chauliac : Passion d'une claveciniste pour les générations à venir. Le récit d'une pionnière du clavecin, et de la femme derrière l'artiste.",
};

export default function Livre() {
  return (
    <div className="wrap">
      <section>
        <h1>Le livre</h1>
        <p className="lead" style={{ marginTop: "16px" }}>
          <em>Passion d&rsquo;une claveciniste pour les générations à venir.</em>
        </p>
      </section>

      <section>
        <Divider />
        <figure style={{ maxWidth: "420px", margin: "0 auto" }}>
          <Image
            src="/images/livre-couverture.jpg"
            alt="Couverture du livre : Huguette Grémy-Chauliac — Passion d'une claveciniste pour les générations à venir"
            width={900}
            height={1266}
            priority
          />
        </figure>
      </section>

      <section>
        <Divider />
        <h2>Quatrième de couverture</h2>
        <div style={{ marginTop: "12px" }}>
          <p>
            Il est des êtres qui traversent leur époque en laissant derrière eux bien
            davantage que des souvenirs. Huguette Grémy-Chauliac en fait partie.
          </p>
          <p>
            Claveciniste passionnée, pédagogue admirée et figure majeure du renouveau
            baroque en France, elle a consacré sa vie à retrouver l&rsquo;âme
            authentique des musiques des XVII<sup>e</sup> et XVIII<sup>e</sup> siècles.
            Bien avant que l&rsquo;interprétation historique ne devienne une référence,
            elle a redécouvert dans les manuscrits anciens les secrets du toucher et de
            l&rsquo;expression propres au clavecin, ouvrant une voie nouvelle à
            plusieurs générations de musiciens.
          </p>
          <p>Mais au-delà de l&rsquo;artiste et de la pionnière, ce livre révèle la femme&nbsp;!</p>
          <p>
            À travers l&rsquo;épouse, la mère, la grand-mère et
            l&rsquo;arrière-grand-mère, elle a souhaité transmettre à sa descendance et
            à ses amis ce qui a donné sens à son existence. Au fil des pages
            apparaissent les rencontres, les amitiés, la famille, les élèves, les
            concerts, les joies, les épreuves et les moments de grâce qui ont façonné un
            destin hors du commun.
          </p>
          <p>
            La musique ne s&rsquo;arrête pas lorsque le dernier accord s&rsquo;éteint.
            Elle continue de vivre dans les cœurs, dans l&rsquo;amour transmis aux
            générations à venir et dans l&rsquo;empreinte qu&rsquo;un artiste laisse à
            travers son œuvre. Lorsqu&rsquo;un artiste a donné le meilleur de lui-même,
            il devient, à sa manière, éternel.
          </p>
        </div>
      </section>

      <section>
        <Divider />
        <h2>Obtenir le livre</h2>
        <p style={{ margin: "12px 0" }}>
          Une version numérique (ebook) de l&rsquo;ouvrage est disponible. Pour recevoir
          le livre — papier ou numérique — écrivez-nous&nbsp;: voir la page{" "}
          <Link href="/contact/">contact</Link>.
        </p>
        <div className="placeholder">
          [À compléter — modalités de diffusion du livre (prix, envoi, ebook) à préciser
          avec l&rsquo;association PRESS.]
        </div>
      </section>

      <section>
        <Divider />
        <h2>Le livre se termine en musique</h2>
        <p style={{ margin: "12px 0" }}>
          Les dernières pages invitent à écouter le premier mouvement de la{" "}
          <em>Sonate au clair de lune</em>, enregistré au clavecin en 1972 et
          remasterisé au plus proche du son original du vinyle.
        </p>
        <p>
          <Link href="/ecouter/">Écouter →</Link>
        </p>
      </section>
    </div>
  );
}
