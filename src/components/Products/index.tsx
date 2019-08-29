import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleClick } from '../../store/Ducks/Cart/actions';
import { ApplicationState } from '../../store';
import { loadRequest } from '../../store/Ducks/Products/actions';
import * as S from './styles';


function Products() {
  const products = useSelector((state: ApplicationState) => state.products.data);
  const dispatch = useDispatch();
  useEffect(() => {
    function load() {
      dispatch(loadRequest());
    }
    load();
  }, [dispatch]);


  return (
    <S.Container>
      <S.Content>
        {products.map((product) => (
          <S.Box key={product.id}>
            <img src={product.image} alt="Thambnail do quadrinho" />
            <div className="product-info">
              <h4>{product.title}</h4>
              <div className="price-place">
                <p>{`R$${product.price}`}</p>
              </div>
              <div className="product-details">
                <small id="frete">
              frete grátis
                </small>
                <small>
              12x sem juros
                </small>
              </div>
            </div>
            <S.AddToCart>
              <button type="button" onClick={() => dispatch(handleClick(true))}>
          Adicionar ao carrinho
              </button>
            </S.AddToCart>
          </S.Box>
        ))}
      </S.Content>

    </S.Container>
  );
}

export default Products;
