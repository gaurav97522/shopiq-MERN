import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-800 text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-bold text-violet-500">
                            Shopiq
                        </h2>

                        <p className="mt-4 text-gray-400 leading-7">
                            Shop smarter with the latest fashion, electronics,
                            accessories, and more — all in one place.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-violet-400 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/wishlist"
                                    className="hover:text-violet-400 transition"
                                >
                                    Wishlist
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/cart"
                                    className="hover:text-violet-400 transition"
                                >
                                    Cart
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/account"
                                    className="hover:text-violet-400 transition"
                                >
                                    Account
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Support
                        </h3>

                        <ul className="space-y-3">
                            <li className="hover:text-violet-400 cursor-pointer">
                                Contact Us
                            </li>

                            <li className="hover:text-violet-400 cursor-pointer">
                                FAQs
                            </li>

                            <li className="hover:text-violet-400 cursor-pointer">
                                Privacy Policy
                            </li>

                            <li className="hover:text-violet-400 cursor-pointer">
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Get in Touch
                        </h3>

                        <div className="flex items-center gap-3 mb-5">
                            <Mail size={18} />
                            <span>support@shopiq.com</span>
                        </div>

                        <div className="flex gap-4">

                            <button className="bg-zinc-800 p-3 rounded-full hover:bg-violet-600 transition">
                                <FaFacebookF size={18} />
                            </button>

                            <button className="bg-zinc-800 p-3 rounded-full hover:bg-violet-600 transition">
                                <FaInstagram size={18} />
                            </button>

                            <button className="bg-zinc-800 p-3 rounded-full hover:bg-violet-600 transition">
                                <FaTwitter size={18} />
                            </button>

                            <button className="bg-zinc-800 p-3 rounded-full hover:bg-violet-600 transition">
                                <FaGithub size={18} />
                            </button>

                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Shopiq. All Rights Reserved.
                    </p>

                    <p className="text-gray-500 text-sm mt-3 md:mt-0">
                        Built with ❤️
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;