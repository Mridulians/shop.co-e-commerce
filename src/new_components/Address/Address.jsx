import { useState, useEffect } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    city: "",
    state: "",
    address: "",
    pincode: "",
    addressType: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile Number is invalid";
    }
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode is invalid";
    }
    if (!formData.addressType)
      newErrors.addressType = "Address Type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      mobileNumber: true,
      city: true,
      state: true,
      address: true,
      pincode: true,
      addressType: true,
    });
    if (validate()) {
      // Submit the form
      console.log("Form data:", formData);
    }
  };

  useEffect(() => {
    // Validate form whenever formData changes
    setIsFormValid(validate());
  }, [formData]);
  const navigate = useNavigate();

  const gofromaddress = () => {
    navigate("/order");
  };
  return (
    <div className="pt-[8rem]">
      <h2 className="text-center mb-[2rem] font-bold font-sans text-[2rem]">
        ADD ADDRESS
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-gray-600 px-[2rem] py-[1rem] w-fit m-auto bg-orange-100"
      >
        
        <InputField type1="text" name1 = "firstName" type2="text" name2 = "lastName" fName ="First Name" lName = "Last Name" value1={formData.firstName} value2={formData.lastName} onchange={handleChange} onBlur={handleBlur} touchedFirst = {touched.firstName} touchedSecond = {touched.lastName} errorFirst = {errors.firstName} errorSecond = {errors.lastName}/>

        <InputField type1="email" name1 = "email" type2="number" name2 = "mobileNumber" fName ="Email" lName = "Mobile Number" value1={formData.email} value2={formData.mobileNumber} onchange={handleChange} onBlur={handleBlur} touchedFirst = {touched.email} touchedSecond = {touched.mobileNumber} errorFirst = {errors.email} errorSecond = {errors.mobileNumber}/>

        <InputField type1="text" name1 = "city" type2="text" name2 = "state" fName ="City" lName = "State" value1={formData.city} value2={formData.state} onchange={handleChange} onBlur={handleBlur} touchedFirst = {touched.city} touchedSecond = {touched.state} errorFirst = {errors.city} errorSecond = {errors.state}/>

        <InputField type1="text" name1 = "address" type2="number" name2 = "pincode" fName ="Address" lName = "Pincode" value1={formData.address} value2={formData.pincode} onchange={handleChange} onBlur={handleBlur} touchedFirst = {touched.address} touchedSecond = {touched.pincode} errorFirst = {errors.address} errorSecond = {errors.pincode}/>


        <div className="flex flex-col justify-center mt-[1rem]">
          <label htmlFor="addressType">Address Type</label>
          <div className="flex flex-row gap-[4rem] mt-[1rem]">
            <div>
              <input
                type="radio"
                id="home"
                name="addressType"
                value="home"
                checked={formData.addressType === "home"}
                onChange={handleChange}
              />
              <label htmlFor="home">Home</label>
            </div>
            <div>
              <input
                type="radio"
                id="work"
                name="addressType"
                value="work"
                checked={formData.addressType === "work"}
                onChange={handleChange}
              />
              <label htmlFor="work">Work</label>
            </div>
          </div>
          {touched.addressType && errors.addressType && (
            <p className="text-red-500">{errors.addressType}</p>
          )}
        </div>

        <div className="flex justify-center mt-[2rem]">
          <button
            type="submit"
            onClick={gofromaddress}
            disabled={!isFormValid}
            className={`bg-red-600 font-bold font-sans rounded-lg text-white py-[1rem] px-[2rem] ${
              !isFormValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
