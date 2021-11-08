import axios from 'axios';

export const imageUrl = 'https://zabeeha.makglobalps.com/';

const instance = axios.create({
  baseURL: 'http://zabeeha.makglobalps.com/api/',
});

export const signupAPI = async (
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  city,
) => {
  try {
    let response;

    await instance
      .post('register.php', {
        fname: firstName,
        lname: lastName,
        email: email,
        password: password,
        mobile: phoneNumber,
        city: city,
      })
      .then(res => {
        response = res.data;
      })
      .catch(e => {
        throw new Error(e.message);
      });
    if (response.ResponseCode == '200') {
      return response.ResultData;
    } else {
      throw new Error(response.ResponseMsg);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export const signinAPI = async (phoneNumber, password) => {
  try {
    let response;

    await instance
      .post('login.php', {
        password: password,
        mobile: phoneNumber,
      })
      .then(res => {
        response = res.data;
      })
      .catch(e => {
        throw new Error(e.message);
      });
    if (response.ResponseCode == '200') {
      return response.ResultData;
    } else {
      throw new Error(response.ResponseMsg);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getHomeDataAPI = async id => {
  try {
    let response;
    await instance
      .post('home.php', {
        uid: id,
      })
      .then(res => {
        response = res.data;
      })
      .catch(e => {
        throw new Error(e.message);
      });
    if (response.ResponseCode == '200') {
      return response.ResultData;
    } else {
      throw new Error(response.ResponseMsg);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCategoryProduct = async () => {
  try {
    let response;

    await instance
      .get('cplist.php')
      .then(res => {
        response = res.data;
      })
      .catch(e => {
        throw new Error(e.message);
      });
    if (response.ResponseCode == '200') {
      return response.cplist;
    } else {
      throw new Error(response.ResponseMsg);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAddressListAPI = async id => {
  try {
    let response;

    await instance
      .post('alist.php', {
        uid: id,
      })
      .then(res => {
        response = res.data;
      })
      .catch(e => {
        throw new Error(e.message);
      });

    if (response.ResponseCode == '200') {
      return response.ResultData;
    } else {
      throw new Error(response.ResponseMsg);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postAddressAPI = async (
  userId,
  typeId,
  address1,
  address2,
  pincode,
  city,
  state,
  mobile,
) => {
  try {
    let response;

    await instance
      .post('address.php', {
        mobile: mobile,
        uid: Number(userId),
        type: Number(typeId),
        add1: address1,
        add2: address2,
        pincode: pincode,
        city: city,
        state: state,
        aid: '0',
      })
      .then(res => {
        response = res.data;
      })
      .catch(e => {
        throw new Error(e.message);
      });
    if (response.ResponseCode == '200') {
      return response.ResponseMsg;
    } else {
      throw new Error(response.ResponseMsg);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postOrderAPI = async (
  userId,
  productIds,
  quantities,
  total,
  addressId,
) => {
  try {
    let response;

    await instance
      .post('order.php', {
        uid: Number(userId),
        pid: productIds,
        qty: quantities,
        total: Number(total),
        aid: Number(addressId),
        type: 'cod',
      })
      .then(res => {
        response = res.data;
      })
      .catch(e => {
        throw new Error(e.message);
      });
    if (response.ResponseCode == '200') {
      return response.ResponseMsg;
    } else {
      throw new Error(response.ResponseMsg);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getOrderAPI = async userId => {
  try {
    let response;

    await instance
      .post('olist.php', {
        uid: Number(userId),
      })
      .then(res => {
        response = res.data;
      })
      .catch(e => {
        throw new Error(e.message);
      });
    if (response.ResponseCode == '401') {
      return response.OrderData;
    } else {
      throw new Error(response.ResponseMsg);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateProfileAPI = async (
  userId,
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
  city,
) => {
  try {
    let response;

    await instance
      .put('uprofile.php', {
        uid: userId,
        fname: firstName,
        lname: lastName,
        email: email,
        password: password,
        mobile: phoneNumber,
        city: city,
      })
      .then(res => {
        response = res.data;
      })
      .catch(e => {
        throw new Error(e.message);
      });
    if (response.ResponseCode == '200') {
      return response.ResultData;
    } else {
      throw new Error(response.ResponseMsg);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export const cancelOrderAPI = async orderId => {
  try {
    let response;

    await instance
      .post('cancelorder.php', {
        oid: orderId,
      })
      .then(res => {
        response = res.data;
      })
      .catch(e => {
        throw new Error(e.message);
      });
    if (response.ResponseCode == '200') {
      return response.ResponseMsg;
    } else {
      throw new Error(response.ResponseMsg);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
