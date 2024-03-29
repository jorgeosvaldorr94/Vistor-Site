import React, { useState, useEffect } from 'react';



const useValidation = (stateInicial, validar, fn) => {

    const [valores, guardarValores ] = useState(stateInicial)
    const [errores, guardarErrores] = useState({});
    const [submitForm, guardarSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm) {
            const noErrores = Object.keys(errores).length === 0;

            if(noErrores) {
                fn(); //fn = Funcion que se ejecuta en el componente
            };
            guardarSubmitForm(false);
        }
    }, [errores]);

    // Funcion para cuando el usuario escribe algo
    const handleChange = e => {
        guardarValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    };

    // Funcion cuando se hace submit
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    };

    // Cuando se realiza el evento de Blur
    const handleBlur = () => {
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
    };

    return {
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange,
        handleBlur
    };
}
 
export default useValidation;