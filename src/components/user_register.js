import React from "react"
import RC from "./RC.png"
import { useDispatch , useSelector } from "react-redux"
import User_details_action from "../redux/actions"
import { User_name_action } from "../redux/actions"
import { useState } from "react"
// import { useState } from "react"

// const app = {
//     header: ["home", "about"],
//     banner_image: "/banner/1.png",
//     user_array: ["Ram", "shyam", "Sita", "Geeta"],
//     message_board:[
//         { id: 1, content: "hello world 1", from: "Ram", to: "public", time_stamp: "10:30", },
//         { id: 2, content: "hello world 2", from: "Shyam", to: "public", time_stamp: "10:34", },
//         { id: 3, content: "hello world 3", from: "Sita", to: "public", time_stamp: "10:45", },
//         { id: 4, content: "hello world 4", from: "Geeta", to: "public", time_stamp: "11:01", },
//         { id: 5, content: "hello world 5", from: "Ram", to: "public", time_stamp: "11:07", }
//     ],
// }

const User_register = () => {
    const dispatch = useDispatch()
    const stored_value = useSelector(val=>val)
    console.log(stored_value)
    const messages= stored_value.user_details.message_board
    const user_name = stored_value.user_details.user_array

    console.log(messages)
    // console.log(user_name.map(val=>val))
    // const userName= stored_value.user_details.user_array
    

    const submitName = () => {
        var register_name = document.getElementById("name_register_input").value
        // setUserName(register_name)
        dispatch(User_name_action(register_name))
        document.getElementById("name_register_input").value=""
    }

    let [id,setId] = useState(0)
    
    const sendMessage = () => {
        var date= new Date()
    var day = date.getDay()
    var month = date.getMonth()
    var hr = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    var time = hr+":"+min+":"+sec+" "+day+"/"+month
    const name = user_name.map(val=>val.name)
        setId(id++)
        console.log(id)
        var message = document.getElementById("message_input").value
        var register_name = document.getElementById("name_register_input").value
        // app.message_board.concat({id:"",content:,from:"",to:"",time_stamp:""})
        dispatch(User_details_action(message,id,name,time))

        document.getElementById("message_input").value =""
    }
    
    return (
        <div style={{ width: "95%", minHeight: "100vh", padding:"2%", margin:"0 auto" }}>
            <div style={{ width: "25%", minHeight:"150px", height:"20%", margin: "0 auto", padding:"1%", border: "1px solid black" , display:"flex", flexDirection:"column" }}>

                <div style={{width:"70%", margin:"0 auto"}}>
                    <img style={{ width: "100%" }} src={RC} alt="loading..." />
                </div>

                <div style={{width:"100%", marginTop:"2%"}}>
                   <input type="text" defaultValue="" id="name_register_input" />
                   <br/>
                   <label htmlFor="name_register_input">Register your name</label>
                   <br/>
                    <button onClick={submitName}>Submit</button>
                </div>
            </div>

            <div style={{ width: "100%", display:"flex" , border:"1px solid grey" , padding:"1px" }}>
                {user_name.map((val,i)=>{
                    return <div style={{marginLeft:"5px", background:"green", padding:`${i>0?"2px":"none"}`, borderRadius:"5px", color:"white", fontWeight:"bold"}} key={i}>{i>0?val.name:null}</div>
                })}
            </div>

            <div style={{width:"70%", margin:"0 auto", height:"60vh", overflowY:"auto", padding:"2%"}}>
                {messages.map((val,i)=>{
                return <div style={{ border:"1px solid black", background:"pink", color:"black", marginTop:"1%", textAlign:"left", padding:`${i>0?"2px":"0"}`, borderRadius:"5px"}} key={i}> {val.from} {i>0?":":null} {val.content} {i>0?<br/>:null} {val.time_stamp}</div>
                })}
            </div>

            <div style={{ width: "60%", display: "flex", margin:"0 auto", marginTop: "2%", minHeight: "5vh", border:"1px solid black", height:"10%" }}>
                <div style={{ width: "30%", display: "flex", flexDirection: "column", marginTop: '2%', padding: "2%" }}>
                    <input id="message_input" type="text" defaultValue="" />
                    <label htmlFor="message_input">Type your message</label>
                    <button style={{ width: "min-content", marginTop: "2%" }} onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}
export default User_register
