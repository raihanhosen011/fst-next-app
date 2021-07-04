import EventItem from './Event-item'

export default function EventList({items}) {
  return (
    <>
      <ul className="event-list">
         {
           items?.map(item => {
            const {tittle,image,date,location,id} = item
            
            return (
               <EventItem
                 tittle={tittle}
                 image={image}
                 date={date}
                 location={location}
                 id={id}
                 key={id}
               />
             )
           })
         }
      </ul>
    </>
  );
}
