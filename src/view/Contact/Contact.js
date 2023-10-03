
import Navbar from '../../component/Navbar/Navbar'
import './Contact.css'
import React, { useState } from 'react';

export default function Contact() {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [gender,setGender]=useState('male')
    const [hobbies,setHobbies]=useState([

    ])

    const [local, setLocal] = useState([

    ])

    const saveToLocal = () => {
        const obj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
            gender:gender,
            hobbies:hobbies
        }

        const temparr = [...local, obj]
        setLocal(temparr)
       // localStorage.setItem('my-object', JSON.stringify(temparr));
        console.log(obj)
    }

    const handel=(e)=>{
        if(e.target.checked){
            setHobbies([...hobbies,e.target.value])
        }
        else{
            const index= hobbies.indexOf(e.target.value);
            hobbies.splice(index,1);
            setHobbies([...hobbies])
        }
    }

    return (
        <>
            < Navbar />
 
                <span className="font"><sup>Welcome TO My Webpage</sup></span>

                <div className="card">

                    <h3 className="h3">Contact  to my Webpage</h3>
                    <form>

                        <input
                            type="Text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />
                        <br /><br />

                        <input
                            type="Text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />
                        <br /><br />

                        <input
                            type="email"
                            placeholder="Email Id"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <br /><br />


                        <input
                            type="tel"
                            placeholder="Mobile No."
                            value={mobile}
                            onChange={(e) => { setMobile(e.target.value) }}
                        />
                        <br /><br />

                        <input 
                        type='radio'  
                         name='gender'  
                          value={'male'}
                          onChange={(e)=>{if(e.target.checked){
                            setGender(e.target.value)
                          }
                        }}
                        checked={gender==='male'}
                         /> male  &nbsp;
                        <input 
                        type='radio' 
                        name='gender'
                        value={'female'}   
                         onChange={(e)=>{
                            if(e.target.checked){
                            setGender(e.target.value)
                          }
                        
                        }}
                        checked={gender==='female'}
                        /> female
                        <br/><br/> 
                         Hobies  : <input type='checkbox' value={'Reading'}  onChange={handel} /> Reading &nbsp;
                          <input type='checkbox' value={'Coding'} onChange={handel} /> Coding &nbsp;
                       <input type='checkbox' value={'Travling'}  onChange={handel}/> Travling &nbsp;
                        <br/><br/>

                        <button type='button' onClick={saveToLocal} > Send </button>

                    </form>
                    <br />
                    &nbsp;&nbsp;&nbsp;
                </div>

       

        </>
    )
}