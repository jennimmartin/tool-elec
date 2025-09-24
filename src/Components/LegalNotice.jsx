const CONFIG = {
  companyName: "Tool Elec",
  legalForm: "SAS", // choose one
  siret: "84124642400011", // delete if not applicable
  vat: "FR74 841246424", // delete if not applicable
  rcs: "Chambéry", // delete if not applicable
  address: "0.5 Carene, 73210 LA PLAGNE TARENTAISE", // add company address
  contactEmail: "toolelec73@gmail.com", // official email
  contactPhone: "+33 6 16 24 78 25", // optional
  director: "Cédric Lassabliere",
  host: {
    name: "Netlify",
    location: "San Francisco, USA",
  },
  analytics:
    "Simple Analytics (privacy-friendly, no cookies, no personal data stored)",
  lastUpdated: "September 2025",
};

export default function LegalNotice() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-10  text-zinc-300 font-light leading-loose">
      {/* French Version */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Mentions Légales</h2>
        <p>
          <strong>Raison sociale :</strong> {CONFIG.companyName}
        </p>
        <p>
          <strong>Forme juridique :</strong> {CONFIG.legalForm}
        </p>
        {CONFIG.siret && (
          <p>
            <strong>SIRET :</strong> {CONFIG.siret}
          </p>
        )}
        {CONFIG.vat && (
          <p>
            <strong>Numéro de TVA :</strong> {CONFIG.vat}
          </p>
        )}
        {CONFIG.rcs && (
          <p>
            <strong>RCS :</strong> {CONFIG.rcs}
          </p>
        )}
        <p>
          <strong>Adresse :</strong> {CONFIG.address}
        </p>
        <p>
          <strong>Email :</strong> {CONFIG.contactEmail}
        </p>
        {CONFIG.contactPhone && (
          <p>
            <strong>Téléphone :</strong> {CONFIG.contactPhone}
          </p>
        )}
        <p>
          <strong>Directeur de la publication :</strong> {CONFIG.director}
        </p>
        <p>
          <strong>Hébergeur :</strong> {CONFIG.host.name},{" "}
          {CONFIG.host.location}
        </p>

        <h3 className="text-lg mt-4 font-bold">Objet</h3>
        <p>
          Ce site a pour but de fournir des informations sur les services de{" "}
          {CONFIG.companyName}. Aucune transaction commerciale n’est effectuée
          via ce site.
        </p>

        <h3 className="text-lg mt-4 font-bold">Statistiques</h3>
        <p>
          Ce site utilise {CONFIG.analytics}. Aucun cookie n’est déposé et
          aucune donnée personnelle n’est collectée.
        </p>

        <h3 className="text-lg mt-4 font-bold">Données personnelles</h3>
        <p>
          La prise de contact se fait directement par email via votre propre
          messagerie. Par conséquent, aucune donnée personnelle n’est stockée
          par ce site. Les informations que vous envoyez par email sont
          utilisées uniquement pour répondre à votre demande, conformément au
          RGPD.
        </p>

        <h3 className="text-lg mt-4 font-bold">Propriété intellectuelle</h3>
        <p>
          L’ensemble du contenu de ce site (textes, images, logo) est la
          propriété de {CONFIG.companyName}, sauf mention contraire. Toute
          reproduction ou diffusion sans autorisation préalable est interdite.
        </p>
        <h3 className="text-lg mt-4 font-bold">Contenu tiers</h3>
        <p>
          Les logos, marques et autres éléments visuels tiers présentés sur ce
          site restent la propriété de leurs détenteurs respectifs. Leur
          utilisation sur ce site est à titre informatif ou illustratif
          uniquement et n’implique aucune affiliation, approbation ou
          partenariat officiel.
        </p>

        <h3 className="text-lg mt-4 font-bold">Responsabilité</h3>
        <p>
          Les informations fournies sur ce site le sont à titre indicatif.
          Malgré le soin apporté à leur exactitude, {CONFIG.companyName} ne
          saurait être tenu responsable des erreurs, omissions ou de l’usage qui
          en est fait.
        </p>

        <p className="text-sm mt-6 text-zinc-500">
          Dernière mise à jour : {CONFIG.lastUpdated}
        </p>
      </section>
      {/* English Version */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Legal Notice</h2>
        <p>
          <strong>Company name:</strong> {CONFIG.companyName}
        </p>
        <p>
          <strong>Legal form:</strong> {CONFIG.legalForm}
        </p>
        {CONFIG.siret && (
          <p>
            <strong>SIRET:</strong> {CONFIG.siret}
          </p>
        )}
        {CONFIG.vat && (
          <p>
            <strong>VAT number:</strong> {CONFIG.vat}
          </p>
        )}
        {CONFIG.rcs && (
          <p>
            <strong>RCS:</strong> {CONFIG.rcs}
          </p>
        )}
        <p>
          <strong>Address:</strong> {CONFIG.address}
        </p>
        <p>
          <strong>Email:</strong> {CONFIG.contactEmail}
        </p>
        {CONFIG.contactPhone && (
          <p>
            <strong>Phone:</strong> {CONFIG.contactPhone}
          </p>
        )}
        <p>
          <strong>Director of publication:</strong> {CONFIG.director}
        </p>
        <p>
          <strong>Hosting provider:</strong> {CONFIG.host.name},{" "}
          {CONFIG.host.location}
        </p>

        <h3 className="text-lg mt-4 font-bold">Purpose</h3>
        <p>
          This website provides information about {CONFIG.companyName}’s
          services. No commercial transactions are carried out on this site.
        </p>

        <h3 className="text-lg mt-4 font-bold">Analytics</h3>
        <p>
          This site uses {CONFIG.analytics}. No cookies are set, and no
          personally identifiable information is collected.
        </p>

        <h3 className="text-lg mt-4 font-bold">Personal Data</h3>
        <p>
          Contact is made directly by email via your own email client. As a
          result, no personal data is stored on this site. Any personal
          information you choose to send by email will be processed solely for
          the purpose of responding to your request, in accordance with GDPR.
        </p>

        <h3 className="text-lg mt-4 font-bold">Intellectual Property</h3>
        <p>
          All content on this site (text, images, logo) is the property of{" "}
          {CONFIG.companyName}, unless otherwise stated. Any reproduction or
          distribution without prior authorization is prohibited.
        </p>
        <h3 className="text-lg mt-4 font-bold">Third-Party Content</h3>
        <p>
          Logos, trademarks, and other third-party visuals displayed on this
          site remain the property of their respective owners. Their use on this
          site is for informational or illustrative purposes only and does not
          imply any affiliation, sponsorship, or endorsement.
        </p>

        <h3 className="text-lg mt-4 font-bold">Liability</h3>
        <p>
          The information on this site is provided for informational purposes
          only. While every effort is made to ensure accuracy,{" "}
          {CONFIG.companyName} cannot be held responsible for errors, omissions,
          or the use made of this information.
        </p>

        <p className="text-sm mt-6  text-zinc-500 font-light leading-loose">
          Last updated: {CONFIG.lastUpdated}
        </p>
      </section>
    </div>
  );
}
