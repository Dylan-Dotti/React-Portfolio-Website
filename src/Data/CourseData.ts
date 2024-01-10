import ICourseData from "../Interfaces/ICourseData";

const dataStructuresData: ICourseData = {
    id: 1,
    name: "Data and File Structures",
    overview: [
        "This course covered the basics of data structures, and included topics such as linked lists, stacks, queues, trees, and graphs.",
        "Projects and exams were coded in Java and emphasized the linked list and binary tree structures. JUnit tests were also written to accompany the implementations.",
    ],
    skills: [
        "Java",
        "Unit Testing",
        "Data Structures",
    ]
};

const softwareDesignDevelopmentData: ICourseData = {
    id: 2,
    name: "Open-Source Software",
    overview: [
        "This course had a strong focus on open-source software and frequent group projects. We made use of Ubuntu Linux virtual machines for most of the coursework.",
        "One highlight of this course involved installing the Firefox browser from source code on an Ubuntu virtual machine and attempting to make a visible change, which took several hours of trial and error the first time. Additionally, the final group project involved contributing to an open-source project, for which my group chose to implement a percentile marker feature for Matplotlib, a popular Python plotting library."
    ],
    skills: [
        "Java",
        "Python",
        "Group Projects",
        "Github",
        "Open-Source",
        "Linux (Ubuntu)",
        "Virtual Machines",
    ]
};

const operatingSystemsData: ICourseData = {
    id: 3,
    name: "Operating Systems",
    overview: [
        "This course covered many of the basic functions of operating systems, such as processes, threads, scheduling, memory management, paging, and file systems. Projects consisted of implementing operating system functionality in C++.",
    ],
    skills: [
        "C++",
        "Linux (Ubuntu)",
        "Virtual Machines",
        "Multithreading",
    ]
};

const algorithmsData: ICourseData = {
    id: 4,
    name: "Algorithms",
    overview: [
        "The Algorithms course covered a variety of algorithmic techniques including divide and conquer, dynamic programming, and greedy methods. it also covered the evaluation of algorithm time and space complexity and how to represent them with Big O notation",
        "One of the more interesting algorithms I learned in this course was Huffman Encoding, a lossless data compression algorithm that uses a binary tree to encode data. I implemented this algorithm in Java for a project that involved compressing the text of several books."
    ],
    skills: [
        "Java",
        "Big O Notation",
        "Time/Space Complexity",
    ]
};

const oopData: ICourseData = {
    id: 5,
    name: "Object-Oriented Programming",
    overview: [
        "This course covered popular OOP design patterns, such as factory, observer, command, and strategy. Each module included a project where I applied these patterns using Java.",
        "The course also covered Java streams, teaching me efficient data operation techniques that translated well to LINQ in C#. A brief introduction to Java multithreading provided a foundation in concurrent programming. This course greatly improved my approach to software design and problem-solving in programming.",
    ],
    skills: [
        "Java",
        "Unit Testing",
        "Object Oriented Programming",
        "Design Patterns",
        "Multithreading",
    ]
};

const dbManagementSystemsData: ICourseData = {
    id: 6,
    name: "Database Management Systems",
    overview: [
        "This course explored basic SQL syntax and relational database design. I worked on projects that involved creating diagrams to represent data structures and writing scripts to generate specific outcomes, including efficiently setting up and populating tables with data.",
        "A key takeaway for me was understanding the concept of normalization, which is about preventing unnecessary duplication of data. I learned the importance of using intermediary tables with foreign keys from both source tables to handle many-to-many relationships. This knowledge has been fundamental in helping me create more organized and efficient databases.",
    ],
    skills: [
        "SQL",
        "PostgreSQL",
        "Relational Databases",
        "Database Design",
        "Normalization",
    ],
    links: [
        {
            name: "Projects",
            url: "https://github.com/Dylan-Dotti/Database-Projects"
        }
    ]
};

const appliedAIData: ICourseData = {
    id: 7,
    name: "Applied Artificial Intelligence",
    overview: [
        "This course significantly enriched my academic journey, introducing me to fundamental machine learning algorithms like graph searches, minimax, reinforcement learning, and neural networks. It mirrored the CS188 AI course from UC Berkeley, containing a blend of theoretical understanding and practical application.",
        "The highlight of the course was the series of projects that involved using Python to implement various AI algorithms in Pacman-themed environments. This hands-on approach made complex concepts more accessible and engaging, greatly enhancing my grasp of AI strategies and their applications.",
    ],
    skills: [
        "Python",
        "Machine Learning",
        "Deep Learning",
    ],
    links: [
        {
            name: "Pacman AI Projects",
            url: "http://ai.berkeley.edu/project_overview.html"
        }
    
    ]
};

const introToRoboticsData: ICourseData = {
    id: 8,
    name: "Introduction to Robotics",
    overview: [
        "This course was a highlight of my degree, covering fundamental aspects of robotics such as kinematics, path planning, and controls. It was a deep dive into how robots perceive and interact with the world, offering a blend of theoretical and practical learning.",
        "A significant part of the course was the group project, which revolved around using ROS (Robot Operating System) to program a robot with vision capabilities to interact with the world in some way. My group decided to make the robot respond to different colored objects with distinct movements. This project demanded extensive teamwork and many hours in the computer lab. It was a hands-on experience that emphasized the importance of collaboration in solving complex problems and left me with a deeper understanding of robotics applications.",
    ],
    skills: [
        "Python",
        "ROS (Robot Operating System)",
        "Gazebo (Robot Simulator)",
        "Computer Vision",
        "Group Projects",
    ]
};

const capstoneProjectData: ICourseData = {
    id: 9,
    name: "Capstone Project",
    overview: [
        "This was less of a course and more of a semester-long, supervised project. For my project, I chose to make a game with C# and the Unity Engine, as I had been working with it for several years and felt that was the best way to showcase my development abilities. I was required to provide frequent updates, including a weekly standup meeting with the professor and the rest of the class. I was also required to create a display for CNU's annual Capstone Fair.",
        "The project was a resounding success, and was one of two winning projects at the Capstone Fair in the Computer Science category.",
    ],
    skills: [
        "C#",
        "Unity",
        "Blender",
        "Game Development",
        "Standups",
        "Time Management",
    ],
    links: [
        {
            name: "Project demo",
            url: "https://youtu.be/lgC5nulletU"
        }
    ]
};

const discreteMathematicsData: ICourseData = {
    id: 10,
    name: "Discrete Mathematics",
    overview: [
        "This course covered several mathematical topics that are relevant to software development, including proofs, set theory, graph theory, combinatorics, probability theory, boolean algebra, and big O notation.",
    ],
    skills: [
        "Proofs",
        "Set Theory",
        "Graph Theory",
        "Combinatorics",
        "Probability Theory",
        "Boolean Algebra",
        "Big O Notation",
    ]
};

const courseData: ICourseData[] = [
    dataStructuresData,
    softwareDesignDevelopmentData,
    operatingSystemsData,
    algorithmsData,
    oopData,
    dbManagementSystemsData,
    appliedAIData,
    introToRoboticsData,
    capstoneProjectData,
    discreteMathematicsData
];

export default courseData;