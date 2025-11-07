import React from 'react'

// HOC to fetch and provide user list data

function withLoader(WrappedComponent) {
    return function EnhancedComponent({isLoading, ...props}) {
        if (isLoading) {
            return <div>Loading...</div>
        }
        return <WrappedComponent {...props} />
    }
}

// example usase 

function UserList({users}) {
    return (
        <ul>
            {users.map(user => (        
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}   

const UserListWithLoader = withLoader(UserList)

export default UserListWithLoader