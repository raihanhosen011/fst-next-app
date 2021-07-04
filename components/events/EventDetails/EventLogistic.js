import classes from './EventDetail.module.css' 

export default function EventLogistic({tittle}) {
    return (
      <>
        <div className={classes.event_logistic} >
          <h3>{tittle}</h3>
        </div>
      </>
    );
}