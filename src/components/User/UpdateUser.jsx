"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

export function UpdateUser() {
    const onSubmit = async(e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;
        console.log(image, name)

        await authClient.updateUser({
            image,
            name
        })
    }
    return (
        <Modal>
            <div className={'text-center my-3'}>
                <Button variant="secondary" > <FaEdit />Update Your Profile</Button>
            </div>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update User</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="text">
                                        <Label>Image URl</Label>
                                        <Input placeholder="Enter Your Image URL" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit">Update</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}