import { nanoid } from "nanoid";

import generalImg from "./Images/general-photo.jpg";
import renoImg from "./Images/reno-photo.jpg";
import maintImg from "./Images/maint-photo.jpg";
import autoImg from "./Images/auto-photo.jpg";
import newImg from "./Images/new-photo.jpg";
import chargingImg from "./Images/charging-photo.jpg";

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
    img: generalImg,
    title: "general electrical issues",
    text: "We have the skill (whatever the problem) to quickly and safely resolve it.  Available 24/7 ",
    textb: "We are waiting for your call.",
    cta: "",
  },
  {
    id: nanoid(),
    img: maintImg,
    title: " Maintenance",
    text: "Need someone who you can rely on - especially in an emergency? We have multiple Electricians available to ensure we can get you, when you need us. ",
    textb:
      "Our maintenance contacts ensure you have the solution for your business.",
    cta: "",
  },
  {
    id: nanoid(),
    img: renoImg,
    title: "Renovation",
    text: "Are you looking for a team who are adaptable to the challenges of your site?  ",
    textb: "Tool Elec have the skills to enable the best renovation possible?",
    cta: "",
  },
  {
    id: nanoid(),
    img: autoImg,
    title: "home automation",
    text: "Do you want to control your home from your fingertips?",
    textb:
      "We have the accreditation to bring your home into the 21st century.  Put your feet up, while we make your home as convenient as possible ",
    cta: "",
  },
  {
    id: nanoid(),
    img: newImg,
    title: "New builds",
    text: "Finding the right team to make your home a reality can be stressful.  We’ll see your project through from start to finish - every step of the way.  ",
    textb:
      "We have helped many make their dream home a reality. Will you be next?",
    cta: "",
  },
  {
    id: nanoid(),
    img: chargingImg,
    title: "Bornes de recharge",
    text: "Vous venez d’acquérir un véhicule électrique et vous avez besoin d’une borne de recharge ? Nous sommes habilités à réaliser ces installations.",
    textb:
      "De plus, dans notre flotte, nous disposons déjà d’un véhicule totalement électrique et nous avons du recul sur les moyen de charge disponible sur le marché, et de vous conseiller par rapport à vos besoins.",
    cta: "",
  },
];

