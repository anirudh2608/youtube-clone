import { useDispatch } from 'react-redux'
import { logOutStart } from '../../store/user/user.action'
import { Link } from 'react-router-dom'

import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
} from 'react-icons/md'

import "./_sidebar.scss"



const SideBar = ({ sidebar, handleTogglerSidebar }) => {

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(logOutStart())
    }


    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"}
            onClick={() => handleTogglerSidebar(false)}>

            <Link to="/">
                <li>
                    <MdHome size={23} />
                    <span>Home</span>
                </li>
            </Link>

            <Link to="/">
            {/* <Link to="/feed/subscriptions"> */}
                <li >
                    <MdSubscriptions size={23} />
                    <span>Subscriptions</span>
                </li>
            </Link>

            <li>
                <MdThumbUp size={23} />
                <span>Liked</span>
            </li>

            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>

            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>

            <li>
                <MdSentimentDissatisfied size={23} />
                <span>I don't know</span>
            </li>
            <hr />

            <li onClick={logOut}>
                <MdExitToApp size={23} />
                <span>Log Out</span>
            </li>
            <hr />

        </nav>
    )
}

export default SideBar