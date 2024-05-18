import Head from "next/head"
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

export async function getStaticPaths() {
  // used when implementing getStaticProps in a dynamic page
  const client = await MongoClient.connect(
    "mongodb+srv://gerasim:FnjEoeOLUfB8sNOG@cluster0.twemwgd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

  client.close()

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data from an API
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://gerasim:FnjEoeOLUfB8sNOG@cluster0.twemwgd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");

  const selectedMeetup = await meetupsCollections.findOne({ _id: new ObjectId(meetupId) })

  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      },
    },
  };
}

export default function DetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta 
          name="description"
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}
