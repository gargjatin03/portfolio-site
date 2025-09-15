import React from 'react';

export default function Contact({onSubmit}){
    const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic (Formspree / EmailJS)
    onSubmit(); // notify parent
  };
    

    return (
        <section id="contact" className="py-12 text-white">
            <h2 className="text-2xl font-semibold flex items-center justify-center  transition-transform text-yellow-300 hover:scale-110">Contact</h2>
            <p className="mt-3 text-slate-100 flex items-center justify-center">🤝 Want to connect with me ? Drop a message.</p>


            <form onSubmit={handleSubmit} id='form' className="mt-6  grid gap-3 w-full max-w-md mx-auto" action="https://formspree.io/f/mdklvlwy" method="POST">
                <input name="name" required className="p-3 border flex rounded items-center justify-center transition-transform hover:text-yellow-300" placeholder="Your name" />
                <input name="email" type="email" required className="p-3 border rounded transition-transform hover:text-yellow-300" placeholder="you@example.com" />
                <textarea name="message" rows="5" required className="p-3 border rounded transition-transform hover:text-yellow-300" placeholder="Message"></textarea>
                <input type="hidden" name="_redirect" value="http://localhost:5173/thanks" />
                <div className='flex justify-center items-center'>
                    <button type="submit" className="px-5 py-3 rounded-md bg-accent text-white border transition-transform hover:text-yellow-300">Send message</button>
                </div>
            </form>
        </section>
    )
}