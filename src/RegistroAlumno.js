import React, { useState } from 'react';
import axios from 'axios';

function RegistroAlumno() {
    // Memoria para los 4 datos
    const [nombre, setNombre] = useState('');
    const [banner, setBanner] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');

    const guardar = async () => {
        try {
            // Enviamos el paquete completo a la API
            await axios.post('http://localhost:5286/api/Reporte/registrar', {
                name: nombre,
                idBanner: banner,
                notaP1: parseFloat(nota1), // Convertimos el texto a número decimal
                notaP2: parseFloat(nota2)
            });
            
            alert("¡Estudiante y notas guardados en la base de datos con éxito!");
            
            // Limpiamos las casillas
            setNombre(''); setBanner(''); setNota1(''); setNota2('');
        } catch (error) {
            alert("Error al intentar guardar el estudiante.");
        }
    };

    return (
        <div className="card">
            <h3>Registrar Nuevo Estudiante</h3>
            <div className="form-group">
                <input 
                    type="text"
                    className="custom-input"
                    placeholder="Nombre Completo (Ej. Daniel Cárdenas)" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                />
                <input 
                    type="text"
                    className="custom-input"
                    placeholder="ID Banner (Ej. 17075)" 
                    value={banner} 
                    onChange={(e) => setBanner(e.target.value)} 
                />
                
                {/* Nuevas casillas para las notas */}
                <div style={{ display: 'flex', gap: '15px' }}>
                    <input 
                        type="number"
                        step="0.1"
                        className="custom-input"
                        placeholder="Nota P1 (Ej: 7.5)" 
                        value={nota1} 
                        onChange={(e) => setNota1(e.target.value)}
                        style={{ width: '100%' }}
                    />
                    <input 
                        type="number"
                        step="0.1"
                        className="custom-input"
                        placeholder="Nota P2 (Ej: 8.0)" 
                        value={nota2} 
                        onChange={(e) => setNota2(e.target.value)} 
                        style={{ width: '100%' }}
                    />
                </div>

                <button className="btn-primary" onClick={guardar}>
                    Guardar Estudiante y Notas
                </button>
            </div>
        </div>
    );
}

export default RegistroAlumno;