import Head from "next/head";
import Layout, { siteTitle } from "../components/layouts";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          My name is Ankit, and I am from Uttarakhand, a very beautiful state in
          northern part of India which is very close to my heart and also to the
          great Himalayas as well.
        </p>
        <p>
          I have around 8+ years of experience in working with open source
          technologies like React, Vue, Node JS and PHP.
        </p>
      </section>
      <Link href="/work-experience">
        <a>Work Experience →</a>
      </Link>{" "}
    </Layout>
  );
}
