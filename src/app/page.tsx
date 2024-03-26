'use client';
import { faDashboard, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Home = () => {
  const [showVentasSubMenu, setShowVentasSubMenu] = useState(false);
  const [showProductosSubMenu, setShowProductosSubMenu] = useState(false);
  const [showDomiciliosSubMenu, setShowDomiciliosSubMenu] = useState(false);
  const [showContabilidadSubMenu, setShowContabilidadSubMenu] = useState(false);
  const [showEstadisticasSubMenu, setShowEstadisticasSubMenu] = useState(false);
  const [showConfiguracionSubMenu, setShowConfiguracionSubMenu] = useState(false);

  const toggleVentasSubMenu = () => {
    setShowVentasSubMenu(!showVentasSubMenu);
  };

  const toggleProductosSubMenu = () => {
    setShowProductosSubMenu(!showProductosSubMenu);
  };

  const toggleDomiciliosSubMenu = () => {
    setShowDomiciliosSubMenu(!showDomiciliosSubMenu);
  };

  const toggleContabilidadSubMenu = () => {
    setShowContabilidadSubMenu(!showContabilidadSubMenu);
  };

  const toggleEstadisticasSubMenu = () => {
    setShowEstadisticasSubMenu(!showEstadisticasSubMenu);
  };

  const toggleConfiguracionSubMenu = () => {
    setShowConfiguracionSubMenu(!showConfiguracionSubMenu);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white">Sistema Pos Maeztro</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <FontAwesomeIcon icon={faDashboard} /> DashBoard
              </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onMouseEnter={toggleVentasSubMenu} onMouseLeave={toggleVentasSubMenu}>
                <FontAwesomeIcon icon={faShoppingCart} /> Ventas
                  {showVentasSubMenu && (
                    <div className="absolute bg-gray-800 mt-2 py-2 w-48 shadow-lg rounded-lg">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Cuadre de caja</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Pedidos</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Documentos</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Pedidos cancelados</a>
                    </div>
                  )}
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onMouseEnter={toggleProductosSubMenu} onMouseLeave={toggleProductosSubMenu}>
                  Productos
                  {showProductosSubMenu && (
                    <div className="absolute bg-gray-800 mt-2 py-2 w-48 shadow-lg rounded-lg">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Categorias</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Productos</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Promociones</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Inventario</a>
                    </div>
                  )}
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onMouseEnter={toggleDomiciliosSubMenu} onMouseLeave={toggleDomiciliosSubMenu}>
                  Domicilios
                  {showDomiciliosSubMenu && (
                    <div className="absolute bg-gray-800 mt-2 py-2 w-48 shadow-lg rounded-lg">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Venta 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Venta 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Venta 3</a>
                    </div>
                  )}
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onMouseEnter={toggleContabilidadSubMenu} onMouseLeave={toggleContabilidadSubMenu}>
                  Contabilidad
                  {showContabilidadSubMenu && (
                    <div className="absolute bg-gray-800 mt-2 py-2 w-48 shadow-lg rounded-lg">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Venta 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Venta 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Venta 3</a>
                    </div>
                  )}
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onMouseEnter={toggleEstadisticasSubMenu} onMouseLeave={toggleEstadisticasSubMenu}>
                  Estadisticas
                  {showEstadisticasSubMenu && (
                    <div className="absolute bg-gray-800 mt-2 py-2 w-48 shadow-lg rounded-lg">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Venta 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Venta 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Venta 3</a>
                    </div>
                  )}
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onMouseEnter={toggleConfiguracionSubMenu} onMouseLeave={toggleConfiguracionSubMenu}>
                  Configuracion 
                  {showConfiguracionSubMenu && (
                    <div className="absolute bg-gray-800 mt-2 py-2 w-48 shadow-lg rounded-lg">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Informacion negocio</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Roles</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Usuarios</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Eventos</a>

                    </div>
                  )}
                </a>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Home;
