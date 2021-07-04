import { useRouter } from 'next/router'
import { getEventData } from '../../dummy-data'
import EventSummery from '../../components/events/EventDetails/EventSummery'
import EventContent from '../../components/events/EventDetails/EventContent'
import EventLogistic from '../../components/events/EventDetails/EventLogistic'

export default function EventId() {
  const router = useRouter()

  const id = router.query.eventid
  const EventData = getEventData(id)

  return (
    <>
      <div className="eventid">
        <EventLogistic tittle={EventData?.tittle} />
        <EventContent
          image={EventData?.image} 
          date={EventData?.date}
          location={EventData?.location}
          imgAlt={EventData?.tittle}
        /> 
         <EventSummery>
          <p>{EventData?.description}</p>
        </EventSummery>
      </div>
    </>
  );
}
