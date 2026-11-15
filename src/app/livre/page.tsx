import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Le livre — Passion d'une claveciniste pour les générations à venir",
  description:
    "Le livre d'Huguette Grémy-Chauliac : Passion d'une claveciniste pour les générations à venir. Le récit d'une pionnière du clavecin, et de la femme derrière l'artiste.",
};

const BOUTIQUE_LIVRE =
  "https://www.helloasso.com/associations/prevention-recherche-education-a-la-sante-et-la-solidarite/boutiques/huguette-gremy-chauliac";
const BOUTIQUE_EBOOK =
  "https://www.helloasso.com/associations/prevention-recherche-education-a-la-sante-et-la-solidarite/boutiques/ebook-passion-d-une-claveciniste-huguette-gremy-chauliac";

const FEUILLETS = [
  { src: "/images/livre-page-12.jpg", alt: "Page 12 : Huguette Grémy-Chauliac jeune, au piano", legende: "Page 12" },
  { src: "/images/livre-page-14.jpg", alt: "Page 14 : premier chapitre, « Aux origines de ma vocation »", legende: "Aux origines de ma vocation" },
  { src: "/images/livre-page-85.jpg", alt: "Page 85 : « À recevoir chez vous si vous le désirez »", legende: "À recevoir chez vous" },
  { src: "/images/livre-quatrieme.jpg", alt: "Quatrième de couverture du livre", legende: "Quatrième de couverture" },
];

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
        <h2>Feuilleter le livre</h2>
        <ul className="feuillet" style={{ marginTop: "16px" }}>
          {FEUILLETS.map((f) => (
            <li key={f.src}>
              <figure>
                <Image src={f.src} alt={f.alt} width={599} height={843} />
                <figcaption className="caption">{f.legende}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <Divider />
        <h2>Obtenir le livre</h2>
        <ul className="offres" style={{ marginTop: "16px" }}>
          <li className="contact-card">
            <h3>Le livre imprimé</h3>
            <p className="prix">20&nbsp;€</p>
            <p className="caption">
              100 pages, 15 × 21 cm, couleur, papier couché brillant.
              <br />
              ISBN 979-10-990059-0-8.
            </p>
            <p className="caption">
              Envoi par La Poste en lettre suivie, en France métropolitaine&nbsp;: 7&nbsp;€
              par commande. Pensez à ajouter les frais d&rsquo;envoi à votre panier.
            </p>
            <p>
              <a href={BOUTIQUE_LIVRE} rel="noopener">
                Commander le livre sur HelloAsso →
              </a>
            </p>
          </li>
          <li className="contact-card">
            <h3>Le livre numérique</h3>
            <p className="prix">10&nbsp;€</p>
            <p className="caption">
              Le livre complet en PDF, avec sa couverture en couleur. Lisible sur ordinateur,
              tablette et téléphone.
              <br />
              ISBN 979-10-990059-1-5.
            </p>
            <p className="caption">
              Le lien de téléchargement s&rsquo;affiche juste après le paiement et vous est
              envoyé dans l&rsquo;e-mail de confirmation.
            </p>
            <p>
              <a href={BOUTIQUE_EBOOK} rel="noopener">
                Acheter l&rsquo;ebook sur HelloAsso →
              </a>
            </p>
          </li>
        </ul>
        <p className="caption" style={{ marginTop: "16px" }}>
          Paiement sécurisé par HelloAsso, au profit de l&rsquo;association PRESS.
          Voir les <Link href="/conditions-de-vente/">conditions de vente</Link>. Une
          question&nbsp;? <Link href="/contact/">Écrivez-nous</Link>.
        </p>
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
