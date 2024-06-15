import React from 'react'
import pic from "../component/img/portail.png"
import Image from 'next/image'
import {motion} from "framer-motion"
import Link from 'next/link'
export default function About2() {
  return (
    <div  className='text-center items-center justify-center flex mx-auto pb-[50px] text-black'>
    <div  className='text-center items-center justify-center mx-auto'>
        <p className='text-[35px] font-medium text-center py-4'>NOTRE PORTAIL CLIENT</p>
      <div className='flex gap-x-[100px] mt-[20px]'>
       <motion.div initial={{x: -200, opacity:0}}
                         whileInView={{x:0, opacity:1}}
                   transition={{duration:1.2}}
                   viewport={{once:true}}>
       <Image src={pic} className='text-white h-[600px] shadow-xl rounded-[15px] w-auto' alt=''/>
       </motion.div>
       <motion.div initial={{x: 200, opacity:0}}
                         whileInView={{x:0, opacity:1}}
                   transition={{duration:1.2}}
                   viewport={{once:true}} className='h-[600px] items-center justify-center mx-auto mt-0'>
         <div className=''>
           <p className='text-[25px] font-medium text-center'>C’est quoi le portail Diaspora Banking ?</p>
         <p className='text-[14px] font-normal text-center w-[700px] mt-1 '>Le portail Diaspora Banking est une plateforme en ligne qui vous permet d’opérer un nombre d’opérations bancaires à distance dans votre confort. C’est l’équivalent d’une agence en ligne 24h/24 où vous pouvez initier des demandes de service à la diaspora Banking.</p>
         </div>
         <div className='mt-4'>
           <p className='text-[25px] font-medium text-center'>Quelles opérations y sont disponibles ?</p>
         <p className='text-[14px] font-normal text-center w-[700px] mt-1 '>Il y a présentement 5 types d’opérations disponibles sur le portail diaspora Banking :</p>
         </div>
         <div className='mt-2'>
           <p className='text-[20px] font-medium text-center'>- Les ouvertures de compte</p>
         <p className='text-[14px] font-normal text-center w-[700px] mt-1 '>Voulez-vous ouvrir un compte Diaspora Banking à distance ? Vous pouvez vous enregistrer à notre portail Banking et suivre les suggestions appropriées pour soumettre votre demande d’ouverture de compte partout où vous êtres dans le monde.</p>
         </div>

         <div className='mt-2'>
           <p className='text-[20px] font-medium text-center'>- Les réactivations de compte</p>
         <p className='text-[14px] font-normal text-center w-[700px] mt-1 '>Si votre compte est inactif et vous désirez le réactiver, vous pouvez aussi vous enregistrer et soumettre votre demande de réactivation dans le portail suivant.  </p>
         </div>

         <div className='mt-2'>
           <p className='text-[20px] font-medium text-center'>- Les commandes des cartes</p>
         <p className='text-[14px] font-normal text-center w-[700px] mt-1 '>Les commandes de nouvelles cartes sont aussi disponibles dans le portail.</p>
         </div>
         <div className='mt-2'>
           <p className='text-[20px] font-medium text-center'>- Les commandes de nos produits digitaux</p>
         <p className='text-[14px] font-normal text-center w-[700px] mt-1 '>Nos produits digitaux sont accessibles via notre portail.</p>
         </div>
         <div className='mt-2'>
           <p className='text-[20px] font-medium text-center'>- Les demandes de Prêts IMMO</p>
         <p className='text-[14px] font-normal text-center w-[700px] mt-1 '>Si vous désirez un accompagnement de prêts IMMO et que vous êtes prêts à vous engager, vous vous pouvez aussi vous enregistrer et soumettre votre demande de prêt.</p>
         </div>
        
       </motion.div>
       
     </div>
     <p className='text-center font-medium text-[35px] mt-8'>Comment s’enregistrer ?</p>
     <p className='text-center '>Pour vous enregistrer, cliquez sur ce lien Diaspora v2 <span className='text-[18px] underline text-[#a22a2b]'><Link href="https://equitybcdc-diasporabanking.com">equitybcdc-diasporabanking.com</Link></span> et suivez les recommandations.</p>
</div>
</div>
  )
}
