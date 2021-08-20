import Xendit from 'xendit-node';
const x = new Xendit({
  secretKey: 'xnd_development_2Nj4XpWqXqKxybxVIUIE2VY7f8nZGlSGzUZpDIuiT6tB1QhII9cxSladm2kiI',
});
const { Card } = x;
const cardSpecificOptions = {};
const card = new Card(cardSpecificOptions);

const createToken = async (headers, tokenData) => {
  // const checkApiNetCore = process.env.MHB_API_BASE_URL;
  // console.log(checkApiNetCore)

  const payload = { "TEST": "TEST" };
  return payload;
};

// const getToken = async (tokenId) => {
// GET https://api.xendit.co/credit_card_tokens/:credit_card_token_id
// };

const creditCardAuthorization = async (body) => {

  const payload = await card.createAuthorization({
    externalID: body.externalID,
    tokenID: body.tokenID,
    amount: body.amount,
    authID: body.authID,
  });

  return payload;
};

const creditCardService = {
  createToken,
  creditCardAuthorization
};

export default creditCardService;
