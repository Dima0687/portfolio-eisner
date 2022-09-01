// icons
import { 
  FaCss3Alt, /* CSS3 */
  FaHtml5, /* HTML5 */
  FaReact, /* React */
  FaNodeJs, /* NodeJs */
  FaSass, /* Sass */
  FaNpm, /* NPM */
  FaGithubSquare, /* GitHub */
  FaBootstrap, /* Bootstrap */
  FaUbuntu, /* Ubuntu */
} from 'react-icons/fa';

import {
  SiMongodb, /* MongoDB */
  SiJavascript, /* JavaScript */
  SiExpress, /* ExpressJs */
} from 'react-icons/si';


const name = 'Dietmar Eisner';

const address = {
  street: 'Hinrich-Wilhelm-Kopf-Straße',
  streetNr: 3,
  zip: 21337,
  city: 'Lüneburg'
}

const contact = {
  tel: +4915150470411,
  telAsString: '(+49)151/504 704 11',
  email: 'eis0687.dietmar@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/dietmar-eisner/',
  github: 'https://github.com/Dima0687',
  facebook: '',
  twitter: '',
  xing: ''
}


const skills = [
  {
    skill: 'CSS3',
    icon: <FaCss3Alt/>
  },
  {
    skill: 'HTML5',
    icon: <FaHtml5/>
  },
  {
    skill: 'JavaScript',
    icon: <SiJavascript/>
  },
  {
    skill: 'NPM',
    icon: <FaNpm/>
  },
  {
    skill: 'NodeJs',
    icon: <FaNodeJs/>
  },
  {
    skill: 'ExpressJs',
    icon: <SiExpress/>
  },
  {
    skill: 'MongoDB',
    icon: <SiMongodb/>
  },
  {
    skill: 'React',
    icon: <FaReact/>
  },
  {
    skill: 'Sass',
    icon: <FaSass/>
  },
  {
    skill: 'GitHub',
    icon: <FaGithubSquare/>
  },
  {
    skill: 'Bootstrap',
    icon: <FaBootstrap/>
  },
  {
    skill: 'Ubuntu',
    icon: <FaUbuntu/>
  },
]

const profile = {
  en:{
    identifiers: [
      "welcome",
      "about",
      "skills",
      "projects",
      "contact"
    ],
    whoAmI: [
      'employee',
      'web developer',
      'collegue'
    ],
    welcomeText: {
      hello: 'HELLO, I\'M',
      name,
      sentencePart1: 'Your new',
      sentencePart2: 'is just a click away!'
    },
    skills,
    address,
    contact
  },
  ger: {
    identifiers: [
      "willkommen",
      "ueber-mich",
      "faehigkeiten",
      "projekte",
      "kontakt"
    ],
    whoAmI: [
      'Mitarbeiter',
      'Web Entwickler',
      'Kollege'
    ],
    welcomeText: {
      hello: 'HALLO, ICH HEIßE',
      name,
      sentencePart1: 'Dein neuer',
      sentencePart2: 'nur einen Klick entfernt!'
    },
    skills,
    address,
    contact
  },
  ru: {
    identifiers: [
    ],
    whoAmI: [
    ],
    welcomeText: {
      hello: 'HALLO, ICH HEIßE',
      name,
      sentencePart1: 'Dein neuer',
      sentencePart2: 'nur einen Klick entfernt!'
    },
    skills,
    address,
    contact
  }
}

export {
  profile
}