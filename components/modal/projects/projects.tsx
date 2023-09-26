"use client";

import React from "react";
import styles from "./projects.module.scss";
import { getProjects } from "@/api/getProjects";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { EliceDigitalBaeum } from "@/styles/local.fonts";

export default function Projects() {
  const { isLoading, data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const projectData = data?.data;

  if (isLoading) return <p>로딩중</p>;

  return (
    <div className={styles.projectsContainer}>
      <ul className={styles.projects}>
        {/* <h2 className={styles.title}>Projects</h2> */}
        {projectData?.map((data, index) => (
          <li className={styles.project} key={index}>
            <div className={styles.image}>
              <Image src={data.image} fill alt="Portfolio" />
            </div>
            <div className={styles.about}>
              <h3 className={styles.projectName}>{data.projectName}</h3>
              <div className={EliceDigitalBaeum.className}>
                <p className={styles.description}>{data.description}</p>
              </div>
              <ul className={styles.tagContainer}>
                {data?.tag?.map((data, index) => (
                  <li className={styles.tag} key={index}>{data}</li>
                ))}
              </ul>
              <button className={styles.button}>
                <a target="_blank" href="https://github.com/redcoin96">
                  View site
                </a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
