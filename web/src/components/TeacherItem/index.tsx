import React from 'react';

import whatsappIcon from  '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/39318294?s=460&u=3fe150c488ccce18a8b1dd5832c35eef972b2990&v=4" alt="Laís Matie"/>
                        <div>
                            <strong>Laís Matie</strong>
                            <span>Biologia</span>
                        </div>
                    </header>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        <br/><br/>
                        Duis lacinia odio id nibh facilisis gravida. 
                        Nullam ante purus, scelerisque et lectus eu, commodo facilisis mauris. 
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;