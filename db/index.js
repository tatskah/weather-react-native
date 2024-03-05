import axios from "axios";

// export default axios.create({
//     baseURL: "http://192.168.1.101:8080/api/",
//     headers: {
//       "Content-type": "application/json"
//     }
//   });


export default axios.create({
    baseURL: "http://192.168.1.102:8080/api/",
    // baseURL: serverURL,
    headers: {
        "Content-type": "application/json"
    }
});
