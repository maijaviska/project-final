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
        .required('Conform password is required'),
        firstName: Yup.string()
        .required('Required'),
        lastName: Yup.string()
        .required('Required'),
        email: Yup.string()
        .email('Must be an email')
        .required('Required'),
        country: Yup.string()
        .required('Required'),
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