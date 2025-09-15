import React from 'react';

const list = [
{ title: 'FitCare', desc: 'Click if you want to be Fit 💪', repo: 'https://github.com/gargjatin03/Fitness-tracker-app'},
{ title: 'MoodWave', desc: 'A music webpage music based on your mood', repo: 'https://github.com/gargjatin03/MoodWave'},
{ title: 'Refyne', desc: 'Want to Enhance your blurred Image?', repo: 'https://github.com/gargjatin03/Refyne'},
{ title: 'SafeLend', desc: 'Bank must watch before Lending the money 🤫', repo: 'https://github.com/gargjatin03/SafeLend'},
{ title: 'MadhavSales', desc: 'Sales Dashboard', repo: 'https://github.com/gargjatin03/MadhavSales' },
{ title: 'Portfolio', desc: 'My portfolio website', repo: 'https://github.com/gargjatin03/portfolio-site' },
]

export default function Projects(){
    return (
        <section id="projects" className="py-12 text-white justify-center">
            <h2 className="text-2xl font-semibold flex items-center justify-center transition-transform text-yellow-300 hover:scale-110">Projects</h2>
                <div className="mt-6 px-4 grid grid-cols-2 sm:gri gap-6 justify-center items-center">
                    {list.map(p => (
                        <div key={p.title} className="p-4  bg-white border rounded-lg shadow-sm transition-colors duration-300 hover:border-green-400 hover:text-yellow-300">
                            <h3 className="font-semibold flex item justify-center">{p.title}</h3>
                            <p className="text-sm text-slate-400 mt-3 flex items-center justify-center">{p.desc}</p>
                            <div className="mt-4">
                                <a href={p.repo} className="text-primary underline flex items-center justify-center transition-transform hover:scale-105">View repo</a>
                            </div>
                        </div>
                        ))}
                </div>
        </section>
    )
}
