import './App.css'
import { useForm } from "react-hook-form"
function App() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data){
    console.log("foam submited ",data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Enter Your Name</label>
        <input   {...register("Enter Name")} />
        <br />
         <label htmlFor="">Enter Age</label>
        <input   {...register("Enter Age")} />
        <br />
        <input type="submit"  placeholder='submit'/>
      </form>
    </>
  )
}

export default App
