import React,{useContext} from 'react';

import './Rodape.css';

import TemaContext from '../contexts/TemaContext';

const Rodape = () => {
    const tema = useContext(TemaContext);

    return(
    <footer style={{backgroundColor:tema.corFundoTema,
            borderRadius:tema.borderFormat
    }}>

<section class="pb-5">
       <br></br>
       <div class="container">
           
               <div>
                   <br></br>
                   <h1 id="contato">Fale Conosco:</h1>
           </div>
           
   
           <div>
               
                   <form>
                       <div class="row">
                           <div>
                               <input id='rp-email' type="text" 
                               placeholder="Email"/>
                           </div>
                       </div>
   
                       <div>
                               <input  id='rp-tel'type="number" 
                                placeholder="Telefone"/>
                           
                           <div>
                               <input  id='rp-assunto'type="text" 
                                placeholder="Assunto"/>
                           </div>
                       </div>
   
                       
                           <div >
                               <textarea  id='rp-message' name="message" rows="6" placeholder="Digite aqui sua mensagem"></textarea>
                           </div>
                       
                       <div>
                           
                               <button type="submit">Enviar</button>
                           <p></p>
                           
                       </div>
                   </form>
               </div>
           
       
           <iframe id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6420216658657!2d-73.99826888545466!3d40.7258963793304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598fbe3b0cc9%3A0x794cb07664de81de!2sRockstar%20Games!5e0!3m2!1spt-BR!2sbr!4v1627598714803!5m2!1spt-BR!2sbr"  style={{width:"100%", height:"300", frameBorder:"0",allowFullScreen:""}} ></iframe>
       </div>
       <div>
               <div>
                   <p className="p-rodape" >
                   <img alt="image" height="40"
                        src="imagens/rock1.png"/>
                   <p className="p-rodape">+1 212-334-6633</p>
   <p>rockstargames@rockstar.com</p><br></br>                   </p>
    <div>
   <a className='a-rodape' target="_blank" href="https://www.facebook.com/Official-Rockstar-Games-1820626458265408/?hc_ref=ARQ_kH3BHN9eKRHv2HF7Evk6HUErTgm_T5RP9ZcJ0WbLFbXLVHuALVnWGCr39HbzZ3A&__xts__[0]=68.ARDoGQx48MpIH_NtlMPt_9wR0RNJWln_L0bNeqiFImEPjY6sGI1G7GpuJsCTzstrLaSGaSYAM9UVLd3N_mNElbfOT7ikQ6T1HeNCvoF1Tn-5HF-0UzSpjoWEWRk8bqqv7pbcJzB4O0tlttI0iMcjY3Tzm3awkBP9CV-qEPXgkHDpTATXP0DxrgsDReFDXTpDMZkpUhryR0d7q1I0-njMi1KJS3Kyp7cbYqzKY8zgTVeKT2A_rDaOX5dR9FTh8-99EIMrAxEpsFjYbnTi8AEOB3sPIwgn-ZYeFNJqigbAuwOoZsVUpTnMA8OuwJGFQaY&__tn__=kC-R"><i class="fab fa-facebook fa-lg"></i>
   </a><a className='a-rodape' target="_blank" href="https://twitter.com/rockstargames?lang=pt"><i class="fab fa-twitter fa-lg"></i></a>
   <a className='a-rodape' targer="_blank"href="https://www.instagram.com/rockstargames/?hl=pt-br"><i class="fab fa-instagram fa-lg"></i></a>
   <a  className='a-rodape'href="#"><i class="fab fa-google fa-lg"></i></a>
   <a  className='a-rodape'href="#"><i class="fab fa-pinterest fa-lg"></i></a>
    </div><br></br></div>
       </div>
   </section>
    </footer>
    )
}

export default Rodape;