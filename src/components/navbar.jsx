import React from 'react';
import './sidebar.css'
import { SlEnvolopeLetter } from "react-icons/sl";
import { IoIosNotificationsOutline } from "react-icons/io";
import foto from '../img/ronaldo.jpg'
import hojas from '../img/pngtree.png'
import cara from '../img/cara.jpg'
import tormenta from '../img/tormenta.jpg'
import libro from '../img/libro.png'


const SearchComponent = () => {



  return (
    <div>
      <div className='cuadro'>
        <div className='navbar'>

          <div className='search'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="3" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>

            <input
              className='input'
              type="text"
              placeholder="Buscar por libros, personas o artículos"
            />
          </div>

          <div className="noting">
            <div className='campana'>
              <IoIosNotificationsOutline />
            </div>

            <div className='carta'>
              <SlEnvolopeLetter />
            </div>

 

            <div className="person">
              <p>Andrés Vargas</p>
              <img src={foto} class="img-fluid rounded-top" alt="" />
            </div>
          </div>
        </div>





<div className='grid grid-col-8'>
          <div className='col-span-2'>
                
            <div className="texto">
             
              <h3>Hola Andres! Tienes ideas sobre un nuevo libro?</h3>
              <p>Vuelve tus libros tendencia <br /> mundual! 
                Quieres empezar a escrbir una vez mas? </p>
               <button> Crear Borrador <span>+</span> </button>

              
              <img className="imagen"  src={libro}  alt="Descripción de la imagen" /> 
              </div>
          </div>
        </div>
        

        <div className='col-span-2'>
          <div className='contenedor'>
            <div className='derecha'>
              <div className='encabezado' >
                <p>Lo último</p>
                <button>Ver Todo</button>
              </div>


              <p> Reciente</p>

              <div className="card">
                <div className="img">
                  <img src={hojas} alt="" />

                </div>

                <div className="text">
                  <p className="h3">La Ciudadela</p>
                  <p className="p">Descubre las maravillas escondidas en los bosques de Estados Unidos</p>
                  <img src={cara} alt="" />

                </div>
              </div>

              <div className="card">
                <div className="img">
                  <img src={tormenta} alt="" />

                </div>
                <div className="text">
                  <p className="h3">Space X</p>
                  <p className="p">Elon Musk, un emprendedor con otra vision multimillonaria</p>
                  <img src={cara} alt="" />

                </div>
              </div>
            </div>
          </div>
        </div>














      </div>



    </div>
  );
};

export default SearchComponent;



