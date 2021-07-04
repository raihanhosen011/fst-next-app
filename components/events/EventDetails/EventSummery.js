import classes from './EventDetail.module.css' 

export default function EventSummery({children}) {
  return (
    <>
      <div className={classes.event_summery} >{children}</div>
    </>
  )
}