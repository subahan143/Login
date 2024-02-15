import { useState } from "react"
import Loading from "../Loading/Loading"
import { useNavigate } from "react-router-dom"

const Login = ({auth,toggle}) => {

   const navigate = useNavigate()
  const [email,set_email]=useState('')
  const [Number,set_Number]=useState('')
  const [password,set_Password]=useState('')
  const [load,set_Load]=useState(false)
  
  const submit=()=>{
  
    set_Load(true)
    setTimeout(()=>{
      set_Load(false),
      toggle()
      navigate('/home')

    },3000);
  }
  return (
    <>
   {load?
   
   <Loading/>:
     <section id='login' className=' w-full h-screen   bg-gray-700 flex items-center justify-center'>
<div className='w-[30%] h-[70vh] bg-red-400 flex shadow-orange-500 shadow-xl items-center justify-evenly flex-col'>

<input onChange={(e)=>set_email(e.target.value)}  className='w-[300px] h-[50px]'   type="Email" placeholder='Email '/>{email}
<input onChange={(e)=>set_Number(e.target.value)}  className='w-[300px] h-[50px]' type="Number" placeholder=' Phone Number'/>{Number}
<input onChange={(e)=>set_Password(e.target.value)}  className='w-[300px] h-[50px]' type="password"placeholder='Password' />{password}
<button onClick={submit} className='w-[90px] h-[60px] bg-black text-white rounded-xl '>Submit</button>
</div>
    </section>
}  
    </>
  )
}
export default Login
