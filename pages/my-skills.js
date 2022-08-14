import Head from "next/head";
import Layout from "../components/layouts.js";
import Link from "next/link";

export default function WorkExperience() {
  return (
    <Layout>
      <Head>
        <title>My skills</title>
      </Head>
      <h2>HTML/CSS</h2>
      <p>
        <ul>
          <li>Creating layouts with CSS Grids and Flexbox</li>
          <li>Creating layouts with Bootstrap</li>
          <li>Creating responsive design by applying media queries.</li>
          <li>Use of SASS/SCSS based toolkit</li>
          <li>Use of Tailwind css</li>
          <li>Well aware with accessibility in website</li>
          <li>Adding SEO focus HTML Design</li>
          <li>Use of Vuetify,Material UI like frameworks</li>
        </ul>
      </p>
      <h2>Javascript/ES6</h2>
      <p>
        <ul>
          <li>Ability to work with new ES6 features.</li>
          <li>
            Understanding of ES6 concepts like
            let,const,hoisting,callbacks,arrow functions.
          </li>
          <li>Understand concepts of bubbling and capturing in Events.</li>
          <li>Understanding of callback functions and callback hells</li>
          <li>
            Understanding of synchronous and asynchronous nature of Javascript.
          </li>
          <li>Understanding of async await and promises.</li>
        </ul>
      </p>
      <h2>Vue 2/3</h2>
      <p>
        <ul>
          <li>Ability to work with both options API and composition API</li>
          <li>Good understanding of lifecycle hooks in both version of Vue.</li>
          <li>
            Ability to apply best practices while developing reusable components
            in Vue.
          </li>
          <li>
            Hands on experience in working with Vuex store in Vue2 and Pinia in
            vue3
          </li>
          <li>
            Ability to create layouts in Vuetify,Quasar and Chakra library in
            Vue2.
          </li>
          <li>
            Ability to integrate third party backend like Firebase DB , Express
            JS API's with frontend using axios and thier sdk's.
          </li>
        </ul>
      </p>
      <h2>React</h2>
      <p>
        <ul>
          <li>Ability to create resusable components in React and Next JS.</li>
          <li>
            Ability to work in both Class based components and functional
            components.
          </li>
          <li>
            Ability to apply best practices while developing reusable
            components.
          </li>
          <li>
            Good understanding of both class and functional based components
            hooks.
          </li>
          <li>Ability to work with state management via Context and Redux.</li>
          <li>
            Ability to integrate third party backend like Firebase DB , Express
            JS API's with frontend using axios and thier sdk's.
          </li>
        </ul>
      </p>
      <h2>Node JS</h2>
      <p>
        <ul>
          <li>Ability to create secure API's using Express Framework.</li>
          <li>Understanding of event driven programing using callbacks.</li>
          <li>Understanding of Event loop and Call stacks</li>
          <li>Understanding of working with file system and streams</li>
          <li>Ability to work in real time programming using socket js</li>
          <li>Ability to work with MongoDB using Mongoose.</li>
        </ul>
      </p>
      <Link href="/project-experience">
        <a>← Project Experience</a>
      </Link>
    </Layout>
  );
}
