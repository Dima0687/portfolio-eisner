// library
import { Octokit } from "octokit";

// hooks
import { useState, useEffect, useContext } from "react";

// css
import "./section-project.css";

// context
import { LangContext } from "../../context/LangContext";

const Profile = ({ id, device, profile }) => {
  const { fixUmlaut } = useContext(LangContext);
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [heading, setHeading] = useState("");

  useEffect(() => {
    setCategories(profile.projectCategories);

    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
    });
    (async () => {
      try {
        const data = await (await octokit.request(`GET /user/repos`, {})).data;
        setProjects(data);
      } catch (error) {
        console.error(error.status, error.response.data.message);
      }
    })();
  }, []);

  useEffect(() => {
    setHeading(fixUmlaut(id)[0].toUpperCase() + fixUmlaut(id).slice(1));
  }, [id]);

  return (
    <div id={`${id}-container`}>
      <h2>{heading}</h2>
      <div id={`${id}-${device}-buttons`}>
        {categories.map((category) => (
          <button key={category} id={category} className={`${id}-buttons`}>
            {category}
          </button>
        ))}
      </div>
      <div id={`${id}-${device}-container`}>

      {console.log(projects)}
        {projects.map((project) => {
          const splittedFullname = project.full_name.split("/");
          const [_name, _project] = splittedFullname;

          return (
            <figure key={project.name} className={`${id}-${device}-figure`}>
              <img src="" alt="" className={`${id}-${device}-figure-img`} />
              <figcaption className={`${id}-${device}-figure-text`}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={`${id}-figure-button-container`}>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                  <a
                    href={`https://${_name.toLowerCase()}.github.io/${_project}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    deployment
                  </a>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
