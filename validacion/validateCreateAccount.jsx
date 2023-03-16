export default function validateCreateAccount(valores) {
   
    let errores = {};

    // Constante para validar un email.
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar name
    if(!valores.name) {
        errores.name = "Name is required";
    };

    // Validar email
    if(!valores.email) {
        errores.email = "Email is required";
    } else if (!regexEmail.test(valores.email)) {
        errores.email = "Email is invalid";
    };

    // Validar password
    if(!valores.password) {
        errores.password = "Password is required";
    } else if (valores.password.length < 6 ) {
        errores.password = "Password must be at least 6 characters";
    };

    return errores;
}