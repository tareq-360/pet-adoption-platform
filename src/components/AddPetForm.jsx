'use client'
import { TextField,Label,Input,FieldError,Select,ListBox,TextArea,Button } from "@heroui/react";


const AddPetForm = () => {

    const onSubmit=async(e)=>{
        e.preventDefault();
        const form= e.currentTarget;
        const formData=new FormData(form);
        const data=Object.fromEntries(formData.entries());
        // console.log(data);

        const res= await fetch('http://localhost:5000/add-pet',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        const serverRes= await res.json();
        console.log(res.ok);
        if(res.ok){
            alert("add Success");
            form.reset();
        }
        
    }
    return (
        <div className="">
            
            <form
                onSubmit={onSubmit}
                className="p-10 space-y-8 w-3xl mx-auto border border-indigo-600"
            >
                <h1 className=" font-extrabold text-2xl ">Add Pet</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pet Name */}
                    <div className="md:col-span-2">
                        <TextField name="name" isRequired>
                            <Label>Pet Name</Label>
                            <Input placeholder="Bali" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Country */}
                    <TextField name="breed" isRequired>
                        <Label>Breed</Label>
                        <Input placeholder="Chinese" className="rounded-2xl" />
                        <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                        <Select
                            name="species"
                            isRequired
                            className="w-full"
                            placeholder="Select Species"
                        >
                            <Label>Species</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="cat" textValue="cat">
                                        Cat
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="dog" textValue="dog">
                                        Dog
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="bird" textValue="bird">
                                        Bird
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>
                    <div>
                        <Select
                            name="gender"
                            isRequired
                            className="w-full"
                            placeholder="Select Gender"
                        >
                            <Label>Gender</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="male" textValue="male">
                                        Male
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="female" textValue="female">
                                        Female
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                   
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>
                    <div>
                        <Select
                            name="healthStatus"
                            isRequired
                            className="w-full"
                            placeholder="Health Status"
                        >
                            <Label>Health Status</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="good" textValue="good">
                                        Good
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="not good" textValue="not good">
                                        Not Good
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="seek" textValue="seek">
                                        Seek
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>
                    <div>
                        <Select
                            name="Vaccination"
                            isRequired
                            className="w-full"
                            placeholder="Select Vaccination Status"
                        >
                            <Label>Vaccination</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="yes" textValue="yes">
                                        Yes
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="no" textValue="no">
                                        No
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    
                                    
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Price */}
                    <TextField name="adoptionFee" type="number" isRequired>
                        <Label>Fee (USD)</Label>
                        <Input
                            type="number"
                            placeholder="2000"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField name="age" isRequired>
                        <Label>Age</Label>
                        <Input
                            placeholder="2 month"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>
                    <TextField name="location" isRequired>
                        <Label>Location</Label>
                        <Input
                            placeholder="Dhaka"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>


                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                        <TextField name="imageUrl" isRequired>
                            <Label>Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://example.com/bali-paradise.jpg"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                    <div className="md:col-span-2">
                        <TextField name="email" defaultValue={`example@gmail.com`} >
                            <Label>User Email</Label>
                            <Input
                                value={`example@gmail.com`}
                                readOnly
                                type="email"
                                placeholder={`john@gmail.com`}
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField name="description" isRequired>
                            <Label>Description</Label>
                            <TextArea
                                placeholder="Describe the travel experience..."
                                className="rounded-3xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                </div>

                {/* Buttons */}

                <Button
                    type="submit"
                    variant="outline"
                    
                    className=" rounded-none w-full bg-cyan-500 text-white"
                >
                    Add Destination
                </Button>
            </form>
        </div>
    );
};

export default AddPetForm;