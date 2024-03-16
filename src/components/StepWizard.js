import { useState } from 'react';

const StepWizard = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="dark:text-white flex justify-center items-center">
      <div className="flex flex-col items-center">
        {steps.map((step, index) => (
          <div key={index} className="py-6 flex flex-col items-center">
            <h2 className="text-4xl font-semibold mb-2">{step.title}</h2>
            <p className="text-2xl dark:text-white mt-4 text-gray-600">{step.description}</p>
            {index !== steps.length - 1 && (
              <div className="border-r-2 border-gray-300 h-12 absolute top-0 bottom-0 right-0 transform translate-x-1/2" />
            )}
            <button onClick={() => handleStepChange(index)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">{step.buttonName}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepWizard;
