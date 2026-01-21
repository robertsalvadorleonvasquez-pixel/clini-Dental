
import React from 'react';

const Splash: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-blue-600 flex flex-col items-center justify-center text-white z-50">
      <div className="animate-bounce mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 12c.5 0 1-1.5 1-2 0-.5-.5-1-1-1s-1 .5-1 1c0 .5.5 2 1 2z"/>
          <path d="M17 12c.5 0 1-1.5 1-2 0-.5-.5-1-1-1s-1 .5-1 1c0 .5.5 2 1 2z"/>
          <path d="M12 21c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z"/>
          <path d="M7 10c0-1.7 1.3-3 3-3"/>
          <path d="M14 7c1.7 0 3 1.3 3 3"/>
        </svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tight">DentaControl</h1>
      <p className="mt-2 text-blue-100 font-medium">Cuidando cada sonrisa</p>
      <div className="mt-12 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-75"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-150"></div>
      </div>
    </div>
  );
};

export default Splash;
