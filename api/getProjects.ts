interface Projects {
  [key: string]: string;
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
