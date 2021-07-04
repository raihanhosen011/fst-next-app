import Link from "next/Link";
import clases from "./Events.module.css";
import Button from "../../ui/Button/Button";

export default function EventItem({ tittle, image, date, location, id }) {
  const humanRoadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAddress = location.replace(", ", "/n");
  const exploreLink = `events/${id}`;

  return (
    <>
      <li className={clases.item}>
        <img className={clases.image} src={image} alt={tittle} />
        <div>
          <div className={clases.info}>
            <h2 className={clases.tittle}>{tittle}</h2>
            <div>
              <p className={clases.date}>{date}</p>
            </div>
            <div>
              <p className={clases.address}> {formatedAddress}</p>
            </div>
          </div>
        </div>
        <div className="action">
          <Button link={exploreLink}>Explore Link</Button>
        </div>
      </li>
    </>
  );
}
