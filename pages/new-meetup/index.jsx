import NewMeetupForm from "../../components/meetups/NewMeetupForm"

export default function NewMeetup(){
  function addMeetupHandler(data){
    console.log(data)
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}