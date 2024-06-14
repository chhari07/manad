
	function swipeCards() {
  return {
  cards: [
    {
      id: 1,
      image: `https://m.media-amazon.com/images/I/31gxNAZMXbL._SX300_SY300_QL70_FMwebp_.jpg?${encodeURIComponent('')}`,
      title: 'Skullcandy  ',
      description: '2 On-Ear Wireless Headphones, 34 Hr Battery, Microphone, Works with iPhone Android and Bluetooth Devices - Black.',
      price: 8.99,
      link: "product_details.html"
      
    },
    {
      id: 2,
      image: `https://m.media-amazon.com/images/I/71XNeka-BRL._SX679_.jpg${encodeURIComponent('')}`,
      title: 'OnePlus 12R',
      description: 'OnePlus 12R (Iron Gray, 8GB RAM, 128GB Storage)t.',
      price: 500.49,
      link: ''
    },
    {
      id: 3,
      image: `https://m.media-amazon.com/images/I/61+48zFNZ7L._SX679_.jpg?${encodeURIComponent('Iced Coffee')}`,
      title: 'LG Electronics Ultragear 21:9 Curved Gaming LED Monitor',
      description: 'Roll over image to zoom in LG Electronics Ultragear 21:9.',
      price: 4000.99,
      link: ''
    },
    {
      id: 4,
      image: `https://cdns3.thecosmicbyte.com/wp-content/uploads/Main-Image-2.jpg.webp${encodeURIComponent('')}`,
      title: ' Cosmic Byte CB-GK-25 ',
      description: 'Cosmic Byte CB-GK-25 Pandora TKL Mechanical Keyboard Upgraded with Swappable Outemu Blue Switches and Rainbow LED (Black/Grey) ',
      price: 70.99,
      link: ''
    },
    
  ],
  addToCart(product) {
    // Implement your add to cart logic here
    console.log('Adding to cart:', product);
  }
};
}