import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap"

import SideBar from "./component/sidebar/SideBar.component";
import Navigation from "./component/navigation/Navigation.component";
import Home from "./route/home/Home.component";
import LogIn from "./route/log-in/LogIn.component";

import { selectAccessToken } from "./store/user/user.selector";

import "./_app.scss"
import WatchScreen from "./route/watch-screen/WatchScreen.component";
import Search from "./route/search/Search.component";
import Subscriptions from "./route/subscriptions/Subscriptions.component";
import Channel from "./route/channel/Channel.component";
import { checkUserSession } from "./store/user/user.action";


const Layout = ({ children }) => {

  const [sidebar, toggleSidebar] = useState(false)

  const handleTogglerSidebar = () => toggleSidebar(value => !value)

  return (
    <>
      <Navigation handleTogglerSidebar={handleTogglerSidebar} />
      <div className="app__container">
        <SideBar sidebar={sidebar} handleTogglerSidebar={handleTogglerSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  )
}

function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const accessToken = useSelector(selectAccessToken)

  useEffect(()=>{
    dispatch(checkUserSession())
  },[])

  useEffect(() => {
    if (!accessToken)
      navigate("/log-in")
  }, [navigate, accessToken])


  return (

    <Routes>

      <Route path='/' exact element={<>
        <Layout>
          <Home />
        </Layout>
      </>} />

      <Route path='search/:query' element={<>
        <Layout>
          <Search />
        </Layout>
      </>} />

      <Route path='watch/:id' element={<>
        <Layout>
          <WatchScreen />
        </Layout>
      </>} />

      <Route path='feed/subscriptions' element={<>
        <Layout>
          <Subscriptions />
        </Layout>
      </>} />

      <Route path='channel/:channelId' element={<>
        <Layout>
          <Channel />
        </Layout>
      </>} />


      <Route path="/log-in" element={<LogIn />} />

    </Routes>


  );
}

export default App;
