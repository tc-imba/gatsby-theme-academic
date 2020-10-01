module.exports = {
  pathPrefix: '',
  siteUrl: 'https://rolwinreevan.com',
  siteTitle: 'Yihao Liu',
  siteDescription: 'Logbook of a software developer',
  author: 'Yihao Liu',
  introduction: [
    'My name is Yihao Liu, ...',
    'My interests are in ...',
  ],
  avatar: 'avatar.png',
  professions: [
    'Ph.D Student',
    'Full Stack Developer',
  ],
  birthday: 'June 15, 1997',
  location: 'Singapore',
  email: 'liuyh970615@gmail.com',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
    publications: 'publications',
  },
  social: {
    github: 'https://github.com/rolwin100',
    facebook: 'https://www.facebook.com/rolwin.monteiro',
    twitter: 'https://twitter.com/rolwin100',
    instagram: 'https://www.instagram.com/reevan100/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  experience: [{
    date: 'Jan 2020 - Present',
    icon: 'book',
    title: 'Ph.D in Computer Science',
    location: 'Nanyang Technological University, Singapore',
  }, {
    date: 'Sept 2015 - Aug 2019',
    icon: 'book',
    title: 'B.S.E. in Electrical and Computer Engineering',
    location: 'Shanghai Jiao Tong University, China',
  }, {
    date: 'Sept 2008 - June 2015',
    icon: 'book',
    title: 'Middle School',
    location: 'Shanghai Southwest Weiyu Middle School, China',
  }, {
    date: 'June 1997',
    title: 'Born',
    location: 'Shanghai, China',
  }],
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },

  },
};
