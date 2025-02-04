import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Background from '../../../assets/img/Background.svg'
import Donation from '../../../assets/img/Donation.svg'
import BuyNow from '../../../assets/img/BuyNow.svg'
import CustomPic from '../../../assets/img/Custom.svg'
import QuickPay from '../../../assets/img/QuickPay.png'


function CreateWidget() {

    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Button Details', 'Amount Details', 'Customer Details', 'Review and Create'];

    return (
        <>
            <div style={{ marginLeft: '0px', marginRight: '0px' }} className='px-5'>
                <p className="font-semibold text-center text-gray-600">Easy Progresses</p>
                <div className="flex items-center justify-between w-full">
                    {[
                        { label: 'Button Details', isActive: true },
                        { label: 'Amount Details', isActive: false },
                        { label: 'Customer Details', isActive: false },
                        { label: 'Review & Create', isActive: false }
                    ].map((step, index, array) => (
                        <React.Fragment key={step.label}>
                            <div className="flex flex-col items-center">
                                <div
                                    className={`flex items-center justify-center rounded-full text-sx font-semibold text-white
                        ${step.isActive ? 'bg-blue-500 w-4 h-4' : 'bg-gray-300 text-gray-500 w-4 h-4'}`}
                                    style={{ zIndex: 1 }}
                                >
                                    {/* {index + 1} */}
                                </div>
                                <span className="text-xs mt-1">
                                    {index === 0}
                                    {index === 1}
                                    {index === 2}
                                    {index === 3}
                                    {step.label}
                                </span>
                            </div>
                            {index !== array.length - 1 && (
                                // Only render line if it's not the last item
                                <div className="flex-grow border-t-2 border-gray-300" style={{ margin: '0 0px' }}></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className='text-center py-4 mt-4'>
                <p className="font-semibold text-center text-gray-600">Pick a Button Type</p>
                <p className='text-xs py-2'>Pick a button which meets your requirements and get a head start on collecting payments or you could build your own.</p>
            </div>

            <div className='grid grid-cols-1 gap-6 mb-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4'>

                <Link to={'/'}>
                    <div className="bg-gray-50 rounded-md shadow-md">
                        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0px 0px', overflow: 'hidden', padding: '12px' }}>
                            <img src={QuickPay} alt="Something went wrong!" style={{ height: '160px', width: '200px' }} />
                        </div>
                        <p className='font-semibold text-center text-indigo-600 text-md mt-2'>Quick-Pay Button</p>
                        <p className="text-xs text-gray-500 pl-3 pr-3 mt-3">Instant payments made simple.</p>
                        <p className="text-xs text-gray-500 pl-3 pr-3 pb-5 mt-3">Allow your customers to complete payments instantly with one click, perfect for fixed-cost services.</p>
                        <div className='py-4'></div>
                    </div>
                </Link>

                <Link to={'/admin/createwidget/donation'}>
                    <div className="bg-gray-50 rounded-md shadow-md">
                        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0px 0px', overflow: 'hidden', padding: '12px' }}>
                            <img src={Donation} alt="Something went wrong!" style={{ height: '160px', width: '200px' }} />
                        </div>
                        <p className='font-semibold text-center text-gray-600 text-md mt-2'>Donations Button</p>
                        <p className="text-xs text-gray-500 pl-3 pr-3 mt-3">Flexible donations made easy.</p>
                        <p className="text-xs text-gray-500 pl-3 pr-3 pb-5 mt-3">Empower your supporters to contribute effortlessly with preset or custom donation amounts, supporting your cause seamlessly.</p>
                        <div className='py-2'></div>
                    </div>
                </Link>

                <Link to={'/'}>
                    <div className="bg-gray-50 rounded-md shadow-md">
                        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0px 0px', overflow: 'hidden', padding: '12px', }}>
                            <img src={BuyNow} alt="Something went wrong!" style={{ height: '160px', width: '200px', opacity: 1 }} />
                        </div>
                        <p className='font-semibold text-center text-gray-600 text-md mt-2'>Buy Now Button</p>
                        <p className="text-xs text-gray-500 pl-3 pr-3 mt-3">Seamless purchases in just a few clicks.</p>
                        <p className="text-xs text-gray-500 pl-3 pr-3 pb-5 mt-3">Offer a smooth shopping experience, enabling customers to quickly select quantities and make purchases with ease.</p>
                    </div>
                </Link>

                <Link to={'/'}>
                    <div className="bg-gray-50 rounded-md shadow-md">
                        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0px 0px', overflow: 'hidden', padding: '12px' }}>
                            <img src={CustomPic} alt="Something went wrong!" style={{ height: '160px', width: '200px' }} />
                        </div>
                        <p className='font-semibold text-center text-gray-600 text-md mt-2'>Custom Button</p>
                        <p className="text-xs text-gray-500 pl-3 pr-3 mt-3">Personalised payments for unique needs.</p>
                        <p className="text-xs text-gray-500 pl-3 pr-3 pb-5 mt-3">Provide advanced customisation options, allowing users to set their own payment amounts customise forms.</p>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default CreateWidget