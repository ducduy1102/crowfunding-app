import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "../components/label";
import { Input } from "../components/input";
import FormGroup from "../components/common/FormGroup";
import { Button, ButtonGoogle } from "../components/button";
import Checkbox from "../components/checkbox/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import useToggleValue from "../hooks/useToggleValue";
import { useDispatch } from "react-redux";
import { authRegister } from "store/auth/auth-slice";

const schema = yup.object({
  name: yup.string().required("This field is required."),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required."),
  password: yup
    .string()
    .required("This field is required.")
    .min(8, "Password must be 8 character"),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  // console.log(errors);
  const dispatch = useDispatch();

  const handleSignUp = async (values) => {
    // console.log(values);
    try {
      dispatch(authRegister({ ...values, permissions: [] }));
      reset({});
    } catch (error) {}
  };
  const { value: acceptTerm, handleToggeValue: handleToggeTerm } =
    useToggleValue();
  const { value: showPassword, handleToggeValue: handleTogglePassword } =
    useToggleValue();

  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?
        <Link to={"/login"} className="font-medium underline text-primary">
          {" "}
          Login
        </Link>
      </p>
      <ButtonGoogle text="Sign up with Google"></ButtonGoogle>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text-2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            type="text"
            control={control}
            name="name"
            placeholder="Evil Shadow"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            control={control}
            name="email"
            placeholder="evilshadow@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type={`${showPassword ? "text" : "password"}`}
            control={control}
            name="password"
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggeTerm}>
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the {""}
              <span className="underline text-secondary">Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="w-full" kind="primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
