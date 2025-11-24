import React from 'react';
import { Link } from 'react-router-dom';
import aboutUsImage from '../Asset/Rectangle 147 (1).png';
import ellipse1Image from '../Asset/Ellipse 1.png';
import dzakwanImage from '../Asset/WhatsApp Image 2025-11-23 at 20.46.49_54b79fd7.jpg';
import aisyImage from '../Asset/FotoAisy.jpg';
import fannyImage from '../Asset/FotoFanny.jpg';
import nadhifImage from '../Asset/FotoNadhif.jpg';
import nadiahImage from '../Asset/marsha jkt48.jpg';

const AboutUs = () => {
  const teamMembers = [
    { id: 1, name: 'Nadhif', role: 'Lead, Fullstack', image: nadhifImage },
    { id: 2, name: 'Fany', role: 'UI/UX Design', image: fannyImage },
    { id: 3, name: 'Nadiah', role: 'Sekret mentorz', image: nadiahImage },
    { id: 4, name: 'Dzakwan', role: 'Doraemon', image: dzakwanImage },
    { id: 5, name: 'Aisy', role: 'Tenxi', image: aisyImage }
  ];

  return (
    <div className="min-h-screen bg-green-900 text-white font-sans">
      {/* Hero Section - navigation is now handled by Layout component */}

      {/* Hero Section */}
      <section className="relative py-16 px-6 mt-32 mb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-green-700 to-green-900 opacity-80"/>
        <div className="absolute inset-0 opacity-30 flex items-center justify-center">
          <img
            src={require('../Asset/Rectangle 145.png')}
            alt="Medical Team"
            className="object-contain"
          />
        </div>
        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-300 mb-4 font-poppins">
            Get To Know More About US
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-white leading-relaxed mt-4 font-poppins">
            Kami percaya bahwa teknologi dapat menjadi jembatan penting antara masyarakat, tenaga medis, dan pemerintah dalam menciptakan sistem pelaporan kesehatan yang cepat, akurat, dan terpercaya.
          </p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 px-6 bg-green-900 relative overflow-hidden">
        {/* Logo kanan atas */}
        <div className="absolute top-12 right-4 z-0 -rotate-12">
          <img
            src={`${process.env.PUBLIC_URL}/setor putih.png`}
            alt="SETOR Logo"
            className="w-50 h-50 object-contain opacity-70 blur"
          />
        </div>

        {/* Logo kiri bawah */}
        <div className="absolute bottom-4 left-4 z-0 rotate-12">
          <img
            src={`${process.env.PUBLIC_URL}/setor putih.png`}
            alt="SETOR Logo"
            className="w-full h-full object-contain opacity-70 blur"
          />
        </div>

        {/* Ellipse 1 kiri atas */}
        <div className="absolute -top-32 -left-56 z-0 opacity-40 blur rotate-90">
          <img
            src={ellipse1Image}
            alt="Ellipse 1"
            className="w-[600px] h-[700px] object-contain"
          />
        </div>

        {/* Ellipse 1 kanan bawah */}
        <div className="absolute -bottom-30 -right-56 z-0 opacity-40 blur -rotate-90">
          <img
            src={ellipse1Image}
            alt="Ellipse 1"
            className="w-[600px] h-[700px] object-contain"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl text-center mb-10 font-serif" style={{ fontFamily: "'La Belle Aurore', cursive", color: '#FFD0EE' }}>
            The Purpose Behind Our Platform
          </h2>

          <div className="bg-neutral-900 rounded-xl p-4 md:p-6 shadow-xl bg-opacity-40 w-[1100px] mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">

              {/* Text */}
              <div className="space-y-6">
                <p className="leading-relaxed ml-10 -mr-28 font-poppins">
                  Banyak penanganan medis di Indonesia yang masih belum sesuai standar, namun tidak pernah dilaporkan karena tidak ada kanal pelaporan yang mudah, cepat, dan dapat ditindaklanjuti. Data nasional menunjukkan ribuan insiden keselamatan pasien tercatat setiap tahun, sementara banyak fasilitas kesehatan belum aktif melapor; sehingga jumlah kasus sebenarnya jauh lebih besar.
                </p>
                <p className="leading-relaxed ml-10 -mr-20 font-poppins">
                  Platform ini hadir untuk menjembatani kesenjangan tersebut. Dengan formulir pelaporan yang sederhana, dukungan AI WoundChecker untuk mengecek kesesuaian tindakan, serta fitur pengiriman otomatis ke pihak berwenang, laporan masyarakat dapat berubah menjadi data yang benar-benar ditindak, bukan sekadar keluhan yang hilang begitu saja.
                </p>
              </div>

              {/* Card Layout Baru (Menggantikan Card Lama) */}
              <div className="relative h-96 rounded-xl overflow-hidden flex items-center justify-center ml-16">
                {/* Gambar dari Asset */}
                <img
                  src={aboutUsImage}
                  alt="Platform visualization"
                  className="w-1000 h-1000 "
                />

                {/* Angka 100+ Kanan Atas */}
                <div className="absolute top-16 right-8 bg-black bg-opacity-70 p-3 rounded-lg text-[#FFD0EE] font-bold text-4xl z-10">
                  100+
                </div>

                {/* Angka 100+ Kiri Bawah */}
                <div className="absolute bottom-12 left-6 bg-black bg-opacity-70 p-3 rounded-lg text-[#FFD0EE] font-bold text-4xl z-10">
                  100+
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-green-900 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD0EE] text-center mb-12 -mt-10 font-poppins">
            Meet Our Teams
          </h2>

          {/* Ellipse 1 kiri bawah */}
          <div className="absolute -bottom-16 -left-80 opacity-50 blur">
            <img
              src={ellipse1Image}
              alt="Ellipse 1"
              className="w-[900px] h-[650px] object-contain -rotate-90 z-0"
            />
          </div>

          {/* Logo kanan bawah */}
          <div className="absolute -bottom-32 right-24 z-0 -rotate-12">
            <img
              src={`${process.env.PUBLIC_URL}/setor putih.png`}
              alt="SETOR Logo"
              className="w-50 h-50 object-contain opacity-70 blur"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow z-50"
              >
                <div className="relative h-96 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-700 w-full h-full"></div> // Fallback jika tidak ada gambar
                  )}
                  <div className="absolute inset-0 bg-opacity-30 flex items-end p-4">
                    <h3 className="text-2xl font-bold text-white-400 ">{member.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-200 text-base">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;
