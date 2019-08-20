const initialState = {
  Orders: [
    {
      id: 1,
      state: "Valide",
      orders: [
        {
          dish: {
            id: 1,
            name: "frite",
            price: "750 DA",
            description: "kjfcsdvjqqdslkvjkljvlkdsvv"
          },
          quantity: 2
        },
        {
          dish: {
            id: 2,
            name: "viande",
            price: "800 DA",
            description: "taktaktaktataktataktaktaktaktaktak"
          },
          quantity: 1
        }
      ]
    },
    {
      id: 2,
      state: "traitement",
      orders: [
        {
          dish: {
            id: 1,
            name: "frite",
            price: "750 DA",
            description: "kjfcsdvjqqdslkvjkljvlkdsvv"
          },
          quantity: 2
        },
        {
          dish: {
            id: 2,
            name: "viande",
            price: "800 DA",
            description: "taktaktaktataktataktaktaktaktaktak"
          },
          quantity: 1
        }
      ]
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
