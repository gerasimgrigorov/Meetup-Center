import { useRouter } from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import Head from "next/head"

export default function NewMeetup(){
  const router = useRouter()

  async function addMeetupHandler(data){
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    const result = await response.json()
    console.log(result)
    router.push('/')
  }


  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta 
          name="description"
          content="Add yuor own meetup"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </>
  )
}