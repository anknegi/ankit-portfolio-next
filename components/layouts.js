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
          content="This is the portfolio site of Ankit Negi who is a full stack developer based in India. This portfolio site  gives introduction about him and his skills."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
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
