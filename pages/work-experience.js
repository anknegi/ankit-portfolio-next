import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layouts.js";

export default function WorkExperience() {
  return (
    <Layout>
      <Head>
        <title>My work experience</title>
      </Head>
      <h1>My work experience</h1>
      <h2>Tata consultancy Services</h2>
      <p>Dec 2021 - Present | Assistant Consultant</p>
      <h3>Roles and Responsibility</h3>
      <p>
        <ul>
          <li>Developing user-facing applications using Vue3 and react </li>
          <li>Building modular and reusable components and libraries </li>
          <li>
            Designing & writing quality, scalable & robust code with security
            and performance in mind
          </li>
          <li>
            Staying up to date with new trends and best practices in the
            JavaScript,React and Vue space
          </li>
          <li>
            Working effectively as part of a team on major software releases
          </li>
          <li>
            Working in an agile development environment with daily stand-up
            meetings
          </li>
          <li>
            Delivering quality software on time ensuring all deliverables are
            met as per plans and specifications
          </li>
        </ul>
      </p>
      <h2>Mindtree ltd</h2>
      <p>Aug 2020 - Nov 2021 | Module Lead</p>
      <h3>Roles and Responsibility</h3>
      <p>
        <ul>
          <li>
            Responsible for leading team of software developers for timely
            deliverance of module assigned.
          </li>
          <li>
            Responsible for Designing architecture and implementation of major
            complex module functionality part assigned.
          </li>
          <li>
            Integration of module parts and testing of integrated module
            functionality.
          </li>
          <li>
            Involved in web application development based on Yii2 PHP framework
            and VueJS stack.
          </li>
          <li>Worked in modules developed in react framework and node js.</li>
          <li>
            Worked on design and development of Database schemas and
            relationships between tables.
          </li>
          <li>
            Client interaction by weekly client call meeting for project demo
            and challenges.
          </li>
        </ul>
      </p>
      <h2>Infostride Technologies</h2>
      <p>June 2019 - Aug 2020 | Senior Software Engineer</p>
      <h3>Roles and Responsibility</h3>
      <p>
        <ul>
          <li>
            Independently working on web application development based on
            Laravel, Code ignitor, Drupal and VueJS stack.
          </li>
          <li>
            Worked on design and development of Database schemas and
            relationships between tables.
          </li>
          <li>
            Unit testing of each module created before it's given to QA analyst
          </li>
          <li>
            Client interaction by weekly client call meeting for project demo
            and challenges.
          </li>
        </ul>
      </p>
      <h2>Rubico Tech</h2>
      <p>Oct 2017 - May 2019 | Software Engineer</p>
      <h3>Roles and Responsibility</h3>
      <p>
        <ul>
          <li>
            Worked on Customisation and development of Drupal Based portals.
          </li>
          <li>
            Worked on Migration and development of Magento Based Ecommerce
            platforms.
          </li>
          <li>
            Worked on full stack web development based on Vue,React and PHP
            Laravel, Node as backend for API's creation.
          </li>
          <li>
            Client interaction by weekly client call meeting for project demo
            and challenges.
          </li>
        </ul>
      </p>
      <h2>Sankalptaru Foundation</h2>
      <p>Jun 2016 - May 2017 | Technical Architect</p>
      <h3>Roles and Responsibility</h3>
      <p>
        <ul>
          <li>
            Administration and Manintainence of Drupal based online ecommerce
            site.
          </li>
          <li>
            Development of new functionality as per client requirement using
            custom module development
          </li>
          <li>
            Adding responsive UI to the existing portal by developing subtheme
            for portal
          </li>
        </ul>
      </p>
      <h2>Cetpa Infotech</h2>
      <p>Jan 2014 - May 2016 | Web Developer</p>
      <h3>Roles and Responsibility</h3>
      <p>
        <ul>
          <li>
            Worked on development of organization web portal from scratch in
            Core PHP and its CMS.
          </li>
          <li>
            Played instructor role in corporate training in big MNC's on behalf
            of organization in latest technology stacks of PHP and ES6.
          </li>
          <li>
            Given seminars and workshop on open source technologies in India's
            biggest engineering colleges.
          </li>
        </ul>
      </p>
      <Link href="/project-experience">
        <a>Project Experience →</a>
      </Link>
    </Layout>
  );
}
