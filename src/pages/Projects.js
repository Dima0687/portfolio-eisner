// hooks
import { useState, useEffect, useContext } from "react";

// library
import { Octokit } from "octokit";


// portfolio data
import portfolio from "../data/portfolioData";

// css

// context
import { LangContext } from "../context/LangContext";

const Projects = ({ sectionName , device }) => {
  const {
    identifiers,
    projectCategories,
    specialCaseProjectsObj,
    techCategory,
    noProjects
  } = portfolio;
  const { lang } = useContext(LangContext);
  const [heading, setHeading] = useState("");
  const [projectsCat, setProjectsCat] = useState([]);
  const [techCat, setTechCat] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectFilter, setProjectFilter] = useState('all');
  const [techFilter, setTechFilter] = useState('all');

  useEffect(() => {
    setProjectsCat(projectCategories[lang]);
    setTechCat(techCategory[lang]);
    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
    });

    const projectConditionOwn = projectFilter === 'my own' || projectFilter === 'eigene' || projectFilter === 'собственные';
    const projectConditionLearn = projectFilter === 'by learning' || projectFilter === 'durchs lernen' || projectFilter === 'через обучение';
    const techCondition = techFilter === 'all' || techFilter === 'alle' || techFilter === 'все';

    (async () => {
      try {
        const data = (await octokit.request(`GET /user/repos`, {})).data;

        let filteredData;
        switch(true) {
          case ( projectConditionOwn ): 
          filteredData = data.filter( d => {
            if( techCondition ){
              return d.topics.includes('own');
            } else {
              return d.topics.includes('own') && d.topics.includes(techFilter);
            }
          });
          setProjects( prev => filteredData);

          break;
          case ( projectConditionLearn ):
          filteredData = data.filter( d => {
            if( techCondition ){
              return  d.topics.includes('tutorial');
            } else {
              return d.topics.includes('tutorial') && d.topics.includes(techFilter);
            }
          });
          setProjects( prev => filteredData);
          break;
          default:
          filteredData = data.filter( d => {
            if( techCondition ){
              return (d.topics.includes('tutorial')) ||  (d.topics.includes('own'));
            } else {
              return ( 
                ( d.topics.includes('tutorial') && d.topics.includes(techFilter) ) ||
                ( d.topics.includes('own') && d.topics.includes(techFilter) )
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
  }, [projectFilter, techFilter]);

  useEffect(() => {
    setHeading(
      identifiers[sectionName][lang]
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <>
      <h2 id={`${sectionName}-${device}-heading`}>{heading}</h2>
      <div className={`${sectionName}-${device}-btn-container`}>
        {projectsCat.map((category) => (
          <button 
            key={category} 
            id={category} 
            className={`${sectionName}-${device}-buttons`}
            onClick={e => setProjectFilter(e.target.innerHTML)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={`${sectionName}-${device}-btn-container`}>
        {techCat.map((tech) => (
          <button
            key={tech}
            id={tech}
            className={`${sectionName}-${device}-buttons`}
            onClick={e => setTechFilter(e.target.innerHTML)}
          >
            {tech}
          </button>
        ))}
      </div>
      <div id={`${sectionName}-${device}-container`}>
        { projects.length > 0 ? projects.map((project) => {
          const splittedFullname = project.full_name.split("/");
          const [_name, _project] = splittedFullname;
          
          return (
            <figure key={project.name} className={`${sectionName}-${device}-figure`}>
              <img 
                src={`https://raw.githubusercontent.com/${_name}/${_project}/main/${_project}.png`}
                alt="" 
                className={`${sectionName}-${device}-figure-img`} 
              />
              <figcaption className={`${sectionName}-${device}-figure-text`}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={`${sectionName}-figure-button-container`}>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                  <a
                    href={
                      specialCaseProjectsObj.hasOwnProperty(_project) ? 
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
        : <p id='empty-projects'>{noProjects[lang]}</p>
      }
      </div>
    </>
  );
};

export default Projects;
