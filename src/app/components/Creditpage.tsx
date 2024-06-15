"use client";
import React from 'react'
import pic1 from "./img/Credit Immo1cc.jpg"
import pic2 from './img/pretimo.png'
import pic3 from './img/pretim.png'
import Image from 'next/image'
import {motion} from "framer-motion"
function Creditpage() {
  return (
    <div className='min-h-screen text-[#4d4d4d]'>
       <div className=' items-center justify-center mx-auto flex mt-10'>

            <div className='flex gap-x-[150px]'>
            <motion.div initial={{x: -200, opacity:0}}
                              whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}}>
            <Image src={pic1} className='text-white h-[700px] shadow-xl rounded-[15px] w-auto' alt=''/>
            </motion.div>
            <motion.div initial={{x: 200, opacity:0}}
                              whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='h-[750px]'>
              <div>
              <p className='text-[35px] font-medium'>Qu’Est-ce que le Prêt Immo Diaspora ?</p>
              <div className='text-start text-[18px] font-medium w-[650px] px-3  mt-5 space-y-3'>
                <p>•	C’est une offre de crédit destinée aux congolais d’origine ou de nationalité vivants à l’étranger et ayant ou visant des intérêts économiques au pays dans le secteur immobilier.</p>
                <p> </p>
                <p>•	But du financement : Acquisition/ Construction/ Rénovation</p>
                <p>•	Maturité allant jusqu’à 5 ans</p>
              </div>

              <div className='mt-10'>
              <p className='text-[35px] font-medium'>Qui est éligible ?</p>
              <div className='text-start text-[18px] font-medium w-[650px] px-3  mt-2 space-y-3'>
                <p className=''>Tout client Diaspora Banking présentant</p>
                <p>•	Un projet immobilier documenté</p>
                <p>•	Un compte EBCDC actif depuis au moins 3 mois</p>
                <p>•	Une ou plusieurs sources de revenue stables et régulières</p>
                <p>•	Une garantie réelle et suffisante</p>
                <p>•	Une preuve de solvabilité : Credit report</p>
                <p>•	But du financement : Acquisition/ Construction/Rénovation</p>

              </div>
              </div>
              </div>
             
            </motion.div>
            
          </div>
          
       </div>


       <div className='items-center justify-center mx-auto flex '>
       <motion.div initial={{y: 200, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='px-[50px] shadow-xl rounded-[15px] '>
                <p className='text-[35px] text-center font-medium text-[#4d4d4d] mt-10'>Préparation du dossier de demande</p>
                <div className='flex gap-x-[100px] mt-10'>
                  <div className=' w-[500px] font-medium text-[#4d4d4d]'>
                    <p className='text-center font-medium text-[25px]'>ACQUISITION</p>
                    <div className='px-[70px] py-6 text-[18px] space-y-3 '>
                  <p>Trouver et négocier le bien à financer :</p>
                    <p>-	Compromis de vente</p>
                    <p>-	Titre de propriété à vérifier</p>
                    <p>-	Plan d’investissement</p>
                    </div>
                  </div>
                  <div className='font-medium text-[#4d4d4d] w-[500px]'>
                    
                    <p className='text-center font-medium text-[#4d4d4d] text-[25px]'>CONSTRUCTION /RENOVATION</p>
                    <div className='px-[70px] py-6 text-[18px] space-y-3 '>
                    <p>-	Titre de propriété du bien à</p>
                    <p>-	Plan d’investissement</p>
                    <p>-	Titre de propriété de la garantie si différente</p>
                    <p>-	Procuration des éventuels co-propriétaires</p>
                    </div>
                 

                  </div>

                  <div>

                  </div>
                </div>
                </motion.div>
              </div>


              <div className='mt-[100px]'>
                <div className='items-center justify-center mx-auto flex gap-x-10'>
                <motion.div initial={{x: -200, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='text-start'>
                      <p className='text-[35px] '>Garanties</p>
                      <div className='space-y-7 font-medium text-[#4d4d4d]'>
                     <div>
                     <p className='text-[22px]'>- Garanties réelles</p>
                      <p>•	Le client soumet les garanties à l’appréciation de la banque</p>
                      <p>•	Bien concerné par le financement ou autres</p>
                      <p>•	Pas d’enfants mineurs sur les titres à inscrire</p>
                      <p>•	Procuration des co-propriétaires</p>
                     </div>

                      <div>
                      <p className='text-[22px]'>- Garanties personnelles</p>
                      <p>•	Une personne de référence localement (gérant, membre de famille, autres)</p>
                      </div>
                      </div>
                      </motion.div>

                    <motion.div initial={{x: 200, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}}>
                      <Image src={pic2} className='w-[500px] h-auto rounded-[15px] shadow-xl' alt='' />
                    </motion.div>
                </div>
              </div>

              <div className='mt-[100px] pb-[100px]'>
                <div className='items-center justify-center mx-auto flex gap-x-10'>

                <motion.div initial={{x: -200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:true}}>
                      <Image src={pic3} className='w-[500px] h-auto rounded-[15px] shadow-xl' alt='' />
                      </motion.div>

                      <motion.div initial={{x: 200, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='text-start'>
                      <p className='text-[35px] '>Pourquoi choisir le Prêt Immo Diaspora?</p>
                      <div className='space-y-7 font-medium text-[#4d4d4d]'>
                     <div>
                
                      <p>•	Pas besoin de faire le déplacement</p>
                      <p>•	Evaluations et vérifications prises en charge par la banque</p>
                      <p>•	Prise en charge à distance via le portail [Souscrire ici]</p>
                      <p>•	L’apport de la banque jusqu’à 80% du coût total du projet</p>
                      <p>•	Traitement des dossiers rapide et efficace</p>
                      <p>•	Accompagnement de la banque pour les cas de désinsertion</p>
                     </div>

                      <div>
                      <p>- Garanties personnelles</p>
                      <p>•	Une personne de référence localement (gérant, membre de famille, autres)</p>
                      </div>
                      </div>
                      </motion.div>
                   

                  
                </div>
              </div>
       </div>
  )
}

export default Creditpage