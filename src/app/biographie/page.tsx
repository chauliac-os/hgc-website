import type { Metadata } from "next";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Biographie — Huguette Grémy-Chauliac",
  description:
    "Claveciniste, pionnière du renouveau baroque français, professeur de Scott Ross — la biographie d'Huguette Grémy-Chauliac.",
};

export default function Biographie() {
  return (
    <div className="wrap">
      <section>
        <h1>Biographie</h1>
        <p className="lead" style={{ marginTop: "16px" }}>
          Née le 8 juillet 1928 à Paris, Huguette Grémy-Chauliac est l&rsquo;une des
          pionnières du renouveau du clavecin en France.
        </p>
      </section>

      <section>
        <Divider />
        <h2>La pionnière</h2>
        <p style={{ marginTop: "12px" }}>
          Bien avant que l&rsquo;interprétation historique ne devienne une référence,
          elle redécouvre dans les manuscrits anciens les secrets du toucher et de
          l&rsquo;expression propres au clavecin. Elle est parmi les premières à
          réintroduire les ornements et les notes inégales, rendant leur authenticité
          aux musiques françaises des XVII<sup>e</sup> et XVIII<sup>e</sup> siècles, et
          parmi les premières à donner des récitals sur une copie d&rsquo;instrument du
          XVIII<sup>e</sup> siècle, réalisée par Hubert Bédard.
        </p>
        <p>
          Concertiste de renommée internationale, elle est l&rsquo;invitée des grands
          festivals de musique baroque, en soliste, en duo ou en ensemble. À partir de
          1961, elle est la claveciniste principale de l&rsquo;orchestre Antiqua Musica
          de Paris.
        </p>
      </section>

      <section>
        <Divider />
        <h2>Le professeur</h2>
        <p style={{ marginTop: "12px" }}>
          Pédagogue passionnée et recherchée, elle crée en 1963 la classe de clavecin du
          Conservatoire de Nice — la première de l&rsquo;établissement. Parmi ses
          nombreux élèves, Scott Ross reconnaissait volontiers son influence
          déterminante sur son jeu. Elle forme également Emmanuel Rousson, Vera Elliott,
          Philipp Sawyer et Cristina Orvieto, et siège aux jurys du Conservatoire de
          Paris et de concours internationaux.
        </p>
      </section>

      <section>
        <Divider />
        <h2>La femme</h2>
        <p style={{ marginTop: "12px" }}>
          Au-delà de l&rsquo;artiste et de la pionnière&nbsp;: l&rsquo;épouse, la mère,
          la grand-mère et l&rsquo;arrière-grand-mère. Son livre, <em>Passion
          d&rsquo;une claveciniste pour les générations à venir</em>, transmet à sa
          descendance et à ses amis ce qui a donné sens à son existence — les
          rencontres, les amitiés, la famille, les élèves, les concerts, les joies, les
          épreuves et les moments de grâce qui ont façonné un destin hors du commun.
        </p>
        <div className="placeholder" style={{ marginTop: "20px" }}>
          [À compléter — biographie détaillée et repères chronologiques, à partir du
          livre et des archives familiales.]
        </div>
      </section>
    </div>
  );
}
