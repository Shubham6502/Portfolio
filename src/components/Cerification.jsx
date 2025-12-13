import React from 'react'
import basicpr from "../assets/certificates/problem_solveBasic.png";
import interpr from "../assets/certificates/problem_solveInter.png";
import dsa from "../assets/certificates/dsa.png";
import javaBasic from "../assets/certificates/javaBasic.png";


const Cerification=()=> {
    const certificate=[
        {name:"Java Basic", icon:javaBasic},
        {name:"DSA With Java", icon:dsa},
        {name:"Problem Solving Basic",icon:basicpr},
        {name:"Problem Solving Inter",icon:interpr},
    ]

  return (
    
    <section
     id="certificates" 
    className="w-full relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">

        
        <div className="text-3xl text-center font-bold mb-16 text-purple-400">
            Certificates
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {certificate.map((num,index)=>(
            <div key={index} className="rounded-xl p-5 bg-white/5 border border-purple-300/20 backdrop-blur-md ">
                <img src={num.icon} alt={num.name} />
               <p className='text-center mt-3'> {num.name}</p>
            </div>
            ))}
            


        </div>

    </section>
  )
}

export default Cerification