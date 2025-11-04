import {useRouteError} from 'react-router-dom'

const RouterError = () => {
const error = useRouteError()
  return (
    <div>
        <h1>OOps...!</h1>
        <h2>Something went wrong</h2>
        <h3>{error.status} {error.error.message}</h3>
    </div>
  )
}

export default RouterError