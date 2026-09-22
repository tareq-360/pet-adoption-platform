'use client'
import Link from 'next/link';


const PetDetails = ({pet}) => {
    return (
        <div className=' max-w-2xl'>
            
            <div  className="card bg-base-100 shadow-sm border">
                        <figure>
                            <img className=' h-70 rounded-md'
                                src={pet.imageUrl}
                                alt={pet.name}
                            />
                        </figure>
                    
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
                </div>
        </div>
    );
};

export default PetDetails;