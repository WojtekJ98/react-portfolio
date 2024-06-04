import React from "react";
import { PROJECTS } from "../asset/constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center my-20">
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((projects, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <img
                className="mb-6 rounded"
                src={projects.image}
                width={150}
                height={150}
                alt={projects.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 max-w-xl">
              <h6 className="font-semibold mb-2">{projects.title}</h6>
              <p className="mb-4 text-sm text-neutral-400">
                {projects.description}
              </p>
              {projects.technologies.map((tech, index) => (
                <span
                  className="mr-2  text-purple-900 bg-neutral-900 px-2 py-1 text-sm font-medium"
                  key={index}>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
