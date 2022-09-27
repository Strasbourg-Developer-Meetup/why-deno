 import chockblain from 'https://raw.githubusercontent.com/kemicofa/chockblain/main/mod.ts';

 const blockchain = chockblain();

 blockchain.addBlock({
    to: "William",
    from: "Kevin",
    amount: 100,
    currency: '$'
 });

 blockchain.validateIntegrity();

 console.log(
    blockchain.toArray()
 );
 