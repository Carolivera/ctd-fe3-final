import React from "react";

const Form = ({ setUser, handleSubmit }) => {
  //Aqui deberan implementar el form completo con sus validaciones

  const handleChange = (event) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='name' type="text" onChange={handleChange}/>
        <input name='email' type="text" onChange={handleChange}/>
        <button>Enviar 📩</button>
      </form>
    </div>
  );
};

export default Form;
