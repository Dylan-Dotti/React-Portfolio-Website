import { IProjectData } from "../Interfaces/IProjectData";

const deviantProjectData: IProjectData = {
    id: 1,
    name: "Deviant",
    description: "A game made with the Unity engine for my senior capstone project. Coding was done in C#. Utilized 3D models I created with Blender. Awarded as best project in a pool of about 30 student projects.",
    challenges: "This was my first project using React and Redux. I had to learn how to use Redux and how to structure my code to work with Redux. I also had to learn how to use Redux-Thunk to make asynchronous calls to the backend.",
    startDate: new Date(2020, 5, 1)
};

const ghdAutoTimeEntryData: IProjectData = {
    id: 2,
    name: "GHD Auto Time Entry",
    description: "An app I made in collaboration with another engineer to automate time entry at my support desk job. Uses Python to parse excel sheets with time data, then uses simulated keystrokes to enter the time into SAP time management sheets.",
    challenges: "This was my first project using ASP.NET Core. I had to learn how to use ASP.NET Core and how to structure my code to work with it. I also had to learn how to use Entity Framework Core to interact with the database.",
    startDate: new Date(2020, 8, 1)
};

const pokemonMonopolyData: IProjectData = {
    id: 3,
    name: "Pokémon Monopoly",
    description: "A Pokémon themed version of the classic board game Monopoly. Made with the Unity engine. Coding was done in C#. Utilized 3D models I created with Blender.",
    challenges: "This was my first project using Unity. I had to learn how to use Unity and how to structure my code to work with it. I also had to learn how to use Blender to create 3D models.",
    startDate: new Date(2019, 5, 1)
};

const emeraldAutoTrainerData: IProjectData = {
    id: 4,
    name: "Emerald Auto Trainer",
    description: "A bot I made to automate the process of training Pokémon in Pokémon Emerald. Uses Python to parse the game's memory and simulate button presses.",
    challenges: "This was my first project using Python. I had to learn how to use Python and how to structure my code to work with it. I also had to learn how to use the PyAutoGUI library to simulate button presses.",
    startDate: new Date(2019, 5, 1)
};

const projectData: IProjectData[] = [
    deviantProjectData,
    ghdAutoTimeEntryData,
    pokemonMonopolyData,
    emeraldAutoTrainerData
];

export default projectData;