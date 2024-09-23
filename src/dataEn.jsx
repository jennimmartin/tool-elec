import { nanoid } from "nanoid";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#projects", text: "projects" },

  { id: nanoid(), href: "#contact", text: "contact" },
];

export const trust = [
  { id: nanoid(), img: "IMAGE", title: "" },
  {
    id: nanoid(),
    img: "https://en.la-plagne.com/sites/default/files/styles/wysiwyg_md/public/medias/images/logo_bob_small.png?itok=YESVC2dh",
    title: "logo",
  },
  { id: nanoid(), img: "IMAGE3", title: "" },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/5663011/pexels-photo-5663011.jpeg",
    title: "General Electrical Issues",
    text: "We have the skills (whatever the problem) to quickly and safely resolve it.  Available 24/7.",
    cta: "Call us now (insert button)",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/5663011/pexels-photo-5663011.jpeg",
    title: "Renovations",
    text: "Are you looking for a team who are adaptable to the challengers of your site?  Experienced to enable the best renovation possible? ",
    cta: "Call us now (insert button)",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/5663011/pexels-photo-5663011.jpeg",
    title: "Maintenance Contracts",
    text: "Need someone who you can rely on - especially in an emergency?  We have multiple Electricians available to ensure we can get you, when you need us. ",
    cta: "",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/5663011/pexels-photo-5663011.jpeg",
    title: "Home automation",
    text: "Take your home or business into the 21st century with a money saving technology that is simple to use and install.",
    cta: "",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/5663011/pexels-photo-5663011.jpeg",
    title: "Building a new home?",
    text: "Finding the right team to make your home a reality can be stressful.  We see your project through from start to finish - every step of the way.  ",
    cta: "",
  },
];

export const brand = [
  { id: nanoid(), img: "BRAND" },
  { id: nanoid(), img: "BRAND2" },
  { id: nanoid(), img: "BRAND3" },
];
