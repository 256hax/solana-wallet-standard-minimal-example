# Solana Wallet Standard Minimal Example
Implement Wallet Standard in your wallet for experimental purpose only.

This example is A. If you have API, check at [solana-labs/wallet-standard - WALLET.md](https://github.com/solana-labs/wallet-standard/blob/master/WALLET.md).
```
A. Write a wallet with a Wallet Standard compatible API.
B. Wrap your existing API with a Wallet Standard compatible API.
```

## Note
We don't use Extension(e.g. Chrome Extension) to keep things simple and easy to understand.  
Check your Wallet at Web(localhost).  

You browser will register your wallet when you start web server.

```
registerWallet(new SolanaWallet());
```

## Run
```
% npm i
% npm run dev
```

Then connect wallet.  
"Solana Wallet" is your Wallet App:  
![screenshot](https://github.com/256hax/solana-wallet-standard-minimal-example/blob/main/docs/screenshot.png?raw=true)

## Reference
- [wallet-standard/wallet-standard](https://github.com/wallet-standard/wallet-standard)
- [solana-labs/wallet-standard - WALLET.md](https://github.com/solana-labs/wallet-standard/blob/master/WALLET.md)