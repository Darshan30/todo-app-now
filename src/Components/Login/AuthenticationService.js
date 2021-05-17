import Axios from "axios";

class AuthenticationService {

    registerSucessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);

        this.setInterceptors()  

    }

    logout() {

        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let item = sessionStorage.getItem('authenticatedUser');
        if (item === null) {
            return false;
        }
        else {
            return true;
        }
    }

    getUserName() {
        let userName = sessionStorage.getItem('authenticatedUser')

        if (userName === null) return ''
        return userName
    }

    setInterceptors() {
        let uname = 'darshan'
        let pass = '2darshan'

        let basicAuth = 'Basic ' + window.btoa(uname + ":" + pass);
        Axios.interceptors.request.use((config) => {
            if (this.isUserLoggedIn()) {
                config.headers.authorization = basicAuth

            }

            return config


        })
    }
}

export default new AuthenticationService();