import React from "react";

function Form({ handleSubmit, handleChange, input }) {
  return (
    <form style={{ margin: "1.2rem 0 1.4rem 0rem" }} onSubmit={handleSubmit}>
      <input
        style={{ fontSize: "0.86rem" }}
        placeholder={"Enter..."}
        value={input}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
