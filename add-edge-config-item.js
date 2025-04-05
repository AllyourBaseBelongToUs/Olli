// CommonJS version for easier execution
const { createClient } = require('@vercel/edge-config');
require('dotenv').config({ path: '.env.local' });

async function addContactSubmissionsItem() {
  if (!process.env.EDGE_CONFIG) {
    console.error('EDGE_CONFIG environment variable not found in .env.local');
    console.error('Make sure you ran "npx vercel env pull" first');
    return;
  }

  try {
    // Create the Edge Config client
    const edgeConfig = createClient(process.env.EDGE_CONFIG);
    
    // Check if we can access the Edge Config
    const greeting = await edgeConfig.get('greeting');
    console.log('Current greeting value:', greeting);
    
    console.log('Edge Config is working, but we need to use the Vercel Dashboard to add items.');
    console.log('Please go to your Vercel Dashboard and add the contactSubmissions item manually.');
    console.log('URL: https://vercel.com/eddys-projects-c1f81e7b/~/stores/edge-config/ecfg_quw1w4mjxl5fb4gsmgykvtkr1j9c/items');
    console.log('Add a new item with key: contactSubmissions and value: []');
  } catch (error) {
    console.error('Error accessing Edge Config:', error);
  }
}

addContactSubmissionsItem();
