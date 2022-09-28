import React from 'react'

export default function authen(){
    return (
        <center>
        <div className='div auth'>
            <h2>Sign Up</h2>
            <br />
            <h3>NGO</h3>
            <br />
            <div className="forms">
                <form>
                    <br />
                    <label htmlFor="name" style={{fontSize:"30px"}}>Mail-id</label><br />
                    <input type="text" style={{width:"250px"}}/><br />
                    <br />
                    <label htmlFor="pswd" style={{fontSize:"30px"}}>Password</label><br />
                    <input type="text" style={{width:"250px"}}/><br /><br />
                    <label htmlFor="pswd" style={{fontSize:"30px"}}>confirm Password</label><br />
                    <input type="text" style={{width:"250px"}}/><br /><br />
                    <input type="submit" style={{width:"100px",height:"20px"}}/>
                </form>
            </div>
            <br />
            <h3>Donor</h3>
            <br />
            <div className="forms">
                <form>
                    <br />
                    <label htmlFor="name" style={{fontSize:"30px"}}>Mail-id</label><br />
                    <input type="text" style={{width:"250px"}}/><br />
                    <br />
                    <label htmlFor="pswd" style={{fontSize:"30px"}}>Password</label><br />
                    <input type="text" style={{width:"250px"}}/><br /><br />
                    <label htmlFor="pswd" style={{fontSize:"30px"}}>confirm Password</label><br />
                    <input type="text" style={{width:"250px"}}/><br /><br />
                    <input type="submit" style={{width:"100px",height:"20px"}}/>
                </form>
            </div>
        </div>
        </center>
    )
}