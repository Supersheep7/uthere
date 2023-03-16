import Head from 'next/head';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Supersheep';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }: any) {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <HeaderHome />
          </>
        ) : (
          <>
            <HeaderGeneric />
          </>
        )}
      </header>
      {children}
      <aside>
        <AsideMenu />
      </aside>
    </div>
  );
}

function HeaderHome(): any {
  return (
  <div className="flex">
    <div>
      <h1>/Logo/</h1>
    </div>
    <div>
      <h1>uThere?</h1>
    </div>
    <div>
      <nav>
        <ul>
          <li>Search Friends</li>
          <li>Profile</li>
          <li>Create</li>
          <li>Meet (Filters)</li>
          <li>Hamburger</li>
        </ul>
      </nav>
    </div>
  </div>
  )
}

function HeaderGeneric(): any {
  return (
    <div className="flex">
      <div>
        <h1>/Logo/</h1>
      </div>
      <div>
        <h1>uThere?</h1>
      </div>
      <div>
        <nav > 
          <ul className="flex-center">
            <li>Search Friends</li>
            <li>Profile</li>
            <li>Create</li>
            <li>Meet (Filters)</li>
            <li>Hamburger</li>
          </ul>
        </nav>
      </div>
  </div>
  )
}

function AsideMenu(): any {
  return (
    <div>
      <div id="dropdown-menus">
        <div id="menu1">
          <div>
            <h1>Menu header</h1>
          </div>
          <div>
            <p>Menu content (on/off)</p>
          </div>
        </div>
        <div id="menu2">
        <div>
            <h1>Menu header</h1>
          </div>
          <div>
            <p>Menu content (on/off)</p>
          </div>
        </div>
        <div id="menu3">
        <div>
            <h1>Menu header</h1>
          </div>
          <div>
            <p>Menu content (on/off)</p>
          </div>
        </div>
        <div id="menu4">
        <div>
            <h1>Menu header</h1>
          </div>
          <div>
            <p>Menu content (on/off)</p>
          </div>
        </div>
        <div id="menu5">
        <div>
            <h1>Menu header</h1>
          </div>
          <div>
            <p>Menu content (on/off)</p>
          </div>
        </div>
      </div>
    </div>
  )
}