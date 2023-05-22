
export const graphValidation =async (schema,inputsData)=>{
    const {error} = schema.validate(inputsData,{abortEarly:false});

    if(error) new Error(error)

    return true;
}