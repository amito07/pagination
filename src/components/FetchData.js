import React from 'react'

function FetchData({posts,loading}) {
    if(loading){
        return <h2>Loading.......</h2>
    }
    return (
        <ul>
            {posts.map(post=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

export default FetchData
