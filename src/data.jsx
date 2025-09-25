import { nanoid } from "nanoid";

import generalImg from "./Images/general-photo.jpg";
import renoImg from "./Images/reno-photo.jpg";
import maintImg from "./Images/maint-photo.jpg";
import autoImg from "./Images/auto-photo.jpg";
import newImg from "./Images/new-photo.jpg";
import chargingImg from "./Images/charging-photo.jpg";

import battImg from "./Images/batt-logo.png";
import bobImg from "./Images/bob-logo.png";
import cheyImg from "./Images/cheyenne-logo.png";

export const FrLinks = [
  { id: nanoid(), href: "#home", text: "Accueil" },
  { id: nanoid(), href: "#projects", text: "Nos Spécialités" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const FrTrust = [
  { id: nanoid(), img: bobImg, title: "" },
  { id: nanoid(), img: cheyImg, title: "" },
  {
    id: nanoid(),
    img: battImg,
    title: "logo",
  },
];

export const FrProjects = [
  {
    id: nanoid(),
    img: generalImg,
    title: "Dépannage",
    text: "Quel que soit le problème, petit ou grand, nous avons les compétences nécessaires pour le résoudre rapidement et en toute sécurité.",
    textb: "",
    cta: "Nous attendons votre appel.",
  },
  {
    id: nanoid(),
    img: maintImg,
    title: "Maintenance",
    text: "Besoin de quelqu’un sur qui compter — surtout en cas d’urgence ? Grâce à plusieurs électriciens disponibles, nous pouvons intervenir rapidement.",
    textb:
      "Nos contrats de maintenance sont adaptés aux besoins de votre entreprise.",
    cta: "",
  },
  {
    id: nanoid(),
    img: renoImg,
    title: "Rénovation",
    text: "Vous cherchez une équipe capable de s’adapter aux défis de votre chantier ?",
    textb:
      "Tool Elec possède les compétences nécessaires pour réaliser vos rénovations dans les meilleures conditions.",
    cta: "",
  },
  {
    id: nanoid(),
    img: autoImg,
    title: "Domotique",
    text: "Vous souhaitez contrôler votre maison du bout des doigts ?",
    textb:
      "Nous avons le savoir-faire pour faire entrer votre maison dans le 21e siècle.",
    cta: "",
  },
  {
    id: nanoid(),
    img: newImg,
    title: "Neuf",
    text: "Trouver la bonne équipe pour donner vie à votre maison peut être stressant. Nous suivons votre projet du début à la fin, à chaque étape.",
    textb:
      "De nombreux clients ont déjà réalisé leur maison de rêve avec nous. Et vous ?",
    cta: "",
  },
  {
    id: nanoid(),
    img: chargingImg,
    title: "Bornes de recharge",
    text: "Vous venez d’acheter un véhicule électrique et vous avez besoin d’une borne de recharge ? Nous réalisons ces installations.",
    textb:
      "Avec un véhicule 100 % électrique dans notre flotte, nous connaissons bien les solutions disponibles et pouvons vous conseiller au mieux.",
    cta: "",
  },
];

export const FrBrand = [
  {
    id: nanoid(),
    img: "https://assets.sc.hager.com/fr/-/media/project/hagerdeep/shared/images/logo_hager.png?h=86&la=fr-FR&w=256&hash=C816181852019173BB3EADA335CE44E7",
    title: "hager logo",
  },
  {
    id: nanoid(),
    img: "data:image/png;base64,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",
    title: "rexel logo",
  },
  { id: nanoid(), img: "BRAND3", title: "" },
];
