"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./projects.module.scss";
import { getProjects } from "@/api/getProjects";
import { useQuery } from "@tanstack/react-query";

export default function Projects() {
  const { data } = useQuery({ queryKey: ["projects"], queryFn: getProjects });

  const projectData = data?.data

  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div>{projectData?.map((data, index) => <div key={index}>{data.projectName}</div>)}</div>
    </div>
  );
}
