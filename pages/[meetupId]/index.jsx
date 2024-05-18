import MeetupDetail from "../../components/meetups/MeetupDetail";

export async function getStaticPaths() {
  // used when implementing getStaticProps in a dynamic page
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data from an API

  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: "m1",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        title: "First Meetup",
        address: "Somewhere around Germany",
        description: "This is our first meetup",
      },
    },
  };
}

export default function DetailPage() {
  return (
    <>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
        title="First Meetup"
        address="Somewhere around Germany"
        description="This is our first meetup"
      />
    </>
  );
}
