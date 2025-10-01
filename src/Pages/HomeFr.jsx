import { Helmet } from "react-helmet-async";

import HeroFr from "../Components/HeroFr";
import NavbarFr from "../Components/NavbarFr";
import TrustFr from "../Components/TrustFr";
import ProjectsFr from "../Components/ProjectsFr";
import ContactFr from "../Components/ContactFr";
import BrandFr from "../Components/BrandFr";
import FooterFr from "../Components/FooterFr";

const HomeFr = () => {
  const siteUrl = "https://toolelec.fr"; // Replace with real domain
  const pagePath = "/";
  const pageTitle = "Tool Elec - Accueil";
  const pageDescription =
    "Électricien Tarentaise 24h/7j - Dépannage, rénovation, domotique, bornes recharge. Équipe locale spécialisée montagne et industrie ski. Devis gratuit.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${siteUrl}${pagePath}`} />
        <link rel="alternate" href={`${siteUrl}/`} hrefLang="fr" />
        <link rel="alternate" href={`${siteUrl}/en`} hrefLang="en" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${siteUrl}/SmallLogo.jpg`} />
        <meta property="og:url" content={`${siteUrl}${pagePath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Tool Elec" />
      </Helmet>

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            name: "Tool Elec",
            image: "https://toolelec.fr/SmallLogo.jpg",
            "@id": "https://toolelec.fr/",
            url: "https://toolelec.fr/",
            telephone: "06 16 24 78 25",
            description:
              "Électricien Tarentaise - Dépannage, rénovation, domotique, bornes recharge. Disponibilité 24h/7j pour les urgences.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "0.5 Carene, Belle Plagne",
              addressLocality: "Tarentaise",
              postalCode: "73210",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 45.508809940481235,
              longitude: 6.70686872636202,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
            ],
            specialOpeningHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
                validFrom: new Date().toISOString().split("T")[0], // today
                validThrough: `${new Date().getFullYear()}-12-31`, // end of current year
                description: "Disponibilité 24h/7j pour les urgences",
              },
            ],
            sameAs: ["https://www.facebook.com/tool.elec"],
          })}
        </script>
      </Helmet>

      <NavbarFr />
      <HeroFr />
      <TrustFr />
      <ProjectsFr />
      <BrandFr />
      <ContactFr />
      <FooterFr />
    </>
  );
};

export default HomeFr;
