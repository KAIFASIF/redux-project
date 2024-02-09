import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import RHFTextField from "../../libraries/form/RHFTextField";
import Button from "../../components/Button";

const Signin = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = () => navigate("/");

  return (
    <FormProvider {...methods}>
      <div className="flex justify-center items-start h-screen   p-10 sm:p-32 lg:p-2">
        <div className="w-full p-7 rounded-lg shadow-lg space-y-5 sm:p-10  lg:w-1/4  lg:mt-40  bg-white gap-4">
          <RHFTextField name="username" label="Username / Email" required />
          <RHFTextField
            name="password"
            label="Password"
            required
            type="password"
          />

          <div className="flex justify-center">
            <Button
              label="Submit"
              onClick={methods.handleSubmit(onSubmit)}
              className="btn btn-primary "
            />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default React.memo(Signin);
