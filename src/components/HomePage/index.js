import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import Header from '../HeaderPage'

import './index.css'


const Home = () => {

  // const ChangeToHome = Token => {
  //   Cookies.set('jwt_token', Token, {expires: 30})
  // }

  // const SubmitDetailsOfUser = async () => {
  //   username='rahul'
  //   password='rahul@2021'
  //   const Url = 'https://apis.ccbp.in/login'z
  //   const sendingDetails = {username, password}
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(sendingDetails),
  //   }
  
  //   const fetching = await fetch(Url, options)
  //   const waitingForData = await fetching.json()
  //   console.log(fetching.ok)
  //   console.log(waitingForData)
  //   console.log(waitingForData.jwt_token)
  //   if (fetching.ok) {
  //     this.ChangeToHome(waitingForData.jwt_token)
  //   }
  // }

  // SubmitDetailsOfUser()
  // const JwtToken = Cookies.get('jwt_token')
  return (
    // <div className="bgHomePage">
      <>
      <Header />
      {/* if (JwtToken === undefined) {
    return <Redirect to="/login" />
  } */}
      <div className="HeadingPosition">
        <div className="main-container">
          <h1 className="banner-heading">Find The Job That Fits Your Life</h1>
          <p className='banner-text'>
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <div>
            <Link to="/jobs">
              <button className="find-job-btn" type="button">
                Find Jobs
              </button>
            </Link>
          </div>
        </div>
      </div>
      </>
    // </div>
  )
}

export default Home
