import { Helmet } from "react-helmet-async";

import HeroEn from "../Components/ComponentsEn/HeroEn";
import NavBarEn from "../Components/ComponentsEn/NavBarEn";
import TrustEn from "../Components/ComponentsEn/TrustEn";
import ProjectsEn from "../Components/ComponentsEn/ProjectsEn";
import BrandEn from "../Components/ComponentsEn/BrandEn";
import FooterEn from "../Components/ComponentsEn/FooterEn";

import ContactEn from "../Components/ComponentsEn/ContactEn";

const HomeEn = () => {
  const siteUrl = "https://toolelec.fr"; // Update if your English pages use a subdomain

  const pageTitle = "Tool Elec - Home";
  const pageDescription =
    "Tarentaise Electrician 24/7 - Repairs, renovation, smart home, charging stations. Local team specialized in mountain and ski industry. Free quote.";

  return (
    <>
      <Helmet>
        {/* Set page language */}
        <html lang="en" />

        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${siteUrl}/en`} />
        <link rel="alternate" href={`${siteUrl}/`} hrefLang="fr" />
        <link rel="alternate" href={`${siteUrl}/en`} hrefLang="en" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${siteUrl}/SmallLogo.jpg`} />
        <meta property="og:url" content={`${siteUrl}/en`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
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
            telephone: "+33 6 16 24 78 25",
            description:
              "Tarentaise Electrician - Repairs, renovation, smart home, charging stations. Available 24/7 for emergencies.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "0.5 Carene, Belle Plagne",
              addressLocality: "La Plagne-Tarentaise",
              addressRegion: "Auvergne-Rhône-Alpes",
              postalCode: "73210",
              addressCountry: "FR",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 45.508809940481235,
                longitude: 6.70686872636202,
              },
              geoRadius: "100000", // 100km radius
            },
            openingHoursSpecification: {
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
            },

            sameAs: ["https://www.facebook.com/tool.elec"],
          })}
        </script>
      </Helmet>

      <NavBarEn />
      <HeroEn />
      <TrustEn />
      <ProjectsEn />
      <BrandEn />
      <ContactEn />
      <FooterEn />
    </>
  );
};

export default HomeEn;
