// icons
import { TbWorld } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

// portfolio data
import portfolio from '../../data/portfolioData';

const Figure = ({ project:p, sectionName, device, truncateText }) => {

  const { specialCaseProjectsObj } = portfolio;
  const splittedFullname = p.full_name.split("/");
  const [username, project] = splittedFullname;
  const heading = p.name.split('-').join(' ').toLowerCase();
  const description = truncateText(p.description, 100);

  return (
    <figure
      className={ `${sectionName}-${device}-figure` }
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
  )
}
 
export default Figure;