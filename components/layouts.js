import Head from "next/head";
import Image from "next/image";
import styles from "../components/layouts.module.scss";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

const name = "Ankit Negi";
export const siteTitle = "Welcome to my portfolio site";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hi, Welcome to my portfolio site. In this, I will share my blogs, my work experience, my skills with world and later in future I will add my video tutorials that will exclusively available only here for free always."
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <div className={styles.second_header}>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={250}
              width={400}
              alt={name}
            />
            <h1 className={utilStyles.headingXl}>Hi, Namaste!!</h1>
          </div>
        ) : (
          <div className={styles.second_header}>
            <div className={styles.second_header__left}>
              <span>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </span>
              <span className={styles.second_header__left_designation}>
                Full stack developer
              </span>
              <span className={styles.second_header__left_skills}>
                React | Vue | Node | PHP
              </span>
            </div>
            <div className={styles.second_header__right}>
              <span className={styles.second_header__right_link}>
                <a href="mailto:ankitnegi.developer@gmail.com" target="__new">
                  ankitnegi.developer@gmail.com
                </a>
              </span>
              <span className={styles.second_header__right_link}>
                <a href="https://www.linkedin.com/in/anknegi" target="__new">
                  www.linkedin.com/in/anknegi
                </a>
              </span>
              <span className={styles.second_header__right_link}>
                <a href="https://www.github.com/anknegi" target="__new">
                  www.github.com/anknegi
                </a>
              </span>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
