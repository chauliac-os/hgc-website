import type { Metadata } from "next";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Contact — Huguette Grémy-Chauliac",
  description:
    "Recevoir des enregistrements, obtenir le livre, soutenir la conservation du patrimoine musical d'Huguette Grémy-Chauliac — association PRESS.",
};

export default function Contact() {
  return (
    <div className="wrap">
      <section>
        <h1>Contact</h1>
        <p className="lead" style={{ marginTop: "16px" }}>
          Recevoir des enregistrements, obtenir le livre, proposer un témoignage ou une
          archive — écrivez-nous.
        </p>
      </section>

      <section>
        <Divider />
        <h2>Recevoir des enregistrements</h2>
        <p style={{ margin: "12px 0 18px" }}>
          Des disques vinyles, CD et autres documents consacrés à Huguette
          Grémy-Chauliac peuvent être obtenus à prix coûtant, dans la limite des stocks
          disponibles.
        </p>
        <div className="contact-card">
          <p><strong>Bertrand Chauliac</strong></p>
          <p>Président de l&rsquo;association PRESS</p>
          <p>753, avenue de la Colle — Mimosas 18</p>
          <p>06270 Villeneuve-Loubet, France</p>
          <p style={{ marginTop: "12px" }}>
            ✉ <a href="mailto:HuguetteGremyChauliac@gmail.com">HuguetteGremyChauliac@gmail.com</a>
          </p>
          <p>
            ✉ <a href="mailto:bertrand.chauliac@gmail.com">bertrand.chauliac@gmail.com</a>
          </p>
          <p>☎ +33 (0)6 60 56 69 54</p>
        </div>
      </section>

      <section>
        <Divider />
        <h2>Soutenir</h2>
        <p style={{ margin: "12px 0" }}>
          Vous pouvez contribuer à la conservation, à la numérisation et à la
          pérennisation de ce patrimoine musical par un don à l&rsquo;association PRESS,
          via HelloAsso.
        </p>
        <p>
          <a
            href="https://www.helloasso.com/associations/prevention-recherche-education-a-la-sante-et-la-solidarite/boutiques/huguette-gremy-chauliac"
            rel="noopener"
          >
            La page HelloAsso de l&rsquo;association →
          </a>
        </p>
      </section>

      <section>
        <Divider />
        <h2>Suivre</h2>
        <p style={{ margin: "12px 0" }}>
          <a href="https://www.instagram.com/huguettegremychauliac" rel="noopener">
            Instagram — @huguettegremychauliac →
          </a>
        </p>
      </section>
    </div>
  );
}
