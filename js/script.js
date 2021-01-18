var app = new Vue(
  {
    el:"#root",
    data: {
      topBtn: "opaNo",
      index: 0,
      resultsAnim: '',
      isStarted: false,
      indexProjectsMenu: 0,
      duration: 0.00001,
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
          link: "#",
          id: 0,
          visible: true
        },
        {
          title: "President's speech at the annual meeting",
          types: ["institutional", "events", "environment"],
          paragraph: "Lorem ipsum dolor sit amet consectetur adisciping elit.",
          imgSrc: "project-2.jpg",
          link: "#",
          id: 1,
          visible: true
        },
        {
          title: "Iternational business trip Shangai",
          types: ["institutional", "social", "environment"],
          paragraph: "Lorem ipsum dolor sit amet consectetur adisciping elit.",
          imgSrc: "project-3.jpg",
          link: "#",
          id: 2,
          visible: true
        },
        {
          title: "Technology workshop with education theme",
          types: ["events", "innovation", "technology"],
          paragraph: "Lorem ipsum dolor sit amet consectetur adisciping elit.",
          imgSrc: "project-4.jpg",
          link: "#",
          id: 3,
          visible: true
        },
        {
          title: "Donation of clothes and food to the partner NGO",
          types: ["social", "events", "environment"],
          paragraph: "Lorem ipsum dolor sit amet consectetur adisciping elit.",
          imgSrc: "project-5.jpg",
          link: "#",
          id: 4,
          visible: true
        },
        {
          title: "Confraternization of the procurement team",
          types: ["institutional", "innovation", "technology"],
          paragraph: "Lorem ipsum dolor sit amet consectetur adisciping elit.",
          imgSrc: "project-6.jpg",
          link: "#",
          id: 5,
          visible: true
        }
      ],
      results: [
        {
          target: "Certifications",
          countStart: 0,
          count: 128,
          multiplier: 0.001,
          duration: 1,
          timer: function() {
            this.multiplier += 0.0218;
            this.duration = this.multiplier * this.duration;
            const interval = setInterval( () => {
              this.countStart += 1;
              clearInterval(interval);
              if (this.countStart < this.count) {
                this.timer();
              }
            }, this.duration);
          }
        },
        {
          target: "Employees",
          countStart: 0,
          count: 230,
          multiplier: 0.001,
          duration: 1,
          timer: function() {
            this.multiplier += 0.01198;
            this.duration = this.multiplier * this.duration;
            const interval = setInterval( () => {
              this.countStart += 1;
              clearInterval(interval);
              if (this.countStart < this.count) {
                this.timer();
              }
            }, this.duration);
          }
        },
        {
          target: "Customers",
          countStart: 0,
          count: 517,
          multiplier: 0.001,
          duration: 1,
          timer: function() {
            this.multiplier += 0.00527;
            this.duration = this.multiplier * this.duration;
            const interval = setInterval( () => {
              this.countStart += 1;
              clearInterval(interval);
              if (this.countStart < this.count) {
                this.timer();
              }
            }, this.duration);
          }
        },
        {
          target: "Countries Served",
          countStart: 0,
          count: 94,
          multiplier: 0.001,
          duration: 1,
          timer: function() {
            this.multiplier += 0.0301;
            this.duration = this.multiplier * this.duration;
            const interval = setInterval( () => {
              this.countStart += 1;
              clearInterval(interval);
              if (this.countStart < this.count) {
                this.timer();
              }
            }, this.duration);
          }
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
        let section;
        if (key == "home") {
          section = document.getElementById("header_top");
        } else {
          section = document.getElementById(key);
        }
        section.scrollIntoView({ behavior: 'smooth'});
      },
      scrollToTop: function() {
        let section = document.getElementById("header_top");
        section.scrollIntoView({ behavior: 'smooth'});
      },
      scrollResults: function() {
        window.onscroll = (e) => {
          let bottom = window.innerHeight + window.scrollY;
          if (window.oldScroll > window.scrollY) {
            this.topBtn = 'opaYes';
            setTimeout( () => this.topBtn = 'opaNo' ,1500)
          } else {
            this.topBtn = 'opaNo';
          }
          window.oldScroll = window.scrollY;
          if (window.scrollY == 0) {
            this.topBtn = 'opaNo';
          } else if (bottom == document.documentElement.offsetHeight) {
            this.topBtn = 'opaYes';
          }
          let myDiv = document.getElementById("numbers_boxes");
          var rect = myDiv.getBoundingClientRect();
          if ((rect.top + myDiv.offsetHeight) <= window.innerHeight && this.isStarted == false) {
            this.resultsAnim = 'results_anim';
            this.results.forEach((item, i) => {
              item.timer();
            });
            this.isStarted = true;
          }
        }
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
    },
    mounted: function() {
      window.addEventListener('scroll', this.scrollResults);
    },
    destroyed: function() {
      window.removeEventListener('scroll', this.scrollResults);
    }
  }
);
