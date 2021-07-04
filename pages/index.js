import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import EventList from "../components/events/Event-list";
// import { getFeaturedEvent } from "../dummy-data";
import Search from "../components/events/Event-search";
import Head from 'next/head'

export const getStaticProps = async () => {
  const resp = await fetch("https://nextjs-5b0ec-default-rtdb.firebaseio.com/events.json");
  const data = await resp.json();

  return {
    props: {
      hello: data,
    },
    revalidate : 60
  };
};

export default function Home({ hello }) {
  // const featureEvent = getFeaturedEvent();
  const router = useRouter();
  const eve = []

  function handleSearch(year, month) {
    const fullPath = `/events/${year}/${month}/abc`;

    router.push(fullPath);
  }
  
  for(const key in hello)eve.push(hello[key])
  const featureEvent = eve.filter(ev => ev.isFeatured)

  return (
    <>
    <Head>
      <title>Next-app :: Home page</title>
    </Head>
    <div>
      <Search onSearch={handleSearch} />
      {<EventList items={featureEvent} />}
    </div>    
    </>

  );
}
