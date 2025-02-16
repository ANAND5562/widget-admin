import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormComponent = () => {
  const [previewLogo, setPreviewLogo] = useState(null);
  const [previewPhotos, setPreviewPhotos] = useState([]);

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company name is required"),
    logo: Yup.mixed().required("Company logo is required"),
    title: Yup.string().required("Title is required"),
    subtitle: Yup.string().required("Subtitle is required"),
    photos: Yup.array()
      .min(3, "At least 3 photos are required")
      .required("Photos are required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    terms: Yup.boolean().oneOf([true], "You must accept the terms"),
  });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Design a customized payment form</h2>

      <Formik
        initialValues={{
          companyName: "",
          logo: null,
          title: "",
          subtitle: "",
          photos: [],
          email: "",
          phone: "",
          terms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Submitted Data:", values);
          alert("Form submitted successfully!");
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="space-y-4">
            {/* Company Name */}
            <div>
              <label className="block font-semibold">Company Name:</label>
              <Field
                type="text"
                name="companyName"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Company Logo */}
            <div>
              <label className="block font-semibold">Company Logo:</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border rounded-md"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue("logo", file);
                  setPreviewLogo(URL.createObjectURL(file));
                }}
              />
              {previewLogo && <img src={previewLogo} alt="Logo Preview" className="mt-2 w-24 h-24 object-cover rounded-md border" />}
              <ErrorMessage name="logo" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Title */}
            <div>
              <label className="block font-semibold">Title:</label>
              <Field
                type="text"
                name="title"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Subtitle */}
            <div>
              <label className="block font-semibold">Subtitle:</label>
              <Field
                type="text"
                name="subtitle"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="subtitle" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Upload Photos */}
            <div>
              <label className="block font-semibold">Upload Photos (Min 3):</label>
              <input
                type="file"
                accept="image/*"
                multiple
                className="w-full p-2 border rounded-md"
                onChange={(event) => {
                  const files = Array.from(event.currentTarget.files);
                  if (files.length >= 3) {
                    setFieldValue("photos", files);
                    setPreviewPhotos(files.map((file) => URL.createObjectURL(file)));
                  }
                }}
              />
              <ErrorMessage name="photos" component="div" className="text-red-500 text-sm" />
              <div className="mt-2 flex gap-2">
                {previewPhotos.length > 0 &&
                  previewPhotos.map((src, index) => (
                    <img key={index} src={src} alt={`Photo ${index + 1}`} className="w-24 h-24 object-cover rounded-md border" />
                  ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold">Email:</label>
              <Field
                type="email"
                name="email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-semibold">Phone Number:</label>
              <Field
                type="text"
                name="phone"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center">
              <Field type="checkbox" name="terms" className="w-4 h-4 text-blue-600" />
              <label className="ml-2">I accept the terms and conditions</label>
            </div>
            <ErrorMessage name="terms" component="div" className="text-red-500 text-sm" />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold p-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
