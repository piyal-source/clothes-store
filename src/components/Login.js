import React from "react";

function Login() {
    return (
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Login</h2>
                        <form method="POST">
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" ariaDescribedby="emailHelp" placeholder="Email id" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" placeholder="Password" />
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="remember" />
                                <label class="form-check-label" for="remember">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;