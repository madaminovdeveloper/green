import React, { useState } from 'react';
import { 
  FiSearch, 
  FiShoppingCart, 
  FiLogOut, 
  FiHeart, 
  FiEye, 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiArrowRight,
  FiChevronRight
} from 'react-icons/fi';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';

// --- FIGMA MA'LUMOTLARI ---
const categories = [
  { id: 1, name: 'House Plants', count: 33 },
  { id: 2, name: 'Potter Plants', count: 12 },
  { id: 3, name: 'Seeds', count: 65 },
  { id: 4, name: 'Small Plants', count: 39 },
  { id: 5, name: 'Big Plants', count: 23 },
  { id: 6, name: 'Succulents', count: 17 },
  { id: 7, name: 'Trerrariums', count: 19 },
  { id: 8, name: 'Gardening', count: 13 },
  { id: 9, name: 'Accessories', count: 18 },
];

const sizes = [
  { id: 1, name: 'Small', count: 119 },
  { id: 2, name: 'Medium', count: 86 },
  { id: 3, name: 'Large', count: 78 },
];

const products = [
  { id: 1, name: 'Barberton Daisy', price: '$119.00', img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=500' },
  { id: 2, name: 'Angel Wing Begonia', price: '$169.00', img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500' },
  { id: 3, name: 'African Violet', price: '$199.00', oldPrice: '$229.00', discount: '13% OFF', img: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=500' },
  { id: 4, name: 'Beach Spider Lily', price: '$129.00', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500' },
  { id: 5, name: 'Blushing Bromeliad', price: '$139.00', img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=500' },
  { id: 6, name: 'Aluminum Plant', price: '$179.00', img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500' },
  { id: 7, name: "Bird's Nest Fern", price: '$99.00', img: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=500' },
  { id: 8, name: 'Broadleaf Lady Palm', price: '$59.00', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500' },
  { id: 9, name: 'Chinese Evergreen', price: '$39.00', img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=500' },
];

const posts = [
  { id: 1, date: 'September 12 | Read in 6 min', title: 'Cactus & Succulent Care Tips', desc: 'Cacti and succulents are easy care plants for any home or patio.', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400' },
  { id: 2, date: 'September 13 | Read in 2 min', title: 'Top 10 Succulents Goes With', desc: 'Best indoor plants to make your home look fresh and green.', img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
  { id: 3, date: 'September 15 | Read in 3 min', title: 'Interior Plant Decorating', desc: 'How to arrange your favorite house plants for maximum beauty.', img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400' },
  { id: 4, date: 'September 18 | Read in 4 min', title: 'Best Houseplants For Beginners', desc: 'Start your plant journey with these easy-to-grow species.', img: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400' },
];

function App() {
  const [activeCategory, setActiveCategory] = useState('House Plants');
  const [activeTab, setActiveTab] = useState('All Plants');
  const [price, setPrice] = useState(250);

  return (
    <div className="font-sans text-gray-700 bg-white min-h-screen max-w-[1200px] mx-auto px-4 sm:px-6">
      
      {/* 1. NAVBAR */}
      <header className="flex items-center justify-between py-5 border-b border-green-500/20">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-md">
            G
          </div>
          <span className="text-xl font-black text-green-600 tracking-wider uppercase">GREENSHOP</span>
        </div>

        <nav className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
          <a href="#" className="text-green-600 font-bold border-b-2 border-green-500 pb-5 -mb-5">Home</a>
          <a href="#" className="hover:text-green-600 transition">Shop</a>
          <a href="#" className="hover:text-green-600 transition">Plant Care</a>
          <a href="#" className="hover:text-green-600 transition">Blogs</a>
        </nav>

        <div className="flex items-center space-x-6">
          <FiSearch className="w-5 h-5 cursor-pointer hover:text-green-600 transition" />
          <div className="relative cursor-pointer">
            <FiShoppingCart className="w-5 h-5 hover:text-green-600 transition" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-white">
              6
            </span>
          </div>
          <button className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-md font-medium text-xs shadow-md transition">
            <FiLogOut className="w-4 h-4" />
            <span>Login</span>
          </button>
        </div>
      </header>

      {/* 2. HERO BANNER */}
      <section className="bg-gradient-to-r from-emerald-50 via-gray-50 to-emerald-50/30 my-8 rounded-2xl p-8 md:p-12 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden">
        <div className="max-w-lg space-y-4 mt-6 md:mt-0 z-10">
          <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
            WELCOME TO GREENSHOP
          </h4>
          <h1 className="text-4xl md:text-6xl font-black text-gray-800 uppercase leading-tight">
            LET'S MAKE A BETTER <span className="text-green-500">PLANET</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-sm">
            We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xs px-7 py-3.5 rounded-md uppercase tracking-wider transition shadow-lg shadow-green-500/20">
            SHOP NOW
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center z-10">
          <img 
            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600" 
            alt="Hero Plant" 
            className="w-72 md:w-96 object-contain drop-shadow-2xl hover:scale-105 transition duration-500" 
          />
        </div>
      </section>

      {/* 3. MAIN CONTENT (SIDEBAR + PRODUCTS) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-12">
        
        {/* SIDEBAR */}
        <aside className="bg-gray-50/80 p-5 rounded-xl space-y-8 border border-gray-100">
          
          {/* Categories */}
          <div>
            <h3 className="font-bold text-sm text-gray-800 mb-4 border-b border-gray-200 pb-2">Categories</h3>
            <ul className="space-y-3 text-xs">
              {categories.map((cat) => (
                <li 
                  key={cat.id} 
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex justify-between items-center cursor-pointer transition ${
                    activeCategory === cat.name ? 'text-green-600 font-bold' : 'hover:text-green-600 text-gray-600'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span>({cat.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="font-bold text-sm text-gray-800 mb-4 border-b border-gray-200 pb-2">Price Range</h3>
            <input 
              type="range" 
              min="39" 
              max="1500" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)}
              className="w-full accent-green-500 cursor-pointer"
            />
            <p className="text-xs text-gray-600 mt-2">
              Price: <span className="text-green-600 font-bold">$39 -${price}</span>
            </p>
            <button className="mt-3 w-full bg-green-500 text-white text-xs font-bold py-2 rounded hover:bg-green-600 transition">
              Filter
            </button>
          </div>

          {/* Size Filter */}
          <div>
            <h3 className="font-bold text-sm text-gray-800 mb-4 border-b border-gray-200 pb-2">Size</h3>
            <ul className="space-y-3 text-xs">
              {sizes.map((sz) => (
                <li key={sz.id} className="flex justify-between items-center cursor-pointer hover:text-green-600 text-gray-600">
                  <span>{sz.name}</span>
                  <span>({sz.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Super Sale Banner */}
          <div className="bg-emerald-100/60 p-6 rounded-xl text-center relative overflow-hidden">
            <h2 className="text-2xl font-black text-green-600">UP TO 75% OFF</h2>
            <p className="text-xs text-gray-500 my-2">Super Sale Plants</p>
            <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=300" alt="Sale" className="w-32 mx-auto my-2 rounded-lg" />
          </div>

        </aside>

        {/* PRODUCTS SECTION */}
        <main className="md:col-span-3">
          
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-6 text-xs border-b border-gray-100 pb-3">
            <div className="flex space-x-6 font-medium">
              {['All Plants', 'New Arrivals', 'Sale'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 transition ${
                    activeTab === tab 
                      ? 'text-green-600 font-bold border-b-2 border-green-500 -mb-3' 
                      : 'text-gray-500 hover:text-green-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2 text-gray-500">
              <span>Short by:</span>
              <select className="bg-transparent font-medium text-gray-700 outline-none cursor-pointer">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item) => (
              <div key={item.id} className="group relative bg-gray-50/60 rounded-xl p-4 transition hover:shadow-xl hover:-translate-y-1 duration-300 border border-transparent hover:border-gray-100">
                
                {/* Discount Tag */}
                {item.discount && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {item.discount}
                  </span>
                )}

                {/* Product Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 h-60 bg-white flex items-center justify-center">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  
                  {/* Hover Actions (Figma Style) */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button className="bg-white p-2.5 rounded-lg shadow-md hover:text-green-600 text-gray-700 transition">
                      <FiShoppingCart className="w-4 h-4" />
                    </button>
                    <button className="bg-white p-2.5 rounded-lg shadow-md hover:text-green-600 text-gray-700 transition">
                      <FiHeart className="w-4 h-4" />
                    </button>
                    <button className="bg-white p-2.5 rounded-lg shadow-md hover:text-green-600 text-gray-700 transition">
                      <FiEye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <h4 className="text-sm font-semibold text-gray-800">{item.name}</h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-base font-bold text-green-600">{item.price}</span>
                  {item.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">{item.oldPrice}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-end space-x-2 mt-10">
            {[1, 2, 3, 4].map((num) => (
              <button 
                key={num} 
                className={`w-8 h-8 rounded-lg text-xs font-bold transition ${
                  num === 1 ? 'bg-green-500 text-white' : 'border border-gray-200 text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {num}
              </button>
            ))}
            <button className="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-green-50 hover:text-green-600 transition">
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>

        </main>

      </div>

      {/* 4. BLOGS SECTION */}
      <section className="my-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Our Blog Posts</h2>
          <p className="text-xs text-gray-500 mt-1">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-50/60 rounded-xl overflow-hidden border border-gray-100 group">
              <img src={post.img} alt={post.title} className="h-40 w-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="p-4 space-y-2">
                <p className="text-[10px] font-semibold text-green-600">{post.date}</p>
                <h4 className="text-sm font-bold text-gray-800 group-hover:text-green-600 transition">{post.title}</h4>
                <p className="text-xs text-gray-500 line-clamp-2">{post.desc}</p>
                <a href="#" className="inline-flex items-center space-x-1 text-xs font-bold text-gray-800 hover:text-green-600 transition pt-2">
                  <span>Read More</span>
                  <FiArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-gray-50/80 rounded-t-2xl pt-10 pb-6 px-6 border-t border-gray-100 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-200">
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-gray-800">Garden Care</h4>
            <p className="text-xs text-gray-500">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-gray-800">Plant Renovation</h4>
            <p className="text-xs text-gray-500">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-gray-800">Watering Garden</h4>
            <p className="text-xs text-gray-500">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-gray-800">Would you like to join newsletters?</h4>
            <div className="flex">
              <input type="email" placeholder="enter your email address..." className="bg-white border border-gray-200 rounded-l-md px-3 py-2 text-xs w-full outline-none focus:border-green-500" />
              <button className="bg-green-500 text-white font-bold text-xs px-4 py-2 rounded-r-md hover:bg-green-600 transition">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-200 space-y-4 md:space-y-0 text-xs text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">G</div>
            <span className="font-black text-green-600 tracking-wider">GREENSHOP</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMapPin className="text-green-500" />
            <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail className="text-green-500" />
            <span>contact@greenshop.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone className="text-green-500" />
            <span>+88 01911 717 490</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-[11px] text-gray-500 space-y-3 md:space-y-0">
          <p>© 2026 GreenShop. All Rights Reserved.</p>
          <div className="flex space-x-3 text-gray-600">
            <a href="#" className="p-2 bg-white rounded border border-gray-200 hover:text-green-600"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-white rounded border border-gray-200 hover:text-green-600"><FaInstagram /></a>
            <a href="#" className="p-2 bg-white rounded border border-gray-200 hover:text-green-600"><FaTwitter /></a>
            <a href="#" className="p-2 bg-white rounded border border-gray-200 hover:text-green-600"><FaLinkedinIn /></a>
            <a href="#" className="p-2 bg-white rounded border border-gray-200 hover:text-green-600"><FaYoutube /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;