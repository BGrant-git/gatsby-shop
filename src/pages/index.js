import React from "react"
import Client from 'shopify-buy'

const Home = () => {

  const user = require('../../gatsby-config')
  console.log({user})

  // const client = Client.buildClient({
  //   domain: 'shop1-habibi.myshopify.com',
  //   storefrontAccessToken: '5225afa1afaeae4e57839085b46f6a33'
  // });
  // // fetch all products 
  //   client.product.fetchAll().then((products) => {
  //     console.log(products);
  //   });
  //   client.collection.fetchAllWithProducts().then((collections) => {
  //     console.log(collections);
  //     console.log(collections[0].products[0].title);
  //   });

  return <div>Hello world!</div>
}

export default Home

