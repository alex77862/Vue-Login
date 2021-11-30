var app = new Vue({
    el: '#app',
    data: {
        user: '',
        password: '',
        posts: [],
        logged: false
    },
    created() {
        this.getData()
    },
    methods: {
        login(e) {
            e.preventDefault();
            this.getData()
            console.log(this.posts[0]);
            if( this.posts[0].user == this.user && this.posts[0].password == this.password){
                this.logged = true;
            } else {
                this.logged = false;
            }
        },
        getData() {
            axios.get('http://localhost:3000/api/user')
                .then(res => this.posts = res.data)
                .catch(error => console.log(error));
        }
    }
});