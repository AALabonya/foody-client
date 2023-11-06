import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
       <div>
         <div className=" flex justify-center text-center mt-10 lg:mt-[10%]">
          <img src="https://i.ibb.co/D14prxK/404-page-dssim-837x560.jpg"  className ="rounded-lg w-96" alt="" />
          
        </div>
       <div className="flex justify-center mt-5">
       <Link to="/"><button className="btn btn-outline flex justify-center">Back to Home</button></Link>
       </div>
       </div>
    );
};

export default ErrorPage;