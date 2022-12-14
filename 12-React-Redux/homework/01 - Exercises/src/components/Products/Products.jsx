import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import './products.css';
//El componente Card lo exportamos haciendo destructuring para poder testearlo
 import Card from '../Card/Card'
 import { getStoreName } from '../../redux/actions/actions';

export function Products({list,getStoreName, storeName}) {

 React.useEffect(()=>{
 getStoreName()
 }, [])

   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>{storeName}</h1>

            <div className='productsList'>
               {list.map(list=>{
                  return(
                     <Card name={list.name} price={list.price} id={list.id}
                     
                     />
                  )
               })
               }
            </div>
         </div>
      </>
   );
}

export function mapStateToProps(state) {
   return{
      list: state.list,
      storeName: state.storeName
  }
}
export function mapDispatchToProps(dispatch) {
   return{
      
      getStoreName:()=>{dispatch(getStoreName())}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Products);
