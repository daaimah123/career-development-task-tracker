from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_cors import CORS
import json
from datetime import datetime, timedelta
import os
import uuid

app = Flask(__name__)
CORS(app)

# Data file path
DATA_FILE = 'tasks.json'

# Helper functions
def load_tasks():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as f:
            return json.load(f)
    return generate_initial_tasks()

def save_tasks(tasks):
    with open(DATA_FILE, 'w') as f:
        json.dump(tasks, f, indent=2)

def generate_initial_tasks():
    """Generate all 80 tasks from the original application"""
    today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
    
    # Function to add days to a date
    def add_days(date, days):
        return (date + timedelta(days=days)).isoformat()
    
    # Initialize tasks list
    tasks = []
    
    # Month 1: Personal & Professional Narratives
    tasks.extend([
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: Pivoting with Purpose: Reinventing Your Career Path in Tech",
            "description": "Share your career transition story, focusing on lessons learned and transferable skills. Publish on LinkedIn and Medium. Include specific examples of how your nonprofit experience applies to tech leadership.",
            "dueDate": add_days(today, 1),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Mom's Code Break: My Kids Explain Debugging",
            "description": "Film your kids humorously explaining debugging or other technical terms. Keep it lighthearted and relatable. This creates authentic content that connects your personal and professional identities.",
            "dueDate": add_days(today, 3),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Networking: Host Coffee Chat",
            "description": "Organize an informal 'coffee chat' with peers or mentors to talk about career pivots and technical leadership. Prepare 3-5 discussion questions to facilitate meaningful conversation.",
            "dueDate": add_days(today, 5),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: Thriving in Tech While Managing Bipolar and Single Parenthood",
            "description": "Offer authentic, actionable tips on balancing personal challenges with professional success. Include a call-to-action for mental health awareness. Share vulnerability while emphasizing your strengths.",
            "dueDate": add_days(today, 8),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Coding in Real Life: What They Don't Show You in Movies",
            "description": "Dramatize the humorous reality of coding versus its portrayal in media. Consider showing realistic debugging sessions, the importance of Google, or the reality of sitting for hours solving problems.",
            "dueDate": add_days(today, 10),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Job Search Task: Update Resume",
            "description": "Tailor your resume to highlight transferable skills for tech training and leadership positions. Focus on nonprofit management experience and how it translates to technical team leadership.",
            "dueDate": add_days(today, 12),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: From Nonprofit Manager to Tech Leader: My Career Glow-Up",
            "description": "Focus on your growth and how nonprofit experience adds value to tech leadership. Detail specific management techniques that transfer well to engineering team leadership.",
            "dueDate": add_days(today, 15),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: What My Kids Think I Do at Work",
            "description": "Record your kids' fun and honest interpretations of your job, mixing their insights with your explanations. Use this to humanize technical work for your audience.",
            "dueDate": add_days(today, 17),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Networking: Attend Meetup",
            "description": "Join a local or virtual technical leadership event to build connections and learn from peers. Prepare an introduction that highlights your unique background and what you're currently working on.",
            "dueDate": add_days(today, 19),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Presentation Prep: The Road Less Traveled: Lessons from a Nontraditional Path",
            "description": "Start preparing slides for a community or local workshop on career transitions. Outline key points, create an engaging story arc, and include interactive elements to engage the audience.",
            "dueDate": add_days(today, 22),
            "category": "Presentation",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Yes, You Belong: Words for Nontraditional Techies",
            "description": "Film a quick and empowering short for anyone doubting their place in tech. Share personal anecdotes of overcoming imposter syndrome and finding your place in the industry.",
            "dueDate": add_days(today, 24),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Job Search Task: Apply to One Role",
            "description": "Submit an application for a relevant position, ensuring your tailored resume highlights leadership and technical training expertise. Research the company thoroughly before applying to personalize your application.",
            "dueDate": add_days(today, 26),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 7),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 14),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 21),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Biweekly Informational Interview",
            "description": "Reach out to professionals in your target roles to learn about their work and tips for transitions. Prepare thoughtful questions in advance and send a thank-you note afterward.",
            "dueDate": add_days(today, 14),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Monthly Metrics Review",
            "description": "Set aside 15–30 minutes to monitor engagement metrics (likes, comments, shares) and refine your content approach. Note which types of content perform best and adjust your strategy accordingly.",
            "dueDate": add_days(today, 28),
            "category": "Other",
            "completed": False
        }
    ])
    
    # Month 2: Technical Expertise with a Fun Twist
    tasks.extend([
        {
            "id": str(uuid.uuid4()),
            "title": "Write Guide: Comprehensive Documentation for Full-Stack Engineers",
            "description": "Create a guide or template for effective documentation practices in tech teams. Include examples of what good documentation looks like and practical tips for maintaining it in busy development environments.",
            "dueDate": add_days(today, 29),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Debugging Made Simple: My Go-To Strategy",
            "description": "Record a quick, actionable clip with a simple debugging process. Share a real technique you use, presented in a way that even beginners can understand and implement immediately.",
            "dueDate": add_days(today, 31),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Networking: Virtual Panel",
            "description": "Join or participate in an online panel on mentoring in tech. Share your perspective on mentorship from both the mentor and mentee sides, highlighting the importance of diverse perspectives.",
            "dueDate": add_days(today, 33),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: A Step-by-Step Approach to Building a Full-Stack Project",
            "description": "Write an easy-to-follow technical how-to guide tailored for beginner or junior engineers. Break down the process into manageable steps, with code examples and explanations of common pitfalls.",
            "dueDate": add_days(today, 36),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Technical Terms Explained Casually",
            "description": "Use an analogy to explain a complex concept (e.g., comparing APIs to restaurant waiters). Make it fun and accessible to people without technical backgrounds, helping bridge the gap between tech and non-tech people.",
            "dueDate": add_days(today, 38),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Job Search Task: Research Companies",
            "description": "Research 3-5 companies with values aligned to inclusivity, mentorship, and flexibility. For each company, identify specific roles that match your skills and note any connections you have who might provide referrals.",
            "dueDate": add_days(today, 40),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Presentation: Building High-Performing Full-Stack Teams",
            "description": "Finalize slides and rehearse for a live Q&A or webinar on this topic. Include sections on team structure, communication patterns, and how to balance technical skills with soft skills in building effective teams.",
            "dueDate": add_days(today, 43),
            "category": "Presentation",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Parenting as a Debugging Exercise",
            "description": "Draw playful parallels between solving parenting problems and coding bugs. Show how you approach a parenting challenge using the same methodical troubleshooting techniques used in software development.",
            "dueDate": add_days(today, 45),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Networking: Host Mentorship Session",
            "description": "Offer a virtual mentoring session for junior engineers or aspiring tech professionals. Prepare a short presentation on a technical topic followed by an open Q&A session to provide personalized advice.",
            "dueDate": add_days(today, 47),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Case Study: Improving Team Collaboration in Cross-Functional Tech Projects",
            "description": "Share a detailed case study with practical takeaways. Use a specific project example to illustrate challenges faced, solutions implemented, and outcomes achieved. Include actionable advice for readers.",
            "dueDate": add_days(today, 50),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Tech Trivia Faceoff: Mom vs. Kids",
            "description": "Engage your kids in a trivia game about tech terms. Film their answers versus yours, creating a fun and educational piece that shows the generational perspectives on technology.",
            "dueDate": add_days(today, 52),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Job Search Task: Follow Up with Connections",
            "description": "Reach out to connections from earlier networking events for potential leads or informational interviews. Personalize each message with specific references to your previous conversations.",
            "dueDate": add_days(today, 54),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 35),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 42),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 49),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Biweekly Informational Interview",
            "description": "Reach out to professionals in your target roles to learn about their work and tips for transitions. Prepare thoughtful questions in advance and send a thank-you note afterward.",
            "dueDate": add_days(today, 42),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Monthly Metrics Review",
            "description": "Set aside 15–30 minutes to monitor engagement metrics (likes, comments, shares) and refine your content approach. Note which types of content perform best and adjust your strategy accordingly.",
            "dueDate": add_days(today, 56),
            "category": "Other",
            "completed": False
        }
    ])
    
    # Month 3: Leadership & Advocacy
    tasks.extend([
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: Empathy-Driven Leadership: Bridging Tech and Humanity",
            "description": "Explore the role of emotional intelligence in tech leadership, using insights from your nonprofit and engineering experience. Discuss how empathy-driven leadership leads to stronger teams, better products, and more inclusive workplaces.",
            "dueDate": add_days(today, 57),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Why Mental Health Makes You a Stronger Leader",
            "description": "Share a brief personal insight about how mental health challenges have shaped your leadership skills and team empathy. Focus on the unique perspectives and strengths gained from navigating these challenges.",
            "dueDate": add_days(today, 59),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Networking: Participate in Slack/Discord Channels",
            "description": "Join active conversations in tech or leadership-focused online communities and share your recent content to spark engagement. Aim for regular, meaningful contributions that showcase your expertise while building connections.",
            "dueDate": add_days(today, 61),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: Unexpected Skills That Make You a Better Engineer",
            "description": "Highlight how nontraditional skills, like storytelling or empathy, have given you an edge in technical leadership. Use specific examples from your career to demonstrate the value of these often-overlooked competencies.",
            "dueDate": add_days(today, 64),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Lessons My Kids Teach Me About Leadership",
            "description": "Share an anecdote where a moment with your kids mirrored a professional leadership challenge. Draw parallels between parenting strategies and team management techniques in an authentic, relatable way.",
            "dueDate": add_days(today, 66),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Job Search Task: Tailor Portfolio",
            "description": "Update your LinkedIn profile and portfolio to include recent articles, visuals from presentations, and highlights of your advocacy work. Ensure your personal brand consistently reflects your unique combination of technical and leadership skills.",
            "dueDate": add_days(today, 68),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: Creating Inclusive Workspaces in the Tech Industry",
            "description": "Offer actionable ways to foster diversity, equity, and inclusion based on your leadership experiences. Include practical steps leaders can take to create more welcoming environments for individuals from all backgrounds.",
            "dueDate": add_days(today, 71),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Top 3 Leadership Tips I Learned While Managing Bedtime Routines",
            "description": "Humorously connect parenting lessons to professional leadership principles. Show how negotiating with children, maintaining consistency, and adapting to unexpected situations are valuable leadership skills.",
            "dueDate": add_days(today, 73),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Networking: Organize a Roundtable Discussion",
            "description": "Host an informal discussion on inclusion in tech, either virtually or locally, inviting peers or community members. Prepare discussion prompts and create a safe space for sharing experiences and solutions.",
            "dueDate": add_days(today, 75),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Presentation: Building High-Performing, Inclusive Teams in Tech",
            "description": "Prepare slides for this topic, incorporating your professional examples and mentorship strategies. Focus on practical techniques for creating psychologically safe environments where diverse team members can thrive.",
            "dueDate": add_days(today, 78),
            "category": "Presentation",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Tech Myths: You Don't Have to Be Perfect to Succeed",
            "description": "Film a lighthearted take on debunking myths about perfectionism in tech careers. Share personal examples of learning from failures and how embracing imperfection led to growth and innovation.",
            "dueDate": add_days(today, 80),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Job Search Task: Reach Out to 2 Industry Contacts",
            "description": "Follow up with leaders or peers in roles you admire to request informational interviews or insights on job openings. Mention specific aspects of their work that resonate with your career aspirations.",
            "dueDate": add_days(today, 82),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 63),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 70),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 77),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Biweekly Informational Interview",
            "description": "Reach out to professionals in your target roles to learn about their work and tips for transitions. Prepare thoughtful questions in advance and send a thank-you note afterward.",
            "dueDate": add_days(today, 70),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Monthly Metrics Review",
            "description": "Set aside 15–30 minutes to monitor engagement metrics (likes, comments, shares) and refine your content approach. Note which types of content perform best and adjust your strategy accordingly.",
            "dueDate": add_days(today, 84),
            "category": "Other",
            "completed": False
        }
    ])
    
    # Month 4: Integrative Fun & Advocacy
    tasks.extend([
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: From Challenge to Catalyst: Turning Personal Struggles into Professional Strengths",
            "description": "Reflect on how navigating challenges like mental health and single parenthood has shaped your leadership style. Focus on the transformative power of adversity and how personal struggles can become professional catalysts.",
            "dueDate": add_days(today, 85),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: How I Explain My Tech Job to Non-Tech People",
            "description": "Record humorous analogies for explaining your job to family and friends in a lighthearted way. Use relatable comparisons that help bridge the gap between technical work and everyday experiences.",
            "dueDate": add_days(today, 87),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Networking: Attend a Virtual Webinar",
            "description": "Join a panel or webinar on leadership or technical training to connect with like-minded professionals. Actively participate in the chat or Q&A section to make meaningful connections with speakers and attendees.",
            "dueDate": add_days(today, 89),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: Coding My Way Through Life Challenges",
            "description": "Explore how coding principles like debugging and problem-solving apply to personal life hurdles. Draw parallels between technical approaches and overcoming life's obstacles to create an engaging, reflective piece.",
            "dueDate": add_days(today, 92),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Parenting Hacks for Techies",
            "description": "Showcase how you use tech tools to streamline parenting tasks. Share specific apps, automations, or systems that help you manage the dual demands of parenthood and professional life.",
            "dueDate": add_days(today, 94),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Job Search Task: Research Mentorship-Focused Companies",
            "description": "Identify organizations prioritizing mentorship and family-friendly work environments. Look for companies with strong values around work-life balance, professional development, and inclusivity.",
            "dueDate": add_days(today, 96),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Resource: Quick Reference Guides for Aspiring Full-Stack Engineers",
            "description": "Compile bite-sized, practical resources like cheat sheets or checklists for beginner developers. Create downloadable resources that provide immediate value and showcase your expertise while building your email list.",
            "dueDate": add_days(today, 99),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Mom vs. Kids: Who Can Fix the Bug Faster?",
            "description": "Gamify a debugging challenge with your kids for an entertaining short. Create a simple coding problem and film your children attempting to solve it alongside you for a fun, educational piece.",
            "dueDate": add_days(today, 101),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Networking: Host a Community Workshop",
            "description": "Offer a casual workshop on an accessible tech topic to engage with your local or virtual community. Choose a beginner-friendly subject that allows you to demonstrate your teaching and leadership abilities.",
            "dueDate": add_days(today, 103),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: Tech for Social Good: Bridging the Gap Between Coding and Community Needs",
            "description": "Share examples of how technical skills can be leveraged for impactful, mission-driven projects. Include case studies or personal experiences using technology to address social challenges, connecting your nonprofit background with tech.",
            "dueDate": add_days(today, 106),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Fun Facts in Tech: Did You Know?",
            "description": "Share a fascinating or surprising tech fact with a humorous spin to engage your audience. Present the information in an entertaining way that makes technical concepts accessible and interesting.",
            "dueDate": add_days(today, 108),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Job Search Task: Apply to One Role",
            "description": "Submit an application for a strategic role that aligns with your technical leadership and advocacy goals. Customize your cover letter to highlight specific aspects of your experience that match the company's needs and values.",
            "dueDate": add_days(today, 110),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 91),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 98),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 105),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Biweekly Informational Interview",
            "description": "Reach out to professionals in your target roles to learn about their work and tips for transitions. Prepare thoughtful questions in advance and send a thank-you note afterward.",
            "dueDate": add_days(today, 98),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Monthly Metrics Review",
            "description": "Set aside 15–30 minutes to monitor engagement metrics (likes, comments, shares) and refine your content approach. Note which types of content perform best and adjust your strategy accordingly.",
            "dueDate": add_days(today, 112),
            "category": "Other",
            "completed": False
        }
    ])
    
    # Month 5-6: Advanced Content, Networking, & Job Search
    tasks.extend([
        {
            "id": str(uuid.uuid4()),
            "title": "Write Case Study: Improving Collaboration in Remote Tech Teams: Lessons Learned",
            "description": "Offer strategies for leading and training remote or hybrid teams effectively. Draw from your experience managing diverse teams and navigating the challenges of remote work to provide actionable insights.",
            "dueDate": add_days(today, 113),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Relatable Coding Struggles Summed Up in 10 Seconds",
            "description": "Humorously dramatize common challenges like debugging or server crashes. Use expressive reactions and relatable scenarios to create a short that resonates with engineers of all levels.",
            "dueDate": add_days(today, 115),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Relatable Coding Struggles Summed Up in 10 Seconds",
            "description": "Humorously dramatize common challenges like debugging or server crashes. Use expressive reactions and relatable scenarios to create a short that resonates with engineers of all levels.",
            "dueDate": add_days(today, 115),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Networking: Participate in a Podcast",
            "description": "Reach out to a tech-focused podcast and share insights on technical training or career pivots. Prepare a concise pitch highlighting your unique story and the value you can bring to their audience.",
            "dueDate": add_days(today, 117),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: The Future of Tech Education: Empowering Teams Beyond Coding",
            "description": "Predict trends and innovations in tech training, highlighting your leadership insights. Explore emerging methodologies and tools that will shape how technical teams learn and develop skills in the coming years. Establish yourself as a forward-thinking leader in this space.",
            "dueDate": add_days(today, 120),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Engineer Hacks: Making Work & Life Easier",
            "description": "Share practical tech or productivity hacks that blend your professional and parenting expertise. Demonstrate time-saving techniques or tools that help manage competing priorities effectively.",
            "dueDate": add_days(today, 122),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Job Search Task: Follow Up",
            "description": "Check in with mentors or colleagues for feedback on roles you've applied for or new opportunities they've spotted. Maintain these relationships by sharing updates on your recent projects and achievements.",
            "dueDate": add_days(today, 124),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Presentation: Mastering the Art of Mentorship in Tech",
            "description": "Host an interactive workshop or panel, sharing your framework for effective mentorship. Include practical exercises and discussion prompts that attendees can immediately apply to their mentoring relationships.",
            "dueDate": add_days(today, 127),
            "category": "Presentation",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: What Being a Leader Means to Me",
            "description": "Reflect on a moment in your career where you felt proudest as a leader. Share the personal significance of leadership and how your unique perspective shapes your approach to guiding teams.",
            "dueDate": add_days(today, 129),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Networking: Join a Cross-Industry Event",
            "description": "Attend a creative event like a maker fair or innovation lab tour to expand your network beyond tech circles. Look for connections between different fields that might inspire new approaches to technical leadership.",
            "dueDate": add_days(today, 131),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: Holistic Leadership in Tech: A Personal and Professional Blueprint",
            "description": "Combine your professional expertise with personal stories to create a compelling blueprint for aspiring leaders. Outline a framework for leadership that integrates technical skill, emotional intelligence, and inclusive practices.",
            "dueDate": add_days(today, 134),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Digital Resilience: Self-Care Tips for Techies",
            "description": "Film a quick, actionable short on maintaining work-life balance in high-pressure roles. Share practical techniques you use to prevent burnout and sustain productivity while managing mental health.",
            "dueDate": add_days(today, 136),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Job Search Task: Research Specific Roles",
            "description": "Deep dive into job descriptions for Technical Program Manager, Developer Advocate, and similar positions. Analyze the skills and experiences required and create a gap analysis to guide your professional development.",
            "dueDate": add_days(today, 138),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 119),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 126),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly LinkedIn Engagement",
            "description": "Share updates about your recently published content. Comment thoughtfully on relevant posts from peers or leaders in tech. Aim for at least 3-5 meaningful interactions.",
            "dueDate": add_days(today, 133),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Biweekly Informational Interview",
            "description": "Reach out to professionals in your target roles to learn about their work and tips for transitions. Prepare thoughtful questions in advance and send a thank-you note afterward.",
            "dueDate": add_days(today, 126),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Monthly Metrics Review",
            "description": "Set aside 15–30 minutes to monitor engagement metrics (likes, comments, shares) and refine your content approach. Note which types of content perform best and adjust your strategy accordingly.",
            "dueDate": add_days(today, 140),
            "category": "Other",
            "completed": False
        }
    ])
    
    # Additional tasks from the detailed content plan
    tasks.extend([
        {
            "id": str(uuid.uuid4()),
            "title": "Write Tutorial: Scaling Full-Stack Applications: Challenges and Solutions",
            "description": "Create a step-by-step guide on scaling web applications, with a focus on lessons learned during projects you've led. Include code examples, architecture diagrams, and practical advice for engineers facing scaling challenges.",
            "dueDate": add_days(today, 143),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Reflection: Lessons in Resilience: What Parenthood Teaches Us About Tech Leadership",
            "description": "Relate parenting challenges—like negotiating, multitasking, and adapting plans—to leading tech teams effectively. Create a thoughtful piece that connects personal experiences with professional insights.",
            "dueDate": add_days(today, 148),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Workshop: Breaking the Barrier: Tech Training for Nontraditional Talent",
            "description": "Lead a workshop focused on designing inclusive training modules for individuals from diverse or nontechnical backgrounds. Create interactive exercises that highlight the value of different perspectives.",
            "dueDate": add_days(today, 152),
            "category": "Presentation",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Panel Discussion: Creating Cultures of Care in Tech: Mental Health and Leadership",
            "description": "Speak on mental health advocacy in tech environments, sharing practical steps for managers and team members. Focus on creating psychologically safe workplaces where team members can thrive.",
            "dueDate": add_days(today, 156),
            "category": "Presentation",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: The One Project That Changed My Perspective on Leadership",
            "description": "Share a pivotal moment from your career as a nonprofit manager or tech trainer that shaped your leadership style. Focus on the transformative learning experience and how it impacts your approach today.",
            "dueDate": add_days(today, 159),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Host Tech for Good Meetup",
            "description": "Organize a gathering focused on using technical skills for social impact. Create an agenda that includes lightning talks, networking opportunities, and discussions about current challenges in the social sector.",
            "dueDate": add_days(today, 164),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Portfolio Highlight Reel",
            "description": "Compile key achievements into a visual presentation for your portfolio. Include clips from presentations, blog highlights, and testimonials from mentees or colleagues about your impact.",
            "dueDate": add_days(today, 168),
            "category": "Job Search",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: The Rise of Neurodiversity in Tech: Why Mental Health Is a Leadership Asset",
            "description": "Normalize conversations around neurodiversity and mental health, weaving in your own experiences and insights into workplace inclusivity. Position yourself as an advocate for creating environments where diverse minds thrive.",
            "dueDate": add_days(today, 171),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Free Resource: The Ultimate Full-Stack Engineer Checklist",
            "description": "Provide a downloadable checklist outlining project steps, tools, and key considerations for successful full-stack development. Use this value-added content to grow your email list and demonstrate expertise.",
            "dueDate": add_days(today, 176),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Cross-Industry Panel: Learning from Nonprofits: How Mission-Driven Leadership Shapes Innovation",
            "description": "Draw parallels between nonprofit principles and tech leadership to inspire broader thinking. Invite speakers from both sectors to compare approaches and share insights on value-driven leadership.",
            "dueDate": add_days(today, 180),
            "category": "Presentation",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: Community Advocacy - Tech for Good: Leveraging Engineering Skills for Social Impact Projects",
            "description": "Showcase real-world examples of tech-driven solutions for nonprofit or community challenges, inspiring engineers to get involved in social causes. Connect your technical expertise with your passion for mission-driven work.",
            "dueDate": add_days(today, 184),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: 5-Minute Mentorship: How to Delegate Effectively",
            "description": "Share a quick tip for leadership, keeping it simple and actionable. Focus on delegation as a critical skill for both technical leadership and managing work-life balance as a parent.",
            "dueDate": add_days(today, 188),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Empowerment Clips - Why Tech Needs Your Unique Perspective",
            "description": "Deliver a bold, motivational message to aspiring engineers from diverse or nontraditional backgrounds. Emphasize how different life experiences and viewpoints lead to better problem-solving and innovation.",
            "dueDate": add_days(today, 192),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Presentation: Emerging Trends - The Future of Technical Training: Beyond Coding",
            "description": "Analyze current trends and future directions in tech education, incorporating soft skills training and experiential learning methods. Position yourself as a thought leader in the evolving landscape of technical education.",
            "dueDate": add_days(today, 196),
            "category": "Presentation",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Create Short: Debugging Dinner: Coding Logic Meets Parenting",
            "description": "Use coding analogies to humorously show how you manage parenting challenges like meal planning or bedtime routines. Create a relatable piece that shows the overlap between your technical and parenting skills.",
            "dueDate": add_days(today, 200),
            "category": "Short",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Podcast Guesting: Pitch to Tech Leadership Podcast",
            "description": "Reach out to podcasts that focus on tech leadership, neurodiversity, or mentorship. Prepare a compelling pitch highlighting your unique story and the value you can bring to their audience.",
            "dueDate": add_days(today, 204),
            "category": "Networking",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Write Blog: Practical Resource Development - The Ultimate Full-Stack Engineer Checklist",
            "description": "Provide a free downloadable checklist outlining project steps, tools, and key considerations. Create a comprehensive resource that engineers at all levels can use to ensure they're covering all bases in their projects.",
            "dueDate": add_days(today, 208),
            "category": "Writing",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Interactive Workshop: Neurodiversity in Tech Teams",
            "description": "Create and lead a workshop on leveraging diverse thinking styles in technical teams. Include exercises that demonstrate how different cognitive approaches lead to more innovative solutions.",
            "dueDate": add_days(today, 212),
            "category": "Presentation",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly Reflection and Planning Session",
            "description": "Spend 15 minutes each Sunday reviewing the past week's tasks. Adjust upcoming tasks if necessary and celebrate your progress. This consistent practice will help maintain momentum and prevent burnout.",
            "dueDate": add_days(today, 7),
            "category": "Other",
            "completed": False
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Weekly Reflection and Planning Session",
            "description": "Spend 15 minutes each Sunday reviewing the past week's tasks. Adjust upcoming tasks if necessary and celebrate your progress. This consistent practice will help maintain momentum and prevent burnout.",
            "dueDate": add_days(today, 14),
            "category": "Other",
            "completed": False
        }
    ])
    
    return tasks

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/404')
def not_found():
    return render_template('404.html'), 404

