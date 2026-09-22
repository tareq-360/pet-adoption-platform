import PetDetails from '@/components/PetDetails';

const PetDetail = async({params}) => {
    const {id}= await params;
    // console.log(id);
    const res= await fetch(`http://localhost:5000/details/${id}`);
    const pet= await res.json();
    // console.log(pet);
    return (
        <div>
            <PetDetails pet={pet}></PetDetails>
        </div>
    );
};

export default PetDetail;