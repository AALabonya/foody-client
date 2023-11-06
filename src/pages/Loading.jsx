import Lottie from "lottie-react";
import loading from "../assets/loading.json"

const Loading = () => {
    return (
        <div>
          <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-6xl">L</h2>
      <div className="max-w-[250px]">
        <Lottie animationData={loading}></Lottie>
      </div>
      <h2 className="text-6xl">oading</h2>
    </div>   
        </div>
    );
};

export default Loading;