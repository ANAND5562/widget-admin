import React, { useState } from 'react';
import Plus from '../../../assets/img/plus.png';
import Minus from '../../../assets/img/Minus.png';
import Delete from '../../../assets/img/Delete.svg';

function QuickPay() {
  const [formData, setFormData] = useState({
    // Button Details
    buttonDetails: {
      companyName: 'TCS',
      logo: null,
      buttonTitle: 'Growing fintech',
      buttonLabel: '',
      fontStyle: 'sans-serif',
      buttonColor: '#006CEB',
      italicText: false,
      boldText: false,
      border: false,
      textColor: '#FFFFFF',
      buttonShadow: false,
      textShadow: false,
      textSize: 17,
      cornerRadius: 5,
      horizontalPadding: 10,
      verticalPadding: 5,
      paddingSize: 10
    },
    // Amount Details without default values
    amountDetails: {
      label: '',
      amount: ''
    },
    // Customer Details
    customerDetails: {
      emailField: {
        type: 'email',
        label: 'Email'
      },
      phoneField: {
        type: 'tel',
        label: 'Phone Number'
      },
      donorNameField: {
        type: 'text',
        label: 'Donor Name'
      },
      additionalFields: []
    }
  });

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    'Button Details',
    'Amount Details',
    'Customer Details',
    'Review and Create'
  ];

  // Update any nested field in a section
  const handleFormChange = (section, key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [key]: value
      }
    }));
  };

  // Update the additionalFields array in customerDetails
  const handleCustomerAdditionalFieldsChange = (newFields) => {
    setFormData((prevData) => ({
      ...prevData,
      customerDetails: {
        ...prevData.customerDetails,
        additionalFields: newFields
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      console.log('Form data ::', formData);
      setCurrentStep(currentStep + 1);
    } else {
      alert('Quick-Pay Widget Created Successfully!');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ButtonDetails
            buttonData={formData.buttonDetails}
            onFormChange={handleFormChange}
          />
        );
      case 2:
        return (
          <AmountDetails
            amountData={formData.amountDetails}
            onFormChange={handleFormChange}
          />
        );
      case 3:
        return (
          <CustomerDetails
            customerData={formData.customerDetails}
            onFormChange={handleFormChange}
            onAdditionalFieldsChange={handleCustomerAdditionalFieldsChange}
          />
        );
      case 4:
        return <ReviewPage formData={formData} />;
      default:
        return (
          <ButtonDetails
            buttonData={formData.buttonDetails}
            onFormChange={handleFormChange}
          />
        );
    }
  };

  return (
    <div>
      <h6 className="text-center md:mt-[-17px] py-1 font-semibold">
        Easy Progresses
      </h6>

      {/* Step Indicators */}
      <div className="flex flex-col md:ml-[195px]">
        <div className="flex justify-between items-between w-full">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center text-center flex-1">
              <div
                className={`
                  rounded-full w-3 h-3 flex items-center justify-center text-white text-sm 
                  ${currentStep === index + 1 ? 'bg-blue-500' : index + 1 < currentStep ? 'bg-blue-500' : 'bg-gray-200'}
                `}
              />
              {index !== steps.length - 1 && (
                <div
                  className={`
                    flex-1 h-0.5 mx-0
                    ${index + 1 < currentStep ? 'bg-blue-500' : 'bg-gray-300'}
                  `}
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
              className={`
                text-xs 
                ${currentStep === index + 1 ? 'font-semibold text-blue-500' : 'text-gray-500'}
              `}
              style={{ width: '25%' }}
            >
              {step}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <div />
        <div>
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-8 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none mr-2"
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            className={`
              px-8 py-1 rounded-md text-white
              ${currentStep === steps.length ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'}
            `}
          >
            {currentStep === steps.length ? 'Create Button' : 'Next'}
          </button>
        </div>
      </div>

      {/* Step Content */}
      <div className="md:mt-[-32px]">{renderStep()}</div>
    </div>
  );
}

function ButtonDetails({ buttonData, onFormChange }) {
  const [logoUploadEnabled, setLogoUploadEnabled] = useState(true);

  const increaseTextSize = () => {
    const newSize = Math.min(buttonData.textSize + 8, 28);
    onFormChange('buttonDetails', 'textSize', newSize);
  };

  const decreaseTextSize = () => {
    const newSize = Math.max(buttonData.textSize - 8, 5);
    onFormChange('buttonDetails', 'textSize', newSize);
  };

  const adjustSize = (key, delta, min, max) => {
    const newValue = Math.max(Math.min(buttonData[key] + delta, max), min);
    onFormChange('buttonDetails', key, newValue);
  };

  return (
    <>
      <h6 className="text-center md:ml-[-40px] font-semibold">
        Create Your Quick-Pay Button
      </h6>
      <div
        className="grid grid-cols-1 gap-0 sm:grid-cols-1 md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-10"
        style={{ marginTop: '23px' }}
      >
        {/* Left Form Section */}
        <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
          <p className="mb-2 md:mt-[-10px] text-slate-900 font-semibold">
            Name and Logo
          </p>
          <form className="space-y-3 md:mr-5">
            {/* 1st row */}
            <div className="grid grid-cols-1 gap-6 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Company name
                </label>
                <input
                  type="text"
                  value={buttonData.companyName}
                  onChange={(e) =>
                    onFormChange('buttonDetails', 'companyName', e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                  placeholder="company name"
                />
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <label className="block text-xs font-medium text-gray-700">
                    Add Logo
                  </label>
                  <input
                    type="checkbox"
                    checked={logoUploadEnabled}
                    onChange={(e) => setLogoUploadEnabled(e.target.checked)}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ marginLeft: '20px' }}>
                  <div className="flex items-center gap-2">
                    <div>
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer text-blue-600 mt-2"
                      >
                        <span
                          className="mr-0 text-xs"
                          style={{ textDecoration: 'underline' }}
                        >
                          + Upload Logo
                        </span>
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            onFormChange(
                              'buttonDetails',
                              'logo',
                              URL.createObjectURL(file)
                            );
                          }
                        }}
                        accept="image/*"
                        className="hidden"
                        disabled={!logoUploadEnabled}
                      />
                    </div>
                    {buttonData.logo && (
                      <img
                        src={buttonData.logo}
                        alt="Company Logo"
                        className="mt-2 h-8"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd row: Button Title & Label */}
            <div className="grid grid-cols-1 gap-6 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Button Title
                </label>
                <input
                  type="text"
                  value={buttonData.buttonTitle}
                  onChange={(e) =>
                    onFormChange('buttonDetails', 'buttonTitle', e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                  placeholder="Enter button title"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Button Label
                </label>
                <input
                  type="text"
                  value={buttonData.buttonLabel}
                  onChange={(e) =>
                    onFormChange('buttonDetails', 'buttonLabel', e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                  placeholder="Button label"
                />
              </div>
            </div>

            {/* 3rd row: Font Style */}
            <div className="grid grid-cols-1 gap-6 mb-0 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Font Style
                </label>
                <select
                  value={buttonData.fontStyle}
                  onChange={(e) =>
                    onFormChange('buttonDetails', 'fontStyle', e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                >
                  <option value="sans-serif">Sans-serif</option>
                  <option value="cursive">Cursive</option>
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="Georgia, serif">Georgia</option>
                  <option value="Courier New, monospace">Courier New</option>
                </select>
              </div>
            </div>

            {/* 4th row: Bold, Italic, Shadow, Text Size, Text Color */}
            <div className="grid grid-cols-1 gap-2 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              <div className="grid grid-cols-1 gap-2 mb-0 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                <div className="flex items-center gap-2 mt-1">
                  <label className="block text-xs font-medium text-gray-700">
                    Bold
                  </label>
                  <input
                    type="checkbox"
                    checked={buttonData.boldText}
                    onChange={(e) =>
                      onFormChange('buttonDetails', 'boldText', e.target.checked)
                    }
                    className="mt-1"
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <label className="block text-xs font-medium text-gray-700">
                    Italic
                  </label>
                  <input
                    type="checkbox"
                    checked={buttonData.italicText}
                    onChange={(e) =>
                      onFormChange('buttonDetails', 'italicText', e.target.checked)
                    }
                    className="mt-1"
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div className="flex items-center gap-2 mt-1 md:ml-[-0px]">
                  <label className="block text-xs font-medium text-gray-700">
                    Shadow
                  </label>
                  <input
                    type="checkbox"
                    checked={buttonData.textShadow}
                    onChange={(e) =>
                      onFormChange('buttonDetails', 'textShadow', e.target.checked)
                    }
                    className="mt-1"
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div>
                  <div className="flex items-center gap-1 mt-2 md:ml[8px]">
                    <label className="block text-xs font-medium text-gray-700">
                      Text Size
                    </label>
                    <div className="flex items-center space-x-0">
                      <button
                        type="button"
                        onClick={decreaseTextSize}
                        className="px-2 rounded"
                        style={{ backgroundColor: '#E8F0FF' }}
                      >
                        <img
                          src={Minus}
                          alt=""
                          style={{
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            height: '20px',
                            width: '15px'
                          }}
                        />
                      </button>
                      <span
                        className="px-2 py-0"
                        style={{
                          backgroundColor: '#2A53EE',
                          color: '#ffffff',
                          fontSize: '12px',
                          paddingTop: '1px',
                          paddingBottom: '1px'
                        }}
                      >
                        {buttonData.textSize}
                      </span>
                      <button
                        type="button"
                        onClick={increaseTextSize}
                        className="px-2 rounded"
                        style={{ backgroundColor: '#E8F0FF' }}
                      >
                        <img
                          src={Plus}
                          alt=""
                          style={{
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            height: '20px',
                            width: '15px'
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2" style={{ marginLeft: '44px' }}>
                  <label className="block text-xs font-medium text-gray-700">
                    Text Color
                  </label>
                  <input
                    type="color"
                    value={buttonData.textColor || '#000000'}
                    onChange={(e) =>
                      onFormChange('buttonDetails', 'textColor', e.target.value)
                    }
                    className="mt-1 block w-6 h-7 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            <p className="mb-2 md:mt-[-10px] text-slate-900 font-semibold">
              Button Size
            </p>
            <div
              className="grid grid-cols-1 gap-6 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
              style={{ marginTop: '5px' }}
            >
              <div className="flex items-center gap-2">
                <label className="block text-xs font-medium text-gray-700">
                  Horizontal Padding
                </label>
                <div className="flex items-center space-x-0">
                  <button
                    type="button"
                    onClick={() => adjustSize('horizontalPadding', -5, 0, 100)}
                    className="px-2 rounded"
                    style={{ backgroundColor: '#E8F0FF' }}
                  >
                    <img
                      src={Minus}
                      alt=""
                      style={{
                        paddingTop: '2px',
                        paddingBottom: '2px',
                        height: '20px',
                        width: '15px'
                      }}
                    />
                  </button>
                  <span
                    className="px-2"
                    style={{
                      backgroundColor: '#2A53EE',
                      color: '#ffffff',
                      fontSize: '12px',
                      paddingTop: '1px',
                      paddingBottom: '1px'
                    }}
                  >
                    {buttonData.horizontalPadding}
                  </span>
                  <button
                    type="button"
                    onClick={() => adjustSize('horizontalPadding', 5, 0, 100)}
                    className="px-2 rounded"
                    style={{ backgroundColor: '#E8F0FF' }}
                  >
                    <img
                      src={Plus}
                      alt=""
                      style={{
                        paddingTop: '2px',
                        paddingBottom: '2px',
                        height: '20px',
                        width: '15px'
                      }}
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 md:ml-[-80px]">
                <label className="block text-xs font-medium text-gray-700">
                  Vertical Padding
                </label>
                <div className="flex items-center space-x-0">
                  <button
                    type="button"
                    onClick={() => adjustSize('verticalPadding', -5, 0, 100)}
                    className="px-2 rounded"
                    style={{ backgroundColor: '#E8F0FF' }}
                  >
                    <img
                      src={Minus}
                      alt=""
                      style={{
                        paddingTop: '2px',
                        paddingBottom: '2px',
                        height: '20px',
                        width: '15px'
                      }}
                    />
                  </button>
                  <span
                    className="px-2"
                    style={{
                      backgroundColor: '#2A53EE',
                      color: '#ffffff',
                      fontSize: '12px',
                      paddingTop: '1px',
                      paddingBottom: '1px'
                    }}
                  >
                    {buttonData.verticalPadding}
                  </span>
                  <button
                    type="button"
                    onClick={() => adjustSize('verticalPadding', 5, 0, 100)}
                    className="px-2 rounded"
                    style={{ backgroundColor: '#E8F0FF' }}
                  >
                    <img
                      src={Plus}
                      alt=""
                      style={{
                        paddingTop: '2px',
                        paddingBottom: '2px',
                        height: '20px',
                        width: '15px'
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="grid grid-cols-1 gap-2 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
              style={{ marginTop: '15px' }}
            >
              <div className="flex items-center gap-2">
                <label className="block text-xs font-medium text-gray-700">
                  Corner Radius
                </label>
                <div className="flex items-center space-x-0">
                  <button
                    type="button"
                    onClick={() => adjustSize('cornerRadius', -1, 0, 100)}
                    className="px-2 rounded"
                    style={{ backgroundColor: '#E8F0FF' }}
                  >
                    <img
                      src={Minus}
                      alt=""
                      style={{
                        paddingTop: '2px',
                        paddingBottom: '2px',
                        height: '20px',
                        width: '15px'
                      }}
                    />
                  </button>
                  <span
                    className="px-2"
                    style={{
                      backgroundColor: '#2A53EE',
                      color: '#ffffff',
                      fontSize: '12px',
                      paddingTop: '1px',
                      paddingBottom: '1px'
                    }}
                  >
                    {buttonData.cornerRadius}
                  </span>
                  <button
                    type="button"
                    onClick={() => adjustSize('cornerRadius', 1, 0, 100)}
                    className="px-2 rounded"
                    style={{ backgroundColor: '#E8F0FF' }}
                  >
                    <img
                      src={Plus}
                      alt=""
                      style={{
                        paddingTop: '2px',
                        paddingBottom: '2px',
                        height: '20px',
                        width: '15px'
                      }}
                    />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 mb-0 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                <div className="flex items-center gap-2 md:ml-[-100px]">
                  <label className="block text-xs font-medium text-gray-700">
                    Button Color
                  </label>
                  <input
                    type="color"
                    value={buttonData.buttonColor || '#E8F0FF'}
                    onChange={(e) =>
                      onFormChange('buttonDetails', 'buttonColor', e.target.value)
                    }
                    className="mt-1 block w-6 h-7 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex items-center gap-2 md:ml-[-50px]">
                  <label className="block text-xs font-medium text-gray-700">
                    Border
                  </label>
                  <input
                    type="checkbox"
                    checked={buttonData.border}
                    onChange={(e) =>
                      onFormChange('buttonDetails', 'border', e.target.checked)
                    }
                    className="mt-1"
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div className="flex items-center gap-2 md:ml-[-50px]">
                  <label className="block text-xs font-medium text-gray-700">
                    Button Shadow
                  </label>
                  <input
                    type="checkbox"
                    checked={buttonData.buttonShadow}
                    onChange={(e) =>
                      onFormChange('buttonDetails', 'buttonShadow', e.target.checked)
                    }
                    className="mt-1"
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Button Preview */}
        <div
          className="bg-sky-50 rounded-lg md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 text-center"
          style={{
            backgroundColor: '#E8F0FF',
            paddingLeft: '80px',
            paddingRight: '80px',
            paddingTop: '30px',
            paddingBottom: '30px'
          }}
        >
          <p className="font-semibold">Button Preview</p>
          <div className="flex justify-center items-center py-5">
            <button
              className={`
                text-lg flex items-center justify-between
                transition-all duration-300 ease-in-out
                ${buttonData.border ? 'border-2 border-gray-700' : ''}
                ${buttonData.buttonShadow ? 'shadow-lg' : ''}
              `}
              style={{
                fontFamily: buttonData.fontStyle,
                fontStyle: buttonData.italicText ? 'italic' : 'normal',
                fontWeight: buttonData.boldText ? 'bold' : 'normal',
                color: buttonData.textColor,
                backgroundColor: buttonData.buttonColor,
                textShadow: buttonData.textShadow
                  ? '2px 2px 4px rgba(0, 0, 0, 0.5)'
                  : 'none',
                fontSize: `${buttonData.textSize}px`,
                borderRadius: `${buttonData.cornerRadius}px`,
                paddingLeft: `${buttonData.horizontalPadding}px`,
                paddingRight: `${buttonData.horizontalPadding}px`,
                paddingTop: `${buttonData.verticalPadding}px`,
                paddingBottom: `${buttonData.verticalPadding}px`
              }}
            >
              {buttonData.logo && (
                <img src={buttonData.logo} alt="Logo" className="h-10 mr-2" />
              )}
              <span>
                {buttonData.buttonLabel && (
                  <span className="mr-2">{buttonData.buttonLabel}</span>
                )}
                <p className="text-xs">Secured by SabPaisa</p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function AmountDetails({ amountData, onFormChange }) {
  const handleLabelChange = (e) => {
    onFormChange('amountDetails', 'label', e.target.value);
  };

  const handleAmountChange = (e) => {
    onFormChange('amountDetails', 'amount', e.target.value);
  };

  return (
    <div>
      <h6 className="text-center md:ml-[-40px] font-semibold">
        Customise Amount
      </h6>
      <p className="text-center text-xs md:ml-[-40px]">
        Customise your button as per your requirement. You can give it a
        customer-specific or fixed amount.
      </p>
      <div
        className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-10"
        style={{ marginTop: '23px' }}
      >
        {/* Left: Single Field */}
        <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
          <div className="grid grid-cols-1 gap-2">
            <div className="flex gap-4 items-center">
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-700">
                  Field Label
                </label>
                <input
                  type="text"
                  value={amountData.label}
                  onChange={handleLabelChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter label (e.g. Donation)"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-700">
                  Amount
                </label>
                <input
                  type="number"
                  value={amountData.amount}
                  onChange={handleAmountChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter amount"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right: Preview Section */}
        <div
          className="bg-sky-50 rounded-lg md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4"
          style={{
            backgroundColor: '#E8F0FF',
            paddingLeft: '80px',
            paddingRight: '80px',
            paddingTop: '30px',
            paddingBottom: '30px'
          }}
        >
          <div>
            <p className="font-semibold text-center">Preview</p>
          </div>
          {/* Header */}
          <div
            className="py-3 border-b text-sm font-semibold text-white text-center bg-blue-500 rounded-lg mt-1"
          >
            <p>The Animal Foundation</p>
          </div>
          {/* Body */}
          <div
            className="py-5 overflow-y-auto bg-white"
            style={{
              maxHeight: '300px',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0, 0, 0, 0.3) transparent'
            }}
          >
            {amountData.label && amountData.amount ? (
              <div className="px-4 py-2">
                <label className="block text-gray-700 text-xs font-medium mb-1">
                  {amountData.label}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded text-gray-900 text-xs font-semibold"
                  value={amountData.amount}
                  readOnly
                />
              </div>
            ) : (
              <p className="text-center text-sm text-gray-500">
                No amount specified
              </p>
            )}
            <div style={{ marginTop: '140px' }}></div>
          </div>
          {/* Footer */}
          <div className="flex justify-between px-4 py-3 bg-white shadow-lg border-t">
            <span className="text-gray-900 font-bold">
              ₹ {parseInt(amountData.amount) || 0}
            </span>
            <button
              className="bg-blue-500 text-white px-12 py-1 rounded"
              style={{ textSize: '10px' }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerDetails({ customerData, onFormChange, onAdditionalFieldsChange }) {
  const handleAddField = () => {
    const currentFields = customerData.additionalFields || [];
    if (currentFields.length < 3) {
      // Initialize new field as a date field by default, including properties for both single and range selections.
      onAdditionalFieldsChange([
        ...currentFields,
        { 
          type: 'date', 
          label: '', 
          required: false,
          dateType: 'single',      // "single" or "range"
          defaultDate: '',         // For single date selection
          defaultStartDate: '',    // For range: start date
          defaultEndDate: ''       // For range: end date
        }
      ]);
    }
  };

  const handleRemoveField = (index) => {
    const currentFields = customerData.additionalFields || [];
    const updatedFields = [...currentFields];
    updatedFields.splice(index, 1);
    onAdditionalFieldsChange(updatedFields);
  };

  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...(customerData.additionalFields || [])];
    updatedFields[index] = {
      ...updatedFields[index],
      [key]: value
    };
    onAdditionalFieldsChange(updatedFields);
  };

  const handleCoreFieldUpdate = (fieldName, updates) => {
    onFormChange('customerDetails', fieldName, {
      ...customerData[fieldName],
      ...updates
    });
  };

  return (
    <div>
      <h6 className="text-center md:ml-[-40px] font-semibold">Payer Details</h6>
      <p className="text-center text-xs md:ml-[-40px]">
        Supporters will fill this form before making the final payment
      </p>
      <div
        className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-10"
        style={{ marginTop: '23px' }}
      >
        {/* Left Section: Configure Fields */}
        <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
          <div className="grid grid-cols-1 gap-5 mt-1">
            {/* Core Fields (Email, Phone, Donor Name) */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-700">
                    Email Field Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 'email'"
                    value={customerData.emailField.type}
                    onChange={(e) =>
                      handleCoreFieldUpdate('emailField', { type: e.target.value })
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-700">
                    Email Field Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 'Email'"
                    value={customerData.emailField.label}
                    onChange={(e) =>
                      handleCoreFieldUpdate('emailField', { label: e.target.value })
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            {/* Phone Field */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-700">
                    Phone Field Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 'tel'"
                    value={customerData.phoneField.type}
                    onChange={(e) =>
                      handleCoreFieldUpdate('phoneField', { type: e.target.value })
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-700">
                    Phone Field Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 'Phone'"
                    value={customerData.phoneField.label}
                    onChange={(e) =>
                      handleCoreFieldUpdate('phoneField', { label: e.target.value })
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            {/* Donor Name Field */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-700">
                    Donor Name Field Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 'text'"
                    value={customerData.donorNameField.type}
                    onChange={(e) =>
                      handleCoreFieldUpdate('donorNameField', { type: e.target.value })
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-700">
                    Donor Name Field Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 'Donor Name'"
                    value={customerData.donorNameField.label}
                    onChange={(e) =>
                      handleCoreFieldUpdate('donorNameField', { label: e.target.value })
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            {/* Additional Fields (Up to 3) */}
            {customerData.additionalFields?.map((field, index) => (
              <div key={index} className="grid grid-cols-1 gap-2 border rounded-md p-2">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-700">
                        Field Type
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 'text', 'number', 'tel'"
                        value={field.type}
                        onChange={(e) =>
                          handleFieldChange(index, 'type', e.target.value)
                        }
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-700">
                        Field Label
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 'Additional Notes'"
                        value={field.label}
                        onChange={(e) =>
                          handleFieldChange(index, 'label', e.target.value)
                        }
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <img
                      onClick={() => handleRemoveField(index)}
                      src={Delete}
                      alt="Delete"
                      className="mt-5"
                      style={{ height: '36px', width: '36px', cursor: 'pointer' }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <div className="flex-1">
                      <textarea
                        placeholder="Add helper text"
                        value={field.reason || ''}
                        onChange={(e) =>
                          handleFieldChange(index, 'reason', e.target.value)
                        }
                        style={{ width: '308px' }}
                        className="mt-1 block px-3 py-0 border border-gray-300 shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="flex-1 ml-[-52px]">
                      <div className="flex items-center justify-between mt-0">
                        <div className="flex items-center gap-2">
                          <input
                            id={`required-checkbox-${index}`}
                            type="checkbox"
                            checked={field.required || false}
                            onChange={(e) =>
                              handleFieldChange(index, 'required', e.target.checked)
                            }
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                          <label
                            htmlFor={`required-checkbox-${index}`}
                            className="text-xs text-gray-700"
                          >
                            Mandatory
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* For date fields, render a date picker or date range picker */}
                {field.type === 'date' && (
                  <>
                    <div className="flex flex-col gap-2 mt-2">
                      <label className="block text-xs font-medium text-gray-700">
                        Date Selection Type
                      </label>
                      <select
                        value={field.dateType}
                        onChange={(e) =>
                          handleFieldChange(index, 'dateType', e.target.value)
                        }
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="single">Single Date</option>
                        <option value="range">Date Range</option>
                      </select>
                    </div>
                    {field.dateType === 'single' && (
                      <div className="flex flex-col gap-2 mt-2">
                        <label className="block text-xs font-medium text-gray-700">
                          Select Date
                        </label>
                        <input
                          type="date"
                          value={field.defaultDate || ''}
                          onChange={(e) =>
                            handleFieldChange(index, 'defaultDate', e.target.value)
                          }
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    )}
                    {field.dateType === 'range' && (
                      <div className="flex flex-col gap-2 mt-2">
                        <label className="block text-xs font-medium text-gray-700">
                          Select Start Date
                        </label>
                        <input
                          type="date"
                          value={field.defaultStartDate || ''}
                          onChange={(e) =>
                            handleFieldChange(index, 'defaultStartDate', e.target.value)
                          }
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <label className="block text-xs font-medium text-gray-700 mt-2">
                          Select End Date
                        </label>
                        <input
                          type="date"
                          value={field.defaultEndDate || ''}
                          onChange={(e) =>
                            handleFieldChange(index, 'defaultEndDate', e.target.value)
                          }
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            {(customerData.additionalFields?.length || 0) < 3 && (
              <div
                className="text-blue-500 cursor-pointer underline text-xs"
                onClick={handleAddField}
              >
                + Add Another Field
              </div>
            )}
          </div>
        </div>
        {/* Right Section: Preview */}
        <div
          className="bg-sky-50 rounded-lg md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4"
          style={{
            backgroundColor: '#E8F0FF',
            paddingLeft: '80px',
            paddingRight: '80px',
            paddingTop: '30px',
            paddingBottom: '30px'
          }}
        >
          <div>
            <p className="font-semibold text-center">Preview</p>
          </div>
          {/* Header */}
          <div
            className="py-3 border-b text-sm font-semibold text-white text-center bg-blue-500 rounded-lg mt-1"
          >
            <p>The Animal Foundation</p>
          </div>
          {/* Body */}
          <div
            className="py-5 overflow-y-auto bg-white"
            style={{
              maxHeight: '300px',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0, 0, 0, 0.3) transparent'
            }}
          >
            <div className="px-4 py-2">
              <label className="block text-gray-700 text-xs font-medium mb-1">
                {customerData.emailField.label}
              </label>
              <div className="border rounded px-3 py-2 text-xs text-gray-900">
                {customerData.emailField.type} Field
              </div>
            </div>
            <div className="px-4 py-2">
              <label className="block text-gray-700 text-xs font-medium mb-1">
                {customerData.phoneField.label}
              </label>
              <div className="border rounded px-3 py-2 text-xs text-gray-900">
                {customerData.phoneField.type} Field
              </div>
            </div>
            <div className="px-4 py-2">
              <label className="block text-gray-700 text-xs font-medium mb-1">
                {customerData.donorNameField.label}
              </label>
              <div className="border rounded px-3 py-2 text-xs text-gray-900">
                {customerData.donorNameField.type} Field
              </div>
            </div>
            {customerData.additionalFields?.map((field, index) => (
              <div key={index} className="px-4 py-2">
                <label className="block text-gray-700 text-xs font-medium mb-1">
                  {field.label || `Custom Field #${index + 1}`}
                </label>
                <div className="border rounded px-3 py-2 text-xs text-gray-900">
                  {field.type === 'date' ? (
                    field.dateType === 'single' ? (
                      <input
                        type="date"
                        value={field.defaultDate || ''}
                        onChange={(e) =>
                          handleFieldChange(index, 'defaultDate', e.target.value)
                        }
                        className="w-full text-xs focus:outline-none"
                      />
                    ) : (
                      <>
                        <input
                          type="date"
                          value={field.defaultStartDate || ''}
                          onChange={(e) =>
                            handleFieldChange(index, 'defaultStartDate', e.target.value)
                          }
                          className="w-full text-xs focus:outline-none mb-2"
                        />
                        <input
                          type="date"
                          value={field.defaultEndDate || ''}
                          onChange={(e) =>
                            handleFieldChange(index, 'defaultEndDate', e.target.value)
                          }
                          className="w-full text-xs focus:outline-none"
                        />
                      </>
                    )
                  ) : (
                    <>
                      {field.type || 'text'} Field
                      {field.required && ' (Required)'}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Footer */}
          <div className="text-center text-md px-4 py-3 bg-blue-500 shadow-lg border-t text-white">
            Preceed to Pay
          </div>
        </div>
      </div>
    </div>
  );
}


function ReviewPage({ formData }) {
  const { buttonDetails, amountDetails, customerDetails } = formData;
  return (
    <div className="container mx-auto">
      <h6 className="text-center font-semibold">Review and Create</h6>
      <p className="text-center text-xs">
        Customers will see the button and forms as shown below
      </p>
      <div
        className="flex flex-col md:flex-row gap-12 justify-center"
        style={{ marginTop: '60px', paddingLeft: '80px', paddingRight: '80px' }}
      >
        {/* Button Preview Section */}
        <div className="flex-1">
          <div className="flex justify-center">
            <button
              className={`
                text-lg flex items-center justify-between px-4 py-2
                transition-all duration-300 ease-in-out
                ${buttonDetails.border ? 'border-2 border-gray-700' : ''}
                ${buttonDetails.buttonShadow ? 'shadow-lg' : ''}
              `}
              style={{
                fontFamily: buttonDetails.fontStyle,
                fontStyle: buttonDetails.italicText ? 'italic' : 'normal',
                fontWeight: buttonDetails.boldText ? 'bold' : 'normal',
                color: buttonDetails.textColor,
                backgroundColor: buttonDetails.buttonColor,
                textShadow: buttonDetails.textShadow
                  ? '2px 2px 4px rgba(0, 0, 0, 0.5)'
                  : 'none',
                fontSize: `${buttonDetails.textSize}px`,
                borderRadius: `${buttonDetails.cornerRadius}px`,
                paddingLeft: `${buttonDetails.horizontalPadding}px`,
                paddingRight: `${buttonDetails.horizontalPadding}px`,
                paddingTop: `${buttonDetails.verticalPadding}px`,
                paddingBottom: `${buttonDetails.verticalPadding}px`
              }}
            >
              {buttonDetails.logo && (
                <img src={buttonDetails.logo} alt="Logo" className="h-10 mr-2" />
              )}
              <span>
                {buttonDetails.buttonLabel && (
                  <span className="mr-2">{buttonDetails.buttonLabel}</span>
                )}
                <p className="text-xs">Secured by SabPaisa</p>
              </span>
            </button>
          </div>
        </div>
        {/* Quick-Pay Amount Preview Section */}
        <div className="flex-1 shadow ml-[-40px]">
          {/* Header */}
          <div
            className="py-3 border-b text-sm font-semibold text-white text-center bg-blue-500 mt-0"
          >
            <p>The Animal Foundation</p>
          </div>
          {/* Body */}
          <div
            className="py-5 overflow-y-auto bg-white"
            style={{
              maxHeight: '300px',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0, 0, 0, 0.3) transparent'
            }}
          >
            {amountDetails.label && amountDetails.amount ? (
              <div className="px-4 py-2">
                <label className="block text-gray-700 text-xs font-medium mb-1">
                  {amountDetails.label}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded text-gray-900 text-xs font-semibold"
                  value={amountDetails.amount}
                  readOnly
                />
              </div>
            ) : (
              <p className="text-center text-sm text-gray-500">
                No amount specified
              </p>
            )}
            <div style={{ marginTop: '190px' }}></div>
          </div>
          {/* Footer */}
          <div className="flex justify-between px-4 py-3 bg-white shadow-lg border-t mt-1">
            <span className="text-gray-900 font-bold">
              ₹ {parseInt(amountDetails.amount) || 0}
            </span>
            <button className="bg-blue-500 text-white px-4 py-1 rounded">
              Next
            </button>
          </div>
        </div>
        {/* Customer Information Preview Section */}
        <div className="flex-1 shadow">
          <div
            className="py-3 border-b text-sm font-semibold text-white text-center bg-blue-500 mt-0"
          >
            The Animal Foundation
          </div>
          <div
            className="py-5 overflow-y-auto bg-white"
            style={{
              maxHeight: '300px',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0, 0, 0, 0.3) transparent'
            }}
          >
            <div className="px-4 py-2">
              <label className="block text-gray-700 text-xs font-medium mb-1">
                {customerDetails.emailField.label}
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded text-gray-900 text-xs font-semibold"
                value={`${customerDetails.emailField.type} Field`}
                readOnly
              />
            </div>
            <div className="px-4 py-2">
              <label className="block text-gray-700 text-xs font-medium mb-1">
                {customerDetails.phoneField.label}
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded text-gray-900 text-xs font-semibold"
                value={`${customerDetails.phoneField.type} Field`}
                readOnly
              />
            </div>
            <div className="px-4 py-2">
              <label className="block text-gray-700 text-xs font-medium mb-1">
                {customerDetails.donorNameField.label}
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded text-gray-900 text-xs font-semibold"
                value={`${customerDetails.donorNameField.type} Field`}
                readOnly
              />
            </div>
            {customerDetails.additionalFields?.map((field, index) => (
              <div key={index} className="px-4 py-2">
                <label className="block text-gray-700 text-xs font-medium mb-1">
                  {field.label || `Custom Field #${index + 1}`}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded text-gray-900 text-xs font-semibold"
                  value={`${field.type || 'text'} Field${field.required ? ' (Required)' : ''}`}
                  readOnly
                />
              </div>
            ))}
          </div>
          <div className="text-center text-md px-4 py-3 bg-blue-500 shadow-lg border-t text-white mt-3">
            Preceed to Pay
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickPay;