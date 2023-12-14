import DeviantProjectDetail from "../Components/Projects/ProjectDetail/DeviantProjectDetail";
import IProjectData from "../Interfaces/IProjectData";

const deviantProjectData: IProjectData = {
    id: 1,
    name: "Deviant",
    description: "A game made with the Unity engine for my senior capstone project. Coding was done in C#. Utilized 3D models I created with Blender. Awarded as best project in a pool of about 30 student projects.",
    challenges: "This was my first project using React and Redux. I had to learn how to use Redux and how to structure my code to work with Redux. I also had to learn how to use Redux-Thunk to make asynchronous calls to the backend.",
    startDate: new Date(2020, 5, 1),
    imgSrc: "./img/Deviant/deviant_action.PNG",
    detailSrc: "deviant",
    detailComponent: () => <DeviantProjectDetail />
};

const ghdAutoTimeEntryData: IProjectData = {
    id: 2,
    name: "GHD Auto Time Entry",
    description: "An app I made in collaboration with another engineer to automate time entry at my support desk job. Uses Python to parse excel sheets with time data, then uses simulated keystrokes to enter the time into SAP time management sheets.",
    challenges: "This was my first project using ASP.NET Core. I had to learn how to use ASP.NET Core and how to structure my code to work with it. I also had to learn how to use Entity Framework Core to interact with the database.",
    startDate: new Date(2020, 8, 1),
    imgSrc: "./img/TimeEntry/time_entry.PNG",
    detailSrc: "ghd-auto-time-entry",
};

const pokemonMonopolyData: IProjectData = {
    id: 3,
    name: "Pokémon Monopoly",
    description: "A Pokémon themed version of the classic board game Monopoly. Made with the Unity engine. Coding was done in C#. Utilized 3D models I created with Blender.",
    challenges: "This was my first project using Unity. I had to learn how to use Unity and how to structure my code to work with it. I also had to learn how to use Blender to create 3D models.",
    startDate: new Date(2019, 5, 1),
    imgSrc: "./img/PokemonMonopoly/pokemon_monopoly.png",
    detailSrc: "pokemon-monopoly",
};

const emeraldAutoTrainerData: IProjectData = {
    id: 4,
    name: "Emerald Auto Trainer",
    description: "A bot I made to automate the process of training Pokémon in Pokémon Emerald. Uses Python to parse the game's memory and simulate button presses.",
    challenges: "This was my first project using Python. I had to learn how to use Python and how to structure my code to work with it. I also had to learn how to use the PyAutoGUI library to simulate button presses.",
    startDate: new Date(2019, 5, 1),
    imgSrc: "./img/Emerald/emerald_title.png",
    detailSrc: "emerald-auto-trainer",
};

const pokemonClassifierData: IProjectData = {
    id: 5,
    name: "Pokémon Classifier",
    description: "A machine learning model that classifies Pokémon given an image of the Pokémon. Uses Python and the Keras library.",
    challenges: "This was my first project using machine learning. I had to learn how to use machine learning and how to structure my code to work with it. I also had to learn how to use the Keras library to create the model.",
    startDate: new Date(2019, 5, 1),
    imgSrc: "./img/PokemonClassifier/charmander_classify.png",
    detailSrc: "pokemon-classifier",
}

const missingBinFinderData: IProjectData = {
    id: 6,
    name: "Missing Bin Finder",
    description: "A program I made to find missing bins in a list of bins. Uses C# and Windows Forms.",
    challenges: "This was my first project using C#. I had to learn how to use C# and how to structure my code to work with it. I also had to learn how to use Windows Forms to create the GUI.",
    startDate: new Date(2019, 5, 1),
    imgSrc: "./img/MissingBinFinder/missing_bin_finder.PNG",
    detailSrc: "missing-bin-finder",
}

const projectData: IProjectData[] = [
    deviantProjectData,
    ghdAutoTimeEntryData,
    pokemonMonopolyData,
    emeraldAutoTrainerData,
    pokemonClassifierData,
    missingBinFinderData,
];

export default projectData;