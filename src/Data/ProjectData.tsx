import DeviantProjectDetail from "../Components/Projects/ProjectDetail/DeviantProjectDetail";
import IProjectData from "../Interfaces/IProjectData";

const deviantProjectData: IProjectData = {
    id: 1,
    name: "Deviant",
    description: "A game made with the Unity engine for my senior capstone project. Coding was done in C#. Utilized 3D models I created with Blender. Awarded as best project in a pool of about 30 student projects.",
    shortDescription: "A game made with the Unity engine for my senior capstone project.",
    overviewSections: [
        {
            title: "Overview",
            content: [
                "I created this game during my final semester at CNU for my capstone project seminar. It's a top-down, semi-randomized, wave-based survival shooter. I sometimes like to think of it as a more complex version of the classic arcade game Asteroids. This was my first attempt at creating a game with a concept that I came up with myself.",
                "I used the Unity engine and C# to create this game. Some models were created with Blender, but most consist of simple Unity shapes."
            ]
        },
        {
            title: "Results",
            content: [
                "I was able to implement most of the features I had planned within the time constraints I was given. The other students seemed to enjoy my presentations; they always gave two rounds of applause.",
                "At the end of the semester, I was required to participate in a poster session where I presented my project to anyone who was interested. I and another student tied for best project in a pool of about 30 student projects. I consider that day to be one of the proudest of my life."
            ]
        }
    ],
    startDate: new Date(2020, 5, 1),
    technologies: ["C#", "Unity", "Blender", "Visual Studio", "Github"],
    skills: ["Game Development", "3D Modeling", "Scrum", "Time Management", "Mathematics", "Physics"],
    imgSrc: "./img/Deviant/deviant_action.PNG",
    codeSrc: "https://github.com/Dylan-Dotti/Deviant",
    demoSrc: "https://youtu.be/lgC5nulletU",
    detailSrc: "deviant",
    detailComponent: () => <DeviantProjectDetail />
};

const ghdAutoTimeEntryData: IProjectData = {
    id: 2,
    name: "GHD Auto Time Entry",
    description: "An app made in collaboration with another engineer to automate time entry at my support desk job. Uses Python to parse excel sheets with time data, then uses simulated keystrokes to enter the time into SAP time management sheets.",
    shortDescription: "An app made in collaboration with another engineer to automate time entry at my support desk job.",
    overviewSections: [
        {
            title: "Overview",
            content: [
                "This project was a collaboration with another engineer at my support desk job. We wanted to come up with a way to automate the process of entering time into SAP time management sheets, as it could be a very tedious and time consuming process.",
                "We decided to create a Python app that would parse the time data from excel sheets, then use simulated keystrokes to enter the time into SAP. We used the openpyxl library to parse the excel sheets, and PyAutoGUI to simulate keystrokes. We used Tkinter to create a UI to allow the user to perform some configurations.",
            ]
        },
        {
            title: "My Role",
            content: [
                "I was chosen by my manager to lead the project. I came up with an initial design, then split the work between myself and the other engineer. I was responsible for the automated input portion, while my partner worked on the excel parsing. I designed most of the GUI, but we both contributed work to it."
            ]
        },
        {
            title: "Results",
            content: [
                "The app was implemented successfully, and I and several other engineers found great value in using it. Since the release, however, some of the engineers reported issues with the automated input portion. I determined that the issue was likely related to Swisslog's antivirus software, but I was ultimately never able to resolve the issues before leaving the company.",
            ]
        },
    ],
    startDate: new Date(2020, 8, 1),
    technologies: ["Python", "VS Code", "Github", "PyQt5"],
    skills: ["Teamwork", "Communication", "UI/UX", "Data Processing"],
    features: ["Automated Input"],
    imgSrc: "./img/TimeEntry/time_entry.png",
    codeSrc: "https://github.com/Dylan-Dotti/GHD-Auto-Time-Entry",
    detailSrc: "ghd-auto-time-entry",
};

