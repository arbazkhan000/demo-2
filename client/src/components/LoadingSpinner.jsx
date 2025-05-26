import React from "react";
import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh]">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
            <p className="mt-4 text-gray-600 text-lg">
                Loading, please wait...
            </p>
        </div>
    );
};

export default LoadingSpinner;
