export class Storage {
    get(key) {

    };

    set(key, value) {

    };

    getToken() {
        try {
            return localStorage.getItem('access_token');
        } catch (error) {
            console.error(error);
        }

    };
    getRefreshToken() {
        try {
            return localStorage.getItem('refresh_token');
        } catch (error) {
            console.error(error);
        }

    };
    setToken(token) {
        try {
            localStorage.setItem('access_token', token);
        } catch (error) {
            console.error(error);
        }
    }
    setRefreshToken(token) {
        try {
            localStorage.setItem('refresh_token', token);
        } catch (error) {
            console.error(error);
        }
    }
    clearToken() {
        try {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
        } catch (error) {

        }
    }
}

export default new Storage();
