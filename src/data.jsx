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

import basalteImg from "./Images/basalte-logo.png";
import hagerImg from "./Images/hager-logo.png";
import legrandImg from "./Images/legrand-logo.png";

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
    img: hagerImg,
    title: "hager logo",
  },
  {
    id: nanoid(),
    img: basalteImg,
    title: "",
  },

  { id: nanoid(), img: legrandImg, title: "" },
];
