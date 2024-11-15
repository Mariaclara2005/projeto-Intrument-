import { Container } from './styled';
import {toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import Cookies from 'cookies-js';

export default function Login() {
  
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useHistory();
    const loading = useRef(null);

    const Login = async () => {
        loading.current.continuousStart();

        console.log('oiiii')

        let r = await api.login(email, senha);
        console.log(r);

        if(r.error){
          toast.error(`${r.error}`)
          loading.current.complete();
        } else {
            Cookies.set('usuario-logado', JSON.stringify(r));
            navigation.push('/');
        }
        
    }
   
}

return(
 <Container>

<html lang="en"/>


    <meta charset="pt-br"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="login.css"/>
    <link rel="stylesheet" type="text/css" href="Footer.css"/>

    <title>Login</title>



<body>

    <header>
        <a href="Tela Inicial.html">
         <img src="imgs/logo.png" alt="" id="img-logo"/>
       </a>
    </header>

    <div class="Container">

        <div class="Box1">

            <div class="imagem1">

                <img src="imgs/logo.png" alt="" id="img1"/>
                <p>Login</p>

            </div>

            <div class="Box2">
                <div class="email">
                    <input type="text" name="" placeholder="Email" id="email-box"/>
                </div>

                <div class="senha">
                    <input type="password" name="" placeholder=" Senha" id="senha-box"/>
                </div>

                <div class="Recsenha">
                    <a href="Recsenha.html">Recuperar senha</a>
                </div>

                <div class="entrar">
                    <a href="Tela Inicial.html">
                    <button id="botao-entrar">Entrar</button>
                </a>
                </div>

                <div class="Cadastrar">
                    <a href="">Cadastrar</a>
                </div>

            </div>

        </div>

        <footer>
            <div class="informacoes">
                <div>
                    <h1>ATENDIMENTO AO CLIENTE</h1>
    
                    <div>
                        <a>Central de ajuda</a>
                        <a>Garantia Strument Store</a>
                        <a>Ouvidoria</a>
                        <a>Fale Conosco</a>
                    </div>
                </div>
    
                <div>
                    <h1>SOBRE A INSTRUMENT STORE</h1>
    
                    <div>
                        <a>Central de ajuda</a>
                        <a>Garantia Strument Store</a>
                        <a>Ouvidoria</a>
                        <a>Fale Concosco</a>
                    </div>
                </div>
                <div class="pagamento">
                    <h1>Pagamento</h1>
                    <div class="formas_pagamento">
                        <div id="pag">
                            <img src="/imgs/visa.png"/>
                        </div>
                        <div id="pag">
                            <img src="/imgs/master-card.png" />
                        </div>
                        <div id="pag">
                            <img src="/imgs/hipercard.png" />
                        </div>
                        
                        <div id="pag">
                            <img src="imgs/elo-logo.png" />
                        </div>
                        <div id="pag">
                            <img src="imgs/american-express.png" />
                        </div>
                        <div id="pag">
                            <img src="/imgs/boleto.png" />
                        </div>
                        <div id="pag">
                            <img src="/imgs/pix.png"  />
                        </div>
                    </div>
                </div>
                <div class="siga-nos">
                    <h1>SIGA-NOS</h1>
                    <div>
                        <img src="/imgs/instagram (2).png" />
                        <a>Instagram</a>
                    </div>
                    <div>
                        <img src="/imgs/facebook.png" />
                        <a>Facebook</a>
                    </div>
                    <div>
                        <img src="/imgs/linkedin (1).png" />
                        <a>Linkedin</a>
                    </div>
                </div>
            </div>
    
            <div id="linha"></div>
            <div id="direitos_reservados">
                <p>© 2024 Instrument Store. Todos os direitos reservados</p>
    
            </div>
        </footer> 
    </div>
</body>


</Container>

  )



  

