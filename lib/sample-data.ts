import type { Task } from "@/types"

export function generateSampleTasks(): Task[] {
  // Create dates starting from May 1st
  const startDate = new Date(2025, 4, 1) // May 1st, 2025 (month is 0-indexed)

  // Helper function to create a date with an offset from the start date
  const createDate = (dayOffset: number) => {
    const date = new Date(startDate)
    date.setDate(date.getDate() + dayOffset)
    return date.toISOString()
  }

  return [
    // May 2025: "Technical Expertise with a Fun Twist"
    // Week 1
    {
      id: "1",
      title: "Update LinkedIn profile",
      description: "Add recent projects and update skills section",
      dueDate: createDate(0), // May 1 (Thursday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "2",
      title: "Write blog post on career development",
      description: "Share insights on transitioning to a senior role",
      dueDate: createDate(0), // May 1 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "3",
      title: "Research industry trends",
      description: "Compile list of emerging technologies in the field",
      dueDate: createDate(1), // May 2 (Friday)
      category: "Short",
      completed: false,
    },
    {
      id: "4",
      title: "Update GitHub profile README",
      description: "Showcase key projects and skills",
      dueDate: createDate(1), // May 2 (Friday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "5",
      title: "Create technical skills inventory",
      description: "Document current skills and proficiency levels",
      dueDate: createDate(4), // May 5 (Monday)
      category: "Short",
      completed: false,
    },
    {
      id: "6",
      title: "Draft article on recent project learnings",
      description: "Share insights from challenges overcome in recent work",
      dueDate: createDate(4), // May 5 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "7",
      title: "Review and update resume",
      description: "Ensure all recent accomplishments are included",
      dueDate: createDate(5), // May 6 (Tuesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "8",
      title: "Create study plan for new technology",
      description: "Outline learning path for mastering new framework",
      dueDate: createDate(5), // May 6 (Tuesday)
      category: "Short",
      completed: false,
    },
    // Week 2
    {
      id: "9",
      title: "Attend virtual networking event",
      description: "Tech industry meetup - bring questions about AI integration",
      dueDate: createDate(6), // May 7 (Wednesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "10",
      title: "Create weekly progress report",
      description: "Summarize achievements and blockers for the team",
      dueDate: createDate(6), // May 7 (Wednesday)
      category: "Short",
      completed: false,
    },
    {
      id: "11",
      title: "Review competitor products",
      description: "Analyze strengths and weaknesses of similar solutions",
      dueDate: createDate(7), // May 8 (Thursday)
      category: "Short",
      completed: false,
    },
    {
      id: "12",
      title: "Draft email templates for outreach",
      description: "Create templates for networking and follow-ups",
      dueDate: createDate(7), // May 8 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "13",
      title: "Research industry podcasts",
      description: "Find relevant podcasts for professional development",
      dueDate: createDate(8), // May 9 (Friday)
      category: "Short",
      completed: false,
    },
    {
      id: "14",
      title: "Create personal elevator pitch",
      description: "Craft concise introduction for networking events",
      dueDate: createDate(8), // May 9 (Friday)
      category: "Writing",
      completed: false,
    },
    {
      id: "15",
      title: "Identify potential mentors",
      description: "List professionals who could provide career guidance",
      dueDate: createDate(11), // May 12 (Monday)
      category: "Networking",
      completed: false,
    },
    {
      id: "16",
      title: "Set up professional Twitter account",
      description: "Create profile and follow industry leaders",
      dueDate: createDate(11), // May 12 (Monday)
      category: "Job Search",
      completed: false,
    },
    // Week 3
    {
      id: "17",
      title: "Prepare presentation on new framework",
      description: "Create slides and demos for the tech talk",
      dueDate: createDate(12), // May 13 (Tuesday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "18",
      title: "Review industry certification options",
      description: "Research which certifications would be most valuable",
      dueDate: createDate(12), // May 13 (Tuesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "19",
      title: "Create coding challenge solutions",
      description: "Solve and document common interview problems",
      dueDate: createDate(13), // May 14 (Wednesday)
      category: "Short",
      completed: false,
    },
    {
      id: "20",
      title: "Outline technical e-book",
      description: "Create chapter structure for educational resource",
      dueDate: createDate(13), // May 14 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "21",
      title: "Research speaking opportunities at meetups",
      description: "Find local groups looking for technical presenters",
      dueDate: createDate(14), // May 15 (Thursday)
      category: "Networking",
      completed: false,
    },
    {
      id: "22",
      title: "Create list of target companies",
      description: "Research companies aligned with career goals",
      dueDate: createDate(14), // May 15 (Thursday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "23",
      title: "Develop technical blog content calendar",
      description: "Plan topics and schedule for next 3 months",
      dueDate: createDate(15), // May 16 (Friday)
      category: "Writing",
      completed: false,
    },
    {
      id: "24",
      title: "Create portfolio of code samples",
      description: "Compile best work examples for interviews",
      dueDate: createDate(15), // May 16 (Friday)
      category: "Job Search",
      completed: false,
    },
    // Week 4
    {
      id: "25",
      title: "Draft technical documentation",
      description: "Create user guide for the new API endpoints",
      dueDate: createDate(18), // May 19 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "26",
      title: "Connect with 3 industry leaders",
      description: "Reach out on LinkedIn with personalized messages",
      dueDate: createDate(18), // May 19 (Monday)
      category: "Networking",
      completed: false,
    },
    {
      id: "27",
      title: "Create project retrospective",
      description: "Document lessons learned from recent project",
      dueDate: createDate(19), // May 20 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "28",
      title: "Research speaking opportunities",
      description: "Find local meetups and conferences accepting proposals",
      dueDate: createDate(19), // May 20 (Tuesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "29",
      title: "Create technical presentation template",
      description: "Design reusable slide deck for future talks",
      dueDate: createDate(20), // May 21 (Wednesday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "30",
      title: "Join professional Slack communities",
      description: "Find and join relevant industry discussion groups",
      dueDate: createDate(20), // May 21 (Wednesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "31",
      title: "Create personal branding style guide",
      description: "Define visual identity for professional materials",
      dueDate: createDate(21), // May 22 (Thursday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "32",
      title: "Research industry blogs for guest posting",
      description: "Identify platforms accepting contributed articles",
      dueDate: createDate(21), // May 22 (Thursday)
      category: "Writing",
      completed: false,
    },
    // Week 5 (Last week of May)
    {
      id: "33",
      title: "Daily code challenge",
      description: "Complete algorithm challenge on competitive coding site",
      dueDate: createDate(22), // May 23 (Friday)
      category: "Short",
      completed: false,
    },
    {
      id: "34",
      title: "Prepare for technical interview",
      description: "Practice system design and coding questions",
      dueDate: createDate(22), // May 23 (Friday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "35",
      title: "Create technical skills assessment",
      description: "Develop a self-assessment tool for identifying skill gaps",
      dueDate: createDate(25), // May 26 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "36",
      title: "Record demo of recent project",
      description: "Create a 5-minute walkthrough of key features",
      dueDate: createDate(25), // May 26 (Monday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "37",
      title: "Update personal website",
      description: "Refresh content and add recent accomplishments",
      dueDate: createDate(26), // May 27 (Tuesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "38",
      title: "Create fun coding quiz",
      description: "Develop interactive quiz for team building",
      dueDate: createDate(26), // May 27 (Tuesday)
      category: "Short",
      completed: false,
    },
    {
      id: "39",
      title: "Research industry conferences",
      description: "Create list of relevant events for the year",
      dueDate: createDate(27), // May 28 (Wednesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "40",
      title: "Create technical glossary",
      description: "Compile industry terms and definitions for reference",
      dueDate: createDate(27), // May 28 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "41",
      title: "Develop personal learning roadmap",
      description: "Map out skills to acquire in next 6 months",
      dueDate: createDate(28), // May 29 (Thursday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "42",
      title: "Create technical cheat sheets",
      description: "Develop quick reference guides for common tasks",
      dueDate: createDate(28), // May 29 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "169",
      title: "Prepare for monthly review",
      description: "Compile achievements and progress for May",
      dueDate: createDate(29), // May 30 (Friday)
      category: "Short",
      completed: false,
    },
    {
      id: "170",
      title: "Set goals for June",
      description: "Define key objectives aligned with leadership theme",
      dueDate: createDate(29), // May 30 (Friday)
      category: "Job Search",
      completed: false,
    },

    // June 2025: "Leadership & Advocacy"
    // Week 1
    {
      id: "43",
      title: "Create mentorship program proposal",
      description: "Draft structure for junior developer mentorship initiative",
      dueDate: createDate(32), // June 2 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "44",
      title: "Lead team workshop on new tools",
      description: "Prepare interactive session on productivity tools",
      dueDate: createDate(32), // June 2 (Monday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "45",
      title: "Attend industry conference",
      description: "Take notes on emerging trends and technologies",
      dueDate: createDate(33), // June 3 (Tuesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "46",
      title: "Draft team vision document",
      description: "Articulate goals and direction for the next quarter",
      dueDate: createDate(33), // June 3 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "47",
      title: "Research leadership books",
      description: "Create reading list for leadership development",
      dueDate: createDate(34), // June 4 (Wednesday)
      category: "Short",
      completed: false,
    },
    {
      id: "48",
      title: "Create team communication guidelines",
      description: "Document best practices for effective team communication",
      dueDate: createDate(34), // June 4 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "49",
      title: "Develop meeting facilitation skills",
      description: "Research techniques for running effective meetings",
      dueDate: createDate(35), // June 5 (Thursday)
      category: "Short",
      completed: false,
    },
    {
      id: "50",
      title: "Create diversity and inclusion initiative",
      description: "Develop proposal for improving team diversity",
      dueDate: createDate(35), // June 5 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "51",
      title: "Create personal development plan",
      description: "Set goals for next quarter with actionable steps",
      dueDate: createDate(36), // June 6 (Friday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "52",
      title: "Write code review guidelines",
      description: "Document best practices for the engineering team",
      dueDate: createDate(36), // June 6 (Friday)
      category: "Writing",
      completed: false,
    },
    // Week 2
    {
      id: "53",
      title: "Organize lunch & learn session",
      description: "Coordinate speakers and topics for knowledge sharing",
      dueDate: createDate(39), // June 9 (Monday)
      category: "Networking",
      completed: false,
    },
    {
      id: "54",
      title: "Create decision-making framework",
      description: "Document process for evaluating technical options",
      dueDate: createDate(39), // June 9 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "55",
      title: "Research leadership training programs",
      description: "Find workshops or courses to enhance leadership skills",
      dueDate: createDate(40), // June 10 (Tuesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "56",
      title: "Create team goals document",
      description: "Define measurable objectives for the quarter",
      dueDate: createDate(40), // June 10 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "57",
      title: "Develop delegation skills",
      description: "Research effective delegation techniques",
      dueDate: createDate(41), // June 11 (Wednesday)
      category: "Short",
      completed: false,
    },
    {
      id: "58",
      title: "Create team onboarding checklist",
      description: "Develop comprehensive guide for new team members",
      dueDate: createDate(41), // June 11 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "59",
      title: "Draft leadership philosophy document",
      description: "Articulate personal leadership style and principles",
      dueDate: createDate(42), // June 12 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "60",
      title: "Prepare advocacy presentation",
      description: "Create slides on importance of diversity in tech",
      dueDate: createDate(42), // June 12 (Thursday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "61",
      title: "Review team performance metrics",
      description: "Analyze team productivity and identify improvement areas",
      dueDate: createDate(43), // June 13 (Friday)
      category: "Short",
      completed: false,
    },
    {
      id: "62",
      title: "Create onboarding checklist",
      description: "Develop comprehensive guide for new team members",
      dueDate: createDate(43), // June 13 (Friday)
      category: "Writing",
      completed: false,
    },
    // Week 3
    {
      id: "63",
      title: "Research conflict resolution techniques",
      description: "Find strategies for addressing team disagreements",
      dueDate: createDate(46), // June 16 (Monday)
      category: "Short",
      completed: false,
    },
    {
      id: "64",
      title: "Create team recognition program",
      description: "Design system to acknowledge team achievements",
      dueDate: createDate(46), // June 16 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "65",
      title: "Develop coaching skills",
      description: "Research techniques for effective team coaching",
      dueDate: createDate(47), // June 17 (Tuesday)
      category: "Short",
      completed: false,
    },
    {
      id: "66",
      title: "Create team feedback framework",
      description: "Design structure for constructive feedback sessions",
      dueDate: createDate(47), // June 17 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "67",
      title: "Research leadership training opportunities",
      description: "Find workshops or courses to enhance leadership skills",
      dueDate: createDate(48), // June 18 (Wednesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "68",
      title: "Organize cross-department meeting",
      description: "Facilitate discussion between engineering and product teams",
      dueDate: createDate(48), // June 18 (Wednesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "69",
      title: "Create conflict resolution guide",
      description: "Document strategies for addressing team conflicts",
      dueDate: createDate(49), // June 19 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "70",
      title: "Develop team feedback framework",
      description: "Create structure for constructive feedback sessions",
      dueDate: createDate(49), // June 19 (Thursday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "71",
      title: "Research executive presence techniques",
      description: "Find resources for developing leadership presence",
      dueDate: createDate(50), // June 20 (Friday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "72",
      title: "Create team career development plan",
      description: "Design framework for supporting team growth",
      dueDate: createDate(50), // June 20 (Friday)
      category: "Writing",
      completed: false,
    },
    // Week 4
    {
      id: "73",
      title: "Develop strategic thinking skills",
      description: "Research methods for improving long-term planning",
      dueDate: createDate(53), // June 23 (Monday)
      category: "Short",
      completed: false,
    },
    {
      id: "74",
      title: "Create team charter document",
      description: "Define team purpose, values, and working agreements",
      dueDate: createDate(53), // June 23 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "145",
      title: "Prepare leadership case study",
      description: "Document successful leadership approach for a challenging project",
      dueDate: createDate(54), // June 24 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "146",
      title: "Research leadership podcasts",
      description: "Find and subscribe to podcasts on leadership development",
      dueDate: createDate(54), // June 24 (Tuesday)
      category: "Short",
      completed: false,
    },
    {
      id: "147",
      title: "Create presentation on team achievements",
      description: "Highlight team successes and contributions for executive review",
      dueDate: createDate(55), // June 25 (Wednesday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "148",
      title: "Develop mentoring framework",
      description: "Create structure for effective mentoring relationships",
      dueDate: createDate(55), // June 25 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "149",
      title: "Research leadership communities",
      description: "Find professional groups focused on leadership development",
      dueDate: createDate(56), // June 26 (Thursday)
      category: "Networking",
      completed: false,
    },
    {
      id: "150",
      title: "Create leadership development roadmap",
      description: "Map out skills and experiences needed for leadership growth",
      dueDate: createDate(56), // June 26 (Thursday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "151",
      title: "Prepare for monthly review",
      description: "Compile achievements and progress for June",
      dueDate: createDate(57), // June 27 (Friday)
      category: "Short",
      completed: false,
    },
    {
      id: "152",
      title: "Set goals for July",
      description: "Define key objectives aligned with integrative fun theme",
      dueDate: createDate(57), // June 27 (Friday)
      category: "Job Search",
      completed: false,
    },

    // July 2025: "Integrative Fun & Advocacy"
    // Week 1
    {
      id: "75",
      title: "Organize team building activity",
      description: "Plan virtual escape room for remote team members",
      dueDate: createDate(60), // June 30 (Monday)
      category: "Networking",
      completed: false,
    },
    {
      id: "76",
      title: "Create technical blog series outline",
      description: "Plan 5-part series on advanced techniques",
      dueDate: createDate(60), // June 30 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "77",
      title: "Update portfolio with case studies",
      description: "Add detailed analysis of recent project successes",
      dueDate: createDate(61), // July 1 (Tuesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "78",
      title: "Plan team celebration",
      description: "Organize event to celebrate project milestone",
      dueDate: createDate(61), // July 1 (Tuesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "79",
      title: "Create fun coding challenge",
      description: "Design engaging problem for team competition",
      dueDate: createDate(62), // July 2 (Wednesday)
      category: "Short",
      completed: false,
    },
    {
      id: "80",
      title: "Draft inclusive language guide",
      description: "Create reference for inclusive terminology in documentation",
      dueDate: createDate(62), // July 2 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "81",
      title: "Research team-building activities",
      description: "Find engaging virtual activities for remote teams",
      dueDate: createDate(63), // July 3 (Thursday)
      category: "Networking",
      completed: false,
    },
    {
      id: "82",
      title: "Create advocacy resource list",
      description: "Compile resources for supporting underrepresented groups in tech",
      dueDate: createDate(63), // July 3 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "83",
      title: "Prepare lightning talk",
      description: "5-minute presentation on solving a complex problem",
      dueDate: createDate(64), // July 4 (Friday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "84",
      title: "Daily standup notes",
      description: "Summarize key points from team standup",
      dueDate: createDate(64), // July 4 (Friday)
      category: "Short",
      completed: false,
    },
    // Week 2
    {
      id: "85",
      title: "Design fun coding challenge",
      description: "Create engaging problem for team coding competition",
      dueDate: createDate(67), // July 7 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "86",
      title: "Research team-building activities",
      description: "Find engaging virtual activities for remote teams",
      dueDate: createDate(67), // July 7 (Monday)
      category: "Short",
      completed: false,
    },
    {
      id: "87",
      title: "Create fun team awards",
      description: "Design lighthearted recognition categories for team members",
      dueDate: createDate(68), // July 8 (Tuesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "88",
      title: "Draft article on work-life balance",
      description: "Share strategies for maintaining healthy boundaries",
      dueDate: createDate(68), // July 8 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "89",
      title: "Plan themed hackathon",
      description: "Organize internal event with fun theme",
      dueDate: createDate(69), // July 9 (Wednesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "90",
      title: "Create wellness resource guide",
      description: "Compile resources for maintaining health while working",
      dueDate: createDate(69), // July 9 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "91",
      title: "Organize tech for good hackathon",
      description: "Plan event focused on social impact projects",
      dueDate: createDate(70), // July 10 (Thursday)
      category: "Networking",
      completed: false,
    },
    {
      id: "92",
      title: "Create advocacy resource list",
      description: "Compile resources for supporting underrepresented groups in tech",
      dueDate: createDate(70), // July 10 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "93",
      title: "Prepare fun tech demo",
      description: "Create interactive demonstration of new technology",
      dueDate: createDate(71), // July 11 (Friday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "94",
      title: "Draft inclusive language guide",
      description: "Create reference for inclusive terminology in documentation",
      dueDate: createDate(71), // July 11 (Friday)
      category: "Writing",
      completed: false,
    },
    // Week 3
    {
      id: "95",
      title: "Research industry advocacy groups",
      description: "Identify organizations aligned with personal values",
      dueDate: createDate(74), // July 14 (Monday)
      category: "Networking",
      completed: false,
    },
    {
      id: "96",
      title: "Create fun team building exercise",
      description: "Design activity to strengthen team relationships",
      dueDate: createDate(74), // July 14 (Monday)
      category: "Short",
      completed: false,
    },
    {
      id: "97",
      title: "Plan themed knowledge sharing session",
      description: "Organize fun learning event with creative theme",
      dueDate: createDate(75), // July 15 (Tuesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "98",
      title: "Draft article on maintaining creativity",
      description: "Share techniques for staying creative in technical work",
      dueDate: createDate(75), // July 15 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "99",
      title: "Write article on work-life integration",
      description: "Share strategies for balancing career and personal life",
      dueDate: createDate(76), // July 16 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "100",
      title: "Plan team celebration",
      description: "Organize event to celebrate project milestone",
      dueDate: createDate(76), // July 16 (Wednesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "101",
      title: "Create mentorship matching system",
      description: "Develop tool to pair mentors and mentees based on goals",
      dueDate: createDate(77), // July 17 (Thursday)
      category: "Short",
      completed: false,
    },
    {
      id: "102",
      title: "Research industry advocacy groups",
      description: "Identify organizations aligned with personal values",
      dueDate: createDate(77), // July 17 (Thursday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "103",
      title: "Create fun team awards",
      description: "Design lighthearted recognition categories for team members",
      dueDate: createDate(78), // July 18 (Friday)
      category: "Short",
      completed: false,
    },
    {
      id: "104",
      title: "Draft article on creating inclusive teams",
      description: "Share strategies for building diverse and inclusive environments",
      dueDate: createDate(78), // July 18 (Friday)
      category: "Writing",
      completed: false,
    },
    // Week 4
    {
      id: "105",
      title: "Plan virtual team social event",
      description: "Organize online gathering with fun activities",
      dueDate: createDate(81), // July 21 (Monday)
      category: "Networking",
      completed: false,
    },
    {
      id: "106",
      title: "Create guide for work-life balance",
      description: "Compile strategies for maintaining healthy boundaries",
      dueDate: createDate(81), // July 21 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "107",
      title: "Develop team-building game",
      description: "Create interactive activity to strengthen team bonds",
      dueDate: createDate(82), // July 22 (Tuesday)
      category: "Short",
      completed: false,
    },
    {
      id: "108",
      title: "Draft article on remote team culture",
      description: "Share best practices for building strong remote teams",
      dueDate: createDate(82), // July 22 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "109",
      title: "Create fun technical challenge",
      description: "Design engaging problem-solving activity for team",
      dueDate: createDate(83), // July 23 (Wednesday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "110",
      title: "Research team recognition ideas",
      description: "Find creative ways to acknowledge team contributions",
      dueDate: createDate(83), // July 23 (Wednesday)
      category: "Short",
      completed: false,
    },
    {
      id: "111",
      title: "Plan cross-team social event",
      description: "Organize gathering to build relationships across departments",
      dueDate: createDate(84), // July 24 (Thursday)
      category: "Networking",
      completed: false,
    },
    {
      id: "112",
      title: "Create advocacy action plan",
      description: "Develop concrete steps for supporting diversity in tech",
      dueDate: createDate(84), // July 24 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "113",
      title: "Prepare for monthly review",
      description: "Compile achievements and progress for July",
      dueDate: createDate(85), // July 25 (Friday)
      category: "Short",
      completed: false,
    },
    {
      id: "114",
      title: "Set goals for August",
      description: "Define key objectives aligned with advanced content theme",
      dueDate: createDate(85), // July 25 (Friday)
      category: "Job Search",
      completed: false,
    },

    // August 2025: "Advanced Content & Expanding Influence"
    // Week 1
    {
      id: "115",
      title: "Create advanced tutorial video",
      description: "Record step-by-step guide for complex feature implementation",
      dueDate: createDate(88), // July 28 (Monday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "116",
      title: "Write industry analysis article",
      description: "Research and analyze trends for publication",
      dueDate: createDate(88), // July 28 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "117",
      title: "Organize cross-team knowledge sharing",
      description: "Set up sessions between engineering and product teams",
      dueDate: createDate(89), // July 29 (Tuesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "118",
      title: "Create advanced debugging guide",
      description: "Document strategies for troubleshooting complex issues",
      dueDate: createDate(89), // July 29 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "119",
      title: "Research speaking opportunities",
      description: "Find conferences accepting proposals for technical talks",
      dueDate: createDate(90), // July 30 (Wednesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "120",
      title: "Create advanced code examples repository",
      description: "Develop library of complex code patterns with explanations",
      dueDate: createDate(90), // July 30 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "121",
      title: "Plan expert panel discussion",
      description: "Organize event featuring industry experts",
      dueDate: createDate(91), // July 31 (Thursday)
      category: "Networking",
      completed: false,
    },
    {
      id: "122",
      title: "Create technical deep dive series",
      description: "Plan content exploring advanced concepts in depth",
      dueDate: createDate(91), // July 31 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "123",
      title: "Update resume with quantifiable achievements",
      description: "Add metrics and results to demonstrate impact",
      dueDate: createDate(92), // August 1 (Friday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "124",
      title: "Daily code review",
      description: "Review and provide feedback on team PRs",
      dueDate: createDate(92), // August 1 (Friday)
      category: "Short",
      completed: false,
    },
    // Week 2
    {
      id: "125",
      title: "Create advanced technical whitepaper",
      description: "Write in-depth analysis of complex technical topic",
      dueDate: createDate(95), // August 4 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "126",
      title: "Research industry conferences",
      description: "Identify top conferences for speaking opportunities",
      dueDate: createDate(95), // August 4 (Monday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "127",
      title: "Create advanced system architecture diagram",
      description: "Document complex system design with detailed explanations",
      dueDate: createDate(96), // August 5 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "128",
      title: "Connect with thought leaders",
      description: "Reach out to industry experts for collaboration",
      dueDate: createDate(96), // August 5 (Tuesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "129",
      title: "Develop thought leadership content strategy",
      description: "Plan series of articles to establish expertise",
      dueDate: createDate(97), // August 6 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "130",
      title: "Create expert-level workshop",
      description: "Design advanced training session for senior developers",
      dueDate: createDate(97), // August 6 (Wednesday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "131",
      title: "Connect with industry influencers",
      description: "Reach out to thought leaders for collaboration opportunities",
      dueDate: createDate(98), // August 7 (Thursday)
      category: "Networking",
      completed: false,
    },
    {
      id: "132",
      title: "Draft case study of complex project",
      description: "Document challenges and solutions from recent work",
      dueDate: createDate(98), // August 7 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "133",
      title: "Research industry analyst reports",
      description: "Review market trends and technology forecasts",
      dueDate: createDate(99), // August 8 (Friday)
      category: "Short",
      completed: false,
    },
    {
      id: "134",
      title: "Create advanced troubleshooting guide",
      description: "Document approaches for solving complex technical issues",
      dueDate: createDate(99), // August 8 (Friday)
      category: "Writing",
      completed: false,
    },
    // Week 3
    {
      id: "135",
      title: "Plan technical roundtable",
      description: "Organize discussion with experts on advanced topics",
      dueDate: createDate(102), // August 11 (Monday)
      category: "Networking",
      completed: false,
    },
    {
      id: "136",
      title: "Create technical podcast outline",
      description: "Plan episodes and potential guests for new podcast",
      dueDate: createDate(102), // August 11 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "137",
      title: "Research speaking opportunities",
      description: "Find conferences and events accepting speaker proposals",
      dueDate: createDate(103), // August 12 (Tuesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "138",
      title: "Create advanced code examples",
      description: "Develop sample code demonstrating best practices",
      dueDate: createDate(103), // August 12 (Tuesday)
      category: "Short",
      completed: false,
    },
    {
      id: "139",
      title: "Plan industry roundtable discussion",
      description: "Organize event with experts to discuss emerging trends",
      dueDate: createDate(104), // August 13 (Wednesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "140",
      title: "Create architecture decision record template",
      description: "Develop standardized format for documenting technical decisions",
      dueDate: createDate(104), // August 13 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "141",
      title: "Research technical advisory opportunities",
      description: "Find startups seeking technical advisors",
      dueDate: createDate(105), // August 14 (Thursday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "142",
      title: "Create advanced performance optimization guide",
      description: "Document techniques for improving system performance",
      dueDate: createDate(105), // August 14 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "143",
      title: "Plan technical webinar series",
      description: "Organize online educational events on advanced topics",
      dueDate: createDate(106), // August 15 (Friday)
      category: "Networking",
      completed: false,
    },
    {
      id: "144",
      title: "Create technical book proposal",
      description: "Develop outline and sample chapters for publisher submission",
      dueDate: createDate(106), // August 15 (Friday)
      category: "Writing",
      completed: false,
    },
    // Week 4
    {
      id: "153",
      title: "Develop advanced API documentation",
      description: "Create comprehensive guide for complex API endpoints",
      dueDate: createDate(109), // August 18 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "154",
      title: "Research industry thought leaders",
      description: "Identify key influencers in your technical specialty",
      dueDate: createDate(109), // August 18 (Monday)
      category: "Networking",
      completed: false,
    },
    {
      id: "155",
      title: "Create advanced technical workshop",
      description: "Design hands-on session for complex technical concepts",
      dueDate: createDate(110), // August 19 (Tuesday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "156",
      title: "Draft expert-level tutorial",
      description: "Write detailed guide for advanced technical implementation",
      dueDate: createDate(110), // August 19 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "157",
      title: "Plan technical conference submission",
      description: "Prepare proposal for presenting at major industry event",
      dueDate: createDate(111), // August 20 (Wednesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "158",
      title: "Create advanced debugging flowchart",
      description: "Design visual guide for troubleshooting complex issues",
      dueDate: createDate(111), // August 20 (Wednesday)
      category: "Short",
      completed: false,
    },
    {
      id: "159",
      title: "Prepare for monthly review",
      description: "Compile achievements and progress for August",
      dueDate: createDate(112), // August 21 (Thursday)
      category: "Short",
      completed: false,
    },
    {
      id: "160",
      title: "Set goals for September",
      description: "Define key objectives aligned with authority building theme",
      dueDate: createDate(112), // August 21 (Thursday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "161",
      title: "Create advanced technical comparison",
      description: "Analyze and document pros/cons of competing technologies",
      dueDate: createDate(113), // August 22 (Friday)
      category: "Writing",
      completed: false,
    },
    {
      id: "162",
      title: "Plan expert interview series",
      description: "Arrange discussions with industry leaders for content creation",
      dueDate: createDate(113), // August 22 (Friday)
      category: "Networking",
      completed: false,
    },

    // September 2025: "Authority Building & Strategic Positioning"
    // Week 1
    {
      id: "163",
      title: "Create comprehensive documentation site",
      description: "Build centralized knowledge base for the team",
      dueDate: createDate(116), // August 25 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "164",
      title: "Prepare conference talk proposal",
      description: "Draft submission for industry conference",
      dueDate: createDate(116), // August 25 (Monday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "165",
      title: "Organize industry panel discussion",
      description: "Invite experts to discuss emerging technologies",
      dueDate: createDate(117), // August 26 (Tuesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "166",
      title: "Create technical decision framework",
      description: "Develop structured approach to evaluating technical options",
      dueDate: createDate(117), // August 26 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "167",
      title: "Research advisory board opportunities",
      description: "Find organizations seeking technical advisors",
      dueDate: createDate(118), // August 27 (Wednesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "168",
      title: "Create industry trend analysis",
      description: "Research and document emerging technologies and their impact",
      dueDate: createDate(118), // August 27 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "171",
      title: "Plan technical leadership summit",
      description: "Organize gathering of technical leaders to share insights",
      dueDate: createDate(119), // August 28 (Thursday)
      category: "Networking",
      completed: false,
    },
    {
      id: "172",
      title: "Create authority-building content calendar",
      description: "Plan strategic content to establish industry expertise",
      dueDate: createDate(119), // August 28 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "173",
      title: "Develop strategic networking plan",
      description: "Identify key relationships to build for career advancement",
      dueDate: createDate(120), // August 29 (Friday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "174",
      title: "Create executive summary template",
      description: "Design format for concise technical communication to leadership",
      dueDate: createDate(120), // August 29 (Friday)
      category: "Writing",
      completed: false,
    },
    // Week 2
    {
      id: "175",
      title: "Create professional development roadmap",
      description: "Map out skills and experiences needed for next role",
      dueDate: createDate(123), // September 1 (Monday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "176",
      title: "Daily progress update",
      description: "Document achievements and blockers",
      dueDate: createDate(123), // September 1 (Monday)
      category: "Short",
      completed: false,
    },
    {
      id: "177",
      title: "Write authoritative guide on best practices",
      description: "Create comprehensive resource for industry standards",
      dueDate: createDate(124), // September 2 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "178",
      title: "Research executive presence training",
      description: "Find resources for developing leadership presence",
      dueDate: createDate(124), // September 2 (Tuesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "179",
      title: "Create strategic networking plan",
      description: "Identify key relationships to develop for career advancement",
      dueDate: createDate(125), // September 3 (Wednesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "180",
      title: "Develop thought leadership positioning",
      description: "Define unique perspective and expertise areas",
      dueDate: createDate(125), // September 3 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "181",
      title: "Research board position opportunities",
      description: "Find organizations seeking technical board members",
      dueDate: createDate(126), // September 4 (Thursday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "182",
      title: "Create strategic career vision document",
      description: "Define long-term career goals and path",
      dueDate: createDate(126), // September 4 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "183",
      title: "Develop personal brand strategy",
      description: "Create plan for consistent professional positioning",
      dueDate: createDate(127), // September 5 (Friday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "184",
      title: "Create expert video series",
      description: "Record multi-part educational content on specialized topic",
      dueDate: createDate(127), // September 5 (Friday)
      category: "Presentation",
      completed: false,
    },
    // Week 3
    {
      id: "185",
      title: "Organize professional networking event",
      description: "Host gathering for industry professionals",
      dueDate: createDate(130), // September 8 (Monday)
      category: "Networking",
      completed: false,
    },
    {
      id: "186",
      title: "Create technical reference architecture",
      description: "Document recommended system design patterns",
      dueDate: createDate(130), // September 8 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "187",
      title: "Research industry analyst relationships",
      description: "Identify key analysts covering your technology area",
      dueDate: createDate(131), // September 9 (Tuesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "188",
      title: "Create strategic content distribution plan",
      description: "Develop strategy for maximizing reach of thought leadership content",
      dueDate: createDate(131), // September 9 (Tuesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "189",
      title: "Plan executive roundtable",
      description: "Organize discussion with senior leaders on industry direction",
      dueDate: createDate(132), // September 10 (Wednesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "190",
      title: "Create personal positioning statement",
      description: "Craft concise description of unique value and expertise",
      dueDate: createDate(132), // September 10 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "191",
      title: "Write book proposal outline",
      description: "Create chapter structure for technical book",
      dueDate: createDate(133), // September 11 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "192",
      title: "Create strategic career plan",
      description: "Map 5-year vision with specific milestones",
      dueDate: createDate(133), // September 11 (Thursday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "193",
      title: "Develop authority-building content calendar",
      description: "Plan regular content to establish expertise",
      dueDate: createDate(134), // September 12 (Friday)
      category: "Writing",
      completed: false,
    },
    {
      id: "194",
      title: "Research industry advisory opportunities",
      description: "Find startups or organizations seeking advisors",
      dueDate: createDate(134), // September 12 (Friday)
      category: "Networking",
      completed: false,
    },
    // Week 4
    {
      id: "195",
      title: "Create personal mission statement",
      description: "Articulate professional purpose and values",
      dueDate: createDate(137), // September 15 (Monday)
      category: "Writing",
      completed: false,
    },
    {
      id: "196",
      title: "Plan strategic speaking engagements",
      description: "Identify high-impact conferences and events",
      dueDate: createDate(137), // September 15 (Monday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "197",
      title: "Create industry influence map",
      description: "Document key relationships and influence channels",
      dueDate: createDate(138), // September 16 (Tuesday)
      category: "Networking",
      completed: false,
    },
    {
      id: "198",
      title: "Develop personal board of advisors plan",
      description: "Identify mentors and advisors for career guidance",
      dueDate: createDate(138), // September 16 (Tuesday)
      category: "Job Search",
      completed: false,
    },
    {
      id: "199",
      title: "Create strategic content roadmap",
      description: "Plan high-impact content to establish industry authority",
      dueDate: createDate(139), // September 17 (Wednesday)
      category: "Writing",
      completed: false,
    },
    {
      id: "200",
      title: "Develop executive communication strategy",
      description: "Create framework for effective leadership communication",
      dueDate: createDate(139), // September 17 (Wednesday)
      category: "Presentation",
      completed: false,
    },
    {
      id: "201",
      title: "Research strategic partnership opportunities",
      description: "Identify potential collaborations for career advancement",
      dueDate: createDate(140), // September 18 (Thursday)
      category: "Networking",
      completed: false,
    },
    {
      id: "202",
      title: "Create personal brand style guide",
      description: "Define visual and verbal elements of professional brand",
      dueDate: createDate(140), // September 18 (Thursday)
      category: "Writing",
      completed: false,
    },
    {
      id: "203",
      title: "Prepare for monthly review",
      description: "Compile achievements and progress for September",
      dueDate: createDate(141), // September 19 (Friday)
      category: "Short",
      completed: false,
    },
    {
      id: "204",
      title: "Set goals for October",
      description: "Define key objectives for continued career growth",
      dueDate: createDate(141), // September 19 (Friday)
      category: "Job Search",
      completed: false,
    },
  ]
}
