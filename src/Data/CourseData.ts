import ICourseData from "../Interfaces/ICourseData";

const dataStructuresData: ICourseData = {
    id: 1,
    name: "Data and File Structures",
    overview: `This course covered the basics of data structures, and included topics such as linked lists, stacks, queues, trees, and graphs.
               Projects and exams were coded in Java and emphasized the linked list and binary tree structures. JUnit tests were also written to accompany the implementations.`,
    skills: [
        "Java",
        "Unit Testing",
        "Data Structures",
    ]
};

const softwareDesignDevelopmentData: ICourseData = {
    id: 2,
    name: "Software Design and Development",
    overview: `This vaguely-named course covered a variety of topics. There was a strong focus on group projects and open-source software. Group projects were assigned on a weekly or biweekly basis. We made use of Ubuntu Linux virtual machines for several of the projects.`,
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
    overview: `This course covered many of the basic functions of operating systems, such as processes, threads, scheduling, memory management, and file systems. Projects consisted of implementing various basic operating system functions in C++.`,
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
    overview: `This course covered many of the most common algorithmic paradigms, such as divide and conquer, dynamic programming, and greedy algorithms. It also covered how to analyze the time and space complexity of algorithms and represent them with big O notation.
               One of the most interesting algorithms I learned about was Huffman encoding, which is used to compress data.`,
    skills: [
        "Java",
        "Big O Notation",
        "Time/Space Complexity",
    ]
};

const oopData: ICourseData = {
    id: 5,
    name: "Object Oriented Programming & Design",
    overview: `This course covered a majority of the most common design patterns, such as the factory, observer, command, and composite patterns. Each pattern had an associated project which required me to implement the project using Java.
               Java streams were also covered in this course. I learned how to use streams to efficiently perform operations on collections of data, which translated well to using LINQ in C#. Java multithreading was also briefly covered.`, 
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
    overview: `This course covered most of the basic SQL syntax as well as relational database design considerations. Projects included creating diagrams for a provided data description and writing scripts to produce specified results and to efficiently create tables and populate them with data.
               One of my biggest takeaways from this course was the concept of normalization, or preventing data duplication. I learned that many-to-many table relationships should always be represented with an intermediary table with foreign keys from both source tables.`,
    skills: [
        "SQL",
        "PostgreSQL",
        "Relational Databases",
        "Database Design",
        "Normalization",
    ],
    links: [
        {
            name: "Projects Github",
            url: "https://github.com/Dylan-Dotti/Database-Projects"
        }
    ]
};

const appliedAIData: ICourseData = {
    id: 7,
    name: "Applied Artificial Intelligence",
    overview: `This course covered several machine learning algorithms, such as graph searches, minimax, reinforcement learning, and neural networks.
               The course closely followed the CS188 AI course given at UC Berkeley. Projects consisted of implementing various AI algorithms with Python in Pacman-themed environments.`,
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
    overview: `This was one of the most interesting courses I took at CNU. It covered the basics of robotics, including kinematics, path planning, and controls.
               I was required to complete a group project which consisted of using ROS (Robot Operating System) to program a robot with vision capabilities to interact with the environment in some way. My group decided to make the robot perform distinct movements based on the color of the object it saw. The project required significant collaboration, and many hours spent in the computer lab.`,
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
    overview: `This was less of a course and more of a semester-long, supervised project. For my project, I chose to make a game with C# and the Unity engine, as I had been working with the engine for several years and felt that was the best way to showcase my development abilities.
               I was required to provide weekly updates, including a weekly standup meeting with the professor and the rest of the class. I was also required to create a display for CNU's annual Capstone Fair.`,
    skills: [
        "C#",
        "Unity",
        "Blender",
        "Game Development",
        "Standups",
        "Time Management",
    ]
};

const discreteMathematicsData: ICourseData = {
    id: 10,
    name: "Discrete Mathematics",
    overview: "Sometimes termed \"math for computer science\", this course covered several mathematical topics that are relevant to software development, including proofs, set theory, graph theory, combinatorics, probability theory, boolean algebra, and big O notation.",
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