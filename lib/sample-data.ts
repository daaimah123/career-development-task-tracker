import type { Task } from "@/types"

export function generateSampleTasks(): Task[] {
  // Create dates starting from May 5th, 2025
  const startDate = new Date(2025, 4, 5) // May 5th, 2025 (month is 0-indexed)

  // Helper function to create a date with an offset from the start date
  const createDate = (dayOffset: number) => {
    const date = new Date(startDate)
    date.setDate(date.getDate() + dayOffset)
    return date.toISOString()
  }

  // Helper to get the first Monday of a specific month (0-indexed)
  const getFirstMonday = (year: number, month: number) => {
    const date = new Date(year, month, 1)
    const day = date.getDay()
    // If first day is not Monday (1), adjust to the first Monday
    const daysToAdd = day === 0 ? 1 : day === 1 ? 0 : 8 - day
    date.setDate(date.getDate() + daysToAdd)
    return date
  }

  // Create dates for specific months - shifted by one month
  const may2025FirstMonday = getFirstMonday(2025, 4) // May 2025
  const june2025FirstMonday = getFirstMonday(2025, 5) // June 2025
  const july2025FirstMonday = getFirstMonday(2025, 6) // July 2025
  const august2025FirstMonday = getFirstMonday(2025, 7) // August 2025
  const september2025FirstMonday = getFirstMonday(2025, 8) // September 2025
  const october2025FirstMonday = getFirstMonday(2025, 9) // October 2025

  // Helper to create a date for a specific day in a week
  const createDateForWeekDay = (baseMonday: Date, weekOffset: number, dayOffset: number) => {
    const date = new Date(baseMonday)
    date.setDate(date.getDate() + weekOffset * 7 + dayOffset)
    return date.toISOString()
  }

  // Create today's date for reference
  const today = new Date()

  // Helper function to add days to a date
  const add_days = (date: Date, days: number) => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result.toISOString()
  }

  return [
    // Skill Development Tasks - May 2025
    // Week 1
    {
      id: "skill-may-w1-tue",
      title: "Complete React.js Tutorial Module 1",
      description:
        "Start the 'Full Modern React Tutorial' by Net Ninja on YouTube. Complete Module 1 focusing on React fundamentals and component basics. Resource: https://www.youtube.com/c/TheNetNinja",
      dueDate: createDateForWeekDay(may2025FirstMonday, 0, 1), // Week 1 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-may-w1-thu",
      title: "Learn Web Accessibility Fundamentals",
      description:
        "Complete the first module of Udacity's Web Accessibility course focusing on WCAG guidelines and semantic HTML. Resource: https://www.udacity.com/course/web-accessibility--ud891",
      dueDate: createDateForWeekDay(may2025FirstMonday, 0, 3), // Week 1 Thursday
      category: "Short",
      completed: false,
    },

    // Week 2
    {
      id: "skill-may-w2-tue",
      title: "Complete React.js Tutorial Module 2",
      description:
        "Continue the 'Full Modern React Tutorial' by Net Ninja. Complete Module 2 focusing on state management and hooks. Resource: https://www.youtube.com/c/TheNetNinja",
      dueDate: createDateForWeekDay(may2025FirstMonday, 1, 1), // Week 2 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-may-w2-thu",
      title: "Start TypeScript Course Module 1",
      description:
        "Begin the TypeScript course on freeCodeCamp. Complete Module 1 covering TypeScript basics and type annotations. Resource: https://www.freecodecamp.org/news/learn-typescript-beginners-guide/",
      dueDate: createDateForWeekDay(may2025FirstMonday, 1, 3), // Week 2 Thursday
      category: "Short",
      completed: false,
    },

    // Week 3
    {
      id: "skill-may-w3-tue",
      title: "Complete Node.js API Fundamentals",
      description:
        "Start the 'Node.js API Masterclass' by Traversy Media. Complete the section on RESTful API basics and Express setup. Resource: https://www.youtube.com/c/TraversyMedia",
      dueDate: createDateForWeekDay(may2025FirstMonday, 2, 1), // Week 3 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-may-w3-thu",
      title: "Learn SQL Basics on Khan Academy",
      description:
        "Complete the first module of 'Introduction to SQL' on Khan Academy covering database fundamentals and basic queries. Resource: https://www.khanacademy.org/computing/computer-programming/sql",
      dueDate: createDateForWeekDay(may2025FirstMonday, 2, 3), // Week 3 Thursday
      category: "Short",
      completed: false,
    },

    // Week 4
    {
      id: "skill-may-w4-tue",
      title: "Complete Authentication & Security Basics",
      description:
        "Work through the Authentication & Security module from The Odin Project, focusing on JWT and secure authentication practices. Resource: https://www.theodinproject.com",
      dueDate: createDateForWeekDay(may2025FirstMonday, 3, 1), // Week 4 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-may-w4-thu",
      title: "Learn Cloud Services Fundamentals",
      description:
        "Complete the first module of Google Cloud Skills Boost focusing on cloud computing basics and service models. Resource: https://www.cloudskillsboost.google/",
      dueDate: createDateForWeekDay(may2025FirstMonday, 3, 3), // Week 4 Thursday
      category: "Short",
      completed: false,
    },

    // Skill Development Tasks - June 2025
    // Week 1
    {
      id: "skill-june-w1-tue",
      title: "Complete React.js Tutorial Module 3",
      description:
        "Continue the 'Full Modern React Tutorial' by Net Ninja. Complete Module 3 focusing on routing and navigation. Resource: https://www.youtube.com/c/TheNetNinja",
      dueDate: createDateForWeekDay(june2025FirstMonday, 0, 1), // Week 1 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-june-w1-thu",
      title: "Learn Cybersecurity Fundamentals",
      description:
        "Complete the first module of IBM's Cybersecurity Fundamentals course focusing on security principles and threat models. Resource: https://www.ibm.com/skills/topics/cybersecurity/",
      dueDate: createDateForWeekDay(june2025FirstMonday, 0, 3), // Week 1 Thursday
      category: "Short",
      completed: false,
    },

    // Week 2
    {
      id: "skill-june-w2-tue",
      title: "Complete TypeScript Course Module 2",
      description:
        "Continue the TypeScript course on freeCodeCamp. Complete Module 2 covering interfaces, classes, and generics. Resource: https://www.freecodecamp.org/news/learn-typescript-beginners-guide/",
      dueDate: createDateForWeekDay(june2025FirstMonday, 1, 1), // Week 2 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-june-w2-thu",
      title: "Learn Database Design Principles",
      description:
        "Complete the database design module from Khan Academy's SQL course, focusing on normalization and relationships. Resource: https://www.khanacademy.org/computing/computer-programming/sql",
      dueDate: createDateForWeekDay(june2025FirstMonday, 1, 3), // Week 2 Thursday
      category: "Short",
      completed: false,
    },

    // Week 3
    {
      id: "skill-june-w3-tue",
      title: "Complete Node.js API Authentication",
      description:
        "Continue the 'Node.js API Masterclass' by Traversy Media. Complete the section on JWT authentication and user management. Resource: https://www.youtube.com/c/TraversyMedia",
      dueDate: createDateForWeekDay(june2025FirstMonday, 2, 1), // Week 3 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-june-w3-thu",
      title: "Learn NoSQL Database Concepts",
      description:
        "Complete a tutorial on MongoDB basics and document database design principles. Resource: https://university.mongodb.com/",
      dueDate: createDateForWeekDay(june2025FirstMonday, 2, 3), // Week 3 Thursday
      category: "Short",
      completed: false,
    },

    // Week 4
    {
      id: "skill-june-w4-tue",
      title: "Complete Backend Testing Fundamentals",
      description:
        "Learn about unit and integration testing for Node.js applications using Jest and Supertest. Resource: https://jestjs.io/docs/getting-started",
      dueDate: createDateForWeekDay(june2025FirstMonday, 3, 1), // Week 4 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-june-w4-thu",
      title: "Learn Azure Fundamentals",
      description:
        "Complete the first module of Microsoft Learn: Azure Fundamentals focusing on cloud concepts and Azure services. Resource: https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/",
      dueDate: createDateForWeekDay(june2025FirstMonday, 3, 3), // Week 4 Thursday
      category: "Short",
      completed: false,
    },

    // Skill Development Tasks - July 2025
    // Week 1
    {
      id: "skill-july-w1-tue",
      title: "Complete React.js State Management",
      description:
        "Learn about Context API and Redux for state management in React applications. Resource: https://www.youtube.com/c/TheNetNinja",
      dueDate: createDateForWeekDay(july2025FirstMonday, 0, 1), // Week 1 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-july-w1-thu",
      title: "Learn SANS Cyber Aces Fundamentals",
      description:
        "Complete the first module of SANS Cyber Aces Online focusing on networking security and system administration. Resource: https://www.cyberaces.org/",
      dueDate: createDateForWeekDay(july2025FirstMonday, 0, 3), // Week 1 Thursday
      category: "Short",
      completed: false,
    },

    // Week 2
    {
      id: "skill-july-w2-tue",
      title: "Complete Frontend Testing Basics",
      description:
        "Learn about testing React components using React Testing Library and Jest. Resource: https://testing-library.com/docs/react-testing-library/intro/",
      dueDate: createDateForWeekDay(july2025FirstMonday, 1, 1), // Week 2 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-july-w2-thu",
      title: "Learn Microservices Architecture",
      description:
        "Complete a tutorial on microservices principles, patterns, and implementation with Node.js. Resource: https://microservices.io/",
      dueDate: createDateForWeekDay(july2025FirstMonday, 1, 3), // Week 2 Thursday
      category: "Short",
      completed: false,
    },

    // Week 3
    {
      id: "skill-july-w3-tue",
      title: "Complete Social Impact Measurement Basics",
      description:
        "Start the Social Impact Strategy course on Coursera focusing on impact metrics and measurement frameworks. Resource: https://www.coursera.org/learn/social-impact",
      dueDate: createDateForWeekDay(july2025FirstMonday, 2, 1), // Week 3 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-july-w3-thu",
      title: "Learn Data Visualization with D3.js",
      description:
        "Complete the first module of freeCodeCamp's Data Visualization with D3.js course. Resource: https://www.freecodecamp.org/learn/data-visualization/",
      dueDate: createDateForWeekDay(july2025FirstMonday, 2, 3), // Week 3 Thursday
      category: "Short",
      completed: false,
    },

    // Week 4
    {
      id: "skill-july-w4-tue",
      title: "Complete Software Architecture Fundamentals",
      description:
        "Start Udacity's Software Architecture & Design course focusing on architectural patterns and design principles. Resource: https://www.udacity.com/course/software-architecture-design--ud821",
      dueDate: createDateForWeekDay(july2025FirstMonday, 3, 1), // Week 4 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-july-w4-thu",
      title: "Learn Technical Documentation Best Practices",
      description:
        "Complete a tutorial on creating effective technical documentation for software projects. Resource: https://www.writethedocs.org/guide/",
      dueDate: createDateForWeekDay(july2025FirstMonday, 3, 3), // Week 4 Thursday
      category: "Short",
      completed: false,
    },

    // Skill Development Tasks - August 2025
    // Week 1
    {
      id: "skill-aug-w1-tue",
      title: "Complete Agile Development Fundamentals",
      description:
        "Start the Agile Development course on Coursera focusing on Scrum and Kanban methodologies. Resource: https://www.coursera.org/learn/agile-development",
      dueDate: createDateForWeekDay(august2025FirstMonday, 0, 1), // Week 1 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-aug-w1-thu",
      title: "Learn Technical Mentorship Skills",
      description:
        "Complete a module on effective technical mentorship and coaching techniques for engineering teams. Resource: https://www.edx.org/learn/engineering/engineering-leadership",
      dueDate: createDateForWeekDay(august2025FirstMonday, 0, 3), // Week 1 Thursday
      category: "Short",
      completed: false,
    },

    // Week 2
    {
      id: "skill-aug-w2-tue",
      title: "Complete User Research Fundamentals",
      description:
        "Start the User Experience Research and Design course on Coursera focusing on user research methods and analysis. Resource: https://www.coursera.org/specializations/michiganux",
      dueDate: createDateForWeekDay(august2025FirstMonday, 1, 1), // Week 2 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-aug-w2-thu",
      title: "Learn Stakeholder Management",
      description:
        "Complete a module on effective stakeholder management and communication strategies for technical projects. Resource: https://www.edx.org/learn/product-management",
      dueDate: createDateForWeekDay(august2025FirstMonday, 1, 3), // Week 2 Thursday
      category: "Short",
      completed: false,
    },

    // Week 3
    {
      id: "skill-aug-w3-tue",
      title: "Complete Project Management Fundamentals",
      description:
        "Start Google's Project Management Certificate focusing on project planning and execution. Resource: https://www.coursera.org/professional-certificates/google-project-management",
      dueDate: createDateForWeekDay(august2025FirstMonday, 2, 1), // Week 3 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-aug-w3-thu",
      title: "Learn Agile Project Management",
      description:
        "Complete Atlassian's Agile Project Management tutorial focusing on agile ceremonies and artifacts. Resource: https://www.atlassian.com/agile",
      dueDate: createDateForWeekDay(august2025FirstMonday, 2, 3), // Week 3 Thursday
      category: "Short",
      completed: false,
    },

    // Week 4
    {
      id: "skill-aug-w4-tue",
      title: "Complete Data Analysis Fundamentals",
      description:
        "Start Harvard's Data Science course on edX focusing on data analysis methods and tools. Resource: https://www.edx.org/learn/data-science/harvard-university-data-science-r-basics",
      dueDate: createDateForWeekDay(august2025FirstMonday, 3, 1), // Week 4 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-aug-w4-thu",
      title: "Learn Data Visualization Techniques",
      description:
        "Complete a module on effective data visualization principles and tools for impact reporting. Resource: https://www.coursera.org/learn/datavisualization",
      dueDate: createDateForWeekDay(august2025FirstMonday, 3, 3), // Week 4 Thursday
      category: "Short",
      completed: false,
    },

    // Skill Development Tasks - September 2025
    // Week 1
    {
      id: "skill-sept-w1-tue",
      title: "Complete Machine Learning Fundamentals",
      description:
        "Start Google's Machine Learning Crash Course focusing on ML concepts and TensorFlow basics. Resource: https://developers.google.com/machine-learning/crash-course",
      dueDate: createDateForWeekDay(september2025FirstMonday, 0, 1), // Week 1 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-sept-w1-thu",
      title: "Learn Responsible AI Principles",
      description:
        "Complete a module on ethical AI development and responsible implementation practices. Resource: https://www.fast.ai/",
      dueDate: createDateForWeekDay(september2025FirstMonday, 0, 3), // Week 1 Thursday
      category: "Short",
      completed: false,
    },

    // Week 2
    {
      id: "skill-sept-w2-tue",
      title: "Complete Docker Fundamentals",
      description:
        "Start Docker's official tutorial for beginners focusing on containerization basics and Docker commands. Resource: https://docs.docker.com/get-started/",
      dueDate: createDateForWeekDay(september2025FirstMonday, 1, 1), // Week 2 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-sept-w2-thu",
      title: "Learn Kubernetes Basics",
      description:
        "Complete the Kubernetes Basics tutorial from kubernetes.io focusing on pod deployment and scaling. Resource: https://kubernetes.io/docs/tutorials/kubernetes-basics/",
      dueDate: createDateForWeekDay(september2025FirstMonday, 1, 3), // Week 2 Thursday
      category: "Short",
      completed: false,
    },

    // Week 3
    {
      id: "skill-sept-w3-tue",
      title: "Complete Terraform Fundamentals",
      description:
        "Start HashiCorp's Terraform tutorial focusing on infrastructure as code principles and basic commands. Resource: https://learn.hashicorp.com/terraform",
      dueDate: createDateForWeekDay(september2025FirstMonday, 2, 1), // Week 3 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-sept-w3-thu",
      title: "Learn Progressive Web Apps",
      description:
        "Complete a tutorial on building Progressive Web Apps with service workers and offline functionality. Resource: https://web.dev/progressive-web-apps/",
      dueDate: createDateForWeekDay(september2025FirstMonday, 2, 3), // Week 3 Thursday
      category: "Short",
      completed: false,
    },

    // Week 4
    {
      id: "skill-sept-w4-tue",
      title: "Complete Technical Strategy Fundamentals",
      description:
        "Start a course on developing effective technical strategies for social impact organizations. Resource: https://www.edx.org/learn/product-management",
      dueDate: createDateForWeekDay(september2025FirstMonday, 3, 1), // Week 4 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-sept-w4-thu",
      title: "Learn Risk Management for Tech Projects",
      description:
        "Complete a module on identifying, assessing, and mitigating risks in technical projects. Resource: https://www.open.edu/openlearn/money-business/project-management-the-basics/content-section-0",
      dueDate: createDateForWeekDay(september2025FirstMonday, 3, 3), // Week 4 Thursday
      category: "Short",
      completed: false,
    },

    // Skill Development Tasks - October 2025
    // Week 1
    {
      id: "skill-oct-w1-tue",
      title: "Complete AI Integration Fundamentals",
      description:
        "Learn about integrating AI services into applications using APIs and SDKs. Resource: https://www.fast.ai/",
      dueDate: createDateForWeekDay(october2025FirstMonday, 0, 1), // Week 1 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-oct-w1-thu",
      title: "Learn Voice Interface Design",
      description:
        "Complete a tutorial on designing and implementing voice interfaces for accessibility and inclusion. Resource: https://developer.amazon.com/en-US/alexa/alexa-skills-kit/resources",
      dueDate: createDateForWeekDay(october2025FirstMonday, 0, 3), // Week 1 Thursday
      category: "Short",
      completed: false,
    },

    // Week 2
    {
      id: "skill-oct-w2-tue",
      title: "Complete Blockchain Fundamentals",
      description:
        "Start Coursera's Blockchain Basics course focusing on distributed ledger technology and applications. Resource: https://www.coursera.org/learn/blockchain-basics",
      dueDate: createDateForWeekDay(october2025FirstMonday, 1, 1), // Week 2 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-oct-w2-thu",
      title: "Learn AR/VR Development Basics",
      description:
        "Complete Unity Learn's Introduction to AR/VR Development focusing on immersive technology fundamentals. Resource: https://learn.unity.com/",
      dueDate: createDateForWeekDay(october2025FirstMonday, 1, 3), // Week 2 Thursday
      category: "Short",
      completed: false,
    },

    // Week 3
    {
      id: "skill-oct-w3-tue",
      title: "Complete Adult Learning Principles",
      description:
        "Start UC San Diego's Learning How to Learn course on Coursera focusing on effective learning strategies. Resource: https://www.coursera.org/learn/learning-how-to-learn",
      dueDate: createDateForWeekDay(october2025FirstMonday, 2, 1), // Week 3 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-oct-w3-thu",
      title: "Learn Instructional Design Basics",
      description:
        "Complete Commonwealth of Learning's E-Learning Instructional Design tutorial focusing on creating effective learning materials. Resource: https://www.col.org/",
      dueDate: createDateForWeekDay(october2025FirstMonday, 2, 3), // Week 3 Thursday
      category: "Short",
      completed: false,
    },

    // Week 4
    {
      id: "skill-oct-w4-tue",
      title: "Complete Civic Tech Fundamentals",
      description:
        "Start edX's Digital Government and Civic Tech course focusing on technology for public good. Resource: https://www.edx.org/learn/government/digital-government",
      dueDate: createDateForWeekDay(october2025FirstMonday, 3, 1), // Week 4 Tuesday
      category: "Short",
      completed: false,
    },
    {
      id: "skill-oct-w4-thu",
      title: "Learn Open Data Standards",
      description:
        "Complete School of Data's Open Data Basics tutorial focusing on data standards and civic applications. Resource: https://schoolofdata.org/",
      dueDate: createDateForWeekDay(october2025FirstMonday, 3, 3), // Week 4 Thursday
      category: "Short",
      completed: false,
    },

    // Month 1: May 2025 - Personal & Professional Narratives
    // Week 1
    {
      id: "may-w1-mon",
      title: "Write Blog: Pivoting with Purpose: Reinventing Your Career Path in Tech",
      description:
        "Share your career transition story, focusing on lessons learned and transferable skills. Publish on LinkedIn and Medium.",
      dueDate: createDateForWeekDay(may2025FirstMonday, 0, 0), // Week 1 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "may-w1-wed",
      title: "Create Short: Mom's Code Break: My Kids Explain Debugging",
      description:
        "Film your kids humorously explaining debugging or other technical terms. Keep it lighthearted and relatable.",
      dueDate: createDateForWeekDay(may2025FirstMonday, 0, 2), // Week 1 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "may-w1-fri",
      title: "Networking: Host Coffee Chat",
      description:
        'Organize an informal "coffee chat" with peers or mentors to talk about career pivots and technical leadership.',
      dueDate: createDateForWeekDay(may2025FirstMonday, 0, 4), // Week 1 Friday
      category: "Networking",
      completed: false,
    },

    // Week 2
    {
      id: "may-w2-mon",
      title: "Write Blog: Thriving in Tech While Managing Bipolar and Single Parenthood",
      description:
        "Offer authentic, actionable tips on balancing personal challenges with professional success. Include a call-to-action for mental health awareness.",
      dueDate: createDateForWeekDay(may2025FirstMonday, 1, 0), // Week 2 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "may-w2-wed",
      title: "Create Short: Coding in Real Life: What They Don't Show You in Movies",
      description: "Dramatize the humorous reality of coding versus its portrayal in media.",
      dueDate: createDateForWeekDay(may2025FirstMonday, 1, 2), // Week 2 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "may-w2-fri",
      title: "Job Search Task: Update Resume",
      description: "Tailor your resume to highlight transferable skills for tech training and leadership positions.",
      dueDate: createDateForWeekDay(may2025FirstMonday, 1, 4), // Week 2 Friday
      category: "Job Search",
      completed: false,
    },

    // Week 3
    {
      id: "may-w3-mon",
      title: "Write Blog: From Nonprofit Manager to Tech Leader: My Career Glow-Up",
      description: "Focus on your growth and how nonprofit experience adds value to tech leadership.",
      dueDate: createDateForWeekDay(may2025FirstMonday, 2, 0), // Week 3 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "may-w3-wed",
      title: "Create Short: What My Kids Think I Do at Work",
      description:
        "Record your kids' fun and honest interpretations of your job, mixing their insights with your explanations.",
      dueDate: createDateForWeekDay(may2025FirstMonday, 2, 2), // Week 3 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "may-w3-fri",
      title: "Networking: Attend Meetup",
      description: "Join a local or virtual technical leadership event to build connections and learn from peers.",
      dueDate: createDateForWeekDay(may2025FirstMonday, 2, 4), // Week 3 Friday
      category: "Networking",
      completed: false,
    },

    // Week 4
    {
      id: "may-w4-mon",
      title: "Presentation Prep: The Road Less Traveled: Lessons from a Nontraditional Path",
      description: "Start preparing slides for a community or local workshop on career transitions.",
      dueDate: createDateForWeekDay(may2025FirstMonday, 3, 0), // Week 4 Monday
      category: "Presentation",
      completed: false,
    },
    {
      id: "may-w4-wed",
      title: "Create Short: Yes, You Belong: Words for Nontraditional Techies",
      description: "Film a quick and empowering short for anyone doubting their place in tech.",
      dueDate: createDateForWeekDay(may2025FirstMonday, 3, 2), // Week 4 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "may-w4-fri",
      title: "Job Search Task: Apply to One Role",
      description:
        "Submit an application for a relevant position, ensuring your tailored resume highlights leadership and technical training expertise.",
      dueDate: createDateForWeekDay(may2025FirstMonday, 3, 4), // Week 4 Friday
      category: "Job Search",
      completed: false,
    },

    // Month 2: June 2025 - Technical Expertise with a Fun Twist (shifted from May)
    // Week 1
    {
      id: "june-w1-mon",
      title: "Write Guide: Comprehensive Documentation for Full-Stack Engineers",
      description: "Create a guide or template for effective documentation practices in tech teams.",
      dueDate: createDateForWeekDay(june2025FirstMonday, 0, 0), // Week 1 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "june-w1-wed",
      title: "Create Short: Debugging Made Simple: My Go-To Strategy",
      description: "Record a quick, actionable clip with a simple debugging process.",
      dueDate: createDateForWeekDay(june2025FirstMonday, 0, 2), // Week 1 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "june-w1-fri",
      title: "Networking: Virtual Panel",
      description: "Join or participate in an online panel on mentoring in tech.",
      dueDate: createDateForWeekDay(june2025FirstMonday, 0, 4), // Week 1 Friday
      category: "Networking",
      completed: false,
    },

    // Week 2
    {
      id: "june-w2-mon",
      title: "Write Blog: A Step-by-Step Approach to Building a Full-Stack Project",
      description: "Write an easy-to-follow technical how-to guide tailored for beginner or junior engineers.",
      dueDate: createDateForWeekDay(june2025FirstMonday, 1, 0), // Week 2 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "june-w2-wed",
      title: "Create Short: Technical Terms Explained Casually",
      description: "Use an analogy to explain a complex concept (e.g., comparing APIs to restaurant waiters).",
      dueDate: createDateForWeekDay(june2025FirstMonday, 1, 2), // Week 2 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "june-w2-fri",
      title: "Job Search Task: Research Companies",
      description: "Research 3-5 companies with values aligned to inclusivity, mentorship, and flexibility.",
      dueDate: createDateForWeekDay(june2025FirstMonday, 1, 4), // Week 2 Friday
      category: "Job Search",
      completed: false,
    },

    // Week 3
    {
      id: "june-w3-mon",
      title: "Presentation: Building High-Performing Full-Stack Teams",
      description: "Finalize slides and rehearse for a live Q&A or webinar on this topic.",
      dueDate: createDateForWeekDay(june2025FirstMonday, 2, 0), // Week 3 Monday
      category: "Presentation",
      completed: false,
    },
    {
      id: "june-w3-wed",
      title: "Create Short: Parenting as a Debugging Exercise",
      description: "Draw playful parallels between solving parenting problems and coding bugs.",
      dueDate: createDateForWeekDay(june2025FirstMonday, 2, 2), // Week 3 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "june-w3-fri",
      title: "Networking: Host Mentorship Session",
      description: "Offer a virtual mentoring session for junior engineers or aspiring tech professionals.",
      dueDate: createDateForWeekDay(june2025FirstMonday, 2, 4), // Week 3 Friday
      category: "Networking",
      completed: false,
    },

    // Week 4
    {
      id: "june-w4-mon",
      title: "Write Case Study: Improving Team Collaboration in Cross-Functional Tech Projects",
      description: "Share a detailed case study with practical takeaways.",
      dueDate: createDateForWeekDay(june2025FirstMonday, 3, 0), // Week 4 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "june-w4-wed",
      title: "Create Short: Tech Trivia Faceoff: Mom vs. Kids",
      description: "Engage your kids in a trivia game about tech terms.",
      dueDate: createDateForWeekDay(june2025FirstMonday, 3, 2), // Week 4 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "june-w4-fri",
      title: "Job Search Task: Follow Up with Connections",
      description:
        "Reach out to connections from earlier networking events for potential leads or informational interviews.",
      dueDate: createDateForWeekDay(june2025FirstMonday, 3, 4), // Week 4 Friday
      category: "Job Search",
      completed: false,
    },

    // Month 3: July 2025 - Leadership & Advocacy (shifted from June)
    // Week 1
    {
      id: "july-w1-mon",
      title: "Write Blog: Empathy-Driven Leadership: Bridging Tech and Humanity",
      description:
        "Explore the role of emotional intelligence in tech leadership, using insights from your nonprofit and engineering experience.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 0, 0), // Week 1 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "july-w1-wed",
      title: "Create Short: Why Mental Health Makes You a Stronger Leader",
      description:
        "Share a brief personal insight about how mental health challenges have shaped your leadership skills and team empathy.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 0, 2), // Week 1 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "july-w1-fri",
      title: "Networking: Participate in Slack/Discord Channels",
      description:
        "Join active conversations in tech or leadership-focused online communities and share your recent content to spark engagement.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 0, 4), // Week 1 Friday
      category: "Networking",
      completed: false,
    },

    // Week 2
    {
      id: "july-w2-mon",
      title: "Write Blog: Unexpected Skills That Make You a Better Engineer",
      description:
        "Highlight how nontraditional skills, like storytelling or empathy, have given you an edge in technical leadership.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 1, 0), // Week 2 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "july-w2-wed",
      title: "Create Short: Lessons My Kids Teach Me About Leadership",
      description: "Share an anecdote where a moment with your kids mirrored a professional leadership challenge.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 1, 2), // Week 2 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "july-w2-fri",
      title: "Job Search Task: Tailor Portfolio",
      description:
        "Update your LinkedIn profile and portfolio to include recent articles, visuals from presentations, and highlights of your advocacy work.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 1, 4), // Week 2 Friday
      category: "Job Search",
      completed: false,
    },

    // Week 3
    {
      id: "july-w3-mon",
      title: "Write Blog: Creating Inclusive Workspaces in the Tech Industry",
      description:
        "Offer actionable ways to foster diversity, equity, and inclusion based on your leadership experiences.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 2, 0), // Week 3 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "july-w3-wed",
      title: "Create Short: Top 3 Leadership Tips I Learned While Managing Bedtime Routines",
      description: "Humorously connect parenting lessons to professional leadership principles.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 2, 2), // Week 3 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "july-w3-fri",
      title: "Networking: Organize a Roundtable Discussion",
      description:
        "Host an informal discussion on inclusion in tech, either virtually or locally, inviting peers or community members.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 2, 4), // Week 3 Friday
      category: "Networking",
      completed: false,
    },

    // Week 4
    {
      id: "july-w4-mon",
      title: "Presentation: Building High-Performing, Inclusive Teams in Tech",
      description: "Prepare slides for this topic, incorporating your professional examples and mentorship strategies.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 3, 0), // Week 4 Monday
      category: "Presentation",
      completed: false,
    },
    {
      id: "july-w4-wed",
      title: "Create Short: Tech Myths: You Don't Have to Be Perfect to Succeed",
      description: "Film a lighthearted take on debunking myths about perfectionism in tech careers.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 3, 2), // Week 4 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "july-w4-fri",
      title: "Job Search Task: Reach Out to 2 Industry Contacts",
      description:
        "Follow up with leaders or peers in roles you admire to request informational interviews or insights on job openings.",
      dueDate: createDateForWeekDay(july2025FirstMonday, 3, 4), // Week 4 Friday
      category: "Job Search",
      completed: false,
    },

    // Month 4: August 2025 - Integrative Fun & Advocacy (shifted from July)
    // Week 1
    {
      id: "aug-w1-mon",
      title: "Write Blog: From Challenge to Catalyst: Turning Personal Struggles into Professional Strengths",
      description:
        "Reflect on how navigating challenges like mental health and single parenthood has shaped your leadership style.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 0, 0), // Week 1 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "aug-w1-wed",
      title: "Create Short: How I Explain My Tech Job to Non-Tech People",
      description: "Record humorous analogies for explaining your job to family and friends in a lighthearted way.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 0, 2), // Week 1 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "aug-w1-fri",
      title: "Networking: Attend a Virtual Webinar",
      description:
        "Join a panel or webinar on leadership or technical training to connect with like-minded professionals.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 0, 4), // Week 1 Friday
      category: "Networking",
      completed: false,
    },

    // Week 2
    {
      id: "aug-w2-mon",
      title: "Write Blog: Coding My Way Through Life Challenges",
      description: "Explore how coding principles like debugging and problem-solving apply to personal life hurdles.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 1, 0), // Week 2 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "aug-w2-wed",
      title: "Create Short: Parenting Hacks for Techies",
      description: "Showcase how you use tech tools to streamline parenting tasks.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 1, 2), // Week 2 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "aug-w2-fri",
      title: "Job Search Task: Research Mentorship-Focused Companies",
      description: "Identify organizations prioritizing mentorship and family-friendly work environments.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 1, 4), // Week 2 Friday
      category: "Job Search",
      completed: false,
    },

    // Week 3
    {
      id: "aug-w3-mon",
      title: "Write Resource: Quick Reference Guides for Aspiring Full-Stack Engineers",
      description: "Compile bite-sized, practical resources like cheat sheets or checklists for beginner developers.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 2, 0), // Week 3 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "aug-w3-wed",
      title: "Create Short: Mom vs. Kids: Who Can Fix the Bug Faster?",
      description: "Gamify a debugging challenge with your kids for an entertaining short.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 2, 2), // Week 3 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "aug-w3-fri",
      title: "Networking: Host a Community Workshop",
      description:
        "Offer a casual workshop on an accessible tech topic to engage with your local or virtual community.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 2, 4), // Week 3 Friday
      category: "Networking",
      completed: false,
    },

    // Week 4
    {
      id: "aug-w4-mon",
      title: "Write Blog: Tech for Social Good: Bridging the Gap Between Coding and Community Needs",
      description: "Share examples of how technical skills can be leveraged for impactful, mission-driven projects.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 3, 0), // Week 4 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "aug-w4-wed",
      title: "Create Short: Fun Facts in Tech: Did You Know?",
      description: "Share a fascinating or surprising tech fact with a humorous spin to engage your audience.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 3, 2), // Week 4 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "aug-w4-fri",
      title: "Job Search Task: Apply to One Role",
      description:
        "Submit an application for a strategic role that aligns with your technical leadership and advocacy goals.",
      dueDate: createDateForWeekDay(august2025FirstMonday, 3, 4), // Week 4 Friday
      category: "Job Search",
      completed: false,
    },

    // Month 5: September 2025 - Advanced Content & Expanding Influence (shifted from August)
    // Week 1
    {
      id: "sept-w1-mon",
      title: "Write Case Study: Improving Collaboration in Remote Tech Teams: Lessons Learned",
      description: "Offer strategies for leading and training remote or hybrid teams effectively.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 0, 0), // Week 1 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "sept-w1-wed",
      title: "Create Short: Relatable Coding Struggles Summed Up in 10 Seconds",
      description:
        "Humorously dramatize common challenges like debugging or server crashes. Use expressive reactions and relatable scenarios to create a short that resonates with engineers of all levels.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 0, 2), // Week 1 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "sept-w1-fri",
      title: "Networking: Participate in a Podcast",
      description: "Reach out to a tech-focused podcast and share insights on technical training or career pivots.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 0, 4), // Week 1 Friday
      category: "Networking",
      completed: false,
    },

    // Week 2
    {
      id: "sept-w2-mon",
      title: "Write Blog: The Future of Tech Education: Empowering Teams Beyond Coding",
      description: "Predict trends and innovations in tech training, highlighting your leadership insights.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 1, 0), // Week 2 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "sept-w2-wed",
      title: "Create Short: Engineer Hacks: Making Work & Life Easier",
      description: "Share practical tech or productivity hacks that blend your professional and parenting expertise.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 1, 2), // Week 2 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "sept-w2-fri",
      title: "Job Search Task: Follow Up",
      description:
        "Check in with mentors or colleagues for feedback on roles you've applied for or new opportunities they've spotted.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 1, 4), // Week 2 Friday
      category: "Job Search",
      completed: false,
    },

    // Week 3
    {
      id: "sept-w3-mon",
      title: "Presentation: Mastering the Art of Mentorship in Tech",
      description: "Host an interactive workshop or panel, sharing your framework for effective mentorship.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 2, 0), // Week 3 Monday
      category: "Presentation",
      completed: false,
    },
    {
      id: "sept-w3-wed",
      title: "Create Short: What Being a Leader Means to Me",
      description: "Reflect on a moment in your career where you felt proudest as a leader.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 2, 2), // Week 3 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "sept-w3-fri",
      title: "Networking: Join a Cross-Industry Event",
      description:
        "Attend a creative event like a maker fair or innovation lab tour to expand your network beyond tech circles.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 2, 4), // Week 3 Friday
      category: "Networking",
      completed: false,
    },

    // Week 4
    {
      id: "sept-w4-mon",
      title: "Write Blog: Holistic Leadership in Tech: A Personal and Professional Blueprint",
      description:
        "Combine your professional expertise with personal stories to create a compelling blueprint for aspiring leaders.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 3, 0), // Week 4 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "sept-w4-wed",
      title: "Create Short: Digital Resilience: Self-Care Tips for Techies",
      description: "Film a quick, actionable short on maintaining work-life balance in high-pressure roles.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 3, 2), // Week 4 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "sept-w4-fri",
      title: "Job Search Task: Research Specific Roles",
      description:
        "Deep dive into job descriptions for Technical Program Manager, Developer Advocate, and similar positions.",
      dueDate: createDateForWeekDay(september2025FirstMonday, 3, 4), // Week 4 Friday
      category: "Job Search",
      completed: false,
    },

    // Month 6: October 2025 - Authority Building & Strategic Positioning (shifted from September)
    // Week 1
    {
      id: "oct-w1-mon",
      title: "Write Detailed Tutorial: Scaling Full-Stack Applications: Challenges and Solutions",
      description:
        "A step-by-step guide on scaling web applications, with a focus on lessons learned during projects you've led.",
      dueDate: createDateForWeekDay(october2025FirstMonday, 0, 0), // Week 1 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "oct-w1-wed",
      title: "Create Story-Driven Short: The One Project That Changed My Perspective on Leadership",
      description:
        "Share a pivotal moment from your career as a nonprofit manager or tech trainer that shaped your leadership style.",
      dueDate: createDateForWeekDay(october2025FirstMonday, 0, 2), // Week 1 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "oct-w1-fri",
      title: "Networking: Pitch to a Podcast",
      description: "Reach out to podcasts that focus on tech leadership, neurodiversity, or mentorship.",
      dueDate: createDateForWeekDay(october2025FirstMonday, 0, 4), // Week 1 Friday
      category: "Networking",
      completed: false,
    },

    // Week 2
    {
      id: "oct-w2-mon",
      title: "Write Blog: The Rise of Neurodiversity in Tech: Why Mental Health Is a Leadership Asset",
      description:
        "Normalize conversations around neurodiversity and mental health, weaving in your own experiences and insights into workplace inclusivity.",
      dueDate: createDateForWeekDay(october2025FirstMonday, 1, 0), // Week 2 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "oct-w2-wed",
      title: "Create Family & Fun Short: Debugging Dinner: Coding Logic Meets Parenting",
      description:
        "Use coding analogies to humorously show how you manage parenting challenges like meal planning or bedtime routines.",
      dueDate: createDateForWeekDay(october2025FirstMonday, 1, 2), // Week 2 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "oct-w2-fri",
      title: "Job Search Task: Join a Maker Fair",
      description:
        "Attend a maker fair or creative tech meetup to expand your network beyond traditional tech circles.",
      dueDate: createDateForWeekDay(october2025FirstMonday, 1, 4), // Week 2 Friday
      category: "Job Search",
      completed: false,
    },

    // Week 3
    {
      id: "oct-w3-mon",
      title: "Write Blog: Tech for Good: Leveraging Engineering Skills for Social Impact Projects",
      description:
        "Showcase real-world examples of tech-driven solutions for nonprofit or community challenges, inspiring engineers to get involved in social causes.",
      dueDate: createDateForWeekDay(october2025FirstMonday, 2, 0), // Week 3 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "oct-w3-wed",
      title: "Create Micro-Tutorial Short: 5-Minute Mentorship: How to Delegate Effectively",
      description: "Share a quick tip for leadership, keeping it simple and actionable.",
      dueDate: createDateForWeekDay(october2025FirstMonday, 2, 2), // Week 3 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "oct-w3-fri",
      title: "Networking: Host a Virtual Roundtable Discussion",
      description: "Organize a discussion with professionals who share your mission-driven values.",
      dueDate: createDateForWeekDay(october2025FirstMonday, 2, 4), // Week 3 Friday
      category: "Networking",
      completed: false,
    },

    // Week 4
    {
      id: "oct-w4-mon",
      title: "Write Personal Mission Statement",
      description: "Articulate professional purpose and values to guide your career development.",
      dueDate: createDateForWeekDay(october2025FirstMonday, 3, 0), // Week 4 Monday
      category: "Writing",
      completed: false,
    },
    {
      id: "oct-w4-wed",
      title: "Create Empowerment Clip: Why Tech Needs Your Unique Perspective",
      description:
        "Deliver a bold, motivational message to aspiring engineers from diverse or nontraditional backgrounds.",
      dueDate: createDateForWeekDay(october2025FirstMonday, 3, 2), // Week 4 Wednesday
      category: "Short",
      completed: false,
    },
    {
      id: "oct-w4-fri",
      title: "Job Search Task: Portfolio Growth",
      description: "Add key achievements to your portfolio (e.g., recording presentation clips, blog highlights).",
      dueDate: createDateForWeekDay(october2025FirstMonday, 3, 4), // Week 4 Friday
      category: "Job Search",
      completed: false,
    },

    // Ongoing Weekly Tasks
    {
      id: "ongoing-1",
      title: "Weekly LinkedIn Engagement",
      description:
        "Share updates (e.g., published articles or shorts). Comment on relevant posts from peers or leaders in tech.",
      dueDate: createDate(7), // Weekly
      category: "Networking",
      completed: false,
    },
    {
      id: "ongoing-2",
      title: "Biweekly Informational Interviews",
      description:
        "Reach out to professionals in your target roles to learn about their work and tips for transitions.",
      dueDate: createDate(14), // Biweekly
      category: "Job Search",
      completed: false,
    },
    {
      id: "ongoing-3",
      title: "Monthly Reflection Time",
      description: "Review what worked, what didn't, and adjust your schedule for the next month.",
      dueDate: createDate(30), // Monthly
      category: "Short",
      completed: false,
    },
    {
      id: "ongoing-4",
      title: "Review Metrics Weekly",
      description:
        "Spend 15–30 minutes each week monitoring engagement metrics (likes, comments, shares) and refine your approach.",
      dueDate: createDate(7), // Weekly
      category: "Short",
      completed: false,
    },

    // Original Sample Tasks - Starting from May 5th, 2025
    {
      id: "1",
      title: "Update LinkedIn profile",
      description: "Add recent projects and update skills section",
      dueDate: add_days(startDate, 0), // May 5
      category: "Job Search",
      completed: false,
    },
    {
      id: "2",
      title: "Write blog post on career development",
      description: "Share insights on transitioning to a senior role",
      dueDate: add_days(startDate, 0), // May 5
      category: "Writing",
      completed: false,
    },
    {
      id: "3",
      title: "Research industry trends",
      description: "Compile list of emerging technologies in the field",
      dueDate: add_days(startDate, 1), // May 6
      category: "Short",
      completed: false,
    },
    {
      id: "4",
      title: "Update GitHub profile README",
      description: "Showcase key projects and skills",
      dueDate: add_days(startDate, 1), // May 6
      category: "Job Search",
      completed: false,
    },
    {
      id: "5",
      title: "Create technical skills inventory",
      description: "Document current skills and proficiency levels",
      dueDate: add_days(startDate, 4), // May 9
      category: "Short",
      completed: false,
    },
    {
      id: "6",
      title: "Draft article on recent project learnings",
      description: "Share insights from challenges overcome in recent work",
      dueDate: add_days(startDate, 4), // May 9
      category: "Writing",
      completed: false,
    },
    {
      id: "7",
      title: "Review and update resume",
      description: "Ensure all recent accomplishments are included",
      dueDate: add_days(startDate, 5), // May 10
      category: "Job Search",
      completed: false,
    },
    {
      id: "8",
      title: "Create study plan for new technology",
      description: "Outline learning path for mastering new framework",
      dueDate: add_days(startDate, 5), // May 10
      category: "Short",
      completed: false,
    },
    {
      id: "9",
      title: "Attend virtual networking event",
      description: "Tech industry meetup - bring questions about AI integration",
      dueDate: add_days(startDate, 6), // May 11
      category: "Networking",
      completed: false,
    },
    {
      id: "10",
      title: "Create weekly progress report",
      description: "Summarize achievements and blockers for the team",
      dueDate: add_days(startDate, 6), // May 11
      category: "Short",
      completed: false,
    },

    // Additional original sample tasks
    {
      id: "11",
      title: "Review competitor products",
      description: "Analyze strengths and weaknesses of similar solutions",
      dueDate: add_days(startDate, 7), // May 12
      category: "Short",
      completed: false,
    },
    {
      id: "12",
      title: "Draft email templates for outreach",
      description: "Create templates for networking and follow-ups",
      dueDate: add_days(startDate, 7), // May 12
      category: "Writing",
      completed: false,
    },
    {
      id: "13",
      title: "Research industry podcasts",
      description: "Find relevant podcasts for professional development",
      dueDate: add_days(startDate, 8), // May 13
      category: "Short",
      completed: false,
    },
    {
      id: "14",
      title: "Create personal elevator pitch",
      description: "Craft concise introduction for networking events",
      dueDate: add_days(startDate, 8), // May 13
      category: "Writing",
      completed: false,
    },
    {
      id: "15",
      title: "Identify potential mentors",
      description: "List professionals who could provide career guidance",
      dueDate: add_days(startDate, 11), // May 16
      category: "Networking",
      completed: false,
    },
    {
      id: "16",
      title: "Set up professional Twitter account",
      description: "Create profile and follow industry leaders",
      dueDate: add_days(startDate, 11), // May 16
      category: "Job Search",
      completed: false,
    },
    {
      id: "17",
      title: "Prepare presentation on new framework",
      description: "Create slides and demos for the tech talk",
      dueDate: add_days(startDate, 12), // May 17
      category: "Presentation",
      completed: false,
    },
    {
      id: "18",
      title: "Review industry certification options",
      description: "Research which certifications would be most valuable",
      dueDate: add_days(startDate, 12), // May 17
      category: "Job Search",
      completed: false,
    },
  ]
}
