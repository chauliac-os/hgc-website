import type { Metadata } from "next";
import Link from "next/link";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Conditions de vente — le livre d'Huguette Grémy-Chauliac",
  description:
    "Conditions générales de vente du livre imprimé et du livre numérique « Passion d'une claveciniste pour les générations à venir », vendus par l'association PRESS.",
};

export default function ConditionsDeVente() {
  return (
    <div className="wrap">
      <section>
        <h1>Conditions de vente</h1>
        <p className="caption" style={{ marginTop: "12px" }}>
          En vigueur au 15 novembre 2026.
        </p>
      </section>

      <section>
        <Divider />
        <h2>Le vendeur</h2>
        <p style={{ marginTop: "12px" }}>
          Les ventes sont faites par l&rsquo;association PRESS (Prévention Recherche
          Éducation à la Santé et la Solidarité), association loi 1901, 753 avenue de la
          Colle, Les Mimosas 18 – Hameaux du Soleil, 06270 Villeneuve-Loubet. Contact&nbsp;:{" "}
          <a href="mailto:bertrand.chauliac@gmail.com">bertrand.chauliac@gmail.com</a>.
        </p>
      </section>

      <section>
        <Divider />
        <h2>Les produits et les prix</h2>
        <ul style={{ marginTop: "12px", paddingLeft: "22px" }}>
          <li>
            Le livre imprimé <em>Passion d&rsquo;une claveciniste pour les générations à
            venir</em> (100 pages, 15 × 21 cm, ISBN 979-10-990059-0-8)&nbsp;: 20&nbsp;€.
          </li>
          <li>
            Le même livre en version numérique, au format PDF (ISBN 979-10-990059-1-5)&nbsp;:
            10&nbsp;€.
          </li>
          <li>
            Les frais d&rsquo;envoi du livre imprimé&nbsp;: 7&nbsp;€ par commande.
          </li>
        </ul>
        <p style={{ marginTop: "12px" }}>
          Les prix sont en euros, toutes taxes comprises. Le prix applicable est celui
          affiché au moment de la commande.
        </p>
      </section>

      <section>
        <Divider />
        <h2>La commande et le paiement</h2>
        <p style={{ marginTop: "12px" }}>
          La commande et le paiement se font en ligne sur HelloAsso, la plateforme de
          paiement de l&rsquo;association. Le paiement est débité au moment de la commande.
          HelloAsso propose une contribution volontaire à son propre fonctionnement&nbsp;:
          elle est facultative et ne revient pas à l&rsquo;association. Une confirmation de
          commande est envoyée par e-mail.
        </p>
      </section>

      <section>
        <Divider />
        <h2>L&rsquo;envoi du livre imprimé</h2>
        <p style={{ marginTop: "12px" }}>
          Le livre est envoyé en France métropolitaine, par La Poste, en lettre suivie, à
          l&rsquo;adresse indiquée lors de la commande. Il est expédié dans les 7 jours
          ouvrés qui suivent la commande. Les frais d&rsquo;envoi (7&nbsp;€) s&rsquo;ajoutent
          une fois par commande. Pour un envoi hors de France métropolitaine, écrivez-nous
          avant de commander. Le livre n&rsquo;est pas remis en main propre.
        </p>
      </section>

      <section>
        <Divider />
        <h2>Le livre numérique</h2>
        <p style={{ marginTop: "12px" }}>
          Le lien de téléchargement s&rsquo;affiche juste après le paiement et figure dans
          l&rsquo;e-mail de confirmation. Le fichier est destiné à l&rsquo;usage personnel de
          l&rsquo;acheteur. Il ne peut pas être partagé, revendu ni mis en ligne, car le livre
          est protégé par le droit d&rsquo;auteur.
        </p>
      </section>

      <section>
        <Divider />
        <h2>Le droit de rétractation</h2>
        <p style={{ marginTop: "12px" }}>
          <strong>Livre imprimé.</strong> Vous disposez de 14 jours à compter du lendemain
          de la réception du livre pour vous rétracter, sans avoir à donner de motif
          (articles L221-18 et suivants du Code de la consommation). Il suffit de nous
          l&rsquo;écrire. Vous renvoyez le livre dans les 14 jours suivants, à vos frais.
          Nous vous remboursons dans les 14 jours, par le même moyen de paiement, une fois
          le livre reçu ou la preuve de son envoi fournie.
        </p>
        <p>
          <strong>Livre numérique.</strong> Le fichier est fourni immédiatement après le
          paiement. En commandant, vous demandez expressément cette fourniture immédiate et
          vous renoncez à votre droit de rétractation (article L221-28, 13° du Code de la
          consommation). Une case à cocher vous le demande avant le paiement.
        </p>
      </section>

      <section>
        <Divider />
        <h2>Vos données</h2>
        <p style={{ marginTop: "12px" }}>
          Les informations données lors de la commande (nom, adresse, e-mail) servent
          uniquement à traiter et à envoyer votre commande. Elles ne sont ni vendues ni
          transmises à des tiers. Vous pouvez demander à les consulter, les corriger ou les
          supprimer en nous écrivant.
        </p>
      </section>

      <section>
        <Divider />
        <h2>Une question, un problème</h2>
        <p style={{ marginTop: "12px" }}>
          Écrivez-nous à{" "}
          <a href="mailto:bertrand.chauliac@gmail.com">bertrand.chauliac@gmail.com</a>
          &nbsp;: nous cherchons toujours une solution à l&rsquo;amiable. Ces conditions
          relèvent du droit français.
        </p>
        <p>
          <Link href="/livre/">← Retour au livre</Link>
        </p>
      </section>
    </div>
  );
}
