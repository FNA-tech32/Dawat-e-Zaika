import React, { useState } from "react";

function ContactUsForm() {
  // Step 1: Initialize form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    postalCode: "",
    company: "",
    message: "",
  });

  // Step 2: Define a function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Step 3: Define a function to handle form submission (if needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // or send it to a server
  };

  return (
    <section className="max-w-[1200px] w-full mx-auto p-5">
      <h2 className="text-[1.7rem] leading-[1.8rem] md:text-[2.5rem] md:leading-[2.6rem] font-bold">
        Have any questions? Please contact us
      </h2>
      <p className="mt-2 text-[0.8rem] md:text-[1rem] text-gray-500">
        All fields with an asterisk (*) are mandatory.
      </p>
      <form onSubmit={handleSubmit}>
        {/* First Section: Left Side */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-5">
          <FormField
            id="firstName"
            type="text"
            placeholder="First Name"
            isRequired={true}
            value={formData.firstName}
            onChange={handleInputChange}
            validationCallback={(value) =>
              value.trim().length > 0 || "First Name is required"
            }
          />
          <FormField
            id="lastName"
            type="text"
            placeholder="Last Name"
            isRequired={true}
            value={formData.lastName}
            onChange={handleInputChange}
            validationCallback={(value) =>
              value.trim().length > 0 || "Last Name is required"
            }
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-5">
          <FormField
            id="email"
            type="email"
            placeholder="Email"
            isRequired={true}
            value={formData.email}
            onChange={handleInputChange}
            validationCallback={(value) =>
              /\S+@\S+\.\S+/.test(value) || "Enter a valid email"
            }
          />
          <FormField
            id="phone"
            type="tel"
            placeholder="Telephone"
            isRequired={true}
            value={formData.phone}
            onChange={handleInputChange}
            validationCallback={(value) =>
              /^[0-9]{10}$/.test(value) || "Enter a valid phone number"
            }
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-5">
          <FormField
            id="city"
            type="text"
            placeholder="City"
            isRequired={true}
            value={formData.city}
            onChange={handleInputChange}
            validationCallback={(value) =>
              value.trim().length > 0 || "City is required"
            }
          />
          <FormField
            id="postalCode"
            type="text"
            placeholder="Postal Code"
            isRequired={true}
            value={formData.postalCode}
            onChange={handleInputChange}
            validationCallback={(value) =>
              value.trim().length > 0 || "Postal Code is required"
            }
          />
        </div>

        {/* Second Section: Right Side */}
        <div className="w-full">
          <FormField
            id="company"
            type="text"
            placeholder="Company/Organisation"
            isRequired={false}
            value={formData.company}
            onChange={handleInputChange}
            validationCallback={null}
          />
          <div className="mt-4">
            <label htmlFor="message" className="text-[14px]">
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full min-h-[150px] border border-gray-300 rounded-md outline-none p-5 mt-2"
              placeholder="Your message here"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

// Dynamic Form Field component
const FormField = ({
  id,
  type,
  placeholder,
  isRequired,
  value,
  onChange,
  validationCallback,
}) => {
  const [error, setError] = useState("");

  // Handle input change and validation
  const handleBlur = () => {
    if (validationCallback) {
      const validationError = validationCallback(value);
      setError(validationError === true ? "" : validationError);
    }
  };

  return (
    <div className="mt-4 w-full">
      <label htmlFor={id} className="text-[14px]">
        {placeholder}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        className="w-full min-h-[50px] border border-gray-300 rounded-md outline-none px-5 mt-2"
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {error && <p className="text-red-500 text-[12px]">{error}</p>}
    </div>
  );
};

export default ContactUsForm;
