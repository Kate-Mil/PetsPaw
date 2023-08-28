import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import ImagesList from 'components/ImagesList/ImagesList';
import { getAllCats } from 'services/getCat-api';
import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { OpenModalBtn } from 'components/OpenModalBtn/OpenModalBtn';
import { BtnWrapper, Wrapper } from './Gallery.styled';
import { GalleryFilter } from 'components/GallaryFilter/GallaryFilter';

const Gallery = () => {
  const location = useLocation();
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function overrideVariablesFromQueryParams(searchParams) {
    const breedIdParam = searchParams.get('breedId');
    const orderParam = searchParams.get('order');
    const hasBreedsParam = searchParams.get('has_breeds');
    const typeParam = searchParams.get('type');
    const pageParam = searchParams.get('page');

    const breedId = breedIdParam !== null ? breedIdParam : '';
    const order = orderParam !== null ? orderParam : 'RAND';
    const has_breeds = hasBreedsParam !== null ? hasBreedsParam : 0;
    const type = typeParam !== null ? typeParam : 'All';
    const page = pageParam !== null ? parseInt(pageParam, 10) : 0;

    return {
      breedId,
      order,
      has_breeds,
      type,
      page,
    };
  }
  const { type } = overrideVariablesFromQueryParams(
    new URLSearchParams(location.search)
  );

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const { breedId, order, has_breeds, page } =
          overrideVariablesFromQueryParams(
            new URLSearchParams(location.search)
          );

        const data = await getAllCats(
          breedId,
          order,
          breedId !== '' ? 1 : has_breeds, // Устанавливаем has_breeds в 1, если breedId не пустая строка
          page
        );

        setBreeds(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [location.search]);

  let filteredImages;
  if (type === 'Animated') {
    filteredImages = breeds.filter(item => item.url.endsWith('.gif'));
  } else if (type === 'Static') {
    filteredImages = breeds.filter(item => !item.url.endsWith('.gif'));
  } else {
    filteredImages = breeds;
  }

  return (
    <div>
      <Wrapper>
        <PageNavMarkers />
        <BtnWrapper>
          <OpenModalBtn />
        </BtnWrapper>
      </Wrapper>
      <GalleryFilter />

      {filteredImages.length > 0 && <ImagesList images={filteredImages} />}
      {error && <p>{error.message}</p>}
      {isLoading && <Loader />}
    </div>
  );
};

export default Gallery;
