import React, { useContext } from 'react'
import CardIcon from '../Cart/CartIcon'
import styles from './HeaderCardButton.module.css'
import CartContext from '../../store/cart-context'


const HeaderCardButton = (props) => {
  const cartCtx=useContext(CartContext)
  const numberOfCartitems=cartCtx.items.reduce(()=>{},0)

  return (
    <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
            <CardIcon/>
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>
            3
        </span>
      
    </button>
  )
}

export default HeaderCardButton
