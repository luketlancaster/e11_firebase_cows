import cowData from '../../helpers/data/cowData';

const buildCows = () => {
  cowData.getCows()
    .then(({ data }) => console.error('get cows worked', data))
    .catch((err) => console.error('get cows broke', err));
};

export default { buildCows };
