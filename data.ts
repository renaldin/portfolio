import { RiCommandLine, RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import { IProject, IService, ISkill } from './type'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'

export const services: IService[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
            "I can build a Frontend website using <b>HTML</b>, <b>CSS</b>, and <b>React Js</b>.",
    },
    {
        Icon: FaServer,
        title: "Backend Development",
        about:
            "I can build a backend program using <b>Node Js</b>, <b>Express Js</b>, <b>Go (GoLang)</b>, <b>Laravel</b>, <b>CodeIgniter</b>, <b>PostgreSQL</b>, <b>MySQL</b>, and <b>N8N</b>.",
    },
    {
        Icon: AiOutlineApi,
        title: "GIT",
        about:
            "I can work with the team using <b>GIT</b>. I can use <b>Github</b> and <b>Gitlab</b>.",
    },
    {
        Icon: RiCommandLine,
        title: "Communication Skill",
        about:
            "I am able to communicate well with the team.",
    },
]

export const languages: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'Node Js',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'Express Js',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'Laravel',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'Go (GoLang)',
        level: '60%'
    },
    {
        Icon: BsCircleFill,
        name: 'Codeigniter',
        level: '65%'
    },
    {
        Icon: BsCircleFill,
        name: 'ReactJs',
        level: '50%'
    },
    {
        Icon: BsCircleFill,
        name: 'NextJs',
        level: '30%'
    },
    {
        Icon: BsCircleFill,
        name: 'Bootstrap',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'Tailwind CSS',
        level: '40%'
    },
    {
        Icon: BsCircleFill,
        name: 'HTML',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'CSS',
        level: '60%'
    },
]

export const tools: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'PostgreSQL',
        level: '70%'
    },
    {
        Icon: BsCircleFill,
        name: 'MySQL',
        level: '70%'
    },
    {
        Icon: BsCircleFill,
        name: 'N8N',
        level: '70%'
    },
    {
        Icon: BsCircleFill,
        name: 'Figma',
        level: '30%'
    },
    {
        Icon: BsCircleFill,
        name: 'GIT',
        level: '70%'
    },
    {
        Icon: BsCircleFill,
        name: 'Visual Studio Code',
        level: '90%'
    },
    {
        Icon: BsCircleFill,
        name: 'Scrum',
        level: '90%'
    },
]

