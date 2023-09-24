import React from 'react'
import Link from 'next/link'

export default function about() {
  return (
    <div>
    <ul>
      <li>
        <Link href='/aboutus/1'>Yash</Link>
      </li>
      <li>
        <Link href='/aboutus/2'>Vaibhav</Link>
      </li>
      <li>
        <Link href='/aboutus/3'>Suresh</Link>
      </li>
    </ul>
  </div>
  )
}
