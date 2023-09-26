interface Projects {
  "projectName": string,
  "description": string,
  "tag": string[],
  "image": string,
  "projectUrl": string,
  "githubUrl": string
}

export const getProjects = async (): Promise<
  { data: Projects[] } | undefined
> => {
  try {
    const res = await fetch("http://localhost:3000/api/projects");
    return res.json();
  } catch (err) {
    console.error(err);
  }
};
