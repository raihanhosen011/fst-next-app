import { getAllEvent } from "../../dummy-data";
import EventList from "../../components/events/Event-list";

export default function Index() {
  const allEvent = getAllEvent();

  return (
    <>
      <div className="event">
        <EventList items={allEvent} />
      </div>
    </>
  );
}
