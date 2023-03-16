import axios from "axios";
//const API_URL = "http://localhost:7083/api/getallevents";
const getPublicContent = () => {
  return axios.get("http://localhost:7083/api/getallevents");
};

const getUserBoard = () => {
  return axios.get("http://localhost:7083/api/getallevents");
};
const getallordersofuser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.get("http://localhost:7083/api/orders/getallofuser",
    {
      headers: ((user && user.jwt) ? { Authorization: "Bearer " + user.jwt } : {})
    });
}
const getallticketsofuser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.get("http://localhost:7083/tickets/getallofuser",
    {
      headers: ((user && user.jwt) ? { Authorization: "Bearer " + user.jwt } : {})
    });
}
const getUploadedContent = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("uploaded content");
  console.log(user.jwt);
  return axios.get("http://localhost:7083/api/getallofuser",
    {
      headers: ((user && user.jwt) ? { Authorization: "Bearer " + user.jwt } : {})
    });
};
const addnew = (eventname, price, quantity) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.post("http://localhost:7083/api/events", {
    eventname,
    price,
    quantity
  }, {
    headers: {
      Authorization: "Bearer " + user.jwt
    }
  }
  );
};
const update = (eventid, eventname, price, quantity) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.put("http://localhost:7083/api/events/update", {
    eventid,
    eventname,
    price,
    quantity
  }, {
    headers: {
      Authorization: "Bearer " + user.jwt
    }
  }
  );
};
// const [createorder, setcreateorder] = useState({
//   eventid:null,
//   quantity:null,
//   user:JSON.parse(localStorage.getItem("user")),
//   orderstatus:"INITIATED"

// });
const order = (eventid, buytick) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.post("http://localhost:7083/api/orders", {
    "eventid": {
      "eventid": eventid
    },
    buytick
  }, {
    headers: {
      Authorization: "Bearer " + user.jwt
    }
  }
  );
};
const paymentdetail = (orderid, creditcardno, expiry) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.post("http://localhost:7083/api/dopayment", {
    "orderid": {
      "orderid": orderid
    },
    creditcardno,
    expiry
  }, {
    headers: {
      Authorization: "Bearer " + user.jwt
    }
  }
  );
};
const UserService = {
  getPublicContent,
  getUserBoard,
  update,
  order,
  getUploadedContent,
  addnew,
  getallordersofuser,
  paymentdetail,
  getallticketsofuser
};

export default UserService;