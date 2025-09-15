import React from 'react';

export default function Footer(){
    return (
        <footer className=" mt-4 text-white">
            <div className="container-max py-6 text-sm text-white flex flex-col md:flex-row justify-center items-center">
                <div>© {new Date().getFullYear()} Jatin Garg. All rights reserved.</div>
                <div className="flex gap-4 mt-3 md:mt-0 px-18 ">
                    <a className='text-orange-300 transition-transform hover:scale-110' href="https://github.com/gargjatin03">GitHub</a>
                    <a className='text-orange-300 transition-transform hover:scale-110' href="https://www.linkedin.com/in/jatin-garg-165372179/">LinkedIn</a>
                    <a className='text-orange-300 transition-transform hover:scale-110' href="https://leetcode.com/u/gargjatin03/">LeetCode</a>
                </div>
            </div>
        </footer>
    )
}