# API Routes
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    tasks = load_tasks()
    return jsonify(tasks)

@app.route('/api/tasks', methods=['POST'])
def add_task():
    tasks = load_tasks()
    new_task = request.json
    new_task['id'] = str(uuid.uuid4())
    tasks.append(new_task)
    save_tasks(tasks)
    return jsonify(new_task), 201

@app.route('/api/tasks/<task_id>', methods=['PUT'])
def update_task(task_id):
    tasks = load_tasks()
    updated_task = request.json
    
    for i, task in enumerate(tasks):
        if task['id'] == task_id:
            tasks[i] = updated_task
            save_tasks(tasks)
            return jsonify(updated_task)
    
    return jsonify({"error": "Task not found"}), 404

@app.route('/api/tasks/<task_id>', methods=['DELETE'])
def delete_task(task_id):
    tasks = load_tasks()
    
    for i, task in enumerate(tasks):
        if task['id'] == task_id:
            del tasks[i]
            save_tasks(tasks)
            return jsonify({"message": "Task deleted"})
    
    return jsonify({"error": "Task not found"}), 404

@app.route('/api/tasks/<task_id>/toggle', methods=['PUT'])
def toggle_task(task_id):
    tasks = load_tasks()
    
    for i, task in enumerate(tasks):
        if task['id'] == task_id:
            tasks[i]['completed'] = not tasks[i]['completed']
            save_tasks(tasks)
            return jsonify(tasks[i])
    
    return jsonify({"error": "Task not found"}), 404

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)