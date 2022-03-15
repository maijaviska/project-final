import { Form, Formik } from "formik"
import RegisterTextField from "./RegisterTextField"
import * as Yup from 'yup'

function SignUp() {
    const validate = Yup.object({
        username: Yup.string()
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
        confirmPasword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
        firstName: Yup.string()
            .required('Required'),
        lastName: Yup.string(),
        email: Yup.string()
            .email('Please enter a valid email address')
            .required('Required'),
        country: Yup.string()
            .required('Required'),
        checked: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')
    })
    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
                confirmPasword: '',
                firstName: '',
                lastName: '',
                email: '',
                country: '',
                checked: false,
            }}
            validationSchema={validate}
        >
            {formik => (
                <div>
                    <h2 className="text-uppercase text-center mb-5">Register</h2>
                    <Form>
                        <RegisterTextField label="Username" name="username" type="text" />
                        <RegisterTextField label="Password" name="password" type="password" />
                        <RegisterTextField label="Confirm password" name="confirmPasword" type="password" />
                        <RegisterTextField label="First Name" name="firstName" type="text" />
                        <RegisterTextField label="Last Name" name="lastName" type="text" />
                        <RegisterTextField label="Your Email" name="email" type="email" />
                        <RegisterTextField label="Country" name="country" type="text" />
                        <div className="form-check d-flex justify-content-center mb-5">
                            <RegisterTextField className="form-check-input me-2" type="checkbox" name="checked" />
                            <label>
                                I agree all statements in <a href="#!" className="text-body"><u>Terms &#38; Conditions</u></a>
                            </label>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body" type="submit">Register</button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default SignUp