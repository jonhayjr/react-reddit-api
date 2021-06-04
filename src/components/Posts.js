const Posts = ({posts, isLoading}) => {
    return (
        <div className='mt-5'>
            <ul>
                {isLoading ?
                    <p>Loading...</p>
                :
                posts.map(post => {
                  return <li key={post.id}><p>{post.title}</p><p>- {post.author}</p></li>
                })
                }
            </ul>
        </div>
    )
}

export default Posts
