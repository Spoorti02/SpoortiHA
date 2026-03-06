import { Link, useNavigate } from 'react-router-dom'

function SignupPage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <p className="eyebrow">Create Account</p>
        <h1>Get start</h1>
        <p className="auth-subtitle">Skillforge AI driven adaptive learning and exam generator.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="signup-name">Full Name</label>
          <input id="signup-name" type="text" placeholder="Your name" required />

          <label htmlFor="signup-email">Email</label>
          <input id="signup-email" type="email" placeholder="spoorti@gmail.com" required />

          <label htmlFor="signup-password">Password</label>
          <input id="signup-password" type="password" placeholder="Create a strong password" required />

          <button type="submit">Create Account</button>
        </form>

        <p className="auth-footer">
          Already registered? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  )
}

export default SignupPage