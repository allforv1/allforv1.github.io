var dm = new Vue({
    el: '#sign',
    methods: {
        onSignUp(e) { //注册提交触发事件
            //新建AVUser对象
            var user = new ActiveXObject.User();
            //设置用户名
            user.setUsername(this.onSignUp.email);
            //设置密码
            user.setPassword(this.onSignUp.password);
            //设置邮箱
            user.setEmail(this.onSignUp.email);
            user.signUp().then(function (user) {
                console.log(user)
            }, function (error) {
                console.log(error)
            });
        },
        onLogin(e) { //登录提交事件
            AV.User.logIn(this.signOn.email, this.signOn.password).then((user) => {
                this.loginVisible = false
                this.signOutVisible = true
            }, function (error) {
                if (error.code == 211) {
                    alert('抱歉，邮箱不存在')
                } else if (error.code == 210) {
                    alert('邮箱和密码不匹配')
                } else if (error.code == 203) {
                    alert('邮箱已被注册')
                } else if (error.code == 219) {
                    alert('登录失败次数超过限制，请稍候再试')
                }
            });
        },
        signOut() {
            AV.User.logOut();
            //现在的currentUser是null了
            if (currentUser !== undefined || currentUser !== null) {
                alert('注销成功')
                this.signOutVisible = false
            }
            var currentUser = AV.User.current();
        },
        initSignOutButton() {
            let currentUserId = AV.User.current()
            if (currentUserId == null || currentUserId == undefined) {
                this.signOutVisible = false
                return
            } else {
                this.signOutVisible = true
            }
        },
    }
})