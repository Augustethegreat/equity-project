import React, {useState } from 'react'
import themobile1 from "./img/thishead.png"
import themobile from "./img/themobile.jpg"
import themobile2 from "./img/head3.jpg"
import smallhead from "./img/smallhead.png"
import cap1 from "./img/cap1.png"
import cap2 from "./img/cap2.png"
import cap3 from "./img/cap3.png"
import cap4 from "./img/cap4.png"
import cap5 from "./img/cap5.png"
import cap6 from "./img/cap6.png"
import appsell from "./img/aide.jpg"
import { Bars3Icon, XMarkIcon, EnvelopeIcon, QuestionMarkCircleIcon, UserCircleIcon, CreditCardIcon, BanknotesIcon, WalletIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import {ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid'
import Questions from './Questions'

function Aide() {
 
  return (
    <div  className='scroll-smooth pb-[20px]'>
        <div className='scroll-smooth flex border-b-[1px] border-[#dee3e9] w-full mx-auto items-center text-[13px] md:text-[17px] font-medium'>
            <div className='max-w-screen-lg flex mx-auto items-center  gap-x-5 scroll-smooth'>
            <a href="#sendus">
            <div className={`h-full  text-black border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 className=''>Your questions</h1>
            </div>
            </a>
            <a href="#contact">
            <div className={`h-full  text-black border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 >Contact-Us</h1>
            </div>
            </a>
           <a href="#faq">
           <div className={`h-full text-black border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 >FAQS</h1>
            </div>
           </a>
            </div>
        </div>
        <div className='pb-[20px] mx-auto items-center  lg:max-w-screen-lg font-body'>
        <p id="sendus"  className='text-black text-2xl font-medium text-center mt-2 '>Need help ?</p>
        <div className='justify-center items-center w-full '>
           <div className='mx-auto px-4 lg:px-[250px] '>
           <p className='text-xl mt-3 text-black font-medium'>Do you have a problem?</p>
            <p className='text-sm mt-2 text-black'>Drop us a line in this contact form and we'll get back to you shortly.</p>
            <div className='block md:flex lg:flex w-full md:w-[542px] lg:w-[542px]  gap-x-4 mt-2'>
                <input type="text" placeholder='Name' className='  w-full px-7 md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px]  border-[2px] '/>
                <input type="text" placeholder='Surname' className=' w-full px-7 mt-3 lg:mt-0 md:mt-0   md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] ' />
            </div>
            <div  className='block md:flex lg:flex w-full md:w-[542px] lg:w-[542px]]  gap-x-4 mt-2'>
                <input type="text" placeholder='Email' className=' w-full px-7  md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#a22a2b] border-[2px] rounded-[5px]'/>
                <input type="text" placeholder='Phone' className='w-full px-7 mt-3 lg:mt-0 md:mt-0  md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] ' />
            </div>
            <select id="dropdownTextbox" className=' w-full px-7 mt-2 md:w-[542px] lg:w-[542px] pl-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] '>
            <option value="" selected disabled hidden>Request/Compliment/Complaint</option>
            <option value="Request">Request</option>
            <option value="Compliment">Compliment</option>
            <option value="Complaint">Complaint</option>
            </select>
            <div>
            <select id="dropdownTextbox" className='w-full px-10 mt-2 md:w-[542px] lg:w-[542px] pl-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] '>
                <option className='py-4 bg-[#a22a2b] text-black hover:bg-[#a22a2b] hover:text-white' value="" selected disabled hidden>Account opening/Card order/Account reactivation/Loan request/Other</option>
                <option className='mt-10 bg-white text-black hover:bg-[#a22a2b] hover:text-white' value="Account opening">Account opening</option>
                <option value="Card order">Card order</option>
                <option value="Account reactivation">Account reactivation</option>
                <option value="Loan request">Loan request</option>
                <option value="Other">Other</option>
                </select>
            </div>
            <textarea name="" id="" placeholder='Commentaire'  className='w-full px-7 mt-3 lg:w-[542px] pl-4 py-2 h-[100px] text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px]'></textarea>
            <div className=' bg-[#a22a2b] hover:bg-[#d73611] hover:cursor-pointer w-full px-7 mt-3 lg:w-[542px] pl-4 py-2  text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] shadow-lg shadow-[#7c7a7a]'>
                <p className='text-center  py-3 text-white font-semibold'>Submit</p>
            </div>
           </div>
         
        </div>
        <div id='contact' className='text-black items-center mx-auto w-full px-0 lg:px-[250px] mt-[40px] '>
                    <div  className=' px-4 md:px-0 w-full space-y-3 font-medium'>
                        <p className='text-[20px] '>Contact-Us :</p>
                    <p className='w-auto lg:w-[532px]'>Connect with one of our agents for assistance by calling +243 81 180 8868 or email us on       <span className='text-[#a22a2b] underline-[1px]'>diaspora@equitybcdc.com</span></p>
                    <p>Our opening hours are as follows:</p>
                    <div className='flex '>
                    <CheckIcon className="h-6 w-11 text-[#a22a2b] " aria-hidden="true" />
                        <p>Monday to Friday: 8:00 a.m. to 6:00 p.m.</p></div>
                    <div className='flex'>
                    <CheckIcon className="h-6 w-11 text-[#a22a2b] " aria-hidden="true" />
                        <p>Saturdays: 8:00 a.m. to 1:00 p.m.</p>
                    </div>
                    </div>
        </div>
        <p  className='text-black text-2xl font-medium text-center mt-[65px] '>Frequently Asked Questions</p>
        {/* <div id='faq' className='md:flex lg:block w-full  pb-[70px] mt-[34px] md:w-full md:px-[200px] md:gap-x-5 lg:px-[60px] items-center mx-auto'>
        <div className='md:block lg:flex gap-x-3   md:gap-x-6 lg:gap-x-7 px-4 '>
            <div className=' flex  bg-[#fff] mt-7  md:mt-7 lg:mt-0 w-full  md:w-[280px] hover:bg-[#a22a2b] text-[#a22a2b] hover:text-white border-[1px] border-[#a22a2b] hover:cursor-pointer   lg:w-[800px] h-auto lg:h-auto py-2 md:h-auto justify-center my-auto items-center rounded-[5px] md:rounded-[5px] lg:rounded-[5px] '>
                
                <div className='flex  px-3 gap-x-2 w-[240px]'>
                <WalletIcon className="h-8 w-8 text-center mt-1 " aria-hidden="true"/>
                <p className='text-center py-2 md:py-3 lg:py-3  text-sm  md:text-sm font-semibold'>Nos comptes</p>
                </div>
                <ChevronRightIcon className="h-6 w-11  " aria-hidden="true" />

            </div>
            <div className=' flex  bg-[#fff] mt-7 md:mt-7 lg:mt-0  md:w-[280px] hover:bg-[#a22a2b] text-[#a22a2b] hover:text-white border-[1px] border-[#a22a2b] hover:cursor-pointer w-full lg:w-[800px] h-auto lg:h-auto py-2 md:h-auto justify-center my-auto items-center rounded-[5px] md:rounded-[5px] lg:rounded-[5px] '>
                
                <div className='flex  px-3 gap-x-2 w-[240px]'>
                <WalletIcon className="h-8 w-8 text-center mt-1 " aria-hidden="true"/>
                <p className='text-center py-2 md:py-3 lg:py-3  text-sm  md:text-sm font-semibold'>Demandes de prêt</p>
                </div>
                <ChevronRightIcon className="h-6 w-11  " aria-hidden="true" />

            </div>
            <div className=' flex  bg-[#fff] mt-7 md:mt-7 lg:mt-0  md:w-[280px] hover:bg-[#a22a2b] text-[#a22a2b] hover:text-white border-[1px] border-[#a22a2b] hover:cursor-pointer w-full lg:w-[800px] h-auto lg:h-auto py-2 md:h-auto justify-center my-auto items-center rounded-[5px] md:rounded-[5px] lg:rounded-[5px] '>
                
                <div className='flex  px-3 gap-x-2 w-[240px]'>
                <WalletIcon className="h-8 w-8 text-center mt-1 " aria-hidden="true"/>
                <p className='text-center py-2 md:py-3 lg:py-3  text-sm  md:text-sm font-semibold'>Nos cartes bancaires</p>
                </div>
                <ChevronRightIcon className="h-6 w-11  " aria-hidden="true" />

            </div>
           
        </div>
        <div className='md:block lg:flex gap-x-3 md:gap-x-6 lg:gap-x-7 md:mt-0 lg:mt-10 px-4'>
        <div className=' flex  bg-[#fff] mt-7 md:mt-7 lg:mt-0  md:w-[280px] hover:bg-[#a22a2b] text-[#a22a2b] hover:text-white border-[1px] border-[#a22a2b] hover:cursor-pointer w-full lg:w-[800px] h-auto lg:h-auto py-2 md:h-auto justify-center my-auto items-center rounded-[5px] md:rounded-[5px] lg:rounded-[5px] '>
                
                <div className='flex  px-3 gap-x-2 w-[240px]'>
                <WalletIcon className="h-8 w-8 text-center mt-1 " aria-hidden="true"/>
                <p className='text-center py-2 md:py-3 lg:py-3  text-sm  md:text-sm font-semibold'>Nos agences</p>
                </div>
                <ChevronRightIcon className="h-6 w-11  " aria-hidden="true" />

            </div>
            <div className='  flex  bg-[#fff] mt-7 md:mt-7 lg:mt-0  md:w-[280px] hover:bg-[#a22a2b] text-[#a22a2b] hover:text-white border-[1px] border-[#a22a2b] hover:cursor-pointer w-full lg:w-[800px] h-auto lg:h-auto py-2 md:h-auto justify-center my-auto items-center rounded-[5px] md:rounded-[5px] lg:rounded-[5px] '>
                
                <div className='flex  px-3 gap-x-2 w-[240px]'>
                <WalletIcon className="h-8 w-8 text-center mt-1 " aria-hidden="true"/>
                <p className='text-center py-2 md:py-3 lg:py-3  text-sm  md:text-sm font-semibold'>Méthodes de livraison</p>
                </div>
                <ChevronRightIcon className="h-6 w-11  " aria-hidden="true" />

            </div>
            <div className=' flex  bg-[#fff] mt-7 md:mt-7 lg:mt-0  md:w-[280px] hover:bg-[#a22a2b] text-[#a22a2b] hover:text-white border-[1px] border-[#a22a2b] hover:cursor-pointer w-full lg:w-[800px] h-auto lg:h-auto py-2 md:h-auto justify-center my-auto items-center rounded-[5px] md:rounded-[5px] lg:rounded-[5px] '>
                
                <div className='flex  px-3 gap-x-2 w-[240px]'>
                <WalletIcon className="h-8 w-8 text-center mt-1 " aria-hidden="true"/>
                <p className='text-center py-2 md:py-3 lg:py-3  text-sm  md:text-sm font-semibold'>La banque en ligne</p>
                </div>
                <ChevronRightIcon className="h-6 w-11  " aria-hidden="true" />

            </div>
           
        </div>
      
       
        </div> */}
        <div>
            <Questions/>
        </div>
        <img src={cap3.src} className=' hidden  md:hidden lg:flex lg:w-[1200px]  lg:h-[350px] mt-4 lg:rounded-xl'  alt=''  />
          <div className='px-4'>
          <img src={appsell.src} className=' w-full h-[350px] shadow-xl md:flex lg:hidden rounded-[20px]  md:w-[600px] md:mx-auto md:items-center lg:w-0 mt-6 lg:rounded-2xl'  alt=''  />
        
          </div>
        </div>
   
      
    </div>
  )
}

export default Aide