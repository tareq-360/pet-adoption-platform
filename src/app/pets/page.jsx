


const AllPets = async () => {
    const allPets = await fetch(`http://localhost:5000/all-pets`)
    const data = await allPets.json();
    console.log(data);
    return (
        <div className=" grid grid-cols-4">
            {
                data.map(pet => <div key={pet._id} className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Card Title
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllPets;