import React from 'react'
import 'animate.css';

export default function Welcome() {
    setTimeout(() => {
        const element = document.getElementById('pulse');
        element.classList.add("animate__animated", "animate__heartBeat");
    }

        , 1000, [])
    return (
        <div style={{ justifyContent: 'center', margin: 'auto', height: '' }} className='animate__animated animate__backInUp'>
            <br /><br />
            <h1 style={{ height: "100%", justifyContent: 'center', margin: 'auto', fontSize: "150px", display: 'flex', paddingTop: '50px' }}>WELCOME</h1>
            <br /><br /><br />
            <div >
                <h1 style={{ justifyContent: 'center', margin: 'auto', fontSize: "100px", display: 'flex', paddingBottom: '50px' }}>TO </h1>
                <h1 style={{ justifyContent: 'center', margin: 'auto', fontSize: "150px", display: 'flex', paddingBottom: '50px', color: "blue" }} id='pulse'>PRODUCT </h1>

            </div>

        </div>
    )
}
