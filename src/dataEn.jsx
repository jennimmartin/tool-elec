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

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#projects", text: "projects" },

  { id: nanoid(), href: "#contact", text: "contact" },
];

export const trust = [
  {
    id: nanoid(),
    img: bobImg,
    alt: "la plagne bobsleigh logo",
    title: "la plagne bobsleigh logo",
  },
  {
    id: nanoid(),
    img: cheyImg,
    alt: "cheyenne cafe la plagne logo",
    title: "cheyenne cafe la plagne logo",
  },
  {
    id: nanoid(),
    img: battImg,
    alt: "battendier jacky et fils logo",
    title: "battendier jacky et fils logo",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: generalImg,
    alt: "photo of electric board being worked on",
    title: "general electrical issues",
    text: "Whatever the problem — big or small - we have the skills to resolve it quickly and safely.",
    textb: "Available 24/7.  Just give us a call.",
    cta: "Call now",
  },
  {
    id: nanoid(),
    img: maintImg,
    alt: "photo of electric tubes ready for wiring",
    title: " Maintenance",
    text: "Need someone you can rely on — especially in an emergency? With several electricians available, we can be there when you need us.",
    textb: "Our Maintenance contracts can be tailored to your business needs.",
    cta: "Call now",
  },
  {
    id: nanoid(),
    img: renoImg,
    alt: "photo of renovated kitchen",
    title: "Renovations",
    text: "Looking for a team that adapts to the challenges of your site? ",
    textb: "Tool Elec has the skills to deliver the best renovation possible.",
    cta: "Call now",
  },
  {
    id: nanoid(),
    img: autoImg,
    alt: "photo of tablet controlled home",
    title: "home automation",
    text: "Want to control your home from your fingertips? ",
    textb: "We have the expertise to bring your home into the 21st century.",
    cta: "Call now",
  },
  {
    id: nanoid(),
    img: newImg,
    alt: "photo of new electric point being installed",
    title: "New builds",
    text: "Finding the right team to bring your home to life can be stressful. We’ll guide your project from start to finish — every step of the way.",
    textb:
      "We’ve already helped many clients make their dream home a reality. Will yours be next?",
    cta: "Call now",
  },
  {
    id: nanoid(),
    img: chargingImg,
    alt: "Photo of car charging",
    title: "Charging ports",
    text: "Just bought an electric vehicle and need a charging point installed? We can take care of it.",
    textb:
      "With a fully electric van in our fleet, we’re well-placed to advise you on all the options available.",
    cta: "Call now",
  },
];

export const brand = [
  {
    id: nanoid(),
    img: hagerImg,
    alt: "hager logo",
    title: "hager logo",
  },
  {
    id: nanoid(),
    img: basalteImg,
    alt: "basalte logo",
    title: "basalte logo",
  },

  { id: nanoid(), img: legrandImg, alt: "legrand logo", title: "legrand logo" },
];
