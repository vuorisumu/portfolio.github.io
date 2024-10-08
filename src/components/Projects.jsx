import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true });
  const [selected, setSelected] = useState({});

  useEffect(() => {
    setSelected(projects[0]);
  }, [projects]);

  return (
    <article id="projects">
      <h2>{t("projectTitle")}</h2>
      <div id="projectContainer">
        <div id="projectDisplay">
          <h3>{selected.name}</h3>
          {selected.images?.map((img, index) => (
            <img src={img} />
          ))}
          {selected.description?.map((desc, index) => (
            <p key={`desc${index}`}>{desc}</p>
          ))}

          {selected.links?.map((link, index) => (
            <p key={`link${index}`}>
              <a href={link.link} target="_blank">
                {link.text}
              </a>
            </p>
          ))}
        </div>

        <ul className="projectButtons">
          {projects.map((project, index) => (
            <li key={`project${index}`}>
              <button
                onClick={() => setSelected(project)}
                className={selected === project ? "active" : ""}
              >
                <div className="imageHolder">
                  <img
                    src={project.cover ? `${project.cover}` : "githubicon.png"}
                    className={project.cover ? "" : "no-image"}
                  />
                </div>
                <h3>{project.name}</h3>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Projects;
