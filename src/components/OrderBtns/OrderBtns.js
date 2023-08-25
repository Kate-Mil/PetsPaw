import sprite from '../../pictures/sprite.svg';
import { Button, Img, List } from './OrderBtns.styled';

export const OrderBtns = ({ onClick }) => {
  const handleButtonClicked = order => {
    onClick(order);
  };

  return (
    <List>
      <li>
        <Button onClick={() => handleButtonClicked('ASC')}>
          <Img width="20" height="20">
            <use href={`${sprite}#sort`}></use>
          </Img>
        </Button>
      </li>
      <li>
        <Button onClick={() => handleButtonClicked('DESC')}>
          <Img width="20" height="20">
            <use href={`${sprite}#soft-revert`}></use>
          </Img>
        </Button>
      </li>
    </List>
  );
};
