import Button from './Button';
import DateNumber from './DateNumber';
import Time from './Time';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello May</h1>
      <DateNumber />
      <Button accomplishment="Coffee" />
      <Button accomplishment="Class" />
      <Button accomplishment="Gym" />
      <Button accomplishment="Yoga" />
      <Button accomplishment="Coding" />
      <Time />
    </div>
  );
}

export default App;
