import React, { useState } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import "./App.css";
const email_pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
let deflt;
function App() {
  const [userinfo, setUserInfo] = useState([]);
  const [ data,setData] = useState();
  const [ edit ,setedit]=useState()
  const { register, errors, handleSubmit  } = useForm();
  const onSubmit = (data) => {
    const Data=[...userinfo,{...data}]
    setUserInfo(Data);
    setData(true)
    alert(`welcome ${data.Fname+data.Lname} !!!
    You signup with ${data.email}`)
    deflt=Data[Data.length-1]
  };
  return (
    <div className="App">
      <h1 className="head">Registeration form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Enter First Name : </label>
        <input
          name="Fname"
          defaultValue= {edit && deflt.Fname}
          ref={register({ required: "First name required" })}
        />

        <ErrorMessage errors={errors} name="Fname">
          {({ message }) => <p className="textcontent">{message}</p>}
        </ErrorMessage>
        <br />
        <br />
        <label>Enter Last Name :</label>
        <input
          name="Lname"
          defaultValue= {edit && deflt.Lname}
          ref={register({ required: "Last name required" })}
        />
        <ErrorMessage errors={errors} name="Lname">
          {({ message }) => <p className="textcontent">{message}</p>}
        </ErrorMessage>
        <br />
        <br />
        <label>Enter Email :</label>
        <input
          name="email"
          defaultValue= {edit && deflt.email}
          ref={register({
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: email_pattern,
              message: "Email invalide",
            },
          })}
        />
        <ErrorMessage errors={errors} name="email">
          {({ message }) => <p className="textcontent">{message}</p>}
        </ErrorMessage>
        <br />
        <br />
        <label className="control">Enter password:</label>
        <input
          type="password"
          name="password"
          defaultValue= {edit && deflt.password}
          ref={register({
            required: {
              value: true,
              message: "password required",
            },
            pattern: {
              value: password_pattern,
              message:
                "password contain atleast one number and lowercase & uppercase letter with minimum 6 digits",
            },
          })}
        />
        <ErrorMessage errors={errors} name="password">
          {({ message }) => <p className="textcontent">{message}</p>}
        </ErrorMessage>
        <br />
        <br />
        <input type="submit" /><br/><br/>
        <input type="reset" onClick={()=>{
          setedit("")
        }}/>
        <button type="button" onClick={()=>{
          setedit(true)
          userinfo.pop();
        }}>Edit</button>
      </form>
    </div>
  );
}
export default App;
