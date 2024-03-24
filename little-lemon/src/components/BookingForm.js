import React, { useState } from 'react'


const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [ocassion, setOcassion] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);

    }
  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose A Date</label>
                        <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                    </div>

                    {/*for time selection*/}
                    <div>
                    <label htmlFor='book-time'>Choose Time:</label>
                    <select id='book-time' value={time} onChange={(e) => setTime(e.target.value)}>
                        <option value="">Select a Time</option>
                        {
                            props.availableTime.availableTime.map(availableTime => {return <option key={availableTime}>{availableTime}</option>})
                        }
                    </select>
                    </div>

                    {/*for Number of Guest*/}
                    <div>
                        <label htmlFor='book-guests'>Number of Guests</label>
                        <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>
                    </div>

                    {/*for Ocassions*/}
                    <div>
                        <label htmlFor='book-ocassion'>Ocassion</label>
                        <select id='book-ocassion' key={ocassion} value={ocassion} onChange={e => setOcassion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>

                    {/*for Submit button*/}
                    <div className='btnReceive'>
                    <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  )
}

export default BookingForm;