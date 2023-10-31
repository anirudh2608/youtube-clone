import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdApps, MdNotifications } from "react-icons/md"

import { selectCurrentUser } from "../../store/user/user.selector"

import "./_navigation.scss"



const Navigation = ({ handleTogglerSidebar }) => {

    const Navigate = useNavigate()

    const currentUser = useSelector(selectCurrentUser)
    const photoURL = currentUser?.image

    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        Navigate(`/search/${input}`)
    }

    return (
        <div className="header">
            <FaBars
                onClick={() => handleTogglerSidebar()}
                className="header__menu"
                size={26}
            />

            <img
                src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
                alt=""
                className="header__logo"
            />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img
                    src={photoURL}
                    alt="Avater" />
            </div>

        </div>
    )
}

export default Navigation