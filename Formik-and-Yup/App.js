//this is App.js component
// npm install formik yup

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function App() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least of 6 characters")
      .required("Password is required"),
  });

  const handleFormSubmit = (values, { resetForm }) => {
    console.log("Form Values: ", values);
    alert("Form Submitted");
    resetForm(); //
  };
  return (
    <div>
      <h1>Simple Login Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {()=>(
            <Form>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email"/>
                    <ErrorMessage name="email" component="p" ></ErrorMessage>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password"/>
                    <ErrorMessage name="password" component="p" ></ErrorMessage>
                </div>
                <button type="submit">Submit</button>
            </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
