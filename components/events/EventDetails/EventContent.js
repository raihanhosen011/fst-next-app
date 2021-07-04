import classes from './EventDetail.module.css' 

export default function EventContent({ image, date, location, imgAlt }) {  
  return (
    <>
      <div className={classes.event_content}>
        <div className={classes.image}>
          <img src={image} alt={imgAlt} />
        </div>
        <div className={classes.info} >
          <div className="info-date">{date}</div>
          <div className="info-add">{location}</div>
        </div>
      </div>
    </>
  );
}
