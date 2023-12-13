import React from "react"

export default interface IProjectData {
    id              : number
    name            : string
    description     : string
    challenges?     : string
    startDate?      : Date
    endDate?        : Date
    imgSrc?         : string
    detailSrc?      : string
    detailComponent?: () => React.ReactNode
}