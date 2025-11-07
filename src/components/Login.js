import { Controller, useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function Login() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Email"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="password"
            label="Password"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default Login

// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const Login = () => {
  
//   // const [formData, setFormdata] = useState({
//   //   name1: '',
//   //   name2: '',
//   //   email: '',
//   //   password1: '',
//   //   password2: ''
//   // });

//   const {register, handleSubmit, formState: { errors }} = useForm();

//   const onSubmit = (data) => {
//     console.log("data submitted:", data);
//     alert("Form submitted successfully!");
//   }

//    // ✅ Simulate async check for unique email (e.g., backend check)
//   const checkUniqueEmail = async (email) => {
//     // Simulated delay
//     await new Promise((resolve) => setTimeout(resolve, 800));

//     // Dummy existing emails
//     const existingEmails = ["test@example.com", "user@gmail.com"];

//     return !existingEmails.includes(email) || "Email already exists";
//   };



//   console.log("errors", errors);
  
//   return (
//     <div className='container'>

//       <h2 color="red" >Login Page</h2>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>First Name</label>
//         <input type='text' {...register('name1', {required: true})} placeholder='First Name'/>
//         <label>Last Name</label>
//         <input type='text' {...register('name2')} placeholder='Last Name'/>
//         <label>Email</label>
//         <input type='email' {...register('email', {required: "Please enter a unique email",  pattern: {
//             value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//             message: "Invalid email format",
//           },
//           validate: checkUniqueEmail,})} placeholder='Email'/>
//          {errors.email && (
//           <p style={{ color: "red", fontSize: "14px" }}>
//             {errors.email.message}
//           </p>
//         )}
//         <label>Password</label>
//         <input type='password'  {...register('password1', {required: true})} placeholder='Password' />
//         <label>Confirm Password</label>
//         <input type='password'  {...register('password2', {required: true})} placeholder='Confirm Password' />
//         <button type='submit'>Submit</button>
//       </form>

      
//     </div>
//   )
// }

// export default Login



// import { useState } from "react";

// const Login = () => {
  
//   const [formData, setFormdata] = useState({
//     name1: '',
//     name2: '',
//     email: '',
//     password1: '',
//     password2: ''
//   });

//   const HandleSubmit = (e) => {
//     e.preventDefault();
//     console.log("data submitted:", formData);
//   }

//   const HandleChange = (e) => {
//     setFormdata({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   }

  
//   return (
//     <div className='container'>

//       <h2 color="red" >Login Page</h2>

//       <form onSubmit={HandleSubmit}>
//         <label>First Name</label>
//         <input type='text' name="name1" placeholder='First Name' value={formData.name1} onChange={HandleChange}/>
//         <label>Last Name</label>
//         <input type='text' name="name2" placeholder='Last Name' value={formData.name2} onChange={HandleChange}/>
//         <label>Email</label>
//         <input type='email' name="email" placeholder='Email' value={formData.email} onChange={HandleChange}/>
//         <label>Password</label>
//         <input type='password' name="password1" placeholder='Password' value={formData.password1} onChange={HandleChange}/>
//         <label>Confirm Password</label>
//         <input type='password' name="password2" placeholder='Confirm Password' value={formData.password2} onChange={HandleChange}/>
//         <button type='submit'>Submit</button>
//       </form>

      
//     </div>
//   )
// }

// export default Login
