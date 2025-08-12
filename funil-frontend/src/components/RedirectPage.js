import React from 'react';

const RedirectPage = () => {
  const handleContinue = () => {
    window.location.href = 'https://vitacap.life';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              ¿Desea continuar al sitio en español?
            </h2>
            
            <button
              onClick={handleContinue}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Continuar
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Accediendo a{' '}
            <a 
              href="https://vitacap.life" 
              className="text-blue-600 hover:text-blue-500 underline"
            >
              vitacap.life
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            © 2024 VitaCap. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedirectPage;