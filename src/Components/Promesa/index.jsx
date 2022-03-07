const product = [
    {id: 1,
     title: 'NOTEBOOK DELL I7',
     price: 60000,
     pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_678731-MLA48623874575_122021-V.jpg'
     },
 
     {id: 2,
      title: 'NOTEBOOK ASUS',
      price: 70000,
      pictureURL: 'https://s3-sa-east-1.amazonaws.com/saasargentina/ZaqBNdJOTJfmnEXVMhZ3/imagen'
      },

      {id: 3,
       title: "SAMSUNG",
       price: 100000,
      pictureURL: 'https://images.samsung.com/is/image/samsung/ar_NP300E4A-AE2AR_201_Front?$624_624_PNG$'
       },

       {id: 4,
        title: "HP",
        price: 150000,
       pictureURL: 'https://ar-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/2/B/2B0F2LA-1_T1626269191.png'
        },

        {id: 5,
         title: "HP",
         price: 120000,
         pictureURL: 'https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/Y/3Y595LA-1_T1643319827.png'
        }
   ];

   const getItem = () =>{
       return new Promise((resolve)=>{
            setTimeout(()=>{
              resolve(product);
            },1000);
       });
   };

   export default getItem;