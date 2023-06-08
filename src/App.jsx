import useHttp from './hooks/useHttp'
export default function App() {
  const { data, isLoading, error } = useHttp(
    'https://jsonplaceholder.typicode.com/todos'
  )

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
    
  return (
    <>
      {data.map((elem) => (
        <div key={elem.id}>{elem.title}</div>
      ))}
    </>
  )
}
