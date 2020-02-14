import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../Forms/FormInput";
import PropTypes from "prop-types";
import {observer, inject} from "mobx-react";

const CreateAccountForm = inject("storeAccounts")(observer((props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    try{
      const create = await props.storeAccounts.CREATE_ACCOUNT(
        { name: data.accountName }
      );
      console.log(create);
    }catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput register={register} 
        errors={errors} 
        name="accountName" 
        label="Account name" />
      <input type="submit" />
    </form>
  );
}));

CreateAccountForm.propTypes = {
  storeAccounts: PropTypes.object
};

export default CreateAccountForm;