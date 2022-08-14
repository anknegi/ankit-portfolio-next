import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layouts.js";

export default function WorkExperience() {
  return (
    <Layout>
      <Head>
        <title>My Project experience</title>
      </Head>
      <h1>My project experience</h1>
      <h2>TCS Client's Project</h2>
      <p>
        Worked on three internal product with one of the prestigious client of
        TCS. First product needs migration of existing system from Vue2 to Vue3,
        another one need migration from Angular JS to Vue3. Third one I added
        Unit tests for all vue based components and fixed issues reported by
        testing team.
        <h3>Technologies worked on</h3>
        <ul>
          <li>HTML5/CSS3/ES6</li>
          <li>Client internal SASS Kit tool</li>
          <li>Vue 2/Vue3</li>
          <li>Type Script</li>
          <li>AWS</li>
          <li>Git</li>
          <li>Radar 8</li>
          <li>Angular JS</li>
        </ul>
      </p>
      <h2>Mindtree Client's Project</h2>
      <p>
        Worked on two internal project with one of the biggest client of
        Mindtree from Networking and Telecom Domain. Involved in creating UI in
        Vue and React, parsing of networking data to some meaningful form, API
        creations in Yii and Node's Express Framework.
        <h3>Technologies worked on</h3>
        <ul>
          <li>HTML5/CSS3/ES6</li>
          <li>Yii PHP Framework</li>
          <li>Vue 2</li>
          <li>Node JS</li>
          <li>React JS</li>
          <li>Big Data Hadoop</li>
          <li>Git</li>
        </ul>
      </p>
      <h2>Infostride Client's Project</h2>
      <p>
        Worked on five different project with five different clients of
        Infostride Technologies. Major Project Domain of clients were E-commerce
        and health domain. Independently handled projects from UI Development in
        HTML/CSS, Bootstrap, Vue,React in front end to Laravel, Drupal and Node
        JS in backend.
        <h3>Technologies worked on</h3>
        <ul>
          <li>HTML5/CSS3/ES6</li>
          <li>Laravel PHP Framework</li>
          <li>Vue 2</li>
          <li>Node JS</li>
          <li>React JS</li>
          <li>Mongo DB & MySQL</li>
          <li>Git</li>
        </ul>
      </p>
      <h2>Rubico Client's Project</h2>
      <p>
        Worked on three long term projects. Major Project Domain of clients were
        from health, ecommerce, and product development. Worked on team of three
        to five developers and worked majorly on Vue in front end to Laravel in
        backend.
        <h3>Technologies worked on</h3>
        <ul>
          <li>HTML5/CSS3/ES6</li>
          <li>Laravel PHP Framework</li>
          <li>Vue 2</li>
          <li>Magento 2</li>
          <li>Drupal</li>
          <li>MySQL</li>
          <li>Git</li>
        </ul>
      </p>
      <h2>Sankalptaru Foundation</h2>
      <p>
        Worked on sankalptaru foundation portal and ecommerce site. Responsible
        for enhancement of portal by developing new functioinalities and
        improving existing functionalities.
        <h3>Technologies worked on</h3>
        <ul>
          <li>HTML5/CSS3/ES6</li>
          <li>Drupal 7/8</li>
          <li>MySQL</li>
        </ul>
      </p>
      <Link href="/work-experience">
        <a>← Work Experience</a>
      </Link>
      &nbsp; | &nbsp;
      <Link href="/my-skills">
        <a>Skills details →</a>
      </Link>
    </Layout>
  );
}
