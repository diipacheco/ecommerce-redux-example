import React from 'react';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import { MdClose, MdLocalGroceryStore } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import Customscroll from 'react-customscroll';
import { ApplicationState } from '../../store';
import { handleClick } from '../../store/Ducks/Cart/actions';
import {
 Container, CartHeader, Content, Footer, Button,
} from './styles';
import Products from '../Products';

export default function Cart() {
  const status = useSelector((state: ApplicationState) => state.cart.isMenuOpened);
  const products = useSelector((state: ApplicationState) => state.cart.addedItems);
  const dispatch = useDispatch();


  return (
    <Container>
      <OffCanvas
        width={420}
        transitionDuration={400}
        effect="parallax"
        isMenuOpened={status}
        position="right"
      >
        <OffCanvasBody>
          <Products />
        </OffCanvasBody>
        <OffCanvasMenu className="menuClass">
          <button type="button" className="exit" onClick={() => dispatch(handleClick(false))}>
            <MdClose size={30} color="#FFF" />
          </button>
          <CartHeader>
            <button type="button">
              <MdLocalGroceryStore size={50} color="#FFF" />
              <div>
                <small>
                  0
                </small>
              </div>
            </button>
          </CartHeader>
          <div style={{ height: '350px' }}>
            <Customscroll>
              <Content>
                <ul>
                  {products.map((product) => (
                    <li key={product.id}>
                      <img src={product.image} alt="Produto Adicionado" />
                      <div>
                        <h5>{product.title}</h5>
                        <p>Quatidade: 1</p>
                      </div>
                      <div className="price">
                        <h4>{`R$${product.price}`}</h4>
                      </div>
                    </li>
                  ))}
                </ul>
              </Content>
            </Customscroll>
          </div>
          <Footer>
            <div>
              <h5>Subtotal</h5>
              <h4>R$ 00,00</h4>
            </div>
            <Button type="button">
              Checkout
            </Button>

          </Footer>

        </OffCanvasMenu>

      </OffCanvas>


    </Container>
  );
}
