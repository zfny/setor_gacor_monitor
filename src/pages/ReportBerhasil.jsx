import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ReportBerhasil = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const navigate = useNavigate();

  // Navigate to FormDownload page for export functionality
  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      // Navigate to the form download page instead of simulating export
      navigate('/form-download');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-green-900 text-white font-sans">
      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-300 text-center mb-8">
            Terima Kasih telah menggunakan SETOR
          </h1>
          
          <div className="max-w-md mx-auto bg-green-50 rounded-xl p-8 shadow-lg">
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Laporan berhasil dikirim!
              </h2>
              
              <p className="text-green-800 mb-6">
                Kami akan mengirimkan email kepada anda untuk status verifikasi dan informasi selanjutnya.
              </p>
              
              <button
                onClick={handleExport}
                disabled={isExporting}
                className={`px-6 py-3 rounded-full font-semibold ${
                  isExporting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-pink-300 text-green-900 hover:bg-pink-400'
                } transition-colors mb-4`}
              >
                {isExporting ? 'Mengalihkan...' : '⬇ Export Image'}
              </button>
              
              <p className="text-sm text-green-700">
                Bagikan laporan Anda ke media sosial untuk meningkatkan kesadaran publik.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportBerhasil;
