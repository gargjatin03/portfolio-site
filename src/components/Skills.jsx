import React from 'react';

const skills = [
'C++', 'Python', 'MySQL', 'DSA', 'HTML', 'CSS', 'TailwindCSS', 'React', 'JavaScript ', 'Node.js', 'ExpressJS', 'MongoDB', 'Github'
]

export default function Skills(){
    return (
        <section id="skills" className="py-12 text-white">
            <h2 className="text-2xl font-semibold flex justify-center items-center transition-transform hover:scale-110 text-yellow-300">Skills</h2>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
                {skills.map((s)=> (
                <span key={s} className="px-3 py-1 rounded-full border text-sm transition-colors duration-300 hover:border-green-400 hover:text-yellow-400">{s}</span>
                ))}
            </div>
        </section>
    )
}

// export default Skills;