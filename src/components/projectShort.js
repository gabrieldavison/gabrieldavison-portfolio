import React from "react"

const ProjectShort = ({ title, source, demo, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        <a href={demo}>demo</a> / <a href={source}>source</a>
      </p>
      <p>{description}</p>
    </div>
  )
}

export default ProjectShort
