// Create screenspace component
const canvas = new UICanvas()

// Create a textShape component, setting the canvas as parent
const text = new UIText(canvas)

fetch('https://api.thegraph.com/subgraphs/name/decentraland/marketplace', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
        query example {
  orders(where: {status: "sold"}, first: 10, orderBy: createdAt, orderDirection: desc){
    id
    price
    buyer
    status
    createdAt
    updatedAt
    txHash
    nft{
      id
      tokenId
      contractAddress
      tokenURI
      name
      image
      searchParcelX
      searchParcelY
    }
  }
}
      `,
  }),
})
  .then((res) => res.json())
  .then((result) => {
    
    
    // do stuff here
    log(result);
    log(result.data.orders[0].buyer)
    log(result.data.orders[0].price)
    log(result.data.orders[0].status)

    // shown on UI
    text.value = result.data.orders[0].price
    
    })
