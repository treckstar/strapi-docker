import AuthLogo from "./extensions/newlogo.png";
import MenuLogo from "./extensions/newlogo.png";
import favicon from "./extensions/newlogo.png";


export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: MenuLogo,
    },
    // Add a new locale, other than 'en'
    locales: ["es"],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: favicon,
    },
    // Override or extend the theme
    notifications: { releases: false },
  },

  bootstrap() {},
};
