// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-experience",
          title: "Experience",
          description: "Education, professional experience, scholarships and awards",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "My research includes 1) Visual AI 2) Sensors 3) AI+Architecture",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-design",
          title: "Design",
          description: "Paticipated design projects as main contributor; My own artworks",
          section: "Navigation",
          handler: () => {
            window.location.href = "/design/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research projects and grants I participate as the main contributor",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials for courses I taught",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-presentations",
          title: "Presentations",
          description: "Conference presentations and invited talks",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-national-key-r-amp-d-program-2022-2026",
          title: 'National Key R&amp;amp;D Program (2022-2026)',
          description: "Intelligent Key Technologies for Pre-Programming and Post-Occupancy Evaluation in Large-Scale Architectural Projects (Project No. 2022YFC3801300)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1-project/";
            },},{id: "projects-greenery-scanner",
          title: 'Greenery Scanner',
          description: "Urban greenery health sensing using low-cost multispectral camera in drive-by condition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2-project/";
            },},{id: "projects-greenery-and-well-being",
          title: 'Greenery and Well-being',
          description: "How objective and perceived nature exposure influence human well-being?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3-project/";
            },},{id: "projects-beijing-municipal-commission-of-planning-and-natural-resources-project-2022",
          title: 'Beijing Municipal Commission of Planning and Natural Resources Project (2022)',
          description: "Implementation Mechanism and Evaluation System for Public Spaces in the Core Functional Area of the Capital",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4-project/";
            },},{id: "projects-national-administration-for-rural-revitalization-commission-project-2023",
          title: 'National Administration for Rural Revitalization Commission Project (2023)',
          description: "Study on Livable, Business-Friendly, and Beautiful Rural Construction Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5-project/";
            },},{id: "projects-japan-uniqueness-2024",
          title: 'Japan Uniqueness (2024)',
          description: "Using visual AI to identify urban uniqueness",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6-project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%6F%73%31%35@%6D%69%74.%65%64%75", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/songguo7199", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RO-8arQAAAAJ", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/16173145207", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
