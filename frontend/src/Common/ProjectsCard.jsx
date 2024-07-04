import React from 'react'

function ProjectsCard({src ,href,h3,p}) {
  return (
        <a href={href} target='_blank'>
                <img className='hover' src={src} alt={'${h3}logo'}/>
            <h3>{h3}</h3>
            <p>{p}</p>
            </a>
  )
}

export default ProjectsCard