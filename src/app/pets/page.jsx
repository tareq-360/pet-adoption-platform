import SearchAndSorting from "@/components/SearchAndSorting";
import Link from "next/link";



const AllPets = async () => {
    const allPets = await fetch(`http://localhost:5000/all-pets`)
    const data = await allPets.json();
    // console.log(data);
    return (
        <div className=" pt-5 container mx-auto">
            <SearchAndSorting data={data}></SearchAndSorting>
            
        </div>
    );
};

export default AllPets;