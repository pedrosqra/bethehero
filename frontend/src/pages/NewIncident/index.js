import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um héroi para ajudá-lo.</p>

                    <Link className=' backlink' to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>

                <form action="">
                    
                        <input placeholder="Título do Caso" />
                        <textarea placeholder="Descrição" />
                        <input placeholder="Valor em reais" />
        
                        <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}