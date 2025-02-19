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
      { label: "NORNAL DONATION", amount: "100" }, // First field (always visible)
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
      <p>Donation Details</p>
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
