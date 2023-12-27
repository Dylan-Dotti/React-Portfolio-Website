import DeviantProjectDetail from "../Components/Projects/ProjectDetail/DeviantProjectDetail";
import IProjectData from "../Interfaces/IProjectData";

const deviantProjectData: IProjectData = {
    id: 1,
    name: "Deviant",
    description: "A game made with the Unity engine for my senior capstone project. Coding was done in C#. Utilized 3D models I created with Blender. Awarded as best project in a pool of about 30 student projects.",
    shortDescription: "A game made with the Unity engine for my senior capstone project.",
    startDate: new Date(2020, 5, 1),
    technologies: ["C#", "Unity", "Blender", "Visual Studio", "Github"],
    skills: ["Game Development", "3D Modeling", "Scrum", "Time Management", "Mathematics", "Physics"],
    imgSrc: "./img/Deviant/deviant_action.PNG",
    codeSrc: "https://github.com/Dylan-Dotti/Deviant",
    detailSrc: "deviant",
    detailComponent: () => <DeviantProjectDetail />
};

const ghdAutoTimeEntryData: IProjectData = {
    id: 2,
    name: "GHD Auto Time Entry",
    description: "An app I made in collaboration with another engineer to automate time entry at my support desk job. Uses Python to parse excel sheets with time data, then uses simulated keystrokes to enter the time into SAP time management sheets.",
    shortDescription: "An app I made in collaboration with another engineer to automate time entry at my support desk job.",
    startDate: new Date(2020, 8, 1),
    technologies: ["Python", "VS Code", "Github", "PyQt5"],
    skills: ["Teamwork", "Communication", "UI/UX", "Data Processing"],
    imgSrc: "./img/TimeEntry/time_entry.PNG",
    codeSrc: "https://github.com/Dylan-Dotti/GHD-Auto-Time-Entry",
    detailSrc: "ghd-auto-time-entry",
};

const pokemonMonopolyData: IProjectData = {
    id: 3,
    name: "Pokémon Monopoly",
    description: "A Pokémon themed version of the classic board game Monopoly. Made with the Unity engine. Coding was done in C#. Utilized 3D models I created with Blender.",
    shortDescription: "A Pokémon themed version of the classic board game Monopoly made with the Unity Engine.",
    startDate: new Date(2019, 5, 1),
    technologies: ["C#", "Unity", "Blender", "Visual Studio", "Github", "Photon"],
    skills: ["Game Development", "3D Modeling", "Mathematics", "Networking"],
    features: ["Online Multiplayer"],
    imgSrc: "./img/PokemonMonopoly/pokemon_monopoly.png",
    codeSrc: "https://github.com/Dylan-Dotti/Pokemon-Monopoly/",
    detailSrc: "pokemon-monopoly",
};

const emeraldAutoTrainerData: IProjectData = {
    id: 4,
    name: "Emerald Auto Trainer",
    description: "A bot I made to automate the process of training Pokémon in Pokémon Emerald. Uses Python to parse the game's memory and simulate button presses.",
    startDate: new Date(2019, 5, 1),
    technologies: ["Python", "VS Code", "Tkinter", "OpenCV", "JSON"],
    skills: ["UI/UX", "Data Processing"],
    features: ["Image Recognition", "Automated Input"],
    imgSrc: "./img/Emerald/emerald_title.png",
    codeSrc: "https://github.com/Dylan-Dotti/Emerald-Auto-Trainer",
    detailSrc: "emerald-auto-trainer",
};

const pokemonClassifierData: IProjectData = {
    id: 5,
    name: "Pokémon Classifier",
    description: "A machine learning model that classifies Pokémon given an image of the Pokémon. Uses Python and the Keras library.",
    startDate: new Date(2019, 5, 1),
    technologies: ["Python", "VS Code", "Keras", "Tkinter"],
    skills: ["Machine Learning"],
    features: ["Image Classification"],
    imgSrc: "./img/PokemonClassifier/charmander_classify.png",
    codeSrc: "https://github.com/Dylan-Dotti/Pokemon-Classifier",
    detailSrc: "pokemon-classifier",
};

const missingBinFinderData: IProjectData = {
    id: 6,
    name: "Missing Bin Finder",
    description: "A program I made to find missing bins in a list of bins. Uses C# and Windows Forms.",
    startDate: new Date(2019, 5, 1),
    technologies: ["C#", "Visual Studio", "Linq", "Windows Forms"],
    skills: ["UI/UX", "Data Processing"],
    imgSrc: "./img/MissingBinFinder/missing_bin_finder.PNG",
    codeSrc: "https://github.com/Dylan-Dotti/GHD-AutoStore-Utilities",
    detailSrc: "missing-bin-finder",
};

const logSaverData: IProjectData = {
    id: 7,
    name: "Log Saver",
    description: "A program I made to save log files from a remote server. Uses C# and Windows Forms.",
    startDate: new Date(2019, 5, 1),
    technologies: ["C#", "Visual Studio", "Github", "TCP/IP", "Windows Services"],
    skills: ["Multithreading", "Networking", "UI/UX"],
    features: ["Client/Server", "File Transfer"],
    imgSrc: "./img/LogSaver/log_saver.PNG",
    codeSrc: "https://github.com/Dylan-Dotti/Log-Saver",
};

const projectData: IProjectData[] = [
    deviantProjectData,
    ghdAutoTimeEntryData,
    pokemonMonopolyData,
    emeraldAutoTrainerData,
    pokemonClassifierData,
    missingBinFinderData,
    logSaverData,
];

export default projectData;