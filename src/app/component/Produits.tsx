import React from 'react'

export default function Produits() {

  return (
    <div className='block lg:flex text-[#323232] gap-x-3  space-y-10 lg:space-y-0 px-4 lg:px-[50px]'>
        <div className='shadow-xl rounded-[15px]'>
            <div className=''>
            <p className='text-center  border-[#a22a2b] rounded-t-[15px] bg-[#a22a2b] py-3 font-medium text-white text-[30px]'>DIASPORA SAVINGS PACK</p>
            <p className='text-center text-[23px] py-2 border-b-[2px]'>Contains DIASPORA SAVINGS PACK</p>
            <div className='text-[18px] font-normal text-start px-2 space-y-4 py-2 h-auto lg:h-[200px] '>
                <p>•	Minimum initial deposit: USD 100 or equivalent </p>
                <p>•	Always paid promptly at the rate in effect within Equity Bank Congo.</p>
                <p>•	Only accepts local bank cards </p>
                <p>•	One free withdrawal per month</p>
                {/* <p className='text-white'>•	Frais services digitaux : 1 USD/Euro + TVA ou équivalent en CDF par mois </p>
                */}
            </div>
            <div className='border-t-[2px] text-[18px] text-start space-y-3 px-2 h-auto lg:h-[240px]'>
                <p className='py-3'>+ the E-Banking service (Usage fees: 20 USD + VAT per year)</p>
            </div>
            <div className='border-t-[2px] rounded-b-[15px] text-[20px] font-semibold hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer'>
                <p className='py-3'>Subscribe</p>
            </div>
            </div>
        </div>
        
        <div className='shadow-xl rounded-[15px]'>
            <div className=''>
            <p className='text-center  border-[#a22a2b] rounded-t-[15px] bg-[#a22a2b] py-3 font-medium text-white text-[30px]'>PACK CLASSIC DIASPORA</p>
            <p className='text-center text-[23px] py-2 border-b-[2px]'>Contains DIASPORA SAVINGS PACK</p>
            <div className='text-[18px] font-normal text-start px-2 space-y-4 py-2 h-auto lg:h-[200px] '>
                <p>•	Minimum initial deposit: USD 100 or equivalent </p>
                <p>•	Digital services fees: 1 USD/Euro + VAT or equivalent in CDF per month</p>
                <p>•	No incoming international transfer fees (except RSC)</p>
         
            </div>
            <div className='border-t-[2px] text-[18px] text-start space-y-3 px-2 h-auto lg:h-[240px]'>
                <p className='py-1'>+ Carte VISA CLASSIC</p>
                <div>
                    <p>•	Card price: 30 USD + VAT per year</p> 
                    <p>•	ATM withdrawal limit: 2500 USD per day </p> 
                    <p>•	TPE and Internet payment limit: 4500 USD per day</p>
                </div>
                <p>+ the E-Banking service (Usage fees: 20 USD + VAT per year)</p>
                <p>+ Savings account available on request</p>
            </div>
            <div className='border-t-[2px] rounded-b-[15px] text-[20px] font-semibold hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer'>
                <p className='py-3'>Subscribe</p>
            </div>
            </div>
        </div>


        <div className='shadow-xl rounded-[15px]'>
            <div className=''>
            <p className='text-center  border-[#a22a2b] rounded-t-[15px] bg-[#a22a2b] py-3 font-medium text-white text-[30px]'>PACK GOLD DIASPORA</p>
            <p className='text-center text-[23px] py-2 border-b-[2px]'>Contains Diaspora Current Account</p>
            <div className='text-[18px] font-normal text-start px-2 space-y-4 py-2 h-auto lg:h-[200px] '>
                <p>•	Minimum initial deposit: USD 100 or equivalent </p>
                <p>•	Digital services fees: 1 USD/Euro + VAT or equivalent in CDF per month </p>
                <p>•	No incoming international transfer fees (except RSC)</p>
            </div>
            <div className='border-t-[2px] text-[18px] text-start space-y-3 px-2 h-auto lg:h-[240px]'>
                <p className='py-1'>+ Carte VISA GOLD</p>
                <div>
                    <p>•	Card price: 75 USD + VAT per year</p> 
                    <p>•	ATM withdrawal limit: USD 5,000 per day </p> 
                    <p>•	TPE and Internet payment limit: USD 7,500 per day</p>
                </div>
                <p>+ the E-Banking service (Usage fees: 20 USD + VAT per year)</p>
                <p>+ Savings account available on request</p>
            </div>
            <div className='border-t-[2px] rounded-b-[15px] text-[20px] font-semibold hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer'>
                <p className='py-3'>Subscribe</p>
            </div>
            </div>
        </div>
    </div>
  )
}
