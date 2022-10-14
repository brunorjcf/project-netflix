import React from 'react'

import Link from 'next/link'
function HomePage() {
    return (
        <div>
            <h2>bem-vindo ao meu website!</h2>
             Navegar para <Link href="/sobre">
                                <a>Sobre</a>
                          </Link>
        </div>
    );
     
  }
  
  export default HomePage