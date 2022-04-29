import React from 'react';
import Link from 'next/link';


export default function Navbar() {
  return (
    <div>
              <h1>Navbar</h1>
              <Link href="/login"><a>Login</a></Link>
              <br/>
              <Link href="/"><a>home</a></Link>
    </div>
  )
}
