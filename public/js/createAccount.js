<%- include('templates/header.ejs') -%>

    <h1 style="text-align: center;margin-top: 80px;">Create Account</h1>
    
    <form id="loginForm" action="/loginAttempt" method="POST">
        <div class="form-group">
            <label for="exampleInputEmail1">Full Name</label>
            <input type="text" class="form-control" id="fullnameInput" aria-describedby="emailHelp" placeholder="Full Name" name="fullname">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" class="form-control" id="usernnameInput" aria-describedby="emailHelp" placeholder="Enter username" name="username">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password">
        </div>
        <button type="submit" class="form-group btn btn-primary">Create Account</button>
    </form>
    
    <script type="text/javascript" src="js/createAccount.js"></script>
    
<%- include('templates/footer.ejs') -%>