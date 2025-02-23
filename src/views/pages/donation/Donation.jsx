import React, { useState } from 'react'
import Plus from '../../../assets/img/plus.png'
import Minus from '../../../assets/img/Minus.png'
import Delete from '../../../assets/img/Delete.svg'

function Donation() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: 'TCS',
    logo: null,
    buttonTitle: 'Growing fintech', // Corrected typo from 'fintec' to 'fintech'
    buttonLabel: '',
    fontStyle: 'sans-serif',
    buttonColor: '#006CEB', // Default button color
    amount: '',
    donorName: '',
    italicText: false,
    boldText: false,
    border: false,
    textColor: '#FFFFFF', // Default text color
    buttonShadow: false,
    textShadow: false,
    textSize: 17, // Default text size for consistency
    cornerRadius: 5, // Initial corner radius for the button
    horizontalPadding: 10, // Initial horizontal padding for the button
    verticalPadding: 5, // Initial vertical padding for the button
    paddingSize: 10, // Default padding size
    fields: [
      { label: 'SUPPORT FOR CAUSE 1', amount: '500' }, // Example initial field
    ],
    additionalDetails: '', // Initial value for the textarea

    // Donor details fields (all disabled by default in the UI)
    emailField: {
      type: 'email',
      label: 'Email',
    },
    phoneField: {
      type: 'tel',
      label: 'Phone Number',
    },
    donorNameField: {
      type: 'text',
      label: 'Donor Name',
    },

    // New: Empty array to hold extra fields
    // Each item: { type: '', label: '', value: '', required: false }
    additionalFields: [],
  })

  const steps = [
    'Button Details',
    'Amount Details',
    'Customer Details',
    'Review and Create',
  ]

  const nextStep = () => {
    if (currentStep < steps.length) {
      // Log the form data before advancing
      console.log('Form data ::', formData)
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

  const handleFormChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ButtonDetails formData={formData} onFormChange={handleFormChange} />
      case 2:
        return <AmountDetails formData={formData} onFormChange={handleFormChange} />
      case 3:
        return <CustomerDetails formData={formData} onFormChange={handleFormChange} />
      case 4:
        return <ReviewPage formData={formData} />
      default:
        return <ButtonDetails formData={formData} onFormChange={handleFormChange} />
    }
  }

  return (
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
                  className={`flex-1 h-0.5 mx-0 ${index + 1 < currentStep ? 'bg-blue-500' : 'bg-gray-300'
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
              className={`text-xs ${currentStep === index + 1 ? 'font-semibold text-blue-500' : 'text-gray-500'
                }`}
              style={{ width: '25%' }}
            >
              {step}
            </span>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <div></div>
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
            className={`px-8 py-1 rounded-md text-white ${currentStep === steps.length
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-blue-500 hover:bg-blue-600'
              }`}
          >
            {currentStep === steps.length ? 'Create Button' : 'Next'}
          </button>
        </div>
      </div>
      {/* Step Content */}
      <div className="md:mt-[-32px]">{renderStep()}</div>
    </div>
  )
}

function ButtonDetails({ formData, onFormChange }) {
  const [logoUploadEnabled, setLogoUploadEnabled] = React.useState(true)
  const textSize = formData.textSize || 15 // Default text size

  // Function to increase text size
  const increaseTextSize = () => {
    const newSize = Math.min(textSize + 8, 28) // Max text size
    onFormChange('textSize', newSize) // Update `textSize` in formData
  }

  // Function to decrease text size
  const decreaseTextSize = () => {
    const newSize = Math.max(textSize - 8, 5) // Min text size
    onFormChange('textSize', newSize)
  }

  // Example usage of a function to handle other changes
  const adjustSize = (field, delta, min, max) => {
    const newSize = Math.max(Math.min(formData[field] + delta, max), min)
    onFormChange(field, newSize)
  }

  return (
    <>
      <h6 className="text-center md: ml-[-40px]">Create Your Button</h6>
      <div
        className="grid grid-cols-1 gap-0 sm:grid-cols-1 md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-10"
        style={{ marginTop: '23px' }}
      >
        <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
          <p className="mb-2 md:mt-[-10px] text-slate-900 font-semibold">Name and Logo</p>
          <form className="space-y-3 md:mr-5">
            {/* 1st row */}
            <div className='grid grid-cols-1 gap-6 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
              {/* Company Name Input */}
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Company name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) =>
                    onFormChange('companyName', e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                  placeholder="company name"
                />
              </div>
              {/* Logo */}
              <div className="flex items-center gap-1">
                <div className='flex items-center gap-2'>
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
                        className='cursor-pointer text-blue-600 mt-2'
                      >
                        <span className="mr-0 text-xs" style={{ textDecoration: 'underline' }}>+ Upload Logo</span>
                      </label>

                      <input
                        id="file-upload"
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            onFormChange('logo', URL.createObjectURL(file));
                          }
                        }}
                        accept="image/*"
                        className="hidden"
                        disabled={!logoUploadEnabled}
                      />
                    </div>
                    {formData.logo && (
                      <img
                        src={formData.logo}
                        alt="Company Logo"
                        className="mt-2 h-8"
                      />
                    )}
                  </div>




                </div>
              </div>
            </div>
            {/* 2nd row */}
            <div className='grid grid-cols-1 gap-6 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
              {/* Button Title Input */}
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Button Title
                </label>
                <input
                  type="text"
                  value={formData.buttonTitle}
                  onChange={(e) =>
                    onFormChange('buttonTitle', e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                  placeholder="Enter button title"
                />
              </div>
              {/* Button Label Input */}
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Button Label
                </label>
                <input
                  type="text"
                  value={formData.buttonLabel}
                  onChange={(e) =>
                    onFormChange('buttonLabel', e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                  placeholder="Button label"
                />
              </div>
            </div>
            {/* 3rd row */}
            <div className='grid grid-cols-1 gap-6 mb-0 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
              {/* Font Style Dropdown */}
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Font Style
                </label>
                <select
                  value={formData.fontStyle}
                  onChange={(e) =>
                    onFormChange('fontStyle', e.target.value)
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
            {/* 4th row */}
            <div className='grid grid-cols-1 gap-2 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
              <div className='grid grid-cols-1 gap-2 mb-0 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>
                {/* Bold Text Checkbox */}
                <div className='flex items-center gap-2 mt-1'>
                  <label className="block text-xs font-medium text-gray-700">
                    Bold
                  </label>
                  <input
                    type="checkbox"
                    checked={formData.boldText || false}
                    onChange={(e) =>
                      onFormChange('boldText', e.target.checked)
                    }
                    className="mt-1"
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                {/* Italic Text Checkbox */}
                <div className='flex items-center gap-2 mt-1'>
                  <label className="block text-xs font-medium text-gray-700">
                    Italic
                  </label>
                  <input
                    type="checkbox"
                    checked={formData.italicText || false}
                    onChange={(e) =>
                      onFormChange('italicText', e.target.checked)
                    }
                    className="mt-1"
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                {/* Text Shadow Checkbox */}
                <div className='flex items-center gap-2 mt-1 md:ml-[-0px]'>
                  <label className="block text-xs font-medium text-gray-700">
                    Shadow
                  </label>
                  <input
                    type="checkbox"
                    checked={formData.textShadow || false}
                    onChange={(e) =>
                      onFormChange('textShadow', e.target.checked)
                    }
                    className="mt-1"
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 gap-2 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
                {/* Text Size Stepper */}
                <div>
                  <div className='flex items-center gap-1 mt-2 md:ml[8px]'>
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
                        <img src={Minus} alt="" style={{ paddingTop: '2px', paddingBottom: '2px', height: '20px', width: '15px' }} />
                      </button>
                      <span className="px-2 py-0" style={{ backgroundColor: '#2A53EE', color: '#ffffff', fontSize: '12px', paddingTop: '1px', paddingBottom: '1px' }}>{textSize}</span>
                      <button
                        type="button"
                        onClick={increaseTextSize}
                        className="px-2 rounded"
                        style={{ backgroundColor: '#E8F0FF' }}
                      >
                        <img src={Plus} alt="" style={{ paddingTop: '2px', paddingBottom: '2px', height: '20px', width: '15px' }} />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Text Color Picker */}
                <div className='flex items-center gap-2' style={{ marginLeft: '44px' }}>
                  <label className="block text-xs font-medium text-gray-700">
                    Text Color
                  </label>
                  <input
                    type="color"
                    value={formData.textColor || "#000000"}
                    onChange={(e) =>
                      onFormChange('textColor', e.target.value)
                    }
                    className="mt-1 block w-6 h-7 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            <p className="mb-2 md:mt-[-10px] text-slate-900 font-semibold">Button Size</p>
            {/* 5th row */}
            <div className='grid grid-cols-1 gap-6 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2' style={{ marginTop: '5px' }}>
              {/* Stepper for Horizontal Padding */}
              <div className='flex items-center gap-2'>
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
                    <img src={Minus} alt="" style={{ paddingTop: '2px', paddingBottom: '2px', height: '20px', width: '15px' }} />
                  </button>
                  <span className="px-2" style={{ backgroundColor: '#2A53EE', color: '#ffffff', fontSize: '12px', paddingTop: '1px', paddingBottom: '1px' }}>{formData.horizontalPadding || 10}</span>
                  <button
                    type="button"
                    onClick={() => adjustSize('horizontalPadding', 5, 0, 100)}
                    className="px-2 rounded"
                    style={{ backgroundColor: '#E8F0FF' }}

                  >
                    <img src={Plus} alt="" style={{ paddingTop: '2px', paddingBottom: '2px', height: '20px', width: '15px' }} />
                  </button>
                </div>
              </div>
              {/* Stepper for Vertical Padding */}
              <div className='flex items-center gap-2 md:ml-[-80px]'>
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
                    <img src={Minus} alt="" style={{ paddingTop: '2px', paddingBottom: '2px', height: '20px', width: '15px' }} />
                  </button>
                  <span className="px-2" style={{ backgroundColor: '#2A53EE', color: '#ffffff', fontSize: '12px', paddingTop: '1px', paddingBottom: '1px' }}>{formData.verticalPadding || 10}</span>
                  <button
                    type="button"
                    onClick={() => adjustSize('verticalPadding', 5, 0, 100)}
                    className="px-2 rounded"
                    style={{ backgroundColor: '#E8F0FF' }}
                  >
                    <img src={Plus} alt="" style={{ paddingTop: '2px', paddingBottom: '2px', height: '20px', width: '15px' }} />
                  </button>
                </div>
              </div>
            </div>
            {/* 6th row */}
            <div className='grid grid-cols-1 gap-2 mb-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2' style={{ marginTop: '15px' }}>
              {/* Stepper for Corner Radius */}
              <div className='flex items-center gap-2'>
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
                    <img src={Minus} alt="" style={{ paddingTop: '2px', paddingBottom: '2px', height: '20px', width: '15px' }} />
                  </button>
                  <span className="px-2" style={{ backgroundColor: '#2A53EE', color: '#ffffff', fontSize: '12px', paddingTop: '1px', paddingBottom: '1px' }}>{formData.cornerRadius || 0}</span>
                  <button
                    type="button"
                    onClick={() => adjustSize('cornerRadius', 1, 0, 100)}
                    className="px-2 rounded"
                    style={{ backgroundColor: '#E8F0FF' }}
                  >
                    <img src={Plus} alt="" style={{ paddingTop: '2px', paddingBottom: '2px', height: '20px', width: '15px' }} />
                  </button>
                </div>
              </div>
              <div className='grid grid-cols-1 gap-2 mb-0 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>
                {/* Button Color Picker */}
                <div className='flex items-center gap-2 md:ml-[-100px]'>
                  <label className="block text-xs font-medium text-gray-700">
                    Button Color
                  </label>
                  <input
                    type="color"
                    value={formData.buttonColor || "#E8F0FF"}
                    onChange={(e) =>
                      onFormChange('buttonColor', e.target.value)
                    }
                    className="mt-1 block w-6 h-7 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                {/* Border Checkbox */}
                <div className='flex items-center gap-2 md:ml-[-50px]'>
                  <label className="block text-xs font-medium text-gray-700">
                    Border
                  </label>
                  <input
                    type="checkbox"
                    checked={formData.border || false}
                    onChange={(e) =>
                      onFormChange('border', e.target.checked)
                    }
                    className="mt-1"
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                {/* Button Shadow Checkbox */}
                <div className='flex items-center gap-2 md:ml-[-50px]'>
                  <label className="block text-xs font-medium text-gray-700">
                    Button Shadow
                  </label>
                  <input
                    type="checkbox"
                    checked={formData.buttonShadow || false}
                    onChange={(e) =>
                      onFormChange('buttonShadow', e.target.checked)
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
            paddingBottom: '30px',
          }}
        >
          <h6>Button Preview</h6>
          <div className="flex justify-center items-center py-5">
            <button
              className={`${formData.buttonShape === 'rounded' ? 'rounded-md' : ''}
                        ${formData.buttonShape === 'circular' ? 'rounded-full' : ''} 
                        ${formData.buttonShape === 'rectangular' ? 'rounded-none' : ''} 
                        text-lg flex items-center justify-between transition-all duration-300 ease-in-out
                        ${formData.border ? 'border-2 border-gray-700' : ''} 
                        ${formData.buttonShadow ? 'shadow-lg' : ''}`}
              style={{
                fontFamily: formData.fontStyle,
                fontStyle: formData.italicText ? 'italic' : 'normal',
                fontWeight: formData.boldText ? 'bold' : 'normal',
                color: formData.textColor || '#000000',
                backgroundColor: formData.buttonColor || '#E8F0FF',
                textShadow: formData.textShadow
                  ? '2px 2px 4px rgba(0, 0, 0, 0.5)'
                  : 'none',
                fontSize: `${formData.textSize}px`,
                borderRadius: `${formData.cornerRadius}px`, // Dynamically set corner radius
                paddingLeft: `${formData.horizontalPadding}px`, // Dynamically set horizontal padding
                paddingRight: `${formData.horizontalPadding}px`,
                paddingTop: `${formData.verticalPadding}px`, // Dynamically set vertical padding
                paddingBottom: `${formData.verticalPadding}px`,
              }}
            >
              {formData.logo && (
                <img src={formData.logo} alt="Logo" className="h-10 mr-2" />
              )}
              <span>
                {formData.buttonLabel && (
                  <span className="mr-2">{formData.buttonLabel}</span>
                )}
                <p className="text-xs">Secured by SabPaisa</p>
              </span>
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

function AmountDetails({ formData, onFormChange }) {
  const [showTextarea, setShowTextarea] = useState(false)
  const [showPresets, setShowPresets] = useState(true) // State to toggle preset visibility

  // Ensure at least 3 default fields exist
  if (formData.fields.length < 3) {
    onFormChange('fields', [
      { label: 'NORNAL DONATION', amount: '100' },
      { label: 'SUPPORT FOR CAUSE1', amount: '500' },
      { label: 'SUPPORT FOR CAUSE2', amount: '1000' },
    ])
  }

  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...formData.fields]
    updatedFields[index][key] = value
    onFormChange('fields', updatedFields)
  }

  const addNewField = () => {
    if (formData.fields.length < 6) {
      onFormChange('fields', [...formData.fields, { label: '', amount: '' }])
    }
  }

  const deleteField = (index) => {
    if (index > 0) {
      // Prevent first field from being deleted
      const updatedFields = formData.fields.filter((_, i) => i !== index)
      onFormChange('fields', updatedFields)
    }
  }

  const toggleTextarea = () => {
    setShowTextarea(!showTextarea)
  }

  const togglePresetVisibility = () => {
    setShowPresets(!showPresets)
  }

  return (
    <div>
      <h6 className="text-center md:ml-[-40px]">Donation Amount</h6>
      <div
        className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-10"
        style={{ marginTop: "23px" }}
      >
        <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
          <div className="grid grid-cols-1 gap-2">
            {formData.fields.map((field, index) => (
              <div key={index} className={`flex flex-col gap-2 ${index > 0 && !showPresets ? "hidden" : ""}`}>
                <div className="flex gap-4 items-center">
                  {/* Field Label Input */}
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-700">
                      Field Label
                    </label>
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) =>
                        handleFieldChange(index, "label", e.target.value)
                      }
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter label"
                    />
                  </div>
                  {/* Amount Input */}
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-700">
                      Amount
                    </label>
                    <input
                      type="number"
                      value={field.amount}
                      onChange={(e) =>
                        handleFieldChange(index, "amount", e.target.value)
                      }
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter amount"
                    />
                  </div>

                  {/* Delete Button (only for fields beyond the first one) */}
                  {index > 0 && (
                    <img src={Delete} onClick={() => deleteField(index)} alt="" className='mt-5' style={{ height: '36px', width: '36px' }} />
                  )}
                </div>

                {/* Add Description (Only for the First Field) */}
                {index === 0 && (
                  <>
                    <div
                      onClick={toggleTextarea}
                      className="text-blue-500 cursor-pointer underline text-xs"
                    >
                      {showTextarea ? "- Remove description" : "+ Add description"}
                    </div>
                    {showTextarea && (
                      <div className="mt-0">
                        <textarea
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          rows={1}
                          placeholder="Enter additional details about the payment"
                          value={formData.additionalDetails || ""}
                          onChange={(e) => onFormChange("additionalDetails", e.target.value)}
                        />
                      </div>
                    )}
                  </>
                )}

                {/* Toggle Preset Visibility Switch */}
                {index === 0 && (
                  <div className="mt-4 flex items-center gap-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={showPresets}
                        onChange={togglePresetVisibility}
                      />
                      <div
                        className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                          peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
                          peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white 
                          after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                          dark:border-gray-600 peer-checked:bg-blue-500 dark:peer-checked:bg-blue-500`}
                      ></div>
                    </label>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      {showPresets ? "Hide presets for donation amount" : "Show Presets for donation amount"}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Add Preset Button */}
          {showPresets && (
            <div className="mt-4 flex justify-between items-center text-xs">
              <button
                type="button"
                onClick={addNewField}
                disabled={formData.fields.length >= 6}
                className={`${formData.fields.length >= 6
                  ? "text-gray-700 cursor-not-allowed underline"
                  : "text-blue-500 cursor-pointer underline"
                  }`}
              >
                + Add Another Preset
              </button>
            </div>
          )}
        </div>
        {/* Button Preview */}
        <div
          className="bg-sky-50 rounded-lg md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4"
          style={{
            backgroundColor: '#E8F0FF',
            paddingLeft: '80px',
            paddingRight: '80px',
            paddingTop: '30px',
            paddingBottom: '30px',
          }}
        >
          <div>
            <p className='font-semibold text-center'>Preview</p>
          </div>
          {/* Header Section */}
          <div className="py-3 border-b text-sm font-semibold text-white text-center bg-blue-500 rounded-lg mt-1">
            <p>The Animal Foundation</p>
          </div>

          {/* Body Section with Fixed Height & Custom Scrollbar */}
          <div
            className="py-5 overflow-y-auto bg-white"
            style={{
              maxHeight: '300px',  // Fixed height
              scrollbarWidth: 'thin',  // Slim scrollbar for Firefox
              scrollbarColor: 'rgba(0, 0, 0, 0.3) transparent',  // Custom color
            }}
          >
            {formData.fields
              .filter((field) => field.label && field.amount) // Only show filled fields
              .map((field, index) => (
                <div key={index} className="px-4 py-2">
                  {/* Label */}
                  <label className="block text-gray-700 text-xs font-medium mb-1">
                    {field.label}
                  </label>
                  {/* Input Field for Amount */}
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded text-gray-900 text-xs font-semibold"
                    value={field.amount}
                    readOnly // Remove this if you want it to be editable
                  />
                </div>
              ))}
          </div>

          {/* Footer Section */}
          <div className="flex justify-between px-4 py-3 bg-white shadow-lg border-t">
            <span className="text-gray-900 font-bold">
              ₹ {formData.fields.reduce((total, field) => total + (parseInt(field.amount) || 0), 0)}
            </span>
            {/* <span className="text-gray-800">Next</span> */}
            <button class="bg-blue-500 text-white px-12 py-1 rounded" style={{ textSize: '10px' }}>Next</button>

          </div>
        </div>



      </div>
    </div>
  )
}

