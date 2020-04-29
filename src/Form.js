import React from "react";
import useForm from "./useForm";
import validate from "./validate";
import "./Form.css";
const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    alert("you are logined!");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        <label className="control">Email :</label>
        <input
          autoComplete="off"
          className={`input ${errors.email && "is-danger"}`}
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email || ""}
          required
        />
        {errors.email && <p className="textconntent">{errors.email}</p>}<br/><br/>
        <label className="control">Password :</label>
        <input
          className={`input ${errors.password && "is-danger"}`}
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password || ""}
          required
        />

        {errors.password && <p className="textconntent">{errors.password}</p>}<br/><br/>
        <button type="submit" className="button is-block is-info is-fullwidth">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
