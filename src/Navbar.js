import React from 'react';
import Link from 'next/link';


export default function Navbar() {
  return (
    <div>
              <Link href="/login"><a>Login</a></Link>
              <br/>
              <Link href="/"><a>home</a></Link>
    </div>
  )
}
