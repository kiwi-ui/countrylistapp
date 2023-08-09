import { lazy } from 'react'
const Dashboard = lazy(() => import('./pages/Dashboard'))

const App:React.FC = () => {
  return (
    <>
    <div>
      <Dashboard />
    </div>
    </>
  )
}


export default App;
