export default function Auth() {
  return (
    <div className="page">
      <div className="auth-container">
        <h1 className="auth-title">Login to ShopHub</h1>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}