function CustomerDetails({ formData, onFormChange }) {
  // Add a new extra field (up to 3 total)
  const handleAddField = () => {
    const currentFields = formData.additionalFields || []
    if (currentFields.length < 3) {
      onFormChange('additionalFields', [
        ...currentFields,
        {
          type: '',       // e.g., "text", "number", "tel"
          label: '',      // e.g., "Custom Field Label"
          value: '',      // text area content
          required: false,
        },
      ])
    }
  }

  // Remove a specific extra field
  const handleRemoveField = (index) => {
    const currentFields = formData.additionalFields || []
    const updatedFields = [...currentFields]
    updatedFields.splice(index, 1)
    onFormChange('additionalFields', updatedFields)
  }

  // Update a specific property in one of the extra fields
  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...(formData.additionalFields || [])]
    updatedFields[index] = {
      ...updatedFields[index],
      [key]: value,
    }
    onFormChange('additionalFields', updatedFields)
  }

  return (
    <div>
      <h6 className="text-center">Donor Details</h6>
      <div className="grid grid-cols-1 gap-5 mt-4">
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700">
                Field Type (Email)
              </label>
              <input
                type="text"
                placeholder="e.g., 'email'"
                value={formData.emailField?.type || ''}
                onChange={(e) =>
                  onFormChange('emailField', {
                    ...formData.emailField,
                    type: e.target.value,
                  })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 cursor-not-allowed"
                disabled
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700">
                Field Label
              </label>
              <input
                type="text"
                placeholder="e.g., 'Email'"
                value={formData.emailField?.label || ''}
                onChange={(e) =>
                  onFormChange('emailField', {
                    ...formData.emailField,
                    label: e.target.value,
                  })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                disabled
              />
            </div>
          </div>
        </div>

        {/* Phone Field */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700">
                Field Type (Phone)
              </label>
              <input
                type="text"
                placeholder="e.g., 'tel'"
                value={formData.phoneField?.type || ''}
                onChange={(e) =>
                  onFormChange('phoneField', {
                    ...formData.phoneField,
                    type: e.target.value,
                  })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 cursor-not-allowed"
                disabled
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700">
                Field Label
              </label>
              <input
                type="text"
                placeholder="e.g., 'Phone'"
                value={formData.phoneField?.label || ''}
                onChange={(e) =>
                  onFormChange('phoneField', {
                    ...formData.phoneField,
                    label: e.target.value,
                  })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                disabled
              />
            </div>
          </div>
        </div>

        {/* Donor Name Field */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700">
                Field Type (Donor Name)
              </label>
              <input
                type="text"
                placeholder="e.g., 'text'"
                value={formData.donorNameField?.type || ''}
                onChange={(e) =>
                  onFormChange('donorNameField', {
                    ...formData.donorNameField,
                    type: e.target.value,
                  })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 cursor-not-allowed"
                disabled
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700">
                Field Label
              </label>
              <input
                type="text"
                placeholder="e.g., 'Donor Name'"
                value={formData.donorNameField?.label || ''}
                onChange={(e) =>
                  onFormChange('donorNameField', {
                    ...formData.donorNameField,
                    label: e.target.value,
                  })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                disabled
              />
            </div>
          </div>
        </div>

        {/* Additional Fields (Up to 3) */}
        {formData.additionalFields?.map((field, index) => (
          <div key={index} className="flex flex-col gap-2 border rounded-md p-3">
            <div className="flex items-center justify-between">
              <h6 className="text-xs font-semibold mb-0">Extra Field #{index + 1}</h6>
              <button
                type="button"
                onClick={() => handleRemoveField(index)}
                className="text-red-500 text-xs font-semibold hover:underline"
              >
                Delete
              </button>
            </div>

            {/* Field Type */}
            <div className="flex flex-col gap-1 mt-2">
              <label className="block text-xs font-medium text-gray-700">
                Field Type
              </label>
              <input
                type="text"
                placeholder="e.g., 'text', 'number', 'tel'"
                value={field.type}
                onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Field Label */}
            <div className="flex flex-col gap-1">
              <label className="block text-xs font-medium text-gray-700">
                Field Label
              </label>
              <input
                type="text"
                placeholder="e.g., 'Additional Notes'"
                value={field.label}
                onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Textarea */}
            <div className="flex flex-col gap-1">
              <label className="block text-xs font-medium text-gray-700">
                Textarea
              </label>
              <textarea
                placeholder="Enter your text here..."
                value={field.value || ''}
                onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                rows={1}
              />
            </div>

            {/* Mandatory (Checkbox) */}
            <div className="flex items-center gap-2">
              <input
                id={`required-checkbox-${index}`}
                type="checkbox"
                checked={field.required || false}
                onChange={(e) => handleFieldChange(index, 'required', e.target.checked)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor={`required-checkbox-${index}`} className="text-xs text-gray-700">
                Mandatory
              </label>
            </div>
          </div>
        ))}

        {/* Button to Add More Fields (up to 3) */}
        {(formData.additionalFields?.length || 0) < 3 && (
          <div>
            <button
              type="button"
              onClick={handleAddField}
              className="px-3 py-2 text-xs bg-indigo-600 text-white rounded-md"
            >
              Add Extra Field
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function ReviewPage({ formData }) {
  return (
    <div>
      <h6 className="text-center">Review & Create</h6>
      <pre style={{ marginTop: '28px' }}>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  )
}

export default Donation
