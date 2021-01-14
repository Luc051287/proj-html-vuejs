var app = new Vue(
  {
    el:"#root",
    data: {
      indexNavMenu: 0,
      active_li: "active_li",
      mainLogo: "logo.png",
      openingTime: ["clock", "Open hours: Mon - Sat - 9:00 - 18:00"],
      mainInfos: {
        phoneNumber: ["#", "phone-alt", "+1 (305) 1234-5678"],
        email: ["#", "envelope", "hello@example.com"]
      },
      social: {
        facebook: ["#", "facebook-f"],
        twitter: ["#", "twitter"],
        linkedin: ["#", "linkedin-in"]
      },
      mainNavBar: {
        home: "#",
        services: "#",
        about: "#",
        projects: "#",
        results: "#"
      }
    },
    methods: {

    }
  }
);
