import Navbar from '../../component/Navbar/Navbar'
import './Contact.css'

export default function Contact()
{
    return(
        <>
        < Navbar/>
           <form>
            
  
    <title>HomePage</title>

 
  
    <span class="font"><sup>Welcome TO My Webpage</sup></span> 

   <div class="card">

    <h3 class="h3">Contact  to my Webpage</h3>
    <form>
    <label for="fn">Enter First Name</label>
    <input type="Text" placeholder="First Name" id="fn"/><br/><br/>
    <label for="ln">Enter Last Name</label>
    <input type="Text" placeholder="Last Name" id="ln"/><br/><br/>
    <label for="lp">Enter Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="email"     placeholder="Email Id" id="lp"/><br/><br/>

    <label for="li">Enter Mobile No. </label>
    <input type="tel" placeholder="Mobile No." id="li"/><br/><br/>
    <input type="submit" value="Sing up"/>
</form>
  <br/>
  &nbsp;&nbsp;&nbsp;
     </div>
    
           </form>
         
        </>
    )
}