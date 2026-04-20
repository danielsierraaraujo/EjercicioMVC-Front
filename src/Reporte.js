import React, { useState } from 'react';
import axios from 'axios';

function Reporte() {
    const [idBanner, setIdBanner] = useState('');
    const [reporte, setReporte] = useState(null);
    const [error, setError] = useState('');

    const buscarAlumno = async () => {
        try {
            setError('');
            setReporte(null);
            const respuesta = await axios.get(`http://localhost:5286/api/Reporte/calificacionesFinales/${idBanner}`);
            setReporte(respuesta.data);
        } catch (err) {
            setError('No se encontró el alumno o aún no tiene notas registradas.');
        }
    };

    return (
        <div className="card">
            <h3>Consultar Notas (Progreso 3)</h3>
            
            <div className="form-group">
                <input
                    type="text"
                    className="custom-input"
                    placeholder="Ingresa tu ID Banner"
                    value={idBanner}
                    onChange={(e) => setIdBanner(e.target.value)}
                />
                <button className="btn-primary" onClick={buscarAlumno}>
                    Consultar
                </button>
            </div>

            {error && <p style={{ color: '#c53030', marginTop: '15px' }}>{error}</p>}

            {reporte && (
                <div className="result-box">
                    <h4 style={{ margin: '0 0 15px 0', color: '#2d3748' }}>Resultados de: {reporte.nombreAlumno}</h4>
                    <p><strong>Nota P1 (25%):</strong> {reporte.notaFinalP1}</p>
                    <p><strong>Nota P2 (35%):</strong> {reporte.notaFinalP2}</p>
                    <hr style={{ border: '0', borderTop: '1px solid #cbd5e0', margin: '15px 0' }} />
                    <p><strong>Acumulado Actual:</strong> {reporte.acumulado} / 6.0</p>
                    <p className="highlight-text">
                        Necesitas en P3: {reporte.notaNecesitada}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Reporte;