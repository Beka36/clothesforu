import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa"; 
import Order from './Order'; 

const showOrders = (props) => { 
    let summa = 0; 
    props.orders.forEach(el => summa += Number.parseFloat(el.price)); 
    return ( 
        <div> 
            {props.orders.map(el => ( 
                <Order onDelete={props.onDelete} key={el.id} item={el} /> 
            ))} 
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p> 
        </div>
    ); 
}; 

const showNothing = () => { 
    return ( 
        <div className='empty'> 
            <h2>Товаров нет</h2> 
        </div> 
    ); 
}; 

export default function Header(props) { 
    let [cartOpen, setCartOpen] = useState(false);
    let [modalContent, setModalContent] = useState('');
    let [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };

    return ( 
        <header> 
            <div> 
                <span className='logo'>Clothes for you</span> 
                <ul className='nav'> 
                    <li onClick={() => openModal('Добро пожаловать в "Clothes for you"!  В нашем магазине мы верим, что каждый заслуживает чувствовать себя уверенно и стильно.')}>Про нас</li> 
                    <li onClick={() => openModal('Номер: +79918551356 | Почта: Clottforu@yandex.ru')}>Контакты</li> 
                     
                </ul> 
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}className={`shop-cart-button ${cartOpen && 'activ'}`}/>
                {cartOpen && ( 
                    <div className='shop-cart'> 
                        {props.orders.length > 0 ? showOrders(props) : showNothing()} 
                    </div>  
                )} 

                {isModalOpen && (
                    <div style={modalStyles}>
                        <div style={modalContentStyles}>{modalContent}</div>
                        <button onClick={closeModal}>Закрыть</button>
                    </div>
                )}
            </div> 
            <div className='presentation'></div> 
        </header> 
    ); 
} 

// Стили для модального окна
const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '100px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    zIndex: 1000,
};

const modalContentStyles = {
    marginBottom: '100px',
};
