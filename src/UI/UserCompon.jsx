
const UserCompon = ({title, data}) => {
    
          if (!data) return <div>Loading...</div>;


  return (
    <div>
      <h1 >{title}</h1>
      <ul>
        {data.map((user, index)=>{
          return <li key={index}>{user.name}</li>
        })}
        </ul>
    </div>
  )
}

export default UserCompon
