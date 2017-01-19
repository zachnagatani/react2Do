const auth = {
    saveToken: (token) => {
        window.localStorage['mean-token'] = token;
    },

    getToken: () => {
        return window.localStorage['mean-token'];
    },

    logout: () => {
        window.localStorage.removeItem('mean-token');
    },

    isLoggedIn: function() {
        const token = this.getToken();
        let payload;

        if(token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            payload = JSON.parse(payload);
            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    },

    currentUser: function() {
        if(this.isLoggedIn()) {
            const token = this.getToken();
            let payload = token.split('.')[1];
            payload = window.atob(payload);
            payload = JSON.parse(payload);

            return {
                username: payload.username,
            };
        }
    }
};

export default auth;