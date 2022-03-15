import '../Styles/menu.scss'
import {ReactComponent as Home} from '../img/home.svg'
import {ReactComponent as Inbox} from "../img/inbox.svg"
import {ReactComponent as Explore} from "../img/explore.svg"
import {ReactComponent as Notification} from "../img/notifications.svg"

function Menu(){
    return (
    <div className="menu">
        <Home className="icon"/>
        <Inbox className="icon"/>
        <Explore className="icon"/>
        <Notification className="icon"/>
        
    </div>
    )
}

export default Menu;