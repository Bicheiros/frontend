import Home from './Home';
import Main from './Main';
import { useAccount } from 'wagmi';

export default function App() {
  const { _, isConnected } = useAccount();

  return (
    <div className="hero min-h-screen bg-base-200">
      {isConnected ? <Main /> : <Home />}
    </div>
  );
}
