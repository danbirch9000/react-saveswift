import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../Forms/FormInput";

const CreateAccountForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => { console.log(data); };

  console.log(watch("accountName"));
  // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput register={register} 
        errors={errors} 
        name="accountName" 
        label="Account name" />
      <FormInput register={register} 
        errors={errors} 
        name="value" 
        label="Account value" />
      <input type="submit" />
    </form>
  );
};


export default CreateAccountForm;