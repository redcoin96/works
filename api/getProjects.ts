import { apiInstance } from "./axios/instance";

interface Projects {
  projectName: string;
  description: string;
  tag: string[];
  image: string;
  projectUrl: string;
  githubUrl: string;
}

export const getProjects = async (): Promise<{ data: Projects[] } | undefined> => {
  try {
    const res = await apiInstance.get("/projects");
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
