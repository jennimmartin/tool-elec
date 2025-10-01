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
  {
    id: nanoid(),
    img: bobImg,
    alt: "logo La Plagne Bobsleigh",
    title: "Logo La Plagne Bobsleigh",
  },
  {
    id: nanoid(),
    img: cheyImg,
    alt: "logo Cheyenne Café La Plagne",
    title: "Logo Cheyenne Café La Plagne",
  },
  {
    id: nanoid(),
    img: battImg,
    alt: "logo Battendier Jacky et Fils",
    title: "Logo Battendier Jacky et Fils",
  },
];

export const FrProjects = [
  {
    id: nanoid(),
    img: generalImg,
    alt: "photo d'un tableau électrique en cours de réparation",
    title: "Dépannage",
    text: "Quel que soit le problème, petit ou grand, nous avons les compétences nécessaires pour le résoudre rapidement et en toute sécurité.",
    textb: "Nous attendons votre appel.",
    cta: "Appeler maintenant",
  },
  {
    id: nanoid(),
    img: maintImg,
    alt: "photo de tubes électriques prêts pour le câblage",
    title: "Maintenance",
    text: "Besoin de quelqu’un sur qui compter — surtout en cas d’urgence ? Grâce à plusieurs électriciens disponibles, nous pouvons intervenir rapidement.",
    textb:
      "Nos contrats de maintenance sont adaptés aux besoins de votre entreprise.",
    cta: "Appeler maintenant",
  },
  {
    id: nanoid(),
    img: renoImg,
    alt: "photo d'une cuisine rénovée",
    title: "Rénovation",
    text: "Vous cherchez une équipe capable de s’adapter aux défis de votre chantier ?",
    textb:
      "Tool Elec possède les compétences nécessaires pour réaliser vos rénovations dans les meilleures conditions.",
    cta: "Appeler maintenant",
  },
  {
    id: nanoid(),
    img: autoImg,
    alt: "photo d'une maison contrôlée par tablette",
    title: "Domotique",
    text: "Vous souhaitez contrôler votre maison du bout des doigts ?",
    textb:
      "Nous avons le savoir-faire pour faire entrer votre maison dans le 21e siècle.",
    cta: "Appeler maintenant",
  },
  {
    id: nanoid(),
    img: newImg,
    alt: "photo d’un point électrique neuf en cours d’installation",
    title: "Neuf",
    text: "Trouver la bonne équipe pour donner vie à votre maison peut être stressant. Nous suivons votre projet du début à la fin, à chaque étape.",
    textb:
      "De nombreux clients ont déjà réalisé leur maison de rêve avec nous. Et vous ?",
    cta: "Appeler maintenant",
  },
  {
    id: nanoid(),
    img: chargingImg,
    alt: "photo d'une voiture en charge",
    title: "Bornes de recharge",
    text: "Vous venez d’acheter un véhicule électrique et vous avez besoin d’une borne de recharge ? Nous réalisons ces installations.",
    textb:
      "Avec un véhicule 100 % électrique dans notre flotte, nous connaissons bien les solutions disponibles et pouvons vous conseiller au mieux.",
    cta: "Appeler maintenant",
  },
];

export const FrBrand = [
  {
    id: nanoid(),
    img: hagerImg,
    alt: "logo Hager",
    title: "Logo Hager",
  },
  {
    id: nanoid(),
    img: basalteImg,
    alt: "logo Basalte",
    title: "Logo Basalte",
  },
  {
    id: nanoid(),
    img: legrandImg,
    alt: "logo Legrand",
    title: "Logo Legrand",
  },
];
