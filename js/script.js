var app = new Vue(
  {
    el:"#root",
    data: {
      indexProjectsMenu: 0,
      active_li: "active_li",
      mainLogo: "logo.png",
      projectsTypes: ["all","institutional", "social", "events", "innovation", "environment", "technology"],
      openingTime: ["clock", "Open hours: Mon - Sat - 9:00 - 18:00"],
      mainInfosNav: {
        phoneNumber: ["#", "phone-alt", "+1 (305) 1234-5678"],
        email: ["#", "envelope", "hello@example.com"],
      },
      mainInfos: {
        phoneNumber: ["#", "phone-alt", "+1 (305) 1234-5678"],
        email: ["#", "envelope", "hello@example.com"],
        address: ["#", "map-marker-alt", "Main Avenue, 987"]
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
      },
      getInTouchBtn: "#",
      readMoreBtn: "#",
      viewMapBtn: "#",
      seeAllBtn: "#",
      inTouchBtn: "#",
      services: {
        audit: ["#", "network-wired", "Audit & Assurance"],
        financial:["#", "briefcase", "Financial Advisory"],
        analytics:["#", "chart-bar", "Analytics and M&A"],
        marketing:["#", "plane", "Middle Marketing"],
        legal:["#", "globe", "Legal Consulting"],
        risk: ["#", "inbox", "Regulatory Risk"]
      },
      projects: [
        {
          title: "Academic professional program in social media",
          types: ["technology", "innovation", "social"],
          paragraph: "Lorem ipsum dolor sit amet consectetur adisciping elit.",
          imgSrc: "project-1.jpg",
          link: "#"
        },
        {
          title: "President's speech at the annual meeting",
          types: ["institutional", "events", "environment"],
          paragraph: "Lorem ipsum dolor sit amet consectetur adisciping elit.",
          imgSrc: "project-2.jpg",
          link: "#"
        },
        {
          title: "Iternational business trip Shangai",
          types: ["institutional", "social", "environment"],
          paragraph: "Lorem ipsum dolor sit amet consectetur adisciping elit.",
          imgSrc: "project-3.jpg",
          link: "#"
        },
        {
          title: "Technology workshop with education theme",
          types: ["events", "innovation", "technology"],
          paragraph: "Lorem ipsum dolor sit amet consectetur adisciping elit.",
          imgSrc: "project-4.jpg",
          link: "#"
        },
        {
          title: "Donation of clothes and food to the partner NGO",
          types: ["social", "events", "environment"],
          paragraph: "Lorem ipsum dolor sit amet consectetur adisciping elit.",
          imgSrc: "project-5.jpg",
          link: "#"
        },
        {
          title: "Confraternization of the procurement team",
          types: ["institutional", "innovation", "technology"],
          paragraph: "Lorem ipsum dolor sit amet consectetur adisciping elit.",
          imgSrc: "project-6.jpg",
          link: "#"
        }
      ],
      results: [
        {
          target: "Certifications",
          count: 128
        },
        {
          target: "Employees",
          count: 230
        },
        {
          target: "Customers",
          count: 517
        },
        {
          target: "Countries Served",
          count: 94
        }
      ],
      partnersLogo: ["logo-4.png","logo-5.png","logo-1.png","logo-2.png","logo-3.png","logo-4.png"],
      aboutLinks: [
        {
          name: "The Company",
          link: "#"
        },
        {
          name: "Institutional",
          link: "#"
        },
        {
          name: "Social & Events",
          link: "#"
        },
        {
          name: "Innovation",
          link: "#"
        },
        {
          name: "Environment",
          link: "#"
        },
        {
          name: "Technology",
          link: "#"
        },
      ],
      servicesLinks: [
        {
          name: "Audit & Assurance",
          link: "#"
        },
        {
          name: "Financial Advisory",
          link: "#"
        },
        {
          name: "Analytics M&A",
          link: "#"
        },
        {
          name: "Middle Marketing",
          link: "#"
        },
        {
          name: "Legal Consulting",
          link: "#"
        },
        {
          name: "Regulatory Risk",
          link: "#"
        },
      ],
      supportLinks: [
        {
          name: "Responsability",
          link: "#"
        },
        {
          name: "Term of Use",
          link: "#"
        },
        {
          name: "About",
          link: "#"
        },
        {
          name: "Privacy Policy",
          link: "#"
        },
        {
          name: "Accessibility",
          link: "#"
        },
        {
          name: "Information",
          link: "#"
        },
      ]
    },
    methods: {
      scroll: function(key) {
        setTimeout(function() {
          let elmnt = document.getElementById(key);
          elmnt.scrollIntoView();
        },0);
      }
    },
    computed: {
      filteredProjects: function() {
        if (this.projectsTypes[this.indexProjectsMenu] == 'all') {
          return this.projects
        } else {
          return this.projects.filter(elem => elem.types.includes(this.projectsTypes[this.indexProjectsMenu]));
        }
      }
    }
  }
);
