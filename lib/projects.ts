export const projects = [
  {
    "title": "Upcoming Internship at The Aerospace Corporation",
    "slug": "aerospace-internship",
    "category": null,
    "image": "/aero.png?height=600&width=800",
    "year": "2025",
    "technologies": [],
    "liveUrl": "https://aerospace.org",
    "githubUrl": "",
    "description": `
      <p>In Summer 2025, I will be joining <a href="https://aerospace.org" target="_blank">The Aerospace Corporation</a> as a Software Engineering Intern! (upcoming)</p>
    `
  }
  ,
  {
    "title": "RunSum",
    "slug": "runsum",
    "category": "Full Stack, Data Visualization",
    "image": "/rs.png?height=600&width=800",
    "year": "2024-Present",
    "technologies": ["React", "Flask", "PostgreSQL", "Material UI", "JWT", "Strava API"],
    "liveUrl": "https://runsum.harrylons.com",
    "githubUrl": "https://github.com/harry-lons/runsum-fe-nonorg",
    "description": `
      <p>RunSum is a full-stack web application that delivers retrospective training insights for endurance athletes. Inspired by products like Spotify Wrapped, it allows users to connect their Strava accounts and generate personalized workout summaries for a selected time period.</p>
      <p>Users authenticate via Strava, select a custom date range, and receive dynamic visualizations and aggregated statistics of their logged workouts—making it easy to reflect on progress, trends, and achievements.</p>
      <p>Key features:</p>
      <ul>
        <li>OAuth integration with Strava API for secure workout data retrieval</li>
        <li>Summary metrics such as total distance, elevation gain, and activity types</li>
        <li>Frontend built with React (Create React App), styled for clarity and usability</li>
        <li>Backend developed with Flask, using JWT for user authentication</li>
        <li>Data storage and querying powered by PostgreSQL</li>
      </ul>
    `
  },
  {
    "title": "LabStream",
    "slug": "labstream-project",
    "category": "Frontend Development, 3D Visualization",
    "image": "/ls.png?height=600&width=800",
    "year": "2024-2025",
    "technologies": ["React", "Three.js", "Onshape", "Material UI", "Tailwind CSS"],
    "liveUrl": "labstream.ucsd.edu",
    "githubUrl": "https://github.com/UCSD-LabStream",
    "description": `
      <p>LabStream is an ongoing research project in collaboration with Professor Baghdadchi’s lab in the UCSD ECE department, aimed at enabling remote participation in photonics lab experiments.</p>
      <p>As part of a 7-person development team, I'm contributing to a fully responsive web frontend built in React that allows students to interact with and control lab equipment from their browsers in real time.</p>
      <p>My work has focused heavily on developing interactive 3D visualizations using <strong>Three.js</strong> and <strong>Onshape</strong> models to simulate lab setups. These components are synchronized with physical hardware via HTTP requests to <strong>ESP32</strong> microcontrollers, creating a seamless bridge between digital simulation and hands-on experimentation.</p>
      <p>Key features:</p>
      <ul>
        <li>Custom 3D components to visualize and control lab instruments</li>
        <li>Real-time communication with ESP32-based lab hardware</li>
        <li>Responsive React interface designed for student accessibility</li>
        <li>Integration of mechanical CAD models with browser-based controls</li>
      </ul>
    `
  },
  {
    "title": "Software Engineering Internship at CurbWaste",
    "slug": "curbwaste-internship",
    "category": "Data Visualization, Full Stack",
    "image": "/cw-2.png?height=600&width=800",
    "year": "2024",
    "technologies": ["Grafana", "PostgreSQL", "Python", "AWS Lambda", "Datadog", "React"],
    "liveUrl": "https://curbwaste.com",
    "githubUrl": "",
    "description": `
      <p>During my summer software engineering internship at <a href="https://curbwaste.com" target="_blank">CurbWaste</a>, I worked alongside a talented team of developers to deliver improvements across internal tooling and customer-facing systems.</p>
      <p>My work focused on two core areas:</p>
      <ul>
        <li><strong>Internal Dashboards:</strong> Designed and implemented Grafana dashboards to provide real-time visibility into teams, systems, and testing processes, integrating data collected via PostgreSQL queries and custom metrics.</li>
        <li><strong>E-Commerce Enhancements:</strong> Contributed to improving the company’s subscription-based E-Commerce platform by adding settings features in the React frontend and Node.js backend.</li>
      </ul>
      <p>Additional responsibilities included writing Python scripts for data processing, deploying cloud functions using AWS Lambda, and monitoring performance and uptime with Datadog.</p>
    `
  }
  ,
  {
    "title": "Triton Robotics",
    "slug": "triton-robotics",
    "category": "Robotics, Embedded Systems, Computer Vision",
    "image": "/TR.png?height=600&width=800",
    "year": "2025",
    "technologies": ["ROS2", "C++", "UART", "OpenCV", "Ubuntu Linux"],
    "liveUrl": "https://tritonrobotics.org",
    "githubUrl": "https://github.com/Triton-Robotics",
    "description": `
      <p>I am a member of <a href="https://tritonrobotics.ucsd.edu/" target="_blank">Triton Robotics</a>, a competitive student robotics team at UC San Diego that builds autonomous systems for the annual RoboMaster North America (RMNA) competition.</p>
      <p>As part of the autonomy team, I focus on the development of targeting and decision-making algorithms for our fleet of three competition robots. My work spans computer vision, embedded communication, and systems optimization.</p>
      <p>Key contributions:</p>
      <ul>
        <li>Developed computer vision algorithms using <strong>ROS2</strong> and <strong>C++</strong> for real-time target tracking and localization</li>
        <li>Implemented high performance, high frequency UART communication between <strong>NVIDIA Jetson</strong> processor (handling vision) and STM32 microcontrollers (handling controls)</li>
        <li>Optimized throughput and memory usage across the vision pipeline to reduce latency and increase frame processing rate</li>
        <li>Contributed to the full stack of autonomy code for robots competing in RMNA</li>
      </ul>
    `
  },
  {
    "title": "UCSD HardHack 2024: Digital Compass",
    "slug": "ucsd-hardhack-digital-compass",
    "category": "Embedded Systems, IOT",
    "image": "/hh-2.jpg?height=600&width=800",
    "year": "2024",
    "technologies": ["Arduino", "C++", "LCD Display", "WiFi Geolocation", "Google Maps API"],
    "liveUrl": "https://docs.google.com/document/d/1S8pRMNw4NopTEcnJ9fmm_FyapqLK-i67Nd-qQjScwKQ/edit",
    "githubUrl": "https://github.com/harry-lons/HardHack2024?tab=readme-ov-file",
    "description": `
      <p>As part of a 3-person team at the 2024 UCSD IEEE HardHack, I developed a compact digital compass device in under 24 hours. Designed to help users navigate home in the dark, the system used an Arduino microcontroller and LCD display to provide real-time directional guidance.</p>
      <p>We implemented a custom location-tracking and heading algorithm in C++, leveraging WiFi signal strengths and the Google Maps Geolocation API to approximate the device’s position and direction without GPS.</p>
      <p>Our project earned <strong>first place in Track C</strong>, outperforming 7 other teams in the category.</p>
      <p>Key highlights:</p>
      <ul>
        <li>Real-time direction guidance via LCD and compass logic</li>
        <li>Location estimation using WiFi signals and Google Maps API</li>
        <li>Optimized power usage and hardware responsiveness under time constraints</li>
        <li>End-to-end embedded C++ development on Arduino</li>
      </ul>
    `
  },
  {
    "title": "Project Euler Solutions",
    "slug": "project-euler",
    "category": "Algorithms, Problem Solving",
    "image": "/proje.png?height=600&width=800",
    "year": "2023-Present",
    "technologies": ["Python", "Java", "Rust", "Mathematics", "Algorithms"],
    "githubUrl": "https://github.com/harry-lons/PROJECT-EULER",
    "description": `
      <p>Project Euler is a platform featuring challenging mathematical and computational problems that require both insight and efficient algorithms to solve. It’s a well-known resource for honing problem-solving skills and deepening understanding of algorithmic techniques.</p>
      <p>I’ve solved several of the first 100 publicly shareable problems, using a mix of <strong>Python</strong>, <strong>Java</strong>, and <strong>Rust</strong> to explore different approaches across languages. Each solution emphasized clean, efficient code and mathematical correctness.</p>
      <p>Key highlights:</p>
      <ul>
        <li>Implemented solutions involving number theory, combinatorics, and sequence analysis</li>
        <li>Wrote efficient algorithms such as backtracking</li>
        <li>Practiced algorithm design in multiple languages</li>
      </ul>
    `
  }
  ,
  {
    title: "MileCalc",
    slug: "MileCalc",
    category: "UI, Frontend Development",
    image: "/mc-1.png?height=600&width=800",
    year: "2024",
    technologies: ["React", "Vite", "TypeScript"],
    liveUrl: "https://milecalc.harrylons.com",
    githubUrl: "https://github.com/harry-lons/MileCalc",
    description: `
      <p>A personal web development project designed to automate weekly run planning.</p>
      <p>This tool allows you to generate a reasonable weekly plan to hit the mileage you want, no strings attached. This was one of the first websites I ever worked on!</p>
      <p>Key features include:</p>
      <ul>
        <li>Responsive design that works on all devices</li>
        <li>Interactive use of form components</li>
        <li>Deterministic and random algorithms to calculate running plans</li>
      </ul>
    `,
  },
  
  
]
