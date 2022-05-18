import { useState } from "react";
import './nav.css'

function Nav() {
    const [view, setView] = useState(false);
    const [nav, setNav] = useState([
        {title:'about', route:'#about'},
        {title:'projects', route:'#projects'},
    ])

    const changeView = () => {
        if(view) {
            setView(false);
        } else {
            setView(true);
        }
    }

    return(
        <>
            <span id='nav'>
                 <img src="https://img.icons8.com/android/24/ffffff/menu.png" onClick={changeView}/>
                {view ? nav.map(item => {
                    return(<p><a href={item.route}>↦ {item.title}</a></p>)
                }) : null }
            </span>
        </>
    )
}

export default Nav;