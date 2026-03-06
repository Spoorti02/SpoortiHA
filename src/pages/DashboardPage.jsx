import { useNavigate } from 'react-router-dom'

function DashboardPage() {
  const navigate = useNavigate()

  return (
    <main className="dashboard-shell">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <button type="button" onClick={() => navigate('/login')}>
          Log Out
        </button>
      </header>

      <section className="dashboard-empty-state">
        <p className="eyebrow">Dashboard</p>

        <p>dashboard.</p>
      </section>
    </main>
  )
}

export default DashboardPage