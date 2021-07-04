import Link from 'next/link'
import classes from './Layout.module.css'

export default function Header() {
  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.logo} >
          <Link href="/" > EventsProp </Link>
        </h3>
        <nav className={classes.nav} >
          <h3><Link href='/events' >All Events</Link></h3>
        </nav>
      </div>
    </>
  );
}
