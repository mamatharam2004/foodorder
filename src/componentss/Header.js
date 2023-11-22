import React from 'react'
import './header.css'
const Header = () => {

    function click(name){
        console.log(name);
    }
    return(

        <div>
            <button onClick={() => click('guru')}>click me</button>
        </div>
    )
}

export default Header