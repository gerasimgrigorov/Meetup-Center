import MeetupList from "../components/meetups/MeetupList"

export const MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    address: 'Somewhere around Germany',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    description: 'This is our first meetup' 
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    address: 'Somewhere around Spain',
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/8c/37/29/photo1jpg.jpg?w=1200&h=-1&s=1",
    description: 'This is our second meetup' 
  }
]

export async function getStaticProps(){ // prerendered, executed during the build process, never going to end up on the client side
  // fetch data from an API  
  return {
    props: { // these are the props that the HomePage accepts
      meetups: MEETUPS
    },
    revalidate: 10
  }
}

export default function HomePage(props){
  return <MeetupList meetups={props.meetups}/>
}
