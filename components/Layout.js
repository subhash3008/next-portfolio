import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

const Layout = ({ children, title }) => {

  const router = useRouter();

  useEffect(() => {
    const nProgressStart = url => {
      console.log(`Loading : ${url}`);
      NProgress.start();
    }
    const nProgressDone = () => {
      NProgress.done();
    }

    router.events.on('routeChangeStart', nProgressStart);
    router.events.on('routeChangeComplete', nProgressDone);
    router.events.on('routeChangeError', nProgressDone);

    return () => {
      router.events.off('routeChangeStart', nProgressStart);
      router.events.off('routeChangeComplete', nProgressDone);
      router.events.off('routeChangeError', nProgressDone);
    }
  }, [router]);

  return (
    <div className="root">
      <Head>
        <title>Portfolio</title>
      </Head>
      <header>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/hireme"><a>Hire me</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
      </header>

      <h1>{title}</h1>

      {children}

      <footer>
        &copy; {new Date().getFullYear()}
      </footer>

      <style jsx>{`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        header {
          width: 100%;
          display: flex;
          justify-content: space-around;
          padding: 1rem;
          font-size: 1.2rem;
          background: indigo;
        }
        header a {
          color: darkgrey;
          text-decoration: none;
        }
        header a:hover {
          font-weight: bold;
          color: lightgrey;
        }
        p {
          font-size: 2rem;
        }
        footer {
          padding: 1rem;
        }
      `}</style>
      <style global jsx>{`
        body {
          margin: 0;
          font-size: 16px;
          background: #f0f0f0;

        }
      `}</style>

    </div>
  );
}

export default Layout;