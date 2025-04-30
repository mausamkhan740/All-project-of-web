import { useState } from "react";

export default function Form(){
    let [FormName,setFormName]=useState({
        fullName:"",
        userName:""
    })
    // let [fullName,setFullName]=useState("mausamkhan");

    // let handleNameChange=(event)=>{
        // console.log(event.target.value);
        // setFullName(event.target.value);
    // };
    let handleInputChange=()=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;
        console.log(fieldName);
        console.log(newValue);
        setFormName((currData)=>{
            currData[fieldName]=newValue;
            return{...currData,[fieldName]:newValue}
        });

    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(FormName)
        setFormName({
            fullName:"",
            userName:"",
        })
    }  
    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fullName">fullName</label>
            <input type="text" name="fullName" id="fullName"
             placeholder="enter the fullname"
             value={FormName.fullName}
             onChange={handleInputChange}/>
            <button>submit</button>
            <br /><br /><br />
            <label htmlFor="userName">userName</label>
            <input type="text" name="userName" id="userName"
             placeholder="enter the username"
             value={FormName.userName}
             onChange={handleInputChange}/>
            <button>submit</button>
        </form>
    )
}