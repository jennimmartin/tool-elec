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
  const pageTitle = "Accueil - Tool Elec";
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
