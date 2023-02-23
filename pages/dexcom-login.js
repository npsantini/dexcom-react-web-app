import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const client_id = process.env.CLIENT_ID;
// const client_secret = process.env.CLIENT_SECRET;

const loginUrl = "https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=" + client_id + "&redirect_uri=https://dexcom-react-web-app.herokuapp.com/login-success&response_type=code&scope=offline_access&state=test";


export default function Login() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Dexcom Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <h1 className={styles.title}>
            Dexcom Login
          </h1>
  
          <p className={styles.description}>
            Get started by logging in.
            <br/>
            <a href={loginUrl}>Log in</a>
            <br/>
            <Link href="/">Home Page</Link>
          </p>
        </main>
  
        <footer>
            <p>Dexcom React.js and Next.js app.</p>
        </footer>
  
        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
  
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
  }