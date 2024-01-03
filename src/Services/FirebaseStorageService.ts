import storage from '../Firebase/firebase';
import { ref, getDownloadURL } from "firebase/storage";
import projectData from '../Data/ProjectData';

class FirebaseStorageService {

    private readonly projectVideoURLs: { [id: number | string]: string | undefined };

    constructor() {
        this.projectVideoURLs = {};

        this.loadData();
    }

    private loadData = async () => {
        console.log("Loading data from Firebase Storage...");
        
        // create cache for project videos, map from id to demoName, if demoName is null, map to empty string
        await Promise.all(projectData.map(async (project) => {
            if (project.demoName) {
                try {
                    const fileRef = ref(storage, project.demoName);
                    const url = await getDownloadURL(fileRef);
                    this.projectVideoURLs[project.id] = url;
                    console.log(`Loaded video for project ${project.name}`);
                }
                catch (error) {
                    console.error(error);
                }
            }
            else {
                this.projectVideoURLs[project.id] = undefined;
            }
        }));
    }

    public getProjectVideoURL = (id: number | string): string | undefined => {
        return this.projectVideoURLs[id];
    }
}

const firebaseStorageService = new FirebaseStorageService();
export default firebaseStorageService;