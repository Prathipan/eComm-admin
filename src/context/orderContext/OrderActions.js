export const getOrdersStart = () => ({
    type: "GET_ORDERS_START",
  });
  
  export const getOrdersSuccess = (products) => ({
    type: "GET_ORDERS_SUCCESS",
    payload: products,
  });
  
  export const getOrdersFailure = () => ({
    type: "GET_ORDERS_FAILURE",
  });

  export const updateOrderStart = () => ({
    type : "UPDATE_ORDER_START"
  })

  export const updateOrderSuccess = (order) => ({
    type : "UPDATE_ORDER_SUCCESS",
    payload : order
  })

  export const updateOrderFailure = () => ({
    type : "UPDATE_ORDER_FAILURE"
  })