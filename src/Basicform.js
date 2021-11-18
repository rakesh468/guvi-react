import * as yup from 'yup';
import {useFormik} from 'formik';

const validateform=(values)=>{
    const errors={};
    console.log("validated",values);
     if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(values.email)){
            errors.email="Invalid email address"
        } 
    if(values.password.length > 8){
        errors.password="Required minimum 8 characters";
    }
    console.log(errors);
    return errors;
}
// export function Basicform(){

//     const {handleSubmit,handleChange,handleBlur,values,errors,touched}=useFormik({
//         initialValues:{email:"", password:""},
//         validate:validateform,
//         onSubmit:(values)=>{
//             console.log("onsubmit",values);
//         },
//     })
//     return(
//         <form onSubmit={handleSubmit} >
//             <input 
//             id="emaail"
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email} 
//             type="email" 
//             placeholder="Enter the email"/>
            
//             {errors.email && touched.email &&errors.email}
            
//             <input 
//             id="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password} 
//             type="Password"
//             placeholder="Enter the password"/>
//             {errors.password && touched.password && errors.password}
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

const formvalidation= yup.object({
    email:yup.string().required("email required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,"Wrong pattern"),
    password:yup.string().max(10).required("Password required")
})
export function Basicform(){

    const {handleSubmit,handleChange,handleBlur,values,errors,touched}=useFormik({
        initialValues:{email:"", password:""},
        // validate:validateform,
        validationSchema:formvalidation,
        onSubmit:(values)=>{
            console.log("onsubmit",values);
        },
    })
    return(
        <form onSubmit={handleSubmit} >
            <input 
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email} 
            type="email" 
            placeholder="Enter the email"/>
            
            {errors.email && touched.email ? errors.email : ""}
            
            <input 
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password} 
            type="Password"
            placeholder="Enter the password"/>
            {errors.password && touched.password ? errors.password : ""}
            <button type="submit">Submit</button>
        </form>
    );
}
