import { useDispatch, useSelector } from 'react-redux'

import { googleLogInStart } from '../../store/user/user.action'

import './_login.scss'
import { selectAccessToken } from '../../store/user/user.selector'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const accessToken = useSelector(selectAccessToken)

    const startLoginWithGoogle = () => {
        dispatch(googleLogInStart())
    }

    useEffect(() => {
        if (accessToken)
            navigate("/")
    }, [accessToken])

    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="Youtube_logo" />
                <button onClick={startLoginWithGoogle}>Login With Google</button>
                <p>This Project is made by Anirudh</p>
            </div>
        </div>
    )
}

export default LogIn