import React from 'react'
import pic from "../component/img/diaspora.png"
import Image from 'next/image'
import {motion} from "framer-motion"
function About() {
  return (
    <div  className='text-center items-center justify-center flex mx-auto text-black'>
         <div  className='text-center items-center justify-center mx-auto'>
           <div className='flex gap-x-[150px] mt-[50px]'>
            <motion.div initial={{x: -200, opacity:0}}
                              whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}}>
            <Image src={pic} className='text-white h-[600px] shadow-xl rounded-[15px] w-auto' alt=''/>
            </motion.div>
            <motion.div initial={{x: 200, opacity:0}}
                              whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='h-[600px] items-center justify-center mx-auto mt-10'>
              <div className=''>
                <p className='text-[35px] font-medium text-center'>A PROPOS DE LA DIASPORA BANKING</p>
              <p className='text-[18px] font-medium text-center w-[600px] mt-5 '>Le service Diaspora Banking d'Equity BCDC s'adresse à tous les Congolais vivant à l'extérieur du pays pour plus de six mois, c'est à dire, pouvant justifier d'un domicile et d'une source de revenus à l'étranger. Ce service permet à notre clientèle de passer des ordres, d'effectuer des opérations et/ou de souscrire à nos différents produits bancaires, à distance.</p>
             
              </div>
             
            </motion.div>
            
          </div>
    </div>
    </div>
  )
}

export default About