import {
  Wrapper,
  LikeBnt,
  DislikeBnt,
  FavouriteBnt,
  List,
} from './VoteBtns.styled';
import { postVotes } from 'services/getCat-api';

export const VoteBtns = ({ image_id }) => {
  const handleVote = async value => {
    try {
      await postVotes({ image_id, sub_id: 'your_sub_id', value });
    } catch (error) {
      console.error('Ошибка при голосовании:', error);
    }
  };

  return (
    <>
      <Wrapper>
        <List>
          <LikeBnt onClick={() => handleVote(1)}>Like</LikeBnt>
          <DislikeBnt>Favourite</DislikeBnt>
          <FavouriteBnt onClick={() => handleVote(-1)}>Dislike</FavouriteBnt>
        </List>
      </Wrapper>
    </>
  );
};

export default VoteBtns;
