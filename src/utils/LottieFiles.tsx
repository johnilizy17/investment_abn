import React from "react";
import Lottie from "lottie-react";

const LottieFiles = ({ groovyWalkAnimation }: any) => {
    return (
        <Lottie animationData={groovyWalkAnimation} loop={true} />
    )
};

export default LottieFiles;