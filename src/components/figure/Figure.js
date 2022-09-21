// hooks
import { useRef } from 'react';

// icons
import { TbWorld } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

// portfolio data
import portfolio from '../../data/portfolioData';

const Figure = ({ project:p, sectionName, device, truncateText }) => {
  const figureContainer = useRef();

  const { specialCaseProjectsObj } = portfolio;
  const splittedFullname = p.full_name.split("/");
  const [username, project] = splittedFullname;
  const heading = truncateText(p.name.split('-').join(' ').toLowerCase(), 25);
  const description = truncateText(p.description, 70);

  function addMousePositionToCss(e) {
      e.stopPropagation();
      const rect = figureContainer.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      figureContainer.current.style = `--mouse-x:${x / figureContainer.current.offsetWidth }; --mouse-y: ${y / figureContainer.current.offsetHeight};`
  }


  return (
    <div  className={`figure-${device}-container`}
      onMouseMove={ addMousePositionToCss }
      onMouseLeave={ e => figureContainer.current.style = '' }
      ref={figureContainer}
    >
      <figure
        className={ `${sectionName}-${device}-figure figure-hover` }
      >
        <img 
          src={`https://raw.githubusercontent.com/${username}/${project}/main/${project}.png`}
          alt={project}
          className={`${sectionName}-${device}-figure-img`}
        />
        
        <figcaption
          className={`${sectionName}-${device}-figure-text`}
        >
          <h3>{heading}</h3>
          <p>{description}</p>
          <div
            className={`${sectionName}-figure-btn-container`}
          >
            <a 
              href={p.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a 
              href={
                specialCaseProjectsObj.hasOwnProperty(project) ?
                specialCaseProjectsObj[project] : 
                `https://${username.toLowerCase()}.github.io/${project}`
              }
              target='_blank'
              rel='noopener noreferrer'
            >
              <TbWorld />
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}
 
export default Figure;