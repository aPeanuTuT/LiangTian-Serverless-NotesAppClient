const config = {
  MAX_ATTACHMENT_SIZE: 5000000, 
  STRIPE_KEY: "pk_test_51IUWpbLE8QSWvsML8rl3IY1EBgnEbkJbeiGPzx7g8gbQdDpmPkf1TH18tfRWY8VhqW0BFQJY0MWPDXmvfchHDn3o00npei6sIM",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-liang",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://aabh7pe7yl.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_3xsPX8KZW",
    APP_CLIENT_ID: "6sqk0feskt00jn87ttru7hpito",
    IDENTITY_POOL_ID: "us-east-1:fd216fd2-b059-4bc3-9b76-ebe58de332b3",
  },
};

export default config;