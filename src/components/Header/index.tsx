import React from 'react';
import { MdSearch, MdShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { handleClick } from '../../store/Ducks/Cart/actions';
import logo from '../../assets/logo.svg';
import { Container } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  return (
    <Container>
      <MdSearch size={35} color="#FFFF" />
      <img src={logo} alt="Logo" />
      <button type="button" onClick={() => dispatch(handleClick(true))}>
        <MdShoppingCart size={35} color="#FFFF" />
      </button>
    </Container>
);
}
