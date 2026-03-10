import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactBlock.css';

function ContactBlock() {
  const [method, setMethod] = useState('email'); 
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    if (method === 'whatsapp') {
      const phone = "5541992660156"; 
      const text = 
      `*Novo contato do Portfólio*%0A%0A*Nome:* 
      ${data.user_name}%0A*Assunto:* 
      ${data.title}%0A*Mensagem:* 
      ${data.message}`;
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    } else {
      emailjs.sendForm(
        'service_52ap2kt', 
        'template_2hl0xhn', 
        form.current, 
        'qi_0PZMTk8sssMFP0'   
      )
      .then(() => {
        alert("E-mail enviado com sucesso!");
        form.current.reset();
      })
      .catch((error) => alert("Erro ao enviar e-mail: " + error.text));
    }
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-card-unified">
        <h2 className="section-title">Contato</h2>
        
        <div className="method-selector">
          <button 
            type="button"
            className={method === 'email' ? 'active' : ''} 
            onClick={() => setMethod('email')}
          >
            <i className="fas fa-envelope"></i> E-mail
          </button>
          <button 
            type="button"
            className={method === 'whatsapp' ? 'active' : ''} 
            onClick={() => setMethod('whatsapp')}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </button>
        </div>

        <form ref={form} onSubmit={handleSend}>
          <input type="text" name="user_name" placeholder="Seu Nome" required />
          
          {method === 'email' && (
            <input type="email" name="user_email" placeholder="Seu E-mail" required />
          )}

          <input type="text" name="title" placeholder="Assunto" required />
          <textarea name="message" placeholder="Escreva sua mensagem..." rows="5" required />
          
          <button type="submit" className={`send-btn ${method}`}>
            {method === 'email' ? 'Enviar E-mail' : 'Iniciar Conversa no WhatsApp'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactBlock;