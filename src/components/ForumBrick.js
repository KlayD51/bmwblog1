

const ForumBrick = ({Description, Title, PubDate, Publisher}) => {
    return (
        <div className='forumBrick'>
            <h3>{Title}</h3>
            <p>{Description}</p>
            <h5>{PubDate}</h5>
            <h5>{Publisher}</h5>
        </div>
    )
}

export default ForumBrick
