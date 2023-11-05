import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
    <footer className="bg-gray-500 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Website Name */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-semibold text-blue-500 hover:text-blue-300">
              <img src="https://i.ibb.co/Sv1Pkzg/OIP.jpg" alt="Food Sharing Logo" className="h-14 w-16 inline rounded-lg" />
            </Link>
            <p className="text-white text-sm mt-4">
              Sharing love, one meal at a time.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2">
              Email: info@foodsharing.com
            </p>
            <p>
              Phone: +123-456-7890
            </p>
            <p>
              Address: 123 Main St, City, Country
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Social media links</h3>
            <div className="mt-2">
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
          </div>
            </div>
				{/* <ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul> */}
			</div>
          {/* Social Media Links */}
          {/* <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
          </div> */}
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Food Sharing. All rights reserved.
        </p>
      </div>
    </footer>
    );
};

export default Footer;