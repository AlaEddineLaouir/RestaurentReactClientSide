import {
  GET_USER_ORDERS,
  SET_ORDER_TO_EDIT,
  CANCEL_ORDER,
  MAKE_ORDER,
  EDIT_ORDER
} from "../actions/types";

const initialState = {
  Orders: [
    {
      id: 1,
      state: "valide",
      date: "25/12/2019",
      total: 1550,
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
      date: "12/06/2019",
      total: 1550,
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
  ],
  NewOrder: {},
  EditOrder: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      return state;
    case SET_ORDER_TO_EDIT:
      return { ...state, EditOrder: action.payload };
    case CANCEL_ORDER:
      return {
        ...state,
        Orders: state.Orders.filter(order => order.id !== action.payload)
      };
    case MAKE_ORDER:
      return {
        ...state,
        NewOrder: {},
        Orders: state.Orders.concat(action.payload)
      };
    case EDIT_ORDER:
      return {
        ...state,
        Orders: state.Orders.map(order => {
          if (order.id === action.payload.id) {
            return Object.assign({}, order, action.payload);
          } else {
            return order;
          }
        })
      };
    default:
      return state;
  }
}
