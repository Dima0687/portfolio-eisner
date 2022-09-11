import { useEffect, useState } from "react";

const ButtonContainer = ({ 
  array, 
  idsArray, 
  sectionName, 
  device,
  container,
  handleChangeFilter,
  projectFilter,
  techFilter,
  projectsDiv
}) => {
 
  const [visited, setVisited] = useState(false);
  
  function handleSetFocus(id){
    if(id.toLowerCase() === 'all' && !visited){
      return 'focus';
    }

    if(id.toLowerCase() === projectFilter && visited){
      return 'focus';
    }

    if(id.toLowerCase() === techFilter && visited) {
      return 'focus';
    }
    
    projectsDiv.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    return ''
  }
  useEffect(() => {
    setVisited(true)
  }, []);

  return (
    <div className={`${sectionName}-${device}-btn-container`}>
        {
          array.map( (btnTxt, i) => {
            const _id = idsArray[i].split(' ').join('-').toLowerCase();
            return <button
              key={ btnTxt }
              id={ _id }
              className={`${sectionName}-${device}-buttons ${
                handleSetFocus(_id)
              }`}
              onClick={ e => handleChangeFilter(e, container)}
            >
              {btnTxt}
            </button>
          })
        }
      </div>
  );
}
 
export default ButtonContainer;