import { faAward, faMedal, faTrophy } from "@fortawesome/free-solid-svg-icons";
import IAwardData from "../Interfaces/IAwardData";


const awardData: IAwardData[] = [
    {
        id: 1,
        name: "Newport News Shipbuilding Scholarship",
        description: "Awarded by the Newport News shipyard to a few students each year.",
        icon: faAward,
    },
    {
        id: 2,
        name: "Capstone Fair Best Project",
        description: "My senior capstone project was voted as one of two best projects at the CNU capstone fair.",
        icon: faTrophy,
    },
    {
        id: 3,
        name: "PCSE Departmental Highest Honors",
        description: "Awarded to the top students in the Physics, Computer Science, and Engineering departments.",
        icon: faMedal,
    }
];

export default awardData;