const { createCoreRouter } = require('@strapi/strapi').factories;
// Import your custom OpenAI controller
const openai = require('../controllers/openai');
module.exports = {
  routes: [
    {
      method:'POST',
      path: '/openai/generatecode',
      handler: openai.generateCode,
      config: {
        policies: [],
        auth: false
      }
    }
    
  ],

};

  

