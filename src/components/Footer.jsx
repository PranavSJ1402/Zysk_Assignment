import React from "react";

// Import logo image
import Logo from '../../public/assets/Group 160.png';

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      {/* Adding a container for margins */}
      <div className="max-w-7xl mx-auto px-6 ml-12"> {/* Added ml-12 here */}
        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-sm text-gray-600">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className=" text-gray-900 font-semibold space-y-2">
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li>
                <a href="#" className="hover:underline">
                  Solutions <span className="text-green-500 text-xs bg-green-100 rounded px-1 ml-1">New</span>
                </a>
              </li>
              <li><a href="#" className="hover:underline">Tutorials</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Releases</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 font-semibold text-gray-900">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Media kit</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold  mb-4">Resources</h3>
            <ul className="space-y-2 font-semibold text-gray-900">
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Newsletter</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Help centre</a></li>
              <li><a href="#" className="hover:underline">Tutorials</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-semibold mb-4">Use cases</h3>
            <ul className="space-y-2 font-semibold text-gray-900">
              <li><a href="#" className="hover:underline">Startups</a></li>
              <li><a href="#" className="hover:underline">Enterprise</a></li>
              <li><a href="#" className="hover:underline">Government</a></li>
              <li><a href="#" className="hover:underline">SaaS centre</a></li>
              <li><a href="#" className="hover:underline">Marketplaces</a></li>
              <li><a href="#" className="hover:underline">Ecommerce</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2 font-semibold text-gray-900" >
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">GitHub</a></li>
              <li><a href="#" className="hover:underline">AngelList</a></li>
              <li><a href="#" className="hover:underline">Dribbble</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 font-semibold text-gray-900">
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
              <li><a href="#" className="hover:underline">Licenses</a></li>
              <li><a href="#" className="hover:underline">Settings</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-500 text-sm">
          <img src={Logo} alt="Company Logo" className="h-8" /> {/* Imported Logo */}
          <p>© 2077 zysktechnologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
