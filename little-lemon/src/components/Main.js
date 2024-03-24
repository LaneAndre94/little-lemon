import React, { useReducer } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';



const Main = () => {

    const seedRandom = function(seed){
        var m = 2**35 -31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return(s = s * a % m) /m;
        }
    }



    const fecthAPI = function(date){
        let result =[];
        let random = seedRandom(date.getDate());
        for(let i =15; i <=20; i++) {
            if(random() < 0.5){
                result.push(i + ':00')
            }
            if(random() > 0.5){
                result.push(i + ':30');
            }
        }
        return result;
    }

    const submitAPI = function(formData){
        return true;
    }

    const initialState = {availableTime: fecthAPI(new Date())};
    const [state, dispatch] = useReducer(updateTime, initialState);

    function updateTime(state, date){
        return {availableTime: fecthAPI(new Date())}
    }

    const navigate = useNavigate();
    function submitForm (formData){
        if(submitAPI(formData)){
            navigate("/confirmed");
        }
    }

  return (
    <main>
       <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/booking' element={<Booking availableTime={state} dispatch={dispatch} SubmitForm={submitForm}/>}/>
        <Route path='/confirmed' element={<ConfirmedBooking/>}/>
       </Routes>
    </main>
  )
}

export default Main;