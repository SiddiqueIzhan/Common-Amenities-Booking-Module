import React, { useState } from 'react'
import { Validate } from './Validation.js'

const Form = () => {
    let [bookedEvents, setBookedEvents] = useState([])
    let addTodo = (ele) => {
        setBookedEvents((oldVal) => [...oldVal, ele])
    }
    let HandleSubmit = (event) => {
        event.preventDefault()
        let data = Validate(bookedEvents)
        // console.log(data)
        let {status, amount} = data
        if(status === "Booked"){
            addTodo(data)
            alert(`${status}, ₹${amount}`)
        }
    }
  return (
    <div id="page">
    <div id="container">
    <header>
      <h1>Facility Booking</h1>
      <p>Experience the joy of leisure and relaxation.</p>
    </header>
    <br />
    <form id="bookingForm" onSubmit={HandleSubmit} method="_post">
      <label htmlFor="facility">Facility:</label>
      <select id="facility" name="facility">
        <option value="Clubhouse">Clubhouse</option>
        <option value="Tennis Court">Tennis Court</option>
      </select>
      <label htmlFor="date">Date (DD-MM-YYYY):</label>
      <input type="date" id="date" name="date" placeholder="Enter date" required />
      <label htmlFor="startTime">Start Time (HH:mm):</label>
      <input type="text" id="startTime" name="startTime" placeholder="Enter start time" required />
      <label htmlFor="endTime">End Time (HH:mm):</label>
      <input type="text" id="endTime" name="endTime" placeholder="Enter end time" required />
      <input type="submit" value="Book Facility" id="submitbtn" />
    </form>
    </div>
    <h1>Booked Slots</h1>
    <br />
    <table>
        <thead>
            <tr>
            <th>Sl no.</th>
            <th>Name</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {
                bookedEvents.map((elem, id) => {
                    let {facility, date, startTime, endTime, amount} = elem
                    return(
                        <>
                        <Schedule key={id} id={id+1} name={facility} date={date} startTime={startTime} endTime={endTime} amount={amount}/>
                        </>
                    )
                })
            }
        </tbody>
    </table>
    </div>
  )
}

const Schedule = ({id, name, date, startTime, endTime, amount}) => {
    return(
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{date}</td>
                <td>{startTime}</td>
                <td>{endTime}</td>
                <td>₹{amount}</td>
            </tr>
        </>
    )
}

export default Form