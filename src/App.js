import { useState, useEffect } from 'react'
import Jobs from './components/Jobs'

const App = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getJobs = async () => {
      const res = await fetch('https://api.rooster.jobs/core/public/jobs')
      const data = await res.json()
      const allJobsFromApi = data.body.results
      setJobs(allJobsFromApi)
    }
    getJobs()
  }, [])

  const shuffleJobs = () => {
    var temp, newPos
    var tempArray = jobs
    for (var x = tempArray.length - 1; x >= 0; x--) {
      newPos = Math.floor(Math.random() * x + 1)
      temp = tempArray[x]
      tempArray[x] = tempArray[newPos]
      tempArray[newPos] = temp
    }

    setJobs([...jobs])
  }

  return (
    <div className='container'>
      <button className='btn btn-block' onClick={shuffleJobs}>
        Shuffle Jobs
      </button>
      <Jobs jobs={jobs} />
    </div>
  )
}

export default App
