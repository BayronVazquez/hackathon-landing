export type ConfirmedSponsor = {
  name: string;
  logo?: string;
  contribution: string;
  href: string;
  role?: {
    es: string;
    en: string;
  };
};

export const CONFIRMED_SPONSORS: ConfirmedSponsor[] = [
  {
    name: "Plaza 11-11",
    logo: "/plaza-11-11-logo.jpg",
    contribution: "Venue",
    href: "https://www.facebook.com/Plaza11.11/",
  },
  {
    name: "Enrique Salinas",
    contribution: "Snacks",
    href: "https://www.facebook.com/enrique.salinas.90",
    role: {
      es: "Secretario de Economía · Matamoros",
      en: "Secretary of Economy · Matamoros",
    },
  },
];
