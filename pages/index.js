import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Cities from '../components/cities'
import When from '../components/when'

import { getTimeZones } from "@vvo/tzdb";
import { DateTime } from "luxon";

export async function getServerSideProps() {
  const utcDate = new Date(Date.now());
  const timeZones = getTimeZones();
  const fiveOClockZones = timeZones.filter(
    tz => DateTime.fromJSDate(utcDate, {zone: tz.name}).hour == 17  
  );
  return {
    props : {
      zones : fiveOClockZones,
    }
  }
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>It&apos;s Five O&apos;Clock Where?</title>
        <meta name="description" content="A list of places where it's currently 5 o'clock." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          It&apos;s Five O&apos;Clock Where?
        </h1>
          {props.zones.map((zone, index) => {
            return <div key={index} className={styles.card}>It&apos;s <When name={zone.name} /> on {zone.alternativeName} in <Cities cities={zone.mainCities} /> in {zone.countryName}</div>
          })}
      </main>

      <footer className={styles.footer}>
        <p>Built using <a href="https://nextjs.org">next.js</a> with the help of <a href="https://www.npmjs.com/package/@vvo/tzdb">@vvo/tzdb</a>, <a href="https://moment.github.io/luxon/#/">luxon</a> and the <a href="https://www.iana.org/time-zones">Time Zone Database</a>. Hosted on <a href="https://vercel.com">Vercel</a>. <a href="https://github.com/mcroydon/five-oclock-where">MIT Licensed</a>.</p>
      </footer>
    </div>
  )
}
