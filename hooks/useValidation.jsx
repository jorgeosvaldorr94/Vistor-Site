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
    }, []);

    // Funcion para cuando el usuario escribe algo
    const handleChange = e => {
        guardarValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    };

    // Funcion cuan se hace submit
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    };

    return {
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange
    };
}
 
export default useValidation;