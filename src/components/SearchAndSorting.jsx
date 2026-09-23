'use client'
import { Description, Label, SearchField, ListBox, Select } from "@heroui/react";
import { toLowerCase } from "better-auth";
import Link from "next/link";
import { useState } from "react";

const SearchAndSorting = ({ data }) => {
    const [sorting, setSorting] = useState(data);
    const [searchingVal, setSearchingVal] = useState([""]);
    const [searchData, setSearchData] = useState(null);


    const [selectedPet, setSelectedPet] = useState("");
    const handleCategory = (key) => {
        setSelectedPet(key);
        setSearchData(null);
        if (key === "all") {
            return setSorting(data);
        }
        const category = data.filter((pet) => pet.species?.toLowerCase() == key?.toLowerCase())
        // console.log(category);
        setSorting(category);
    }
    const handleSearch = () => {
        if (searchingVal) {
            console.log(searchingVal);
        }
        const searchAllData = data.filter(data => data.name.toLowerCase().includes(searchingVal.toLowerCase()));
        // console.log(searchAllData);
        setSearchData(searchAllData);
    }
    // console.log(sorting);
    return (
        <div>
            <div className=" container mx-auto bg-slate-900 h-20 flex justify-between items-center">

                <div className=" space-y-4 pl-5">
                    <Select
                        selectedKey={selectedPet}
                        onSelectionChange={handleCategory}
                        className=" w-40" fullWidth placeholder="Select Category">

                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="cat" textValue="Cat">
                                    Cat
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="dog" textValue="Dog">
                                    Dog
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="bird" textValue="Bird">
                                    Bird
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="all" textValue="All">
                                    All
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>

                <div className="  px-3 space-x-2">
                    <SearchField className=" flex flex-row justify-center items-center"
                        value={searchingVal}
                        onChange={(val) => setSearchingVal(val)}
                        name="search">

                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input className="" placeholder="Search Pets..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                        <button onClick={handleSearch} className=" btn btn-primary">Search</button>
                    </SearchField>
                </div>


            </div>
            {
                searchData ?

                    <div className=" grid grid-cols-4 gap-3 py-5">


                        {
                            searchData.map(pet => <div key={pet._id} className="card bg-base-100 shadow-sm border">
                                <Link href={`pets/${pet._id}`}>
                                    <figure>
                                        <img
                                            src={pet.imageUrl}
                                            alt={pet.name}
                                        />
                                    </figure>
                                </Link>
                                <div className="card-body">
                                    <h2 className=" text-center font-bold text-xl">{pet.name}</h2>
                                    <h2 className="">

                                        <div className=" border  rounded-sm flex"> <p>Vaccination : </p> <p className=" uppercase"> {pet.Vaccination}</p></div>
                                    </h2>
                                    <p>{pet.description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Fee : {pet.adoptionFee}</div>
                                        <div className="badge badge-outline">Age : {pet.age}</div>
                                    </div>

                                </div>
                                <button className=" btn btn-secondary">Adopt Now </button>
                            </div>)
                        }
                    </div>

                    :

                    selectedPet ?
                        <div className=" grid grid-cols-4 gap-3 py-5">


                            {
                                sorting.map(pet => <div key={pet._id} className="card bg-base-100 shadow-sm border">
                                    <Link href={`pets/${pet._id}`}>
                                        <figure>
                                            <img
                                                src={pet.imageUrl}
                                                alt={pet.name}
                                            />
                                        </figure>
                                    </Link>
                                    <div className="card-body">
                                        <h2 className=" text-center font-bold text-xl">{pet.name}</h2>
                                        <h2 className="">

                                            <div className=" border  rounded-sm flex"> <p>Vaccination : </p> <p className=" uppercase"> {pet.Vaccination}</p></div>
                                        </h2>
                                        <p>{pet.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">Fee : {pet.adoptionFee}</div>
                                            <div className="badge badge-outline">Age : {pet.age}</div>
                                        </div>

                                    </div>
                                    <button className=" btn btn-secondary">Adopt Now </button>
                                </div>)
                            }
                        </div>
                        :
                        <div className=" grid grid-cols-4 gap-3 py-5">


                            {
                                data.map(pet => <div key={pet._id} className="card bg-base-100 shadow-sm border">
                                    <Link href={`pets/${pet._id}`}>
                                        <figure>
                                            <img
                                                src={pet.imageUrl}
                                                alt={pet.name}
                                            />
                                        </figure>
                                    </Link>
                                    <div className="card-body">
                                        <h2 className=" text-center font-bold text-xl">{pet.name}</h2>
                                        <h2 className="">

                                            <div className=" border  rounded-sm flex"> <p>Vaccination : </p> <p className=" uppercase"> {pet.Vaccination}</p></div>
                                        </h2>
                                        <p>{pet.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">Fee : {pet.adoptionFee}</div>
                                            <div className="badge badge-outline">Age : {pet.age}</div>
                                        </div>

                                    </div>
                                    <button className=" btn btn-secondary">Adopt Now </button>
                                </div>)
                            }
                        </div>

            }
        </div>
    );
};

export default SearchAndSorting;