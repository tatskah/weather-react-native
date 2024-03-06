import axios from "axios";
import DataHelper from "../utils/DataHelper";


// export default async = axios.create({
//     baseURL: "http://192.168.1.102:8080/api/",
//     headers: {
//         "Content-type": "application/json"
//     }
// });

export default async = axios.create({
    // baseURL: DataHelper.GetStorageData("SERVER_URL"),
    baseURL: "http://192.168.1.102:8080/api/",
    headers: {
        "Content-type": "application/json"
    }
});

// class DataConnection {
//     getHttp() {
//         const serverURL = this.getServerUrl();
//         console.log(serverURL);
//         return axios.create({
//             baseURL: serverURL,
//             // baseURL: serverURL,
//             headers: {
//                 "Content-type": "application/json"
//             }
//         });

//     }

//     async getServerUrl() {
//         return "http://192.168.1.102:8080/api/"
//         // return await DataHelper.GetStorageData("SERVER_URL");
//     }

// }

// export default new DataConnection;
//return "http://192.168.1.102:8080/api/";


// axios.create({
//     baseURL: await getURL(),
//     // baseURL: serverURL,
//     headers: {
//         "Content-type": "application/json"
//     }
// });




// axiosInstance.interceptors.response.use(
//     response => {
//         console.log(response);
//         return response;
//     },
//     error => {
//         if (error.response.status === 401) {
//             console.log("ERROR AXIOS");
//         }
//         return Promise.reject(error);
//     }
// );