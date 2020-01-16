import houses from './houses.json';
import House from '../components/House';
const Index = () => (
  <div>
    <h2>SafeBnB</h2>
    <div className="houses">
      {houses.map((house, index) => {
        return <House key={index} {...house} />;
      })}
    </div>
  </div>
);

export default Index;
