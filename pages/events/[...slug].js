// import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from '../../components/events/Event-list'
import useSWR from 'swr'

export default function (){
  const {data,error} = useSWR('https://nextjs-5b0ec-default-rtdb.firebaseio.com/events.json')
  const datas = []
  const router = useRouter();
  const paths = router.query.slug;
  
  for(let key in data)datas.push(data[key])

  if (paths){
    var year = +paths[1];
    var month = +paths[0];
  }

  if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021) {
    return <p>Invalid filter</p>
  } function getFilteredEvents() {
    let filteredEvents = datas.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents
  }

  const dat = getFilteredEvents()

  return (
    <div>
      <EventList items={dat} />
    </div>
  )
}