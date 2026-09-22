import { Spinner } from "@heroui/react";

const Loading = () => {
    return (
        <div className=" container">
            <div className=" flex items-center gap-4" >
                <Spinner />
            </div>
        </div>
    );
};

export default Loading;