const pokemonMonopolyData: IProjectData = {
    id: 3,
    name: "Pokémon Monopoly",
    description: "A Pokémon themed version of the classic board game Monopoly. Made with the Unity engine. Coding was done in C#. Utilized 3D models I created with Blender.",
    shortDescription: "A Pokémon themed version of the classic board game Monopoly made with the Unity Engine.",
    overviewSections: [
        {
            title: "Overview",
            content: [
                "I used to enjoy playing a Pokémon-themed version of Monopoly when I was a child, and this project is effectively a digital recreation of that game.",
                "I used the Unity engine and C# for this project. A third-party networking platform, Photon, was used for the multiplayer functionality. Almost all of the game art consists of images I found on Google. Using only those images and some colored polygons, I was able to make a surprisingly faithful recreation of the original board."
            ]
        },
        {
            title: "Challenges",
            content: [
                "The most challenging aspect of this project was easily the multiplayer functionality. I needed to account for every situation where a game client could become out of sync with the others. It definitely required different lines of thinking compared to single player games."
            ]
        },
        {
            title: "Results",
            content: [
                "I've implemented a significant portion of the game so far, but I have yet to finish some of the more complex features. I still hope to finish this game someday, though even if I did, I would not be able to distribute it publicly due to legal concerns."
            ]
        }
    ],
    startDate: new Date(2019, 5, 1),
    technologies: ["C#", "Unity", "Blender", "Visual Studio", "Github", "Photon"],
    skills: ["Game Development", "3D Modeling", "Mathematics", "Networking"],
    features: ["Online Multiplayer"],
    imgSrc: "./img/PokemonMonopoly/pokemon_monopoly.png",
    codeSrc: "https://github.com/Dylan-Dotti/Pokemon-Monopoly/",
    demoSrc: "https://youtu.be/aVW4bOH_2ao",
    detailSrc: "pokemon-monopoly",
};

const emeraldAutoTrainerData: IProjectData = {
    id: 4,
    name: "Emerald Auto Trainer",
    description: "A bot I made to automate the process of training Pokémon in Pokémon Emerald. Uses Python to parse the game's memory and simulate button presses.",
    overviewSections: [
        {
            title: "Overview",
            content: [
                "My goal with this project was to create a system that could automate some of the more repetitive portions of a Pokémon game.",
                "I chose to use Python for this project, since I was familiar with some Python libraries that had the functionality I needed. I used OpenCV to generate and process game screen images. PyAutoGUI was used to simulate keyboard and mouse input to the game. I created Tkinter GUIs to allow the user to perform some configurations. JSON files were used to store data related to the game.",
            ]
        },
        {
            title: "Results",
            content: [
                "I was able to create scripts to automate several game tasks, and learned a good amount in the process. However, I ultimately decided that the amount of effort required was not worth it, and have put the project on hold for now.",
            ]
        },
        {
            title: "Takeaways",
            content: [
                "This project was a good exercise in using computer image processing to automate tasks. I learned a lot about the OpenCV library and how to use it to process images. I was also able to practice creating UIs with Tkinter and generating and parsing JSON files."
            ]
        }
    ],
    startDate: new Date(2019, 5, 1),
    technologies: ["Python", "VS Code", "Tkinter", "OpenCV", "JSON"],
    skills: ["UI/UX", "Data Processing"],
    features: ["Image Recognition", "Automated Input"],
    imgSrc: "./img/Emerald/emerald_title.png",
    codeSrc: "https://github.com/Dylan-Dotti/Emerald-Auto-Trainer",
    demoSrc: "https://youtu.be/RJ_XmVJHHD0",
    detailSrc: "emerald-auto-trainer",
};

