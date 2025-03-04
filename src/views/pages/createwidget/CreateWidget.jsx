import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Background from '../../../assets/img/Background.svg'
import Donation from '../../../assets/img/Donation.svg'
import BuyNow from '../../../assets/img/BuyNow.svg'
import CustomPic from '../../../assets/img/Custom.svg'
import QuickPay from '../../../assets/img/QuickPay.png'


function CreateWidget() {

    const [activeStep, setActiveStep] = useState(0);
    const [currentStep, setCurrentStep] = useState(1)

    const steps = [
        'Button Details',
        'Amount Details',
        'Customer Details',
        'Review and Create',
    ]
    const nextStep = () => {
        if (currentStep < steps.length) {
            // Log the form data before advancing
            //   console.log('Form data ::', formData)
            setCurrentStep(currentStep + 1)
        } else {
            // Show alert when finishing the form
            alert('Form completed successfully!')
        }
    }
    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    return (
        <>
            <div>
                <h6 className="text-center md:mt-[-17px] py-1 font-semibold">Easy Progresses</h6>
                <div className="flex flex-col md:ml-[195px]">
                    {/* Step Indicators and Titles */}
                    <div className="flex justify-between items-between w-full">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex items-center text-center flex-1"
                            >
                                <div
                                    className={`rounded-full w-3 h-3 flex items-center justify-center text-white text-sm ${currentStep === index + 1
                                        ? 'bg-blue-500'
                                        : index + 1 < currentStep
                                            ? 'bg-blue-500'
                                            : 'bg-gray-200'
                                        }`}
                                />
                                {index !== steps.length - 1 && (
                                    <div
                                        className={`flex-1 h-0.5 mx-0 ${index + 1 < currentStep
                                            ? 'bg-blue-500'
                                            : 'bg-gray-300'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Step Titles */}
                    <div className="flex justify-between md:ml-[-50px]">
                        {steps.map((step, index) => (
                            <span
                                key={index}
                                className={`text-xs ${currentStep === index + 1
                                    ? 'font-semibold text-blue-500'
                                    : 'text-gray-500'
                                    }`}
                                style={{ width: '25%' }}
                            >
                                {step}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className='text-center py-4 mt-4'>
                <p className="font-semibold text-center text-gray-600">Pick a Button Type</p>
                <p className='text-xs py-2'>Pick a button which meets your requirements and get a head start on collecting payments or you could build your own.</p>
            </div>

            <div className='grid grid-cols-1 gap-6 mb-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4'>
                <Link to={'/admin/createwidget/quickpay'}>
                    <div className="bg-gray-50 rounded-md shadow-md flex flex-col h-full">
                        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0px 0px', overflow: 'hidden', padding: '12px' }}>
                            <img src={QuickPay} alt="Something went wrong!" className="w-full h-[210px] object-cover" />
                        </div>
                        <div className="flex flex-col flex-grow px-3 pb-5">
                            <p className='font-semibold text-center text-indigo-600 text-md mt-2'>Quick-Pay Button</p>
                            <p className="text-xs text-gray-500 mt-3">Instant payments made simple.</p>
                            <p className="text-xs text-gray-500 mt-3 flex-grow">Allow your customers to complete payments instantly with one click, perfect for fixed-cost services.</p>
                        </div>
                    </div>
                </Link>

                <Link to={'/admin/createwidget/donation'}>
                    <div className="bg-gray-50 rounded-md shadow-md flex flex-col h-full">
                        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0px 0px', overflow: 'hidden', padding: '12px' }}>
                            <img src={Donation} alt="Something went wrong!" className="w-full h-[210px] object-cover" />
                        </div>
                        <div className="flex flex-col flex-grow px-3 pb-5">
                            <p className='font-semibold text-center text-gray-600 text-md mt-2'>Donations Button</p>
                            <p className="text-xs text-gray-500 mt-3">Flexible donations made easy.</p>
                            <p className="text-xs text-gray-500 mt-3 flex-grow">Empower your supporters to contribute effortlessly with preset or custom donation amounts, supporting your cause seamlessly.</p>
                        </div>
                    </div>
                </Link>

                <Link to={'/admin/createwidget/buynowbutton'}>
                    <div className="bg-gray-50 rounded-md shadow-md flex flex-col h-full">
                        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0px 0px', overflow: 'hidden', padding: '12px' }}>
                            <img src={BuyNow} alt="Something went wrong!" className="w-full h-[210px] object-cover" />
                        </div>
                        <div className="flex flex-col flex-grow px-3 pb-5">
                            <p className='font-semibold text-center text-gray-600 text-md mt-2'>Buy Now Button</p>
                            <p className="text-xs text-gray-500 mt-3">Seamless purchases in just a few clicks.</p>
                            <p className="text-xs text-gray-500 mt-3 flex-grow">Offer a smooth shopping experience, enabling customers to quickly select quantities and make purchases with ease.</p>
                        </div>
                    </div>
                </Link>

                <Link to={'/admin/createwidget/customform'}>
                    <div className="bg-gray-50 rounded-md shadow-md flex flex-col h-full">
                        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0px 0px', overflow: 'hidden', padding: '12px' }}>
                            <img src={CustomPic} alt="Something went wrong!" className="w-full h-[210px] object-cover" />
                        </div>
                        <div className="flex flex-col flex-grow px-3 pb-5">
                            <p className='font-semibold text-center text-gray-600 text-md mt-2'>Custom Button</p>
                            <p className="text-xs text-gray-500 mt-3">Personalized payments for unique needs.</p>
                            <p className="text-xs text-gray-500 mt-3 flex-grow">Provide advanced customization options, allowing users to set their own payment amounts and customize forms.</p>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default CreateWidget