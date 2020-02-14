import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../Forms/FormInput";

const CreateGoalForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => { console.log(data); };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput register={register}
        errors={errors}
        name="description"
        label="Description" />
      <FormInput register={register}
        errors={errors}
        name="rate"
        label="Interest rate" />
      <FormInput register={register}
        errors={errors}
        name="startDate"
        label="Start date" />
      <FormInput register={register}
        errors={errors}
        name="years"
        label="Years to save" />
      <FormInput register={register}
        errors={errors}
        name="monthly"
        label="Monthly savings" />
      <FormInput register={register}
        errors={errors}
        name="start"
        label="Start amount" />
      <input ref={register}
        type="checkbox" 
        placeholder="accounts" 
        name="accounts"  />
             
      <input type="submit" />
    </form>
  );
};


export default CreateGoalForm;