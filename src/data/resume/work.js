/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Camping World',
    position: 'Senior Full Stack Developer',
    url: 'https://campingworld.com',
    startDate: '2021-03-01',
    summary: 'Full Stack Engineer for Camping World. Designs modern web applications for their mutiple brands',
    highlights: [
      'Redesigned forms from UI components to API to boost user engagement and lead generation annually.',
      'Converted/modernized legacy app from Jquery and vanilla JS to typescript and Reactjs. Updated PHP/SQL backend to API endpoints with Symfony/Postgresql. Improved load times over 200 percent.',
      'Redesigned existing sites with mobile responsive design principles incorporating Sass, flexbox and CSS grid best practices. Improved SEO rankings and web tracking with GTM and Segment.',
      'Contributed to Github actions and Heroku and Kubernetes config to streamline deployments.',
    ],
  },
  {
    name: 'United States Postal Service',
    position: 'Software Engineer',
    url: 'http://usps.gov',
    startDate: '2017-04-01',
    endDate: '2021-03-01',
    summary: 'Software Engineer for USPS. Designed data-driven single page dashboards that visualized aggregated granular data',
    highlights: [
      'Created SPA’s for external clients using D3js and Datatables to aggregate granular data.',
      'Engineered dashboards with complex filtering to allow internal users to boost productivity in the field.',
      'Refactored legacy codebases to improve user experience by identifying edge case bugs and bottlenecks.',
    ],
  },
  {
    name: 'Time Warner',
    position: 'Software Engineer',
    url: 'https://timewarner.com',
    startDate: '2015-08-01',
    endDate: '2017-05-01',
    summary: 'Software Engineer who designed internal applications for technicians in the field',
    highlights: [
      'Contributed to native and web application UI features with Angular 1.x. Improved client side issues with the API up to 25%.',
      'Updated web app to accommodate responsiveness. Updated accessibility to satisfy the current guidelines.',
    ],
  },
  {
    name: 'Domerson Capital',
    position: 'Junior Front-end Developer',
    url: 'http://enveritas.org',
    startDate: '2015-03-01',
    endDate: '2015-08-01',
    summary: 'Real estate startup in VA. Consulted and contributed to their web portal',
    highlights: [
      'Implemented bootstrap and Jquery to standardize UI of existing site.',
      'Implemented user auth for sign on and profile features.',
    ],
  },
];

export default work;
