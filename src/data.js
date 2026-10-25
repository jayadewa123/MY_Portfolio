export const portfolioData = {
  personalInfo: {
    name: "Dilanka Jayadewa",
    title: "Full-Stack Web Developer",
    subtitle: "a visual UX/UI Designer and Web Developer",
    email: "dilankajayadewa@gmail.com",
    phone: "0768044382",
    age: "23",
    from: "Colombo, Sri Lanka",
    linkedin: "https://www.linkedin.com/in/dilanka-jayadewa-263886241/",
    github: "https://github.com/jayadewa123",
    facebook: "https://facebook.com/Dilanka.Jayadewa",
    instagram: "https://instagram.com/Dilanka_jaya_official",
    tiktok: "https://www.tiktok.com/@dilu_jayadewa",
    aboutParagraphs: [
      "Hi, I'm Dilanka Jayadewa, an Information Technology undergraduate at SLIIT with a strong passion for software engineering, full-stack development, mobile application development, and creating intuitive user experiences.",
      "I have hands-on experience developing web applications, mobile applications, and software solutions across frontend and backend development. My technical skill set includes React.js, Node.js, Java, Spring Boot, PHP, MongoDB, MySQL, and REST APIs. I enjoy building responsive user interfaces, developing backend services, integrating databases, and connecting different components to create complete, functional applications.",
      "Through multiple academic and personal projects, including UniIntern, CoreGrid, and DailyPulse, I have strengthened my skills in application development, problem-solving, database management, and UI/UX design. I enjoy turning ideas into practical digital solutions, exploring new technologies, and continuously improving my technical knowledge.",
      "My goal is to build reliable, scalable, and user-friendly web and mobile applications that solve real-world problems while continuing to grow as a versatile software developer."
    ],
    about: "Hi, I'm Dilanka Jayadewa, an Information Technology undergraduate at SLIIT with a strong passion for software engineering, full-stack development, mobile application development, and creating intuitive user experiences.\n\nI have hands-on experience developing web applications, mobile applications, and software solutions across frontend and backend development. My technical skill set includes React.js, Node.js, Java, Spring Boot, PHP, MongoDB, MySQL, and REST APIs. I enjoy building responsive user interfaces, developing backend services, integrating databases, and connecting different components to create complete, functional applications.\n\nThrough multiple academic and personal projects, including UniIntern, CoreGrid, and DailyPulse, I have strengthened my skills in application development, problem-solving, database management, and UI/UX design. I enjoy turning ideas into practical digital solutions, exploring new technologies, and continuously improving my technical knowledge.\n\nMy goal is to build reliable, scalable, and user-friendly web and mobile applications that solve real-world problems while continuing to grow as a versatile software developer.",
    education: [
      "BSc (Hons) in Information Technology - SLIIT",
      "G.C.E. Advanced Level Exam Passed",
      "G.C.E. Ordinary Level Exam Passed",
      "Completed Computer Courses"
    ]
  },
  skills: {
    frontend: [
      { name: "React.js", desc: "Building dynamic, component-based user interfaces." },
      { name: "JavaScript", desc: "Adding interactivity and dynamic logic to web pages." },
      { name: "HTML5", desc: "Structuring semantic and accessible web content." },
      { name: "CSS3 / SCSS", desc: "Styling responsive and modern web layouts." },
      { name: "Responsive Design", desc: "Optimizing layouts for mobile, tablet, and desktop screens." },
      { name: "Tailwind / Bootstrap", desc: "Rapid UI layout styling and utility-first frameworks." }
    ],
    backend: [
      { name: "Node.js", desc: "Developing scalable server-side applications." },
      { name: "Express.js", desc: "RESTful API creation and routing middleware." },
      { name: "Spring Boot", desc: "Creating robust, enterprise-level Java backends." },
      { name: "MongoDB", desc: "Managing NoSQL databases for flexible data storage." },
      { name: "MySQL", desc: "Designing and querying relational database schemas." },
      { name: "PostgreSQL", desc: "Enterprise relational database querying and management." },
      { name: "REST APIs", desc: "Standardized client-server architectural communication." },
      { name: "PHP", desc: "Creating dynamic server-side scripts and APIs." }
    ],
    design: [
      { name: "Figma", desc: "Designing high-fidelity wireframes and user interfaces." },
      { name: "UI Design", desc: "Crafting modern, accessible digital user interfaces." },
      { name: "UX Research", desc: "User journeys, personas, and usability analysis." },
      { name: "Wireframing", desc: "Rapid low and high-fidelity structural layouts." },
      { name: "Prototyping", desc: "Interactive, clickable application prototypes." },
      { name: "Design Systems", desc: "Reusable components and consistent visual identity." }
    ],
    dataAnalytics: [
      { name: "Power BI", desc: "Designing interactive business intelligence dashboards and KPI reports." },
      { name: "Jupyter Notebook", desc: "Interactive data exploration, analytics and computational workflows." },
      { name: "RStudio", desc: "Integrated development environment for R statistical computing." },
      { name: "Python (Data)", desc: "Data manipulation, analytical scripting and algorithmic logic." },
      { name: "Pandas & NumPy", desc: "Data wrangling, cleaning and numerical array computations." },
      { name: "Data Visualization", desc: "Translating data insights into informative visual charts and graphics." }
    ],
    languages: [
      { name: "JavaScript (ES6+)", desc: "Modern dynamic scripting for web and backend." },
      { name: "Java", desc: "Object-oriented software and backend services." },
      { name: "Python", desc: "Scripting, automation, backend logic, and data analysis." },
      { name: "C++", desc: "High-performance software and algorithmic logic." },
      { name: "SQL", desc: "Relational querying, schema modeling and database joins." },
      { name: "R", desc: "Statistical computing and data modeling." }
    ],
    tools: [
      { name: "Git & GitHub", desc: "Version control and collaborative code management." },
      { name: "VS Code", desc: "Industry-standard code editor for modern development." },
      { name: "Docker Desktop", desc: "Containerization platform for developing and scaling apps." },
      { name: "VMware Workstation Pro", desc: "Hypervisor for configuring virtualized environments and guest operating systems." },
      { name: "Postman", desc: "Testing and documenting RESTful APIs." },
      { name: "Android Studio", desc: "Primary IDE for developing native Android applications." },
      { name: "Antigravity / Cursor", desc: "AI-integrated code editors and agents for rapid delivery." }
    ]
  },
  certifications: [
    "MongoDB Atlas Administrator Path"
  ],
  projects: [
    {
      id: 1,
      title: "FitTrack - Home Workout & Fitness-Tracking App",
      description: "A modern fitness tracking application designed for beginners to build consistency and train effectively at home. Developed the complete dynamic user onboarding flow with a personalized workout recommendation plan, alongside an administrative portal featuring user management and system settings configuration.",
      technologies: ["React", "MongoDB", "Node.js", "Figma", "User Onboarding", "Personalization Engine", "Admin Module", "User Management"],
      image: "/projects/fittrack.jpg",
      imagePosition: "top center",
      link: "https://github.com/isumi841/FitTrack_Mobile_App/tree/member1_onboarding_personalization"
    },
    {
      id: 2,
      title: "Techloom POS System - Concurrency-Safe POS & Stock Lock Engine",
      description: "A high-performance, concurrency-safe Point-of-Sale (POS) order & inventory system designed to prevent overselling under high concurrent demand. Features an automated 5-minute stock lock reservation engine (TTL), transactional integrity, and a mock payment gateway handling success, failure, and timeout outcomes.",
      technologies: ["React", "Node.js", "Express", "Concurrency Control", "5-min TTL Lock", "REST API", "State Machine"],
      image: "/projects/techloom-pos.png",
      link: "https://github.com/jayadewa123/techloom-intern-assessment",
      liveLink: "https://techloom-intern-assessment-x1yx.vercel.app/"
    },
    {
      id: 3,
      title: "Techloom Store - Next-Gen E-Commerce & Concurrency Payment Engine",
      description: "A full-featured modern e-commerce storefront featuring dynamic product discovery, search, filtering, and a synchronized checkout pipeline. Implements pre-payment stock reservations, idempotent payment submissions (duplicate charge prevention), simulated refunds, and full order lifecycle management.",
      technologies: ["React", "Node.js", "Express", "E-Commerce", "Payment Gateway Simulator", "Stock Reservation", "Order Lifecycle"],
      image: "/projects/techloom-store.png",
      link: "https://github.com/jayadewa123/techloom-intern-assessment",
      liveLink: "https://techloom-intern-assessment-qks4.vercel.app/"
    },
    {
      id: 4,
      title: "UniIntern - University Student Internship Platform",
      description: "A full-stack web application developed to streamline the university internship recruitment process, allowing students to apply for internship opportunities, track their application status, and manage interview schedules while connecting with potential employers.",
      technologies: ["React", "SpringBoot", "Java", "PostgreSQL", "REST API", "Node.js", "HTML", "CSS"],
      image: "/projects/uniintern.png",
      link: "https://github.com/JVliyanarachchi21/uniintern/tree/feature/student"
    },
    {
      id: 5,
      title: "CoreGride(Smart Campus) - Facilities & Assets Catalogue",
      description: "Designed and implemented the administrative dashboard for managing campus facilities, including lecture halls and computer labs, enabling real-time resource visibility for students while ensuring robust data validation and asset tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "SpringBoot", "Java", "JavaScript"],
      image: "/projects/smartcampus.png",
      link: "https://github.com/Nadulahatharasinghe/it3030-paf-2026-smart-campus-20/tree/feature/module-a-facilities-assets-catalogue"
    },
    {
      id: 6,
      title: "OnlineTourGuide - Tour Guide Booking Platform",
      description: "A full-stack web application designed to simplify tour guide management and booking processes. The platform enables users to browse available guides, create bookings, manage schedules, and maintain profiles while implementing CRUD operations with a structured MVC architecture.",
      technologies: ["MEAN Stack", "Java", "MySQL", "CSS", "HTML"],
      image: "/projects/onlineTour.PNG",
      link: "https://github.com/jayadewa123/Online-Tour-Guide"
    },
    {
      id: 7,
      title: "FixItNow - Item Exchange Platform",
      description: "A full-stack maintenance management platform that connects clients, administrators, and technicians. The system enables users to submit maintenance requests, track request details, and manage service workflows through an integrated platform.",
      technologies: ["MEAN Stack", "JavaScript", "REST APIs", "Postman", "HTML", "CSS"],
      image: "/projects/fixltNow.PNG",
      link: "https://github.com/jayadewa123/FixltNow-App-"
    },
    {
      id: 8,
      title: "Baby Care - Baby shop and Booking Platform UI Design",
      description: "A modern, user-friendly BabyCare interface designed with a focus on seamless user experience and accessibility.",
      technologies: ["Figma"],
      image: "/projects/babyCare.PNG",
      link: "#"
    },
    {
      id: 9,
      title: "DailyPulse - Habit Tracker Mobile Application",
      description: "A mobile wellness tracking application developed to improve users' daily routines through habit monitoring, mood journaling, and hydration tracking. The application includes notification and widget support to provide personalized reminders and enhance user engagement.",
      technologies: ["Android Studio(Kotlin)"],
      image: "/projects/dailyroutin.PNG",
      link: "https://github.com/jayadewa123/Daily-Routines_MAD_Y2S2"
    },
    {
      id: 10,
      title: "Movie Booking System - User Management Module",
      description: "A web-based movie ticket booking system featuring user registration, login, profile management, and ticket booking functionalities. Built with secure session-based authentication and database integration using PHP and MySQL.",
      technologies: ["HTML", "PHP", "MySQL", "CSS"],
      image: "/projects/movieBooking.PNG",
      link: "https://github.com/jayadewa123/Movie-Booking-System"
    },
    {
      id: 11,
      title: "Singlish Translator Automation",
      description: "An automated testing suite for a Singlish translator application, ensuring accuracy and performance in linguistic conversions.",
      technologies: ["Python", "Automation", "Testing"],
      image: "/projects/translater.PNG",
      link: "https://github.com/jayadewa123/ITPM-Assignment1-Singlish-Translator-Automation"
    },
  ]
};
