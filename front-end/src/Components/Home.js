import React from 'react'
import "./Style/Home.css"
function Home() {
    return (
        <header>
            <div>
                <div className="hero-text">
                    <div>
                        <h1>
                            <strong className="english">PUBLISH ME ASAP!</strong>
                            {/* <strong className="spanish">PUBLICARME ASAP!</strong> */}

                            <a className="english"> All your printing, binding, translation and copy editing needs in
                                one!</a>
                            {/* <a className="spanish">¡Todas sus necesidades de impresión, encuadernación, traducción y edición de copias en
                            una!</a> */}

                        </h1>
                    </div>
                    <a className="btn btn-full" >Certified Women-Owned Small Buisness</a>
                    <a className="btn btn-ghost"> Contact us </a>
                </div>
            </div >
        </header>
    )
}

export default Home
