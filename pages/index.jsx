import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

export async function getStaticProps() {  // prerendered, executed during the build process, never going to end up on the client side
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://gerasim:FnjEoeOLUfB8sNOG@cluster0.twemwgd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");
  const meetups = await meetupsCollections.find().toArray();
  client.close();
  return {
    props: {
      // these are the props that the HomePage accepts
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta 
          name="description"
          content="Browse a huge list of active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>  
  )
}
