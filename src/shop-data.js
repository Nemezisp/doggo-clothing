const SHOP_DATA = [
    {
      title: 'Costumes',
      items: [
        {
            id: 1,
            name: "Pineapple costume",
            imageUrl: "https://images.unsplash.com/photo-1583512603806-077998240c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
            price: 40
        },
        {
            id: 2,
            name: "Elf costume",
            imageUrl: "https://images.unsplash.com/photo-1583513702439-2e611c58e93d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
            price: 25
        },
        {
            id: 3,
            name: "Ghost costume",
            imageUrl: "https://images.unsplash.com/photo-1633025094151-6fc996255e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
            price: 30
        },
        {
            id: 4,
            name: "Prisoner costume",
            imageUrl: "https://images.unsplash.com/photo-1603054311650-65211ee04711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
            price: 35
        },
        {
            id: 5,
            name: "Gang costume",
            imageUrl: "https://images.unsplash.com/photo-1629907710551-e592df0ab1f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
            price: 40
        },
        {
            id: 6,
            name: "Bee costume",
            imageUrl: "https://images.unsplash.com/photo-1614180186384-a8b292b726ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
            price: 55
        },
        {
            id: 7,
            name: "Yoda costume",
            imageUrl: "https://images.unsplash.com/photo-1588617906580-9cd7c75aa886?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
            price: 49
        },
        {
            id: 8,
            name: "Unicorn costume",
            imageUrl: "https://images.unsplash.com/photo-1574287132490-7439fd7750a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
            price: 39
        },
      ],
    },
    {
      title: 'Accessories',
      items: [
        {
          id: 9,
          name: 'Disguise eyeglasses',
          imageUrl: 'https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 20,
        },
        {
          id: 10,
          name: 'Glasses with eyes',
          imageUrl: 'https://images.unsplash.com/photo-1485981133625-f1a03c887f0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 20,
        },
        {
          id: 11,
          name: 'Tie and Bow Tie',
          imageUrl: 'https://images.unsplash.com/photo-1527526029430-319f10814151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 25,
        },
        {
          id: 12,
          name: 'Dog Goggles',
          imageUrl: 'https://images.unsplash.com/photo-1564496645603-a9a51bbd5871?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 30,
        },
        {
          id: 13,
          name: 'Blue Leash',
          imageUrl: 'https://images.unsplash.com/photo-1580129518863-f00fcf1d6e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 50,
        },
        {
          id: 14,
          name: 'Red Leash',
          imageUrl: 'https://images.unsplash.com/photo-1583661047299-0fda75994262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 30,
        },
        {
          id: 15,
          name: 'Rainbow Bow Tie',
          imageUrl: 'https://images.unsplash.com/photo-1590507090789-0e32929a37dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 20,
        },
        {
          id: 16,
          name: 'Grey Bow Tie',
          imageUrl: 'https://images.unsplash.com/photo-1598129113250-318964934885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 200,
        },
      ],
    },
    {
      title: 'Hoodies',
      items: [
        {
          id: 17,
          name: 'Red Hoodie',
          imageUrl: 'https://images.unsplash.com/photo-1602372021084-29139057b46b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 80,
        },
        {
          id: 18,
          name: 'Yellow Hoodie',
          imageUrl: 'https://images.unsplash.com/photo-1615266508026-874e2c021320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 80,
        },
        {
          id: 19,
          name: 'Black and Yellow Hoodie',
          imageUrl: 'https://images.unsplash.com/photo-1630359649585-bdaa7433d10f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 75,
        },
        {
          id: 21,
          name: 'Pink Hoodie',
          imageUrl: 'https://images.unsplash.com/photo-1629757257537-62cedbcffbe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 80,
        },
        {
          id: 22,
          name: 'Red and White Hoodie',
          imageUrl: 'https://images.unsplash.com/photo-1630359559738-34ef7281bbd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 85,
        },
      ],
    },
    {
      title: 'Dresses',
      items: [
        {
          id: 23,
          name: 'Beige and Black Dress',
          imageUrl: 'https://images.unsplash.com/photo-1602672680907-485dc2556f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 70,
        },
        {
          id: 24,
          name: 'Grey Dress',
          imageUrl: 'https://images.unsplash.com/photo-1592028616810-88480a45e406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 60,
        },
        {
          id: 25,
          name: 'Violet Dress',
          imageUrl: 'https://images.unsplash.com/photo-1630527582090-15bfe6477736?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 80,
        },
        {
          id: 26,
          name: 'Asian Dress',
          imageUrl: 'https://images.unsplash.com/photo-1530394168616-16a229c8c12e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 105,
        },
        {
          id: 27,
          name: 'Cute Pink Dress',
          imageUrl: 'https://images.unsplash.com/photo-1577175779434-76fee49638d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 65,
        },
      ],
    },
    {
      title: 'Sweaters',
      items: [
        {
          id: 28,
          name: 'Blue Sweater',
          imageUrl: 'https://images.unsplash.com/photo-1488569098285-adeecb95641f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 77,
        },
        {
          id: 29,
          name: 'Red and White Sweater',
          imageUrl: 'https://images.unsplash.com/photo-1518587671104-999f3dd2d340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 80,
        },
        {
          id: 30,
          name: 'Christmas Sweater',
          imageUrl: 'https://images.unsplash.com/photo-1611653100849-fd8325cada0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 85,
        },
        {
          id: 31,
          name: 'Casual Sweater',
          imageUrl: 'https://images.unsplash.com/photo-1511169245529-95ab68997f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 70,
        },
        {
          id: 32,
          name: 'Dark Sweater',
          imageUrl: 'https://images.unsplash.com/photo-1515376721779-7db6951da88d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
          price: 60,
        },
      ],
    },
  ];
  

export default SHOP_DATA