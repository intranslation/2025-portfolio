"use client";

import { useEffect } from "react";

import "./style.css";
import { ProjectItem } from "./ProjectItem";
import { projects } from "~/utils/constants";

export default function Projects() {
  useEffect(() => {}, []);

  return (
    <span className="mt-auto flex flex-wrap items-center justify-start px-2 sm:mt-4 sm:px-5">
      {projects.map(({ id, content, url }, index) => (
        <ProjectItem
          key={index + id}
          index={index}
          id={id}
          content={content}
          url={url}
        />
      ))}
    </span>
  );
}
