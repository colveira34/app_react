import { useState } from "react";


const HomePage = () =>{
    const [isLoading, setisLoading] = useState(true);
     
    const getPromesa = ()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                setisLoading(false);
            }, 3000);
        });
    };

    getPromesa().finally(()=>setisLoading(false));
    return(
        <div>
          
            <h1>Para mas info sobre ventas de notebooks ingresar a este
            link </h1>
        
            <iframe width="868" height="488" src="https://www.youtube.com/embed/yIUhSuyO_z8" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>        
            </iframe>
           
             <br/>
             <br/>
            <p>Si Queres obtener ma sinformación, te invitio a que ingreses a nuestras
                redes para obtener un newsletter mensual
            </p>
            <p>
                Muchos clientes alrededor de LATAM confian en nuestros servicios
            </p>
              
              <br/>
              <h1>****MAS INFORMACION SOBRE NOSOTROS***</h1>
              <p>Ingresar al siguiente video</p>

              <iframe width="868" height="488" src="https://www.youtube.com/embed/_EeVhFWZfqk" title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>   
              </iframe>

        </div>
    );
};

export default HomePage;