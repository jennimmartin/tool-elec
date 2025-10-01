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

  const pageTitle = "Home - Tool Elec";
  const pageDescription =
    "Tarentaise Electrician 24/7 - Repairs, renovation, smart home, charging stations. Local team specialized in mountain and ski industry. Free quote.";

  return (
    <>
      <Helmet>
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
