import React from 'react'

const BuildContainersS = ({Name, content, pic1, pic2, pic3}) => {
    return (
        <div>
            <h1 style={{justifyContent:'center'}}>{Name}</h1>
           <p>{content}</p>
                     <div className='buildimgcontainer'>
                    <img src={pic1} alt='pic1'/>
                    <img src={pic2} alt='pic2'/>
                    <img src={pic3} alt='pic3'/>
                    </div>
        </div>
    )
}

export default BuildContainersS
