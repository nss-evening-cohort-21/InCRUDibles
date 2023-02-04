import { useEffect, useState } from 'react';
import { getPins } from '../api/pinData';
import PinCard from '../components/PinCard';
import { useAuth } from '../utils/context/authContext';

function Home() {
  // TODO: Set a state for pins
  const [pins, setPins] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the pins
  const getAllThePins = () => {
    getPins(user.uid).then(setPins);
  };

  // TODO: make the call to the API to get all the pins on component render
  useEffect(() => {
    getAllThePins();
  }, []);
  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {/* TODO: map over pins here using PinCard component */}
        {pins.map((pin) => (
          <PinCard key={pin.firebaseKey} pinObj={pin} onUpdate={getAllThePins} />
        ))}
      </div>

    </div>
  );
}

export default Home;
