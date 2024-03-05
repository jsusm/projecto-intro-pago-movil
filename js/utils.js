export function setErrors(errors) {
    for(const error in errors) {
        const errorElement = document.getElementById(`${error}-error`)
        errorElement.innerText = errors[error]
    }
}
