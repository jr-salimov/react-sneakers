import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="sneakers-logo" />
          <div>
            <h3 className="text-uppercase fw-bold">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="shopping-cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <button className="button mr-5">
            <img width={18} height={18} src="/img/heart.svg" alt="heart-logo" />
          </button>
          <button className="button">
            <img width={18} height={18} src="/img/user.svg" alt="user- logo" />
          </button>
        </li>
      </ul>
    </header>
  );
}