export const projects: IProject[] = [
    {
        id: 0,
        name: "WIDER Application (WIKA Digitalization Technique) Based on Website (Oct 2023 - Jan 2024)",
        description:
            "Client: PT Wijaya Karya (Persero) Tbk - Division 2. (Online) Developed a web-based management and dashboard platform for Division 2 of PT Wijaya Karya (Persero) Tbk. The WIDER application streamlines operational processes by providing centralized data management, performance monitoring dashboards, and enhanced workflow automation. Designed a user-friendly interface using Bootstrap, ensured robust backend functionality with Laravel, and implemented a scalable MySQL database. Leveraged GitHub for efficient collaboration and version control, delivering a solution that improves decision-making and operational efficiency.",
        image_path: "/images/porto33.png",
        deployed: "yes",
        deployed_url: "https://www.infraduawika.com/",
        github: "Private",
        github_url: "https://github.com/renaldin/sistem-infra-wika",
        category: ["laravel", "freelance"],
        key_techs: ["Laravel 8", "Bootstrap 5", "MySQL"],
    },
    {
        id: 1,
        name: "Employee Management System (Feb 2023 - Aug 2024)",
        description:
            "Client: PT Sintesa Niaga Karya. (Online) A website that can record employee cash receipt in a company. I played a role in fixing bugs and adding features such as managing deduction of cash advances and generating reports",
        image_path: "/images/porto3.png",
        deployed: "yes",
        deployed_url: "https://kepegawaian.sintesaniaga.com",
        github: "Private",
        github_url: "https://github.com/conelo03/sintesa_kasbon",
        category: ["laravel", "freelance"],
        key_techs: ["Laravel 9", "Vue Js", "Tailwind CSS", "MySQL"],
    },
    {
        id: 2,
        name: "Sintesa Digital Printing (Feb 2023 - Present)",
        description:
            "Client: PT Sintesa Niaga Karya. (Online) This website is the Sintesa Digital Printing Management website from PT Sintesa Niaga Karya. It includes production management, ordering, payment features, and report management. I have a role in fixing bugs and adding features such as cashier, expense reports, cost of goods sold reports, cash on bank management, and debt management.",
        image_path: "/images/porto30.png",
        deployed: "yes",
        deployed_url: "https://percetakan.sintesaniaga.com",
        github: "Private",
        github_url: "https://github.com/conelo03/sintesa-percetakan",
        category: ["laravel", "freelance"],
        key_techs: ["Laravel 9", "Livewire", "Tailwind CSS", "MySQL"],
    },
    {
        id: 3,
        name: "KPI IMT Website (Jan 2024 - Present)",
        description:
            "Client: IMT Group. (Online) This website is the IMT Management website. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto31.png",
        deployed: "yes",
        deployed_url: "https://imtechkpi.com",
        github: "Private",
        github_url: "https://github.com/conelo03/sistem-site",
        category: ["laravel", "freelance"],
        key_techs: ["Laravel 8", "Bootstrap 5", "MySQL"],
    },
    {
        id: 4,
        name: "Sintesa Digital Clothing (Feb 2023 - Present)",
        description:
            "Client: PT Sintesa Niaga Karya. (Online) This website is the Sintesa Digital Clothing Management website from PT Sintesa Niaga Karya. It includes production management, ordering, payment features, and report management. I have a role in fixing bugs and adding features such as expense reports, cost of goods sold reports, cash on bank management, and debt management.",
        image_path: "/images/porto32.png",
        deployed: "yes",
        deployed_url: "https://clothing.sintesaniaga.com",
        github: "Private",
        github_url: "https://github.com/conelo03/sintesa-clothing",
        category: ["laravel", "freelance"],
        key_techs: ["Laravel 9", "Tailwind CSS", "MySQL"],
    },
    {
        id: 5,
        name: "Booking Billlboard (Dec 2022 - Feb 2023)",
        description:
            "(Online) Billboard advertising ordering website and billboard advertising ordering management. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto7.png",
        deployed: "yes",
        deployed_url: "https://san.juniztudio.com/",
        github: "Private",
        github_url: "https://github.com/renaldin/sistem-booking-billboard",
        category: ["laravel", "freelance"],
        key_techs: ["Laravel 8", "Bootstrap 5", "MySQL"],
    },
    {
        id: 6,
        name: "Point of Sales Website Systems (Apr 2023 - Mei 2023)",
        description:
            "Client: APS Phone Store. (Online) Websites that can sell smartphones. On the website there are Point of Sales features and smartphone stock management.",
        image_path: "/images/porto4.png",
        deployed: "no",
        deployed_url: "https://demo-konter2.sintesaniaga.com",
        github: "Private",
        github_url: "https://github.com/conelo03/demo-konter2",
        category: ["codeigniter", "freelance"],
        key_techs: ["Codeigniter 3", "Bootstrap 3", "MySQL"],
    },
    {
        id: 7,
        name: "Himmi Polsub (2022)",
        description:
            "(Online) Organizational management website of the Informatics Management Student Association, Subang State Polytechnic. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto1.png",
        deployed: 'no',
        deployed_url: "https://himmi-polsub.com",
        github: "Public",
        github_url: "https://github.com/renaldin/himmi-polsub-2022",
        category: ["codeigniter"],
        key_techs: ["Codeigniter 4", "Bootstrap 5", "MySQL"],
    },
    {
        id: 8,
        name: "Difest Himmi Polsub (2022)",
        description:
            "(Online) Website for organizing Himmi Polsub Digital Festival events. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto2.png",
        deployed: "no",
        deployed_url: "https://digitalfestival.himmi-polsub.com",
        github: "Public",
        github_url: "https://github.com/renaldin/difest-2023",
        category: ["codeigniter"],
        key_techs: ["Codeigniter 4", "Bootstrap 5", "MySQL"],
    },
    {
        id: 9,
        name: "My Profile & Portfolio (2023)",
        description:
            "(Online) Renaldi's first profile and portfolio website. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto6.png",
        deployed: "yes",
        deployed_url: "https://renaldin.github.io/portfolio",
        github: "Private",
        github_url: "https://github.com/renaldin/web-portfolio-nextjs-tsx",
        category: ["next"],
        key_techs: ["Next Js", "Tailwind CSS", "TypeScript"],
    },
    {
        id: 10,
        name: "My Portfolio 2 (2022)",
        description:
            "(Online) Renaldi's second portfolio website. In this project, I play the role of a front end developer.",
        image_path: "/images/porto8.png",
        deployed: "yes",
        deployed_url: "https://renaldin.github.io/my-portfolio/",
        github: "Public",
        github_url: "https://github.com/renaldin/my-portfolio",
        category: ["react"],
        key_techs: ["React Js", "CSS3"],
    },
    {
        id: 11,
        name: "Blog Website (2023)",
        description:
            "(Offline) This project is a blog collection website. In this project, I play the role of a front end developer.",
        image_path: "/images/porto9.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/blog-nextjs",
        category: ["next"],
        key_techs: ["Next Js", "Tailwind CSS"],
    },
    {
        id: 12,
        name: "Jokian.ku Profile (2023)",
        description:
            "(Online) Jokian.ku profile website. In this project, I play the role of a front end developer.",
        image_path: "/images/porto5.png",
        deployed: "yes",
        deployed_url: "https://jokiankuu.github.io/",
        github: "Public",
        github_url: "https://github.com/renaldin/profile-app-jokianku",
        category: ["react"],
        key_techs: ["React Js", "CSS3"],
    },
    {
        id: 13,
        name: "Restaurant Profile (2022)",
        description:
            "(Offline) Restaurant profile website. In this project, I play the role of a front end developer.",
        image_path: "/images/porto10.png",
        deployed: "on",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/restaurant-profile-app-with-reactjs",
        category: ["react"],
        key_techs: ["React Js", "CSS3"],
    },
    {
        id: 14,
        name: "Simple CRUD App (2023)",
        description:
            "(Offline) Simple CRUD website. On the website there are features to add, edit, and delete data. In this project, I play the role of a full stack developer.",
        image_path: "/images/porto11.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/simple-crud-nextjs-typescript",
        category: ["next"],
        key_techs: ["Next Js", "Tailwind CSS", "TypeScript", "Daisy UI"],
    },
    {
        id: 15,
        name: "PPDB SD (2021)",
        description:
            "(Online) Website for registration and management of new admissions in elementary schools. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto12.png",
        deployed: "yes",
        deployed_url: "http://assalafusholihun.sch.id/",
        github: "Public",
        github_url: "https://github.com/renaldin/e-ppdb",
        category: ["freelance"],
        key_techs: ["PHP Native", "Bootstrap 4", "MySQL"],
    },
    {
        id: 16,
        name: "Service Profile (2022)",
        description:
            "(Offline) Website to offer services such as making App Security, Dashboard Design, Cloud Data, and API services. In this project, I play the role of a front end developer.",
        image_path: "/images/porto13.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/cloud-app-react",
        category: ["react"],
        key_techs: ["React Js", "Tailwind CSS"],
    },
    {
        id: 17,
        name: "Revenue Recording (2022)",
        description:
            "(Offline) This project is a website that can record revenue. In this project, I play the role of a front end developer.",
        image_path: "/images/porto14.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/revenue-list-react",
        category: ["react"],
        key_techs: ["React Js", "CSS3"],
    },
    {
        id: 18,
        name: "Movie Collection (2023)",
        description:
            "(Offline) This project is a website that displays lists of movies. In this project, I play the role of a front end developer.",
        image_path: "/images/porto15.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/rey-film",
        category: ["react"],
        key_techs: ["React Js", "Bootstrap 5"],
    },
    {
        id: 19,
        name: "Cashier App (2022)",
        description:
            "(Offline) This project is a website that can help cashiers in recording sales. In this project, I play the role of a front end developer.",
        image_path: "/images/porto16.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/kasir-app-reactjs",
        category: ["react"],
        key_techs: ["React Js", "Bootstrap 5", "Axios"],
    },
    {
        id: 20,
        name: "JWT Auth (Frontend) (2023)",
        description:
            "(Offline) This project is an authentication website using Json Web Token (JWT). There are login and register features. In this project, I play the role of a front end developer.",
        image_path: "/images/porto17.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/jwt-auth-react-nodejs-frontend",
        category: ["react"],
        key_techs: ["React Js", "Bulma CSS", "Axios", "JWT Decode"],
    },
    {
        id: 21,
        name: "JWT Auth (Backend) (2023)",
        description:
            "(Offline) This project is an authentication website using Json Web Token (JWT). There are login and register features. In this project, I play the role of a back end developer.",
        image_path: "/images/porto17.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/jwt-auth-react-nodejs-backend",
        category: ["express"],
        key_techs: ["Express Js", "Json Web Token", "Mysql2"],
    },
    {
        id: 22,
        name: "Multi-user Login (Frontend) (2023)",
        description:
            "(Offline) This project is a multi-user login website. There are login features and managing user data. In this project, I play the role of a front end developer.",
        image_path: "/images/porto19.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/reactjs-login-multi-user-frontend",
        category: ["react"],
        key_techs: ["React Js", "Bulma CSS", "Axios", "React Redux"],
    },
    {
        id: 23,
        name: "Multi-user Login (Backend) (2023)",
        description:
            "(Offline) This project is a multi-user login website. There are login features and managing user data. In this project, I play the role of a back end developer.",
        image_path: "/images/porto19.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/reactjs-login-multi-user-backend",
        category: ["express"],
        key_techs: ["Express Js", "Mysql2", "Argon2"],
    },
    {
        id: 24,
        name: "Rest API (2023)",
        description:
            "(Offline) This project is a Rest Api backend project. In this project, I play the role of a back end developer.",
        image_path: "/images/porto21.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/app-restapi",
        category: ["express"],
        key_techs: ["Express Js", "Mysql2", "Argon2"],
    },
    {
        id: 25,
        name: "Company Profile & Services (2022)",
        description:
            "(Offline) This project is a company profile website and service list. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto22.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/aerocom",
        category: ["laravel", "freelance"],
        key_techs: ["Laravel 8", "Bootstrap 5", "MySQL"],
    },
    {
        id: 26,
        name: "Restaurant Management (2023)",
        description:
            "(Offline) This project is a restaurant management information system website. There are employee attendance, POS, payroll, and report features. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto23.png",
        deployed: "no",
        deployed_url: "",
        github: "Private",
        github_url: "https://github.com/ajihairi/abah-cianjur-rm",
        category: ["codeigniter", "freelance"],
        key_techs: ["Codeigniter 3", "Bootstrap 3", "MySQL"],
    },
    {
        id: 27,
        name: "Book E-Commerce (2021)",
        description:
            "(Offline) This project is an online book sales site. There are book management, book list, cart and checkout features. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto24.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/toko-online-buku",
        category: ["codeigniter", "freelance"],
        key_techs: ["Codeigniter 3", "Bootstrap 4", "MySQL"],
    },
    {
        id: 28,
        name: "Clothing E-Commerce (2021)",
        description:
            "(Offline) This project is an online clothing sales website. There are clothing management, clothing list, cart and checkout features. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto25.png",
        deployed: "no",
        deployed_url: "",
        github: "Public",
        github_url: "https://github.com/renaldin/toko-baju-online",
        category: ["codeigniter", "freelance"],
        key_techs: ["Codeigniter 3", "Bootstrap 4", "MySQL"],
    },
    {
        id: 29,
        name: "PMI Subang (2023)",
        description:
            "(Online) This project involves the creation of the Palang Merah Indonesia (PMI) Subang website. It encompasses processes such as blood registration, blood donor registration, blood distribution, and blood donation events. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto27.png",
        deployed: "yes",
        deployed_url: "https://pmi-subang.elearningpolsub.com",
        github: "Public",
        github_url: "https://github.com/renaldin/sistem-informasi-donor-darah",
        category: ["laravel", "freelance"],
        key_techs: ["Laravel 8", "Bootstrap 5", "MySQL"],
    },
    {
        id: 30,
        name: "Employee Leave Management (2023)",
        description:
            "(Online) This project involves the creation of a website for the submission and management of leaves at Politeknik Negeri Subang. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto28.png",
        deployed: "yes",
        deployed_url: "https://sistem-kepegawaian.elearningpolsub.com",
        github: "Public",
        github_url: "https://github.com/renaldin/sistem-informasi-cuti",
        category: ["laravel", "freelance"],
        key_techs: ["Laravel 8", "Bootstrap 5", "MySQL"],
    },
    {
        id: 31,
        name: "UKT POLSUB (2023)",
        description:
            "(Online) Final project on campus. SI UKT is the UKT management website at Subang State Polytechnic. The website contains the UKT determination process and UKT suspension application. In this project, I play the role of a full-stack developer.",
        image_path: "/images/porto29.png",
        deployed: "yes",
        deployed_url: "https://ukt.elearningpolsub.com",
        github: "Public",
        github_url: "https://github.com/renaldin/si-ukt",
        category: ["laravel"],
        key_techs: ["Laravel 8", "Bootstrap 5", "MySQL"],
    }
];
