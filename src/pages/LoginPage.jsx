import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <p className="eyebrow">Welcome Back</p>
        <h1>Log in</h1>
        <p className="auth-subtitle">Skillforge AI driven adaptive learning and exam generator.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email</label>
          <input id="login-email" type="email" placeholder="spoorti@gmail.com" required />

          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" placeholder="Enter your password" required />

          <button type="submit">Log In</button>
        </form>

        <p className="auth-footer">
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </section>
    </main>
  )
}

export default LoginPage