const pokemonClassifierData: IProjectData = {
    id: 5,
    name: "Pokémon Classifier",
    description: "A machine learning model that classifies Pokémon given an image of the Pokémon. Uses Python and the Keras library.",
    overviewSections: [
        {
            title: "Overview",
            content: [
                "This is a small app I created to try my hand at making deep learning image classifiers. The execution is simple - the user provides an image of a Pokémon, and the app will attempt to identify it by name.",
                "I chose Python as the language for this project, as it is generally the favored language for machine learning. I used the Keras library to create and train the CNN models on a dataset of Pokémon images. A minimal Tkinter GUI is used to select the image and view the results."
            ]   
        },
        {
            title: "Challenges",
            content: [
                "My biggest setback on this project was the lack of sufficient images to train the model on. Most of the Pokémon only had a couple dozen images or less. I eventually narrowed the scope to 5 Pokémon which had many more images than the others. The models could also take a long time to train between edits, which slowed my progress significantly."
            ]
        },
        {
            title: "Results",
            content: [
                "I was able to train a model that had between 50-60% accuracy on my dataset before I decided to move on to other projects. It's likely that I needed a larger dataset to produce better results, as changes to the model architecture and hyperparameters did not appear to have much effect."       
            ]
        }
    ],
    startDate: new Date(2019, 5, 1),
    technologies: ["Python", "VS Code", "Keras", "Tkinter"],
    skills: ["Machine Learning"],
    features: ["Image Classification"],
    imgSrc: "./img/PokemonClassifier/charmander_classify.png",
    codeSrc: "https://github.com/Dylan-Dotti/Pokemon-Classifier",
    demoSrc: "https://youtu.be/ssrNn6CEObk",
    detailSrc: "pokemon-classifier",
};

const missingBinFinderData: IProjectData = {
    id: 6,
    name: "Missing Bin Finder",
    description: "A program I made to find missing bins in a list of bins. Uses C# and Windows Forms.",
    overviewSections: [
        {
            title: "Overview",
            content: [
                "This app was comissioned by my technical manager while working at my support desk job. He presented me a problem with our autostore systems: they utilized two separate databaes to keep track of bins - one was maintained by the AutoStore system, and the other was managed by Swisslog. If there was ever a bin discrepancy between the two databases, the system would fully stop until it was resolved. This could be a very time-consuming process, as there were thousands of bins in the system.",
                "I chose C# as the language for this project, since I had experience creating GUIs with Windows Forms, and I wanted the app to be easy to use on Windows machines. To use the app, the user selects two CSV files generated by AutoStore and Swisslog (I was not permitted to access DBs). The app then compares the two files and identifies any discrepancies."
            ]
        },
        {
            title: "Results",
            content: [
                "The app went unused for some time after completion, but one night I received a call from my manager informing me that the time had come to try it out on a real occurrence. To my considerable satisfaction, the app quickly identified the discrepancy, thus saving hours of tedious work."
            ]
        }
    ],
    startDate: new Date(2019, 5, 1),
    technologies: ["C#", "Visual Studio", "Linq", "Windows Forms"],
    skills: ["UI/UX", "Data Processing"],
    imgSrc: "./img/MissingBinFinder/missing_bin_finder.PNG",
    codeSrc: "https://github.com/Dylan-Dotti/GHD-AutoStore-Utilities",
    demoSrc: "https://youtu.be/D6imD_8cvnw",
    detailSrc: "missing-bin-finder",
};

const logSaverData: IProjectData = {
    id: 7,
    name: "Log Saver",
    description: "A program I made to save log files from a remote server. Uses C# and Windows Forms.",
    overviewSections: [
        {
            title: "Overview",
            content: [
                "I came up with the concept for this app while working at my support desk job. The systems we supported created log files on the customers' servers, and we would often need to retrieve them when troubleshooting issues. It could be a somewhat tedious process, so I came up with a way of automating it.",
                "I chose C# as the language for this project. It works using a client/server architecture. The server is a Windows service that runs on the remote customer servers. The client is a Windows Forms GUI that allows the user to connect to the server and download the log files. I also added functionality for zipping the files on the server and after downloading them."
            ]
        },
        {
            title: "Results",
            content: [
                "Most of the functionality of the app was implemented, but my manager was never able to get approval from customers to install the project on their servers, so the app was never used in production."
            ]
        },
        {
            title: "Takeaways",
            content: [
                "This was my first time setting up a tcp client/server architecture; I learned a lot about it through trial and error. I needed to utilize multithreading to allow the server to continue running while clients were connected. I also learned how to create apps that run in the background as Windows services."
            ]
        }
    ],
    startDate: new Date(2019, 5, 1),
    technologies: ["C#", "Visual Studio", "Github", "TCP/IP", "Windows Services", "Windows Forms", "JSON"],
    skills: ["Multithreading", "Networking", "UI/UX"],
    features: ["Client/Server", "File Transfer"],
    imgSrc: "./img/LogSaver/log_saver.png",
    codeSrc: "https://github.com/Dylan-Dotti/Log-Saver",
    demoSrc: "https://youtu.be/MPBOJQdiRlk",
};

