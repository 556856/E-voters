import { Row, Col, Card, CardBody, CardText } from 'reactstrap'
import React, { useState, useRef, useEffect } from 'react'
import './timer.css'

const TimerCard = () => {
    const [expiryTime, setExpiryTime] = useState("5 nov 2022 15:30:25")
    const [countdownTime, setCountdownTime] = useState(
        {
            countdownDays:'',
            countdownHours:'',
            countdownlMinutes:'',
            countdownSeconds:''
        }
    )
     const countdownTimer = () => {
     
         const timeInterval = setInterval(() => {
           const countdownDateTime = new Date(expiryTime).getTime()
           const currentTime = new Date().getTime()
           const remainingDayTime = countdownDateTime - currentTime
           const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24))
           const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
           const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60))
           const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000)
      
           const runningCountdownTime = {
              countdownDays: totalDays,
              countdownHours: totalHours,
              countdownMinutes: totalMinutes,
              countdownSeconds: totalSeconds
           }
        
           setCountdownTime(runningCountdownTime)
      
           if (remainingDayTime < 0) {
              clearInterval(timeInterval)
              setExpiryTime(false)
             }
      
          }, 1000)
     }
      
     useEffect(() => {
         countdownTimer()
     })
     
    return (
<Col md='6'>
      {/* <Card className='card-congratulations'>
      <CardBody className='text-center'>
      <DateCountdown dateTo='January 01, 2023 00:00:00 GMT+03:00'/>;
      <div className='text-center'>
          <h1 className='mb-1 text-white'>Voting Ends In</h1>
        </div>
      </CardBody>
    </Card> */}
     <div className="row">
            <div className="col-sm-6">
            <h2 className="text-center text-primary">Voting Ends In</h2>
            <div className="btn-group my-3">
            {expiryTime !== false ? <><button type="button" className="btn btn-outline-primary">{countdownTime.countdownDays} <sub>Days</sub></button><button type="button" className="btn btn-primary">:</button><button type="button" className="btn btn-outline-primary">{countdownTime.countdownHours} <sub>Hours</sub></button><button type="button" className="btn btn-primary">:</button><button type="button" className="btn btn-outline-primary">{countdownTime.countdownMinutes} <sub>Minutes</sub></button><button type="button" className="btn btn-primary">:</button><button type="button" className="btn btn-outline-primary">{countdownTime.countdownSeconds} <sub>Seconds</sub></button></> : <p>Deal has been Expired</p>}
         </div>
            </div>
        </div>
      </Col>
    )
}
export default TimerCard