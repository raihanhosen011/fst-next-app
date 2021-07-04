import Link from "next/Link";
import calses from './Button.module.css'

export default function Button({link,children,Click}) {
  if (link) {
      return (
    <>
      <Link href={link} >
        <a className={calses.button} >{children}</a>
      </Link>
    </>
  )
  }
  return <button onClick={Click} >{children}</button>

}
