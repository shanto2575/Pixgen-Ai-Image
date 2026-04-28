"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignInPage = () => {
    const [showPassword, setshowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        // console.log(data, 'login')
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });
        console.log({ res, error }, 'data and error')
    }

    return (
        <div className="flex justify-center items-center h-[45vh]">
            <Form className="flex w-96 flex-col gap-4 border rounded-2xl p-5 space-y-3"
                onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter Your Email"  {...register("email")} />
                    <FieldError />

                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                    className='relative'
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password"  {...register("password", { required: true })} />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                    <span onClick={() => setshowPassword(!showPassword)} className="absolute top-9 right-4 cursor-pointer">
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                </TextField>

                <div className="flex gap-2 justify-between">
                    <Button type="submit" className='w-2xl'>
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
                <p className="text-center">Dont Have any Acount ? <Link href={'/signup'} className="text-blue-500 font-semibold">Register</Link></p>
            </Form>
        </div>
    )
}

export default SignInPage