import React from 'react'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>

            <div className="book2">
                <div className='book'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book-2" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
                        <path d="M19 16h-12a2 2 0 0 0 -2 2" />
                        <path d="M9 8h6" />
                    </svg>
                </div>
            </div>


            <div className='links'>
                <p>Inicio</p>
                <p>Libros</p>
                <p>Editores</p>
                <p>Lectores</p>
            </div>

            <div className='crea'>
                <button className='crear'> <span>Crear  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="18" height="18" viewBox="0 0 20 20" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                </svg>
                </span></button>
            </div>



        </div>
    )
}
