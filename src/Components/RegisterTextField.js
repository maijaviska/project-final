import { ErrorMessage, useField } from "formik"

function RegisterTextField({ label, ...props }) {
    const [field, meta] = useField(props)
    console.log(field, meta)
    return (
        <div className="form-outline mb-4">
            <span style={{color: "#FF0000"}}><ErrorMessage name={field.name}  /></span>
            <input 
                className="form-control form-control-lg"
                {...field} {...props}
                autoComplete="off"
            />
            <label className="form-label" htmlFor={field.name}>{label}</label>
        </div>
    )
}
export default RegisterTextField