import React from 'react'

import Link from 'next/link';

export default function footer() {
  function submit() {}
  return (
    <footer className="container mx-auto">
        <div className="flex justify-between">
            <div className="w-1/6">
                <h6 className="text-white">Company</h6>
                <ul className="mt-4">
                    <li className="mt-2">
                        <Link href=""><a className="footer-text hover:text-teal-500 hover:underline transition-all">API Developer</a></Link>
                    </li>
                    <li className="mt-2">
                        <Link href=""><a className="footer-text hover:text-teal-500 hover:underline transition-all">Career</a></Link>
                    </li>
                    <li className="mt-2">
                        <Link href=""><a className="footer-text hover:text-teal-500 hover:underline transition-all">Our Story</a></Link>
                    </li>
                    <li className="mt-2">
                        <Link href=""><a className="footer-text hover:text-teal-500 hover:underline transition-all">New Soon</a></Link>
                    </li>
                </ul>
            </div>
            <div className="w-1/6">
                <h6 className="text-white">Student</h6>
                <ul className="mt-4">
                    <li className="mt-2">
                        <Link href=""><a className="footer-text hover:text-teal-500 hover:underline transition-all">Get Scholarship</a></Link>
                    </li>
                    <li className="mt-2">
                        <Link href=""><a className="footer-text hover:text-teal-500 hover:underline transition-all">Our Pathskills</a></Link>
                    </li>
                    <li className="mt-2">
                        <Link href=""><a className="footer-text hover:text-teal-500 hover:underline transition-all">All Features</a></Link>
                    </li>
                    <li className="mt-2">
                        <Link href=""><a className="footer-text hover:text-teal-500 hover:underline transition-all">Refund Policy</a></Link>
                    </li>
                </ul>
            </div>
            <div className="w-1/6">
                <h6 className="text-white">Touch Us</h6>
                <p className="footer-text mt-4 leading-loose">
                    Micro Centre <br />
                    Alleysi Block X No. 12 <br />
                    Jakarta Selatan, Indonesia <br />
                    +21 2020
                </p>
            </div>
            <div className="w-2/6">
                <h6 className="text-white">Promotions</h6>
                <p className="mt-4 footer-text">
                    Submit your email for new updates
                </p>
                <form onSubmit={submit}>
                    <input 
                        type="text" 
                        className="bg-white focus:outline-none border-0 px-6 py-3 mt-4"
                        placeholder="Email address"
                    />
                    <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        <div className="footer-copyright border-t pt-8 mt-8 text-center">
            <p className="footer-text">2022 Copyright MicroCourse by Raihan</p>
        </div>
    </footer>
  )
}
