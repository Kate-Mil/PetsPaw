import { useState } from 'react';
import {
  Wrapper,
  LikeBnt,
  DislikeBnt,
  FavouriteBnt,
  List,
} from './VoteBtns.styled';
import {
  postVotes,
  postFavourites,
  deleteFavourites,
} from 'services/getCat-api';

export const VoteBtns = ({ image_id }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const hasFavouritedKey = `hasFavourited_${image_id}`;

  const handleVote = async value => {
    try {
      await postVotes({ image_id, sub_id: 'your_sub_id', value });
    } catch (error) {
      console.error('Ошибка при голосовании:', error);
    }
  };

  const handleFavourite = async () => {
    if (!localStorage.getItem(hasFavouritedKey)) {
      try {
        if (isFavourite) {
          await deleteFavourites({ image_id });
        } else {
          await postFavourites({ image_id });
        }
        setIsFavourite(prev => !prev);
        localStorage.setItem(hasFavouritedKey, 'true');
      } catch (error) {
        console.error('Ошибка при обработке избранного:', error);
      }
    }
  };
  return (
    <>
      <Wrapper>
        <List>
          <LikeBnt onClick={() => handleVote(1)}>Like</LikeBnt>
          <FavouriteBnt onClick={handleFavourite}>
            {isFavourite ? 'Remove from Favourites' : 'Favourite'}
          </FavouriteBnt>
          <DislikeBnt onClick={() => handleVote(-1)}>Dislike</DislikeBnt>
        </List>
      </Wrapper>
    </>
  );
};

export default VoteBtns;
