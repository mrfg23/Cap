require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/DOWtr0R12W-nb_pdW_KJ283dQqe3-lkP',
      accounts: ['36f4fe2c27a7d296f9692beaf6c793c7c9bc80ca688bb1f3dba3f833d806875a'],
    },
  },
};