export const brand = [
  {
    id: nanoid(),
    img: "https://assets.sc.hager.com/fr/-/media/project/hagerdeep/shared/images/logo_hager.png?h=86&la=fr-FR&w=256&hash=C816181852019173BB3EADA335CE44E7",
    title: "hager logo",
  },
  {
    id: nanoid(),
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABYCAYAAAG8HUqHAAAABGdBTUEAALGPC/xhBQAADJZJREFUeNrtXQl0VOUVzjk9pwQLba3i1g01EBZBkIIIVDIRAZEiCsriUkorFChqaz3KocgQSCaRfReQfV9kkV0SM0lBwhqQAGGRnbAFCIFAIAmvuX95w5s373/LzGRm3nvfPec7ybz37/fdf73/vVFR5VQpxtkhlIgS6acxg4VQI3IyHjQilf0lkv5t2nGKJ4z47PbtEq/fb/ZZ6PXbUMZSEn9TYUTIM1cK41fGn7o2eiWcuvmopyDRNZ3s2Zq0XK8w+3LPexX2102+8Pod2TwOacZCGIhlHJeULoQa4cs41N1l1ZrOWmH7sNjHFREZiwL/UIMkIe9CIfv/4NGLPl3o75uNENq+N9sTz511TLGbNZSxtMe5VXxHsbu8e/eucO5iIbdL9Stj+f/ywhReL2Z/f1Y7gRtG/jtyeRzSjIUwUVh6LdZzhS3jcPZeYRmK7VThoE58aHr39B9HGYrT4a/zhJu37ng9+83zXwhPtRgZngqLvb/SKEL/f71+v2JnrNRJi5R/pUg4cOSi17tDxy5ppqPV8QetwuLkXvqs14CV7P/a8WN1FyJr9yk2lH4weI1P4WnZo5VOSCocKLr0WyQUF5dYU4Zt12mZqsLhmgTYapEY1grbqdIhX42HHLWGtImSkn06LOctDElWR+Xazq62qnB0rLNn0Cr8zMvjhKp1hhqKszHziND+L3O9ntVrPV54oNaQ0FdYbcUj/v7QuVYzTKvuM32eyeNMmb9dMx0i8QQibBVWCrNj7xmfZ5VqOFX39pSeXyu8FZ4Ky+mb1IM+YaQ7pvLdVT1LPD3pRCyH1dKTxnmwfqKhdMJSYdekDG4jyIm35S2N02/Qat3p6MknpL20Emi/6qXuM6w5LNluHEaFUeEIqbBgL+prq+0dR7J7Bips+Qq/uUT4ia0qTBSfktnEVhW209BkdVSKcW6IkhMaxuKMRoNYEw/UTGgMBlt9pQQGg8G6t6t5tGxdDjetxxunMIVgLSJ1MKX4ztFpXuHKyso81ySUkJF1nIX719B1iu9jHWOYvrAWTVu4Q7NtAt1RjggG884XRG1u3u6x1sELL7/TeQWKYUhZUU6v9pjD3s1dns1+i6ruPKVJf8qzIeOwPRlMZ6ZSWpd+SPGUTKSL+Te4oKtZRo4ZaOdfLtVGeyW18pSWlqker1iKwbOX7Rbe6LXAC6R0evh4vifM0HHpPmn8d/sJv8+G9CiwKpEao69euxmU8liOwXKtYrkmg1qjXSm436grvz0QcIX2H77A0qLeQfr8uVcn+TC7UftJPvGlkkkHpIEyOOfQeXMyuFPvBR6QajgvHL2ThlVL88kWI9lFAGl4Jcjj1W8z3tOgMS9qXzxo0Xma0PUfi4Vu/f+P6s1HcMve8f35hssjokqdBKbV4m98LJMAMBgMBoPBYAAMBiKdwXZSc7CdSgcYDAYDpmewy70JDWJhBjNFNFd6DzSKhRkspVYp6U3jktwrynEQMC8cSe7EqIebp1S1/H1wi6NybELz6nHOaEVprVInoS7WjBZStIt1PgEGW/2Kfy1nMzDYLlbvwGCLKr7XcG4Eg+0gxWAwGAyAwQAYDIDBZBiMNCPrthrHbhpUVD6k8Thi6mbhzLlrHjv6POX9mnGjmYblE01S7MFgUfdYLxXdvM1UW3npJYz9TjMN0ldu3mmqrhsJSRP5+swNXpnoubXw87rK1uomzM7SLA/dnFBSF6aPpqKU+cPGYF647Jw8r3Dk+EGNOb97YbhiOtdv3L8INn3xTsUwUgV6ot05Z33CHD1xmb3r+clyXUrrv6w3TPO+1UdD1tqXwZVjh3iFGzwqzev9iTNXPe/Onr/GTYe6bD35iZYFRZJ7FCGqFT+GG196/4mu1fDCtesxh1seWzH44QZJXuF6D1jFlZbxs7bqvg4ybiY/LKXDI60xVEpklF9v2Pc/W2lPBlM3qccuJ9GNotuqt/mktH3PadXyvdV3kQ9z6W6SWhzytSElutuktzzSYcOSDNYiGrPo7q4ag+lStpI9UiX015AuQpMOX/qU44XXp3DD13lprFfYJWv26S4P3XOyNIPlV0fJv8iQMfdnxjS20WVvNQZPnJMVtEo9JBsapPTvxPW6ut0+A7/xK29bddEt3/pKdxe998C5oDNXHEfll7XlF9GVyjN/xR6/8k+enGkfBssbja5iqplcoFl3IJUhr4Mi0TVU3oydiDY45PGbvTE1YOY8/9qX9mXw6tRczbFPDynl89rf5nneV2voUgwza+lun80TeZi4LtMNlUXu74uw84czuuM3bDcx8hjc+p1Zui8wS8O1u2cQhQdH1+mal6WV8hMbdO13h3RthVIa4uVvAuewnFn31ioLtQUvr2fbTmAfnlp8GlJw2KCAXzwzjM10iRau2ouDBZwmgcFoEDAYAIMBMBgAgwEwGACDATDYFgwms8oCyJJ0zwBLhgvmDizs2h4MBoMBMBiIWAY7XO5BaAwLMzjeldEajWFhBsOUoS0Y7M5Gg1iYwffsVd5Fo1iYwfeYfBgNY2EGE5FLcEey+/NyZm+FvUdzA7ayACASUcNZQnbOoms4X4zSQxBgAIhgo4UxzvPRMQktIcAAYO6ROb9SzNCnIcAAYG4zwu0hwABg4jVytbrOKhBgADDrKBzrbAsBBgCTwuM0GAIMABBgAAAgwEA4QLbSyTYc2gICrIgx078Xlq3LCRrmrdjD0iQrzV36LWL27oLxEbd9bzZz5ZG+9Zhw8uxVH/u0ciKT4Lv2nRVmLtnFPEA82WKkoTxf7zVfsX5ku4/S/NS1UYh1jAm4bmRelewAkrl1ogv514XR07cwI416BfdXzyYyo4vU7lt3n2I+aqReK+RUVlbGHDRklYcl9yZkTfvRRsmGyv3nj7/mfgMDh2+CAIdKgNVMw+/ZnyfMXZ6tC8s37BfyrxSp+u2J7zZDd7nI1jB9zHIi1y1TF+wQPkveKLz7z2Wsk5CChPXzkanC4tU/eHnwkH685CPIyIeqlI6UyMIqz/2LHOQniAxW37lT6mX4+rE/GBOgfoNWM79BciIbzOQwg6yqd/9giU/79BqwktWfyqwk5MQnqrNRq+pSWpOWCwGOBAGmUdRoenJ3NnIiVwJaZpBLSkoV47Z5d5bh8lAdeNSt/xLd6ZDTsOOnr6jW7VReAde29H/KRyWpwFBnR6aZjdaHLOTzRtUaLUcbTo9mTEpUXFwiNGo/CQJsNwEmkK8rHqWUjz68eORNoCI+ikuXb3DTpamqURPYqzYdVBVk6oDIXwi5gNqy86SP24tHnnP5VQ/qBHhE025/0qSRX60ePDdWEGCLCjCNsGrUuMNkbtx9uee58YaOS/e7jt9mHuGmS8Lob7ofD1vPRj49RB4ZyR2J3x9FTafquv+dj5b6nTbtKfAocYIbAmxWAR711RbmlFcLtJlDo2fmtuPctI6duqLqcZIcAIeDqFyBtmGLztN8/OjJidqZvHcGstkVDuJ1cBBgEwhwoERTMHKhp7csamtM+mAilWHkcod2dPU64e7894WG83iwfqJquno2noIJCLAJBJiOSoykRTux27JPK6ZFRxxa8QeqrPHo+MYsgkv1oDWpFk2eu41NjfXmR8dNPKKddwgwBDggARZB55C86aqS81op6BxRiWj995TBs9yKwuONU9gZs7x8dISldBx2/UaxqiDTcV315trrYzoX5u0T5F0oDKnCBx1TQYAtKsA0svBoUvk7rfhNO07h7hzn/nhJcI5OY5tldKxEu8j+wmi9yPc8HRVJ6fDxfKFe6/GacWk3d/OOE6qCTLv3f+o5VzMtUrzgnU1/v+uk8EniBrZ0efntmX63jZoLdhGpm49y60LKLlRO8vjpD0g5BQIcJgEePCpNdbQxkhZpYJGiyOWrRUFfo+uZvtKoRkdf0t1mEjRSiPC3zSluQeEt1bKNnLZZ18702x8uZRtNtLYOJin5WlYCOQrvPWAV65y0tOOMUEX7aoYutIXx26bDmbaX9IPcvue0X6M2gCk0BLjizJ8I2Tl5bLpOqo00PSbFi/GztjLd4moNXWgnAAIMABBgAAAgwAAAQIABAIAAAwAEGAAACDAAABBgAIAA3xfgwsKbzYrvlGQAAGAOFFy/3ckjwMcuFXUoLbt7EgAAc+BcQXEfjwDHJWW44NIeAMwDR7J7BgQYACDAAABAgAEA8E+AHa6MnmgUADCpALcevuURhyu9FA0DACYUYKJ4V3oPNAwAmFSAmRCnZDZxJLnL0EAAYEIB9mxqJWf0jktyl6ChAMCEAixSj5np0Q6Xu285fkSjAYDJBBgEAkU2/Q/fpIIAEc5t9wAAAABJRU5ErkJggg==",
    title: "rexel logo",
  },
  { id: nanoid(), img: "BRAND3", title: "" },
];
