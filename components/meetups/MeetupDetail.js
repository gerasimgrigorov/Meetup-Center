import classes from './MeetupDetail.module.css'

export default function MeetupDetail(props){
  return (
    <main className={classes.main}>
      <h1>Details page</h1>
      <h3>{props.title}</h3>
      <img src={props.image} className={classes.image} alt="" />
      <p>{props.description}</p>
      <address>{props.address}</address>
    </main>
  )
}