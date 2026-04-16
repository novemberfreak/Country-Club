/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

export default function CountryClubWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: ''
  });

  const menuSections = {
    starters: [
      { name: 'Gamberi Al Burro E Limone', price: 'GH₵ 210', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Sautéed Vegetables', price: 'GH₵ 110', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop' }
    ],
    mains: [
      { name: 'Salmon', price: 'GH₵ 220', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Beef Bourguignon', price: 'GH₵ 260', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Lasagna All\'Emiliana', price: 'GH₵ 180', image: 'https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Ravioli Alla Carbonara', price: 'GH₵ 190', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop' }
    ],
    desserts: [
      { name: 'Velvet Cake', price: 'GH₵ 75', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop' }
    ],
    drinks: [
      { name: 'Mojito', price: 'GH₵ 95', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Passion Cocktail', price: 'GH₵ 90', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop' }
    ]
  };

  const MenuCard: React.FC<{ item: { name: string, price: string, image: string } }> = ({ item }) => (
    <div className="group rounded-[12px] overflow-hidden bg-[#121212] border border-white/5 hover:border-[#C5A059]/30 transition-all duration-300">
      <div className="overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-72 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" referrerPolicy="no-referrer" />
      </div>
      <div className="p-6 flex justify-between items-start">
        <div>
          <h3 className="text-[20px] font-serif text-white mb-2">{item.name}</h3>
          <p className="text-[#888888] text-[14px]">Premium serving</p>
        </div>
        <span className="text-[#C5A059] font-bold text-[18px]">{item.price}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur border-b border-white/10 px-8 py-5 flex justify-between items-center">
        <h1 className="text-[24px] font-serif text-[#C5A059] uppercase tracking-[2px]">Country Club</h1>
        <div className="flex gap-8 text-[12px] uppercase tracking-[1px] text-[#888888]">
          <button onClick={() => setCurrentPage('home')} className={`transition-colors hover:text-white cursor-pointer ${currentPage === 'home' ? 'text-white' : ''}`}>Home</button>
          <button onClick={() => setCurrentPage('menu')} className={`transition-colors hover:text-white cursor-pointer ${currentPage === 'menu' ? 'text-white' : ''}`}>Menu</button>
          <button onClick={() => setCurrentPage('reserve')} className={`transition-colors hover:text-white cursor-pointer ${currentPage === 'reserve' ? 'text-white' : ''}`}>Reserve</button>
        </div>
      </nav>

      {currentPage === 'home' && (
        <section className="min-h-screen flex items-center justify-center text-center px-6 pt-24 relative border-b border-white/10">
          <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
          <div className="relative z-10 max-w-5xl">
            <p className="uppercase tracking-[3px] text-[12px] text-[#C5A059] mb-4 font-semibold">Luxury Dining • Madina</p>
            <h1 className="text-[72px] font-serif mb-6 leading-none font-normal">Country Club</h1>
            <p className="text-[18px] mb-10 text-[#888888] leading-[1.6]">Luxury dining in Madina, Accra</p>
            <div className="flex gap-5 justify-center mb-16">
              <button onClick={() => setCurrentPage('menu')} className="px-[32px] py-[18px] rounded-[4px] bg-[#C5A059] text-[#050505] text-[13px] uppercase tracking-[1px] font-semibold transition-all hover:opacity-90 border-none cursor-pointer">View Menu</button>
              <button onClick={() => setCurrentPage('reserve')} className="px-[32px] py-[18px] rounded-[4px] border border-white/30 bg-transparent text-white text-[13px] uppercase tracking-[1px] font-semibold transition-all hover:bg-white/5 cursor-pointer">Reserve Table</button>
            </div>
            <div className="bg-[#121212]/80 backdrop-blur rounded-[12px] p-10 max-w-2xl mx-auto text-left border border-white/5">
              <h2 className="text-[24px] font-serif mb-6 text-white">Location</h2>
              <p className="text-[16px] text-[#888888] mb-2">📍 Luciana Blvd, Madina, Accra, Ghana</p>
              <p className="text-[16px] text-[#888888] mb-4">Near Trassaco / Country Club Estate</p>
              <p className="text-[16px] text-[#C5A059] font-semibold">📞 057 410 0005</p>
            </div>
          </div>
        </section>
      )}

      {currentPage === 'menu' && (
        <section className="min-h-screen pt-32 px-8 pb-24">
          <div className="max-w-7xl mx-auto space-y-20">
            <div className="text-center">
              <h2 className="text-[56px] font-serif text-white mb-4 font-normal">Our Menu</h2>
              <p className="text-[#888888] text-[18px]">Premium dishes and handcrafted drinks</p>
            </div>

            <div>
              <h3 className="text-[32px] font-serif mb-8 text-[#C5A059] border-b border-white/10 pb-4">Starters</h3>
              <div className="grid md:grid-cols-2 gap-8">{menuSections.starters.map((item, i) => <MenuCard key={i} item={item} />)}</div>
            </div>

            <div>
              <h3 className="text-[32px] font-serif mb-8 text-[#C5A059] border-b border-white/10 pb-4">Main Course</h3>
              <div className="grid md:grid-cols-2 gap-8">{menuSections.mains.map((item, i) => <MenuCard key={i} item={item} />)}</div>
            </div>

            <div>
              <h3 className="text-[32px] font-serif mb-8 text-[#C5A059] border-b border-white/10 pb-4">Desserts</h3>
              <div className="grid md:grid-cols-2 gap-8">{menuSections.desserts.map((item, i) => <MenuCard key={i} item={item} />)}</div>
            </div>

            <div>
              <h3 className="text-[32px] font-serif mb-8 text-[#C5A059] border-b border-white/10 pb-4">Drinks</h3>
              <div className="grid md:grid-cols-2 gap-8">{menuSections.drinks.map((item, i) => <MenuCard key={i} item={item} />)}</div>
            </div>
          </div>
        </section>
      )}

      {currentPage === 'reserve' && (
        <section className="min-h-screen pt-32 px-8 pb-24 flex items-center">
          <div className="max-w-3xl mx-auto w-full rounded-[12px] bg-[#121212] border border-white/5 shadow-2xl p-12">
            <h2 className="text-[40px] font-serif mb-4 text-center font-normal">Reserve a Table</h2>
            <p className="text-center text-[#888888] mb-10 text-[16px]">Book a romantic dinner, private event, or celebration</p>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              const message = `New Reservation Request\n\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}`;
              const url = `https://wa.me/233574100005?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank');
            }} className="space-y-6">
              <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} required className="w-full p-[18px] rounded-[4px] bg-[#050505] border border-white/10 focus:border-[#C5A059] outline-none transition-colors text-white placeholder-[#888888]" placeholder="Full Name" />
              <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required type="tel" className="w-full p-[18px] rounded-[4px] bg-[#050505] border border-white/10 focus:border-[#C5A059] outline-none transition-colors text-white placeholder-[#888888]" placeholder="Phone Number" />
              <div className="grid grid-cols-2 gap-6">
                <input value={form.date} onChange={e => setForm({...form, date: e.target.value})} required type="date" className="w-full p-[18px] rounded-[4px] bg-[#050505] border border-white/10 focus:border-[#C5A059] outline-none transition-colors text-white placeholder-[#888888] [color-scheme:dark]" />
                <input value={form.time} onChange={e => setForm({...form, time: e.target.value})} required type="time" className="w-full p-[18px] rounded-[4px] bg-[#050505] border border-white/10 focus:border-[#C5A059] outline-none transition-colors text-white placeholder-[#888888] [color-scheme:dark]" />
              </div>
              <input value={form.guests} onChange={e => setForm({...form, guests: e.target.value})} required type="number" min="1" className="w-full p-[18px] rounded-[4px] bg-[#050505] border border-white/10 focus:border-[#C5A059] outline-none transition-colors text-white placeholder-[#888888]" placeholder="Number of People" />
              <button type="submit" className="w-full p-[18px] rounded-[4px] bg-[#C5A059] text-[#050505] text-[13px] uppercase tracking-[1px] font-semibold transition-all hover:opacity-90 border-none cursor-pointer mt-4">
                Send Reservation via WhatsApp
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}
