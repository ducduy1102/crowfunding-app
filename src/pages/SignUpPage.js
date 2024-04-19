import React, { useState } from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "../components/label";
import { Input } from "../components/input";
import FormGroup from "../components/common/FormGroup";
import { Button } from "../components/button";
import Checkbox from "../components/checkbox/Checkbox";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const handleSignUp = (values) => {
    console.log(values);
  };
  const [acceptTerm, setAcceptTerm] = useState(false);
  const handleToggeTerm = () => {
    setAcceptTerm(!acceptTerm);
  };
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?
        <Link to={"/sign-in"} className="font-medium underline text-primary">
          {" "}
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span>Sign up with Google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text-2">
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
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            control={control}
            name="email"
            placeholder="evilshadow@gmail.com"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type="password"
            control={control}
            name="password"
            placeholder="Create a password"
          ></Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggeTerm}>
            <p className="flex-1 text-sm text-text2">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the {""}
              <span className="underline text-secondary">Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
