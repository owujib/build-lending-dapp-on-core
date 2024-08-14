// Add your deployment script
const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('CoreLoanPlatform', (m) => {
  const contract = m.contract('CoreLoanPlatform', []);
  return { contract };
});
