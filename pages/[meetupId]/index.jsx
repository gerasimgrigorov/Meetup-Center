import MeetupDetail from "../../components/meetups/MeetupDetail";

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