const fileEncryptorData: IProjectData = {
    id: 8,
    name: "File Encryptor",
    description: "A small utility application I made to encrypt files. Uses C# and Windows Forms.",
    overviewSections: [
        {
            title: "Overview",
            content: [
                "The main reason I created this app was to have a way of protecting sensitive files on my computer. From what I've gathered, the Windows zip file encryption is not available on the Home version, so I decided to create my own solution. Additionally, I knew that some sensitive data strings such as passwords are often encrypted before being stored, so I figured it would be a good idea to learn some cryptography.",
                "After some research, I discovered that the .NET framework has a built-in cryptography library. I used this library to allow users to encrypt/decrypt the bytes of files, or even to recursively encrypt entire folders, using the AES algorithm. I was even able to add the ability to parameterize the encryption with a password. I also created a small GUI with Windows Forms to make the app easier to use.",
            ]
        },
        {
            title: "Results",
            content: [
                "The app appears to work as intended. . I'm still a little wary about using it to encrypt files that I really care about, but to date I have yet to encounter any issues."
            ]
        }
    ],
    technologies: ["C#", "Visual Studio", "Github", "Windows Forms"],
    skills: ["UI/UX", "Cryptography"],
    features: ["File Encryption"],
    imgSrc: "./img/FileEncryptor/file_encryptor.png",
    codeSrc: "https://github.com/Dylan-Dotti/File-Encryptor/tree/main/FileEncryptor/FileEncryptor",
    demoSrc: "https://youtu.be/BYaNSRBgr2g",
}

const portfolioWebsiteData: IProjectData = {
    id: 9,
    name: "This Website",
    description: "The website you are currently viewing. Uses React with Sass and Typescript.",
    overviewSections: [
        {
            title: "Overview",
            content: [
                "I decided to create this website following my full-stack development position at Swisslog. I was confident that my skills had progressed to the point that I could create a full website on my own, and I felt it was time to dedicate the effort to creating a website that would showcase my skills and accomplishments.",
                "The website is coded using React with Typescript and Sass. Google Firebase is used for hosting. I used Youtube as a free video hosting solution for the project demos."
            ]
        },
        {
            title: "Challenges",
            content: [
                "The most difficult part of web development for me is always deciding on a color scheme. I decided to keep things simple for now and have implemented a mostly monochromatic palette. I also find that designing a layout is generally much more difficult than coding it. I will also add that this site required at least as much of my writing ability as it did my coding ability."
            ]
        },
        {
            title: "Results",
            content: [
                "Well, it's working right now isn't it? At least I hope so."
            ]
        }
    ],
    startDate: new Date(2021, 0, 1),
    technologies: ["HTML", "React", "Sass", "Typescript", "Github", "VS Code", "NodeJS"],
    skills: ["UI/UX", "Responsive Design", "Web Development"],
    imgSrc: "./img/PortfolioWebsite/website_home.png",
    codeSrc: "https://github.com/Dylan-Dotti/React-Portfolio-Website"
}

const projectData: IProjectData[] = [
    deviantProjectData,
    ghdAutoTimeEntryData,
    pokemonMonopolyData,
    emeraldAutoTrainerData,
    pokemonClassifierData,
    missingBinFinderData,
    logSaverData,
    fileEncryptorData,
    portfolioWebsiteData,
];

export default projectData;