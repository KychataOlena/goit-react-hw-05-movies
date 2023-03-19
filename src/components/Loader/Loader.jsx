import { Circles } from 'react-loader-spinner';
import { LoaderRing } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderRing>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderRing>
  );
};
