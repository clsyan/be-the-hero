import React from 'react';

import logoImg from '../../assets/logo.svg';

import './styles.css';

import {Link} from 'react-router-dom';

import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem-Vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} style = {{color: "#e02041"}}  />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} style={{color: "#a8a8b3"}}></FiTrash2>
                    </button>
                </li><li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} style={{color: "#a8a8b3"}}></FiTrash2>
                    </button>
                </li><li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} style={{color: "#a8a8b3"}}></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} style={{color: "#a8a8b3"}}></FiTrash2>
                    </button>
                </li>
            </ul>
        </div>
    );
}