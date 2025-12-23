import { useQuery } from '@tanstack/react-query';
const Example = () => {
  const {isPending, error, data} = useQuery({  
    queryKey: ['repodata'],
    queryFn: () => fetch('https://api.github.com/repos/TanStack/query').then(res => 
      res.json()
    )
  });

  if(isPending) return <span>Loading...</span>
  if(error) return <span>Error: {error.message}</span>
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}

export default Example
