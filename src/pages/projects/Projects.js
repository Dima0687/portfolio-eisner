// hooks
import {
  useState,
  useEffect,
  useContext,
  useRef
} from 'react';

// components
import ButtonContainer from '../../components/btnContainer/ButtonContainer';
import Figure from '../../components/figure/Figure';

// library
import { Octokit } from 'octokit';

// portfolio data
import portfolio from '../../data/portfolioData';

// css
import './projects.css';

// context
import { LangContext } from '../../context/LangContext';

const Projects = ({ sectionName, device }) => {
  const projectsDiv = useRef();
  const {
    identifiers,
    projectCategories,
    techCategory,
    noProjects,
    filterFor,
    requestFromGithub: {
      repos
    }
  } = portfolio;

  const { lang } = useContext(LangContext);
  const [heading, setHeading] = useState('');
  const [projects, setProjects] = useState([]);
  const [projectsBtnText, setProjectsBtnText] = useState([]);
  const [techStackBtnText, setTechStackBtnText] = useState([]);
  const [projectIds, setProjectIds] = useState([]);
  const [techStackIds, setTechStackIds] = useState([]);
  const [projectFilter, setProjectFilter] = useState('all');
  const [techFilter, setTechFilter] = useState('all');

  function truncateText(word, length){
    if(word.length <= length) {
      return word
    }
    return `${word.slice(0, length)} \u2026`
  }

  function handleChangeFilter(e, container) {
    if( container === 'category' ){
      setProjectFilter( prev => e.target.id);
    } else if( container === 'techStack' ) {
      setTechFilter( prev => e.target.id);
    }


    window.scrollTo(0,0)
  }

  useEffect(() => {
    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN
    });

    (async () => {
      let fetchedGithubRepos;
      let filteredGithubRepos;
      try {
        fetchedGithubRepos = (await octokit.request(
          `GET ${repos}`, {}
        )).data;

        switch(true) {
          /* 
            filter all repos with topic own or
            filter repos with topic own and any 
            choosen tech
          */
          case( projectFilter === filterFor.own.compare ):
            filteredGithubRepos = fetchedGithubRepos.filter(
              repo => {
                if(techFilter === filterFor.all.compare) {
                  return repo.topics.includes(
                    filterFor.own.query
                  )
                } else {
                  return repo.topics.includes(
                    filterFor.own.query
                  ) && repo.topics.includes(
                    techFilter
                  )
                }
              }
            );
            setProjects( prev => filteredGithubRepos);
            break;
          /* 
            filter all repos with topic tutorial or
            filter repos with topic tutorial and any 
            choosen tech
          */
          case( projectFilter === filterFor.learn.compare ):
              filteredGithubRepos = fetchedGithubRepos.filter(
                repo => {
                  if(techFilter === filterFor.all.compare){
                    return repo.topics.includes(
                      filterFor.learn.query
                    )
                  } else {
                    return repo.topics.includes(
                      filterFor.learn.query
                    ) && repo.topics.includes(
                      techFilter
                    )
                  }
                }
              );

            setProjects( prev => filteredGithubRepos);
            break;
            /* 
              default stays for project filter === all
              filters all repos with topics own AND tutorial or
              filters repos with topics own and tutorial and the choosen tech 
            */
          default:
            filteredGithubRepos = fetchedGithubRepos.filter(
              repo => {
                if( techFilter === filterFor.all.compare ) {
                  return repo.topics.includes(
                    filterFor.learn.query
                  ) || repo.topics.includes(
                    filterFor.own.query
                  )
                } else {
                  return (
                    (
                      repo.topics.includes(
                      filterFor.learn.query
                      ) && 
                      repo.topics.includes( techFilter )
                    ) || 
                    (
                      repo.topics.includes(
                      filterFor.own.query
                      ) &&
                      repo.topics.includes( techFilter )
                    )
                  )
                }
              }
            );
            setProjects( prev => filteredGithubRepos);
        }
      } catch (error) {
        console.error(error);
      }
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectFilter, techFilter]);

  useEffect(() => {
    setProjectsBtnText(projectCategories[lang]);
    setProjectIds(projectCategories['en']);

    setTechStackBtnText(techCategory[lang]);
    setTechStackIds(techCategory['en']);

    setHeading(
      identifiers[sectionName][lang]
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, projectFilter, techFilter]);


  return (
    <>
      <h2 id={`${sectionName}-${device}-${lang}-heading`}>{heading}</h2>
      {/* project btn */}
      <ButtonContainer 
        array={projectsBtnText}
        idsArray={projectIds}
        sectionName={sectionName}
        device={device}
        container='category'
        handleChangeFilter={ handleChangeFilter }
        projectFilter={projectFilter}
        projectsDiv= {projectsDiv}
      />
      {/* stack btn */}
      <ButtonContainer 
        array={techStackBtnText}
        idsArray={techStackIds}
        sectionName={sectionName}
        device={device}
        container='techStack'
        handleChangeFilter={ handleChangeFilter }
        techFilter={techFilter}
        projectsDiv={projectsDiv}
      />
      {/* content */}
      <div id={`${sectionName}-${device}-container`} ref={projectsDiv}>
        {
          (projects.length > 0) ?
          projects.map( (project) => (
            <Figure
              key={ project.name }
              project={ project }
              sectionName={ sectionName }
              device= { device }
              truncateText= { truncateText }
            />
          )) :
          <p id='empty-projects'>{ noProjects[lang] }</p>
        }
      </div>

    </>
  );
}
 
export default Projects;