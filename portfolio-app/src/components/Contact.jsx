import React from 'react';

export default function Contact() {
  return (
    <section id="contactpage" className="min-h-screen bg-[#1a352c] px-6 py-20 text-[#F5F0E6] md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-[#B6C598]">Contact</p>
        <h2 className="mb-4 font-['Playfair_Display'] text-5xl font-bold text-[#D8B25C] md:text-7xl">Let&apos;s connect</h2>
        <p className="mb-10 max-w-2xl text-[#F5F0E6]/70">Have a question, an opportunity, or just want to say hello? Send me a message.</p>

        <form action="https://formspree.io/f/xvkogvve" method="POST" className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <input name="name" type="text" required placeholder="Your name" className="w-full border border-[#D8B25C]/60 bg-[#F5F0E6]/5 px-4 py-4 text-[#F5F0E6] outline-none placeholder:text-[#F5F0E6]/30 focus:border-[#D8B25C]" />
            <input name="email" type="email" required placeholder="Your email" className="w-full border border-[#D8B25C]/60 bg-[#F5F0E6]/5 px-4 py-4 text-[#F5F0E6] outline-none placeholder:text-[#F5F0E6]/30 focus:border-[#D8B25C]" />
          </div>

          <input name="topic" type="text" required placeholder="Topic" className="w-full border border-[#D8B25C]/60 bg-[#F5F0E6]/5 px-4 py-4 text-[#F5F0E6] outline-none placeholder:text-[#F5F0E6]/30 focus:border-[#D8B25C]" />

          <textarea name="message" required rows="7" placeholder="Write your message..." className="w-full resize-none border border-[#D8B25C]/60 bg-[#F5F0E6]/5 px-4 py-4 text-[#F5F0E6] outline-none placeholder:text-[#F5F0E6]/30 focus:border-[#D8B25C]" />

          <button type="submit" className="border border-[#D8B25C] bg-[#D8B25C] px-8 py-4 font-mono text-sm uppercase tracking-[0.15em] text-[#1a352c] transition hover:bg-transparent hover:text-[#D8B25C]">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}