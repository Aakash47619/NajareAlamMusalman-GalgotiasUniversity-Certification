'use client'

import React, { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function GalgotiasUniversityPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const centersOfExcellence = [
    { name: 'Cisco', logo: '🔵' },
    { name: 'Tata', logo: '🏢' },
    { name: 'Wipro', logo: '💼' },
    { name: 'HP-Intel', logo: '💻' },
    { name: 'HCL', logo: '🟦' },
    { name: 'Tech Mahindra', logo: '🚀' },
    { name: 'IBM', logo: '📱' },
    { name: 'Microsoft', logo: '🪟' },
  ]

  const schools = [
    { name: 'School of Engineering & Technology', image: '🏗️' },
    { name: 'School of Business', image: '💼' },
    { name: 'School of Applied Sciences', image: '🧪' },
    { name: 'School of Law', image: '⚖️' },
    { name: 'School of Liberal Arts', image: '📚' },
    { name: 'School of Media & Communication', image: '📺' },
  ]

  const placementStats = [
    { label: '1200+', description: 'Organizations' },
    { label: '1.5Cr', description: 'Highest Package' },
    { label: '5.4 LPA', description: 'Average Package' },
    { label: '98%', description: 'Placement Rate' },
    { label: '100+', description: 'Startups Founded' },
  ]

  const studentApps = [
    { title: 'VedIQ', description: 'Learning Platform' },
    { title: 'Sakhi', description: 'Women Safety App' },
    { title: 'Artistica', description: 'Art Gallery' },
    { title: 'Kipp', description: 'Event Management' },
  ]

  const news = [
    { title: 'World University Rankings 2024', date: 'Dec 15, 2024', image: '🏆' },
    { title: 'New Innovation Hub Inaugurated', date: 'Dec 10, 2024', image: '🚀' },
    { title: 'Global Partnership Announced', date: 'Dec 5, 2024', image: '🌍' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center text-white font-bold text-sm">
                GU
              </div>
              <span className="font-bold text-gray-900 hidden sm:inline text-sm md:text-base">Galgotias University</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition text-sm">About</a>
              <a href="#academics" className="text-gray-700 hover:text-blue-600 transition text-sm">Academics</a>
              <a href="#admissions" className="text-gray-700 hover:text-blue-600 transition text-sm">Admissions</a>
              <a href="#campus-life" className="text-gray-700 hover:text-blue-600 transition text-sm">Campus Life</a>
              <a href="#placements" className="text-gray-700 hover:text-blue-600 transition text-sm">Placements</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2 md:gap-3">
              <button className="px-3 md:px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition text-xs md:text-sm">
                Enquire
              </button>
              <button className="px-3 md:px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs md:text-sm">
                Apply
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#about" className="block text-gray-700 hover:text-blue-600 text-sm">About</a>
              <a href="#academics" className="block text-gray-700 hover:text-blue-600 text-sm">Academics</a>
              <a href="#admissions" className="block text-gray-700 hover:text-blue-600 text-sm">Admissions</a>
              <a href="#campus-life" className="block text-gray-700 hover:text-blue-600 text-sm">Campus Life</a>
              <a href="#placements" className="block text-gray-700 hover:text-blue-600 text-sm">Placements</a>
              <div className="flex flex-col gap-2 pt-2">
                <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded text-sm">
                  Enquire
                </button>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded text-sm">
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Banner Section */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-900 text-white py-16 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Centers of Excellence</h1>
          <p className="text-base md:text-xl text-blue-100">
            Partnering with Industry Leaders to Shape Future Professionals
          </p>
        </div>
      </section>

      {/* Centers of Excellence Section */}
      <section id="about" className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Our Partner Organizations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {centersOfExcellence.map((center, idx) => (
              <div
                key={idx}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
              >
                <div className="text-3xl md:text-4xl mb-3">{center.logo}</div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">{center.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="px-6 py-2 md:py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition inline-flex items-center gap-2 text-sm md:text-base">
              View More <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section id="academics" className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Our Schools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {schools.map((school, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 md:p-12 text-center text-4xl md:text-5xl">
                  {school.image}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-base md:text-lg text-gray-900">{school.name}</h3>
                  <button className="mt-4 text-blue-600 hover:text-blue-700 font-semibold text-xs md:text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="px-6 py-2 md:py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition inline-flex items-center gap-2 text-sm md:text-base">
              View All Schools <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section id="placements" className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Outstanding Placements</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-8">
            {placementStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
              >
                <p className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">{stat.label}</p>
                <p className="text-gray-600 text-xs md:text-base">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="px-6 py-2 md:py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition inline-flex items-center gap-2 text-sm md:text-base">
              View More Details <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section id="campus-life" className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Campus Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {[
              { title: 'Student Council & Groups', emoji: '👥' },
              { title: 'Incubation Centre', emoji: '🚀' },
              { title: 'Sports & Recreation', emoji: '⚽' },
              { title: 'Research Labs', emoji: '🔬' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition"
              >
                <div className="text-4xl md:text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  Explore diverse opportunities for personal and professional growth on our vibrant campus.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-xs md:text-sm">
                  Know More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Student Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {studentApps.map((app, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-3xl md:text-4xl mb-3">{'📱'}</div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{app.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="px-6 py-2 md:py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition inline-flex items-center gap-2 text-sm md:text-base">
              View All <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">International Accreditations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: 'AACSB', description: 'Association to Advance Collegiate Schools of Business' },
              { name: 'UGC', description: 'University Grants Commission - India' },
              { name: 'AICTE', description: 'All India Council for Technical Education' },
            ].map((accr, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{'🏅'}</div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">{accr.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{accr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {news.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 text-center text-4xl md:text-5xl">
                  {item.image}
                </div>
                <div className="p-6">
                  <p className="text-xs md:text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base mb-3">{item.title}</h3>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-xs md:text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="px-6 py-2 md:py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition inline-flex items-center gap-2 text-sm md:text-base">
              View All News <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {/* About Column */}
            <div>
              <h3 className="text-white font-bold mb-4 text-sm md:text-base">About Us</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition">About Galgotias</a></li>
                <li><a href="#" className="hover:text-white transition">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition">History</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            {/* Academics Column */}
            <div>
              <h3 className="text-white font-bold mb-4 text-sm md:text-base">Academics</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition">Engineering</a></li>
                <li><a href="#" className="hover:text-white transition">Business</a></li>
                <li><a href="#" className="hover:text-white transition">Science</a></li>
                <li><a href="#" className="hover:text-white transition">Law</a></li>
              </ul>
            </div>

            {/* Admissions Column */}
            <div>
              <h3 className="text-white font-bold mb-4 text-sm md:text-base">Admissions</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition">UG Admissions</a></li>
                <li><a href="#" className="hover:text-white transition">PG Admissions</a></li>
                <li><a href="#" className="hover:text-white transition">Scholarships</a></li>
                <li><a href="#" className="hover:text-white transition">Fees</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-white font-bold mb-4 text-sm md:text-base">Contact</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li>Email: info@galgotiasuniversity.edu.in</li>
                <li>Phone: +91-120-3021000</li>
                <li>Address: Gautam Budh Nagar, UP</li>
              </ul>
            </div>
          </div>

          {/* Verification Button */}
          <div className="border-t border-gray-700 pt-6 md:pt-8 mb-6 md:mb-8">
            <div className="text-center">
              <p className="text-gray-400 mb-4 text-sm md:text-base">Verify Your Academic Credentials</p>
              <a
                href="https://v0.app/chat/certificate-verification-page-cgw5mW9s3cB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold text-sm md:text-base"
              >
                Certificate Verification
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 md:pt-8">
            <p className="text-center text-xs md:text-sm text-gray-500">
              &copy; 2024 Galgotias University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
