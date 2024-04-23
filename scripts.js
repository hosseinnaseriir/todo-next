const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const fetchSwagger = async () => {
  try {
    const response = await axios.get(process.env.SWAGGER_URI);
    const swaggerJsonPath = path.join(
      __dirname,
      './src/packages/api/swagger.json'
    );
    await fs.outputJson(swaggerJsonPath, response.data, { spaces: 2 });
    console.log('Swagger JSON file fetched and saved successfully!');
  } catch (error) {
    console.error('Error fetching Swagger JSON:', error);
  }
};

fetchSwagger();
