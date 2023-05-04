import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { splitNum } from '../../helpers/utils/splitNum';
import { Food } from '../../types/Food';
import './FoodsItem.css';

function FoodsItem({ name, description, price, avatar }: Food) {
  return (
    <div className="food">
      <LazyLoadImage
        alt={name}
        src={avatar}
        effect="blur"
        className="food-img"
        width="100%"
        height={130}
      />
      {/* <img src={image} className="food-img" alt={name} /> */}
      <div className="food-info">
        <div>
          <h2 className="food-name">{name}</h2>
          <p className="food-description">{description}</p>
        </div>
        <div>
          <p className="food-price">{splitNum(price)} сум</p>
        </div>
      </div>
    </div>
  );
}

export default FoodsItem;
