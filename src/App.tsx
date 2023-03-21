import './App.css';
import { useLayoutEffect } from 'react'
import { WalletAdapter } from './components/WalletAdapter';

// Register your wallet.
import { addWindow } from './components/wallet/window';

function App() {
  const mount = () => {
    const unmount = () => {
      // Add your wallet to Window object.
      addWindow();
    }
    return unmount
  }
  useLayoutEffect(mount, []);

  return (
    <div className="App">
      <div>
        "Solana Wallet" is your Wallet App:
      </div>
      <WalletAdapter />
    </div>
  )
}

export default App
