import React from 'react'
import { useStateValue } from '../../context'
import "./Cart.scss"
import { IoTrash } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const [state, dispatch] = useStateValue()
    if(state.cart.length === 0){
        return <div className='favorite'>
        <img src="https://www.ipack.com/media/icons/empty-cart-ipack.png"/>
        <h2>В корзине пока пусто</h2>
        <p>Начните с главной страницы — нужный товар можно найти через поиск или заглянуть в подборки</p>
        <NavLink to={"/"}><button>Главная</button></NavLink>
      </div>
    }
    

  return (
    <div className="cart-page">
    <div className="cart-content">
      <div className="cart-items">
        <div className="cart-header">
          <label className="checkbox-label">
            <input type="checkbox" />
            <span>Снять все</span>
          </label>
          <div className="delivery-date">
            Ближайшая дата доставки: <span>19 ноября</span>
          </div>
        </div>

        <div className="warehouse-info">
          На складе Nornlight
          <h2>Доставим с 18 ноября</h2>
        </div>
        {
            state.cart?.map((item)=>(
                <div className="cart-item" key={item.id}>
                <label className="checkbox-label">
                  <input type="checkbox" />
                </label>
                <div className="item-content">
                  <img src={item.image}/>
                  <div className="item-details">
                    <div className="item-header">
                      <h3>{item.title}</h3>
                      <button className="delete-btn">
                        <span onClick={()=>  dispatch({type: "REMOVE_CART", payload:item})}><IoTrash /> Удалить</span>
                      </button>
                    </div>
                    <div className="seller">Продавец: Apple</div>
                    <p className='descp'>{item.descp}</p>
                    <div className="item-footer">
                      <div className="quantity-controls">
                        <button 
                        disabled={item.amount <=1}
                        onClick={()=> dispatch({type: "DEC_CART", payload:item})}>-</button>
                        <span>{item.amount}</span>
                        <button
                        disabled={item.amount >= item.stock}
                        onClick={()=> dispatch({type: "ADD_CART", payload:item })}>+</button>
                      </div>
                      <div className="price">
                        <div className="current-price">${item.price} * {item.amount} = ${item.price * item.amount}</div>
                        <div className="original-price">2999$</div>
                        <div className="price-per-item">300$ /ед.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>       
            ))
        }
      </div>

      <div className="order-summary">
        <div className="summary-box">
          <h2>Ваш заказ</h2>
          <div className="order-details">
            <div className="items-count">
              Товары ({state.cart.length}):
              <span>101 100 сум</span>
            </div>
            <div className="delivery-date">
              Доставка 19 ноября
            </div>
          </div>
          <div className="total">
            <div className="total-amount">
              Итого:
              <span>88 500 сум</span>
            </div>
            <div className="savings">
              Вы экономите: 12 600 сум
            </div>
          </div>
          <button className="checkout-button">
            Перейти к оформлению
          </button>
        </div>

        <div className="delivery-progress">
          <div className="delivery-info">
            <h3>Бесплатно доставим в пункт выдачи</h3>
            <p>Осталось 911 500 сум до бесплатной доставки курьером</p>
          </div>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <div className="progress-labels">
            <span>25 000 сум</span>
            <span>1 000 000 сум</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cart