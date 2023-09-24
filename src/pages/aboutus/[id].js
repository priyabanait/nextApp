import React from 'react'
import { useRouter } from 'next/router'
export default function f() {
  const r=useRouter();
  const id=r.query.id;
  let content;
  if (id === '1') {
    content = 'Yash Senior Developer';
  } else if (id === '2') {
    content = 'Vaibhav Backend Developer';
  } else {
    content = 'Developer doesn\'t exist';
  }

  return (
    <div>
      <p>{content}</p>
    </div>
  )
}
