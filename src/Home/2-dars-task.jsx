// import { useState } from "react";
// const MyFun = () => {
//   const [number, setNumber] = useState(0);
//   const hund = () => {
//     return setNumber(number + 1);
//   };
//   const hund1 = () => {
//     return setNumber(number - 1);
//   };
//   return (
//     <div>
//       <h1>son{number}</h1>
//       <button onClick={hund}>plus</button>
//       <button onClick={hund1}>minus</button>
//     </div>
//   );
// };

// export default MyFun;
import React, { useState } from 'react';
import validator from 'validator';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validator.isEmail(email)) {
      setErrors([...errors, 'Email is not valid']);
    }
    if (!validator.isStrongPassword(password)) {
      setErrors([...errors, 'Password is not strong']);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 &&
        <ul>
          {errors.map(error => <li>{error}</li>)}
        </ul>
      }
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterForm;




