'use client'
import { authClient } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => { 
    const [showPassword, setshowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit =async (data) => {
        // console.log(data, 'register')
        const { data:res, error } = await authClient.signUp.email({
            name: data.name, 
            email: data.email,
            password: data.password, 
            image: data.photo,
            callbackURL: "/signin",
        });
        console.log(res,error)
    }

    return (
        <div className="flex justify-center items-center h-[55vh]">
            <Form className="w-full max-w-96 border rounded-2xl p-4" onSubmit={handleSubmit(onSubmit)}>
                <Fieldset>
                    <h2 className='text-center font-bold text-2xl'>Register</h2>
                    <FieldGroup>
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="Enter Your Name"  {...register("name")} />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            name="photo"
                            type="text"
                        >
                            <Label>Photo URL</Label>
                            <Input placeholder="Enter Your Photo URL"  {...register("photo")} />
                            <FieldError />
                        </TextField>

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
                            <span onClick={()=>setshowPassword(!showPassword)} className="absolute top-9 right-4 cursor-pointer">
                                {showPassword ? <FaEye/> : <FaEyeSlash/>}
                            </span>
                        </TextField>
                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit">
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Cancel
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    )
}

export default RegisterPage
