import React from 'react';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import { MdClose } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { handleClick } from '../../store/Ducks/Cart/actions';
import { Container } from './styles';
import Products from '../Products';

export default function Cart() {
  const status = useSelector((state: ApplicationState) => state.cart.isMenuOpened);
  const dispatch = useDispatch();
  return (
    <Container>
      <OffCanvas
        width={360}
        transitionDuration={400}
        effect="parallax"
        isMenuOpened={status}
        position="right"
      >
        <OffCanvasBody>
          <Products />
        </OffCanvasBody>
        <OffCanvasMenu className="menuClass">
          <button type="button" onClick={() => dispatch(handleClick(false))}>
            <MdClose size={30} color="#FFF" />
          </button>
        </OffCanvasMenu>
      </OffCanvas>
    </Container>
  );
}
