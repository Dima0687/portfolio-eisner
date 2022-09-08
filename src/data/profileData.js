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
const copy = "2022";

const address = {
  street: 'Hinrich-Wilhelm-Kopf-Straße',
  streetNr: 3,
  zip: 21337,
  city: 'Lüneburg'
}

const info = {
  tel: +4915150470411,
  telAsString: '(+49)151/504 704 11',
  email: 'eis0687.dietmar@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/dietmar-eisner/',
  github: 'https://github.com/Dima0687',
  facebook: '',
  twitter: '',
  xing: ''
}

const fontSize = '2.5rem';
const skills = [
  {
    title: 'CSS3',
    icon: <FaCss3Alt
      color='skyblue'
      fontSize={fontSize}
    />
  },
  {
    title: 'HTML5',
    icon: <FaHtml5
      color='orange'
      fontSize={fontSize}
    />
  },
  {
    title: 'JavaScript',
    icon: <SiJavascript
      color='yellow'
      fontSize={fontSize}
    />
  },
  {
    title: 'NPM',
    icon: <FaNpm
      color='red'
      fontSize={fontSize}
    />
  },
  {
    title: 'NodeJs',
    icon: <FaNodeJs
      color='#4ea94b'
      fontSize={fontSize}
    />
  },
  {
    title: 'ExpressJs',
    icon: <SiExpress
      color='black'
      fontSize={fontSize}
    />
  },
  {
    title: 'MongoDB',
    icon: <SiMongodb
      color='#4ea94b'
      fontSize={fontSize}
    />
  },
  {
    title: 'React',
    icon: <FaReact
      color='blue'
      fontSize={fontSize}
    />
  },
  {
    title: 'Sass',
    icon: <FaSass
      color='magenta'
      fontSize={fontSize}
    />
  },
  {
    title: 'GitHub',
    icon: <FaGithubSquare
      color='black'
      fontSize={fontSize}
    />
  },
  {
    title: 'Bootstrap',
    icon: <FaBootstrap
      color='#563d7c'
      fontSize={fontSize}
    />
  },
  {
    title: 'Ubuntu',
    icon: <FaUbuntu
      color='orange'
      fontSize={fontSize}
    />
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
    contact: {
      callToAction: 'I\'d love to hear from you.',
      info
    },
    aboutMe: [
      'I\'m not a designer, but if you give me a design layout. Then I\'m your suitable web developer.',

    'I enjoy bringing your vision of your website to life and making it available to the world',
    
    'As a junior web and software developer I still have a few things to learn, but the cornerstone of a developer anyway is the willingness to evolve and always learn new things. So it\'s fortunate that learning is mostly fun for me.',
    
    'There\'s an wisdom about this, "You get old like a cow and you\'re still learning". And with every project, I get better and better at what I do.',
    
    'Through several difficult phases in my life, I have definitely learned at least one thing. "Live and let live" - this phrase has also become my life motto.',
    
    'I am very keen to live by the golden rule. Then respectful interaction is a piece of cake.',
    
    '"Treat others as you would want to be treated".',
    
    'If I can be of any help, I am always willing to help and share my knowledge.',
    
    'Technology has always fascinated me, not fanatically, but I have always had a certain enthusiasm for technology. I was particularly fond of computers, so it was only natural that I should start what was in this case an apprenticeship as a technical assistant in computer science. But life sometimes plays differently and due to young naivety I didn\'t get a degree in this field. However, this did not dampen my interest in programming and so I continued to find time to occupy myself with programming from time to time',
    
    'My intention to catch up on my high school diploma in order to then study robotics engineering unfortunately failed miserably because after several attempts to attend a night school, the minimum number of students never materialized. Undeterred by this, I looked for alternatives that might be suitable for me and finally, in retrospect, came to the obvious one, namely software developer. August 2022 was then the time, I completed my one-year training at the Digital Career Institute in the remote and am full of anticipation to apply my learned knowledge!'
    ],
    projectCategories: [
      "all",
      "by learning",
      "my own"
    ],
    noProjects: 'No projects at the moment!',
    copy
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
    contact: {
      callToAction: 'Ich freue mich von dir zu hören.',
      info
    },
    aboutMe: [ 
    'Ich bin kein Designer, aber wenn du mir ein Design Layout vorlegst. Dann bin ich dein passender Webentwickler.',

    'Ich habe Spaß daran, deine Vision von deiner Webseite zu realisieren und der Welt zugänglich zu machen.',
    
    'Als Junior Web und Softwareentwickler habe ich noch ein paar Dinge zu lernen, aber der Grundpfeiler eines Entwicklers ist ohnehin die Bereitschaft sich weiterzuentwickeln und stets neues zu lernen. Ein Glück also, dass mir lernen meistens Spaß macht.',
    
    'Es gibt einen passenden Spruch dazu: „Man wird alt wie eine Kuh und lernt immer noch dazu“. Und mit jedem Projekt werde ich besser und besser in dem, was ich tue.',
    
    'Durch mehrere schwierige Phasen in meinem Leben habe ich mindestens eins definitiv dazugelernt. „Leben und leben lassen“ – dieser Satz ist auch zu meinem Lebensmotto geworden.',
    
    'Ich bin sehr darauf bedacht, nach der goldenen Regel zu leben. Dann ist respektvoller Umgang ein Kinderspiel.',
    
    '„Behandle andere, wie auch du behandelt werden willst“.',
    
    'Wenn ich weiterhelfen kann, dann bin ich immer bereit zu helfen und mein Wissen zu teilen.',
    
    'Technik hat mich schon immer fasziniert, jetzt nicht fanatisch, aber eine gewisse Begeisterung von der Technik habe ich immer gehabt. Vor allem Computer hatten es mir angetan, daher lag es nahe, dass ich eine in dem Fall schulische Ausbildung zum technischen Assistenten für Informatik angefangen hatte. Doch das Leben spielt manchmal anders und durch junge Naivität habe ich keinen Abschluss in diesem Bereich erhalten. Das hat meinem Interesse am Programmieren jedoch keinen Abbruch getan und so habe ich auch weiterhin immer wieder mal Zeit gefunden, um mich mit dem Programmieren zu beschäftigen.',
    
    'Meine Absicht mein Abitur nachzuholen, um dann Ingenieur für Robotik zu studieren, ist leider kläglich daran gescheitert, dass nach mehrmaligen Versuchen eine Abendschule zu besuchen nie die Mindestmenge an Schülern zustande gekommen ist. Davon unbeirrt habe ich nach für mich infrage kommenden Alternativen geschaut und bin dann schließlich, im Nachhinein, zu dem offensichtlichen gekommen, nämlich Softwareentwickler. August 2022 war es dann so weit, ich habe meine einjährige Weiterbildung beim Digital Career Institute im Remote abgeschlossen und bin voller Vorfreude mein erlerntes Wissen anzuwenden!'
    ],
    projectCategories: [
      "alle",
      "durchs lernen",
      "eigene"
    ],
    noProjects: 'Noch keine Projekte',
    copy
  },
  ru: {
    identifiers: [
      "добро-пожаловать",
      "обо-мне",
      "навыки",
      "проекты",
      "контакт" 
    ],
    whoAmI: [
      "Сотрудник",
      "веб-разработчик",
      "коллега"
    ],
    welcomeText: {
      hello: 'Привет, меня зовут',
      name,
      sentencePart1: 'Твой новый',
      sentencePart2: 'только один клик!'
    },
    skills,
    address,
    contact: {
      callToAction: 'Я с нетерпением жду ответа от тебя.',
      info
    },
    aboutMe: [
      'Я не дизайнер, но если ты дашь мне дизайн-макет. Тогда я буду твоим подходящим веб-разработчиком.',

      'Мне нравится реализовывать твое видение сайта и делать его доступным для всего мира.',
      
      'Как начинающему веб-разработчику и разработчику программного обеспечения мне еще многому предстоит научиться, но краеугольным камнем разработчика в любом случае является готовность развиваться и всегда узнавать что-то новое". Так что мне повезло, что обучение для меня в основном весело".',

      'На этот счет есть меткое высказывание: "Стареешь, как корова, а все еще учишься". И с каждым проектом я становлюсь все лучше и лучше в своем деле.',

      'Пройдя через несколько трудных этапов своей жизни, я определенно научился по крайней мере одному. "Живи и дай жить" - эта фраза стала и моим жизненным девизом".',

      'Я очень стремлюсь жить по золотому правилу. Тогда уважительное взаимодействие будет детской забавой".',

      '"Относись к другим так, как ты хотел бы, чтобы относились к тебе".',

      'Если я могу быть чем-то полезен, я всегда готов помочь и поделиться своими знаниями.',

      'Технологии всегда увлекали меня, не фанатично, но у меня всегда был определенный энтузиазм к технологиям. Я особенно любил компьютеры, поэтому вполне естественно, что я начал стажировку в качестве технического ассистента по информатике. Но жизнь иногда играет по-другому, и по молодой наивности я не получил образование в этой области. Однако это не ослабило мой интерес к программированию, и поэтому я продолжал находить время, чтобы время от времени заниматься программированием".',

      'Мое стремление получить аттестат зрелости, чтобы затем изучать робототехнику, к сожалению, не удалось, потому что после нескольких попыток посетить вечернюю школу минимальное количество студентов так и не набралось. Не успокоившись, я искал альтернативные варианты, которые могли бы мне подойти, и в конце концов, оглядываясь назад, пришел к очевидному - разработчик программного обеспечения. 2022 августа я завершил годичное обучение в Digital Career Institute в дистанционном формате и с нетерпением жду возможности применить полученные знания!'
    ],
    projectCategories: [
      "все",
      "через обучение",
      "собственные"
    ],
    noProjects: 'Пока нет проектов',
    copy
  }
}

export {
  profile
}