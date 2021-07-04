import Button from "../../ui/Button/Button";
import clases from "./Events.module.css";
import {useRef} from 'react'

export default function Event_search({onSearch}) {
  const year  = useRef()
  const month  = useRef()

  const handleSubmit = (e) => {
    const monthVal = month.current.value
    const yearVal = year.current.value

    onSearch(monthVal,yearVal)

  }

  return (
    <>
      <div className={clases.event_search} >
        <form className={clases.form} >
          <div className="year">
            <label>Year</label>
            <select ref={year} >
              <option value="2021" >2021</option>
              <option value="2020" >2020</option>
            </select>
          </div>
          <div className="month">
            <label>Month</label>
            <select ref={month} >
              <option value="1" >january</option>
              <option value="2" >February</option>
              <option value="3" >March</option>
              <option value="4" >April</option>
              <option value="5" >May</option>
              <option value="6" >Jun</option>
              <option value="7" >July</option>
              <option value="8" >Augast</option>
              <option value="9" >September</option>
              <option value="10" >Octobor</option>
              <option value="11" >November</option>
              <option value="12" >December</option>
            </select>
          </div>
        </form>
        <Button Click={() => handleSubmit()} >Find events</Button>
      </div>
    </>
  );
}
