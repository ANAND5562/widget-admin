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
    buttonColor: '#006CEB', // Default button color, previously noted to be set to '#2A53EE' but using '#0D9488'
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
        return (
          <ButtonDetails
            formData={formData}
            onFormChange={handleFormChange}
          />
        )
      case 2:
        return (
          <AmountDetails
            formData={formData}
            onFormChange={handleFormChange}
          />
        )
      case 3:
        return (
          <CustomerDetails
            formData={formData}
            onFormChange={handleFormChange}
          />
        )
      case 4:
        return <ReviewPage formData={formData} />
      default:
        return (
          <ButtonDetails
            formData={formData}
            onFormChange={handleFormChange}
          />
        )
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
            {currentStep === steps.length
              ? 'Create Button'
              : 'Next'}
          </button>
        </div>
      </div>
      {/* Step Content */}
      <div className="md:mt-[-32px]">{renderStep()}</div>
    </div>
  )
}

function ButtonDetails({ formData, onFormChange }) {
  const [logoUploadEnabled, setLogoUploadEnabled] = React.useState(true);
  const textSize = formData.textSize || 15; // Default text size
  // Function to increase text size
  const increaseTextSize = () => {
    const newSize = Math.min(textSize + 8, 28); // Max text size 50px
    onFormChange('textSize', newSize); // Update `textSize` in formData
  };
  // Function to decrease text size
  const decreaseTextSize = () => {
    const newSize = Math.max(textSize - 8, 5); // Min text size 10px
    onFormChange('textSize', newSize); // Update `textSize` in formData
  };
  // Function to increase or decrease text size
  const adjustSize = (field, delta, min, max) => {
    const newSize = Math.max(Math.min(formData[field] + delta, max), min);
    onFormChange(field, newSize);
  };
  return (
    <>
      <h6 className="text-center md: ml-[-40px]">Create Your Button</h6>
      <p>Button details</p>
    </>
  );
}

function AmountDetails({ formData, onFormChange }) {
  const [showTextarea, setShowTextarea] = useState(false);
  const [showPresets, setShowPresets] = useState(true); // State to toggle preset visibility

  // Ensure at least 3 default fields exist
  if (formData.fields.length < 3) {
    onFormChange("fields", [
      { label: "", amount: "" }, // First field (always visible)
      { label: "SUPPORT FOR CAUSE1", amount: "500" }, // Second field (can be hidden)
      { label: "SUPPORT FOR CAUSE2", amount: "1000" }, // Third field (can be hidden)
    ]);
  }

  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...formData.fields];
    updatedFields[index][key] = value;
    onFormChange("fields", updatedFields);
  };

  const addNewField = () => {
    if (formData.fields.length < 6) {
      onFormChange("fields", [...formData.fields, { label: "", amount: "" }]);
    }
  };

  const deleteField = (index) => {
    if (index > 0) {
      // Prevent first field from being deleted
      const updatedFields = formData.fields.filter((_, i) => i !== index);
      onFormChange("fields", updatedFields);
    }
  };

  const toggleTextarea = () => {
    setShowTextarea(!showTextarea);
  };

  const togglePresetVisibility = () => {
    setShowPresets(!showPresets);
  };

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
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter amount"
                    />
                  </div>

                  {/* Delete Button (only for fields beyond the first one) */}
                  {index > 0 && (
                    <img src={Delete} onClick={() => deleteField(index)} alt="" className='mt-5' style={{ height: '44px', width: '44px' }} />
                  )}
                </div>

                {/* Add Description (Only for the First Field) */}
                {index === 0 && (
                  <>
                    <div
                      onClick={toggleTextarea}
                      className="text-blue-500 cursor-pointer underline"
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
            <div className="mt-4 flex justify-between items-center">
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
          className="bg-sky-50 rounded-lg md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 text-center"
          style={{
            backgroundColor: '#E8F0FF',
            paddingLeft: '80px',
            paddingRight: '80px',
            paddingTop: '30px',
            paddingBottom: '30px',
          }}
        >
          <h6 className="font-semibold">Donation Amount Preview</h6>

          {/* Dynamically Render Entered Donations */}
          <div className="py-5">
            {formData.fields
              .filter((field) => field.label && field.amount) // Only show filled fields
              .map((field, index) => (
                <div key={index} className="flex justify-between px-4 py-1 border-b">
                  <span className="text-gray-700 text-sm font-medium">{field.label}</span>
                  <span className="text-gray-900 text-sm font-semibold">₹{field.amount}</span>
                </div>
              ))}

            {/* Display Total Donation Amount */}
            <div className="flex justify-between px-4 py-2 mt-3 bg-gray-200 font-semibold">
              <span className="text-gray-800">Total</span>
              <span className="text-gray-900">
                ₹ {formData.fields.reduce((total, field) => total + (parseInt(field.amount) || 0), 0)}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function CustomerDetails({ formData, onFormChange }) {
  return (
    <div>
      <h6 className="text-center">Donor Details</h6>
      <input
        type="text"
        value={formData.donorName}
        onChange={(e) => onFormChange('donorName', e.target.value)}
        placeholder="Enter donor's name"
        style={{ marginTop: '28px' }}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  )
}
function ReviewPage({ formData }) {
  return (
    <div>
      <h6 className="text-center">Review & Create</h6>
      <pre style={{ marginTop: '28px' }}>
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  )
}
export default Donation
