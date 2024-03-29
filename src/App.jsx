import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">

        <TimerChallenge 
          title="easy" 
          targetTime={1}
        />

        <TimerChallenge 
          title="medium" 
          targetTime={1}
        />

        <TimerChallenge 
          title="hard" 
          targetTime={1}
        />

      </div>
    </>
  );
}

export default App;
