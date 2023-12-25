import React from "react"

export default interface IProjectData {
    id              : number
    name            : string
    description     : string
    challenges?     : string
    startDate?      : Date
    endDate?        : Date

    technologies?   : string[]
    skills?         : string[]
    features?       : string[]

    imgSrc?         : string
    codeSrc?        : string
    detailSrc?      : string
    detailComponent?: () => React.ReactNode
}