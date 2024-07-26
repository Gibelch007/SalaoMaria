import React from 'react';
import '../whatsButton/whatsButton.module.css';

const WhatsButton = () => {
  const phoneNumber = '14 997490751'; // Substitua pelo número de telefone desejado
  const message = 'Olá, gostaria de mais informações!'; // Substitua pela mensagem desejada
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <button
      onClick={() => window.location.href = whatsappUrl}
      style={{
        padding: '10px 20px',
        backgroundColor: '#25D366',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Contate-nos via WhatsApp
    </button>
  );
};

export default WhatsButton;
