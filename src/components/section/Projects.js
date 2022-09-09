// library
import { Octokit } from "octokit";

// hooks
import { useState, useEffect, useContext } from "react";

// css
import "./mobile/section-project.css";
import './tablet/section-project.css';
import './desktop/section-project.css';

// context
import { LangContext } from "../../context/LangContext";

// data
import { specialCaseProjects, specialCaseProjectsObj } from '../../data/specialCaseProjects'

const Profile = ({ id, device, profile }) => {
  const { fixUmlaut } = useContext(LangContext);
  const [projectsCat, setProjectsCat] = useState([]);
  const [techCat, setTechCat] = useState([]);
  const [projects, setProjects] = useState([]);
  const [heading, setHeading] = useState("");
  const [projectState, setProjectState] = useState('all');
  const [techState, setTechState] = useState('all');

  useEffect(() => {
    setProjectsCat(profile.projectCategories);
    setTechCat(profile.techCategory);

    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
    });
    (async () => {
      try {
        const data = (await octokit.request(`GET /user/repos`, {})).data;

        let filteredData;
        switch(true) {
          case ( 
            projectState === 'my own' ||
            projectState === 'eigene' ||
            projectState === 'собственные'
          ): 
          filteredData = data.filter( d => {
            if(techState === 'all'){
              return d.topics.includes('own');
            } else {
              return d.topics.includes('own') && d.topics.includes(techState);
            }
          });
          setProjects( prev => filteredData);

          break;
          case (
            projectState === 'by learning' ||
            projectState === 'durchs lernen' ||
            projectState === 'через обучение'
          ):
          filteredData = data.filter( d => {
            if(techState === 'all'){
              return  d.topics.includes('tutorial');
            } else {
              return d.topics.includes('tutorial') && d.topics.includes(techState);
            }
          });
          setProjects( prev => filteredData);
          break;
          default:
          filteredData = data.filter( d => {
            if(techState === 'all'){
              return (d.topics.includes('tutorial')) ||  (d.topics.includes('own'));
            } else {
              return ( 
                ( d.topics.includes('tutorial') && d.topics.includes(techState) ) ||
                ( d.topics.includes('own') && d.topics.includes(techState) )
                )
            }
          })
          setProjects( prev => filteredData);
        }
      } catch (error) {
        console.error(error.status, error.response.data.message);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectState, techState]);

  useEffect(() => {
    setHeading(fixUmlaut(id)[0].toUpperCase() + fixUmlaut(id).slice(1));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <h2>{heading}</h2>
      <div className={`${id}-${device}-btn-container`}>
        {projectsCat.map((category) => (
          <button 
            key={category} 
            id={category} 
            className={`${id}-${device}-buttons`}
            onClick={e => setProjectState(e.target.innerHTML)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={`${id}-${device}-btn-container`}>
        {techCat.map((tech) => (
          <button
            key={tech}
            id={tech}
            className={`${id}-${device}-buttons`}
            onClick={e => setTechState(e.target.innerHTML)}
          >
            {tech}
          </button>
        ))}
      </div>
      <div id={`${id}-${device}-container`}>
        { projects.length > 0 ? projects.map((project) => {
          const splittedFullname = project.full_name.split("/");
          const [_name, _project] = splittedFullname;

          return (
            <figure key={project.name} className={`${id}-${device}-figure`}>
              <img 
                src={`https://raw.githubusercontent.com/${_name}/${_project}/main/${_project}.png`}
                alt="" 
                className={`${id}-${device}-figure-img`} 
              />
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
                    href={
                      specialCaseProjects.includes(_project) ? 
                      specialCaseProjectsObj[_project] :
                      `https://${_name.toLowerCase()}.github.io/${_project}`
                    }
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    deployment
                  </a>
                </div>
              </figcaption>
            </figure>
          );
        })
        : <p id='empty-projects'>{profile.noProjects}</p>
      }
      </div>
    </>
  );
};

export default Profile;
