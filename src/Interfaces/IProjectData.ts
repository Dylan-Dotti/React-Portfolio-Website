import React from "react"

export interface IProjectOverviewSection {
    title: string
    content: string
}

export default interface IProjectData {
    id               : number
    name             : string
    description      : string
    shortDescription?: string
    startDate?       : Date
    endDate?         : Date

    overviewSections?: IProjectOverviewSection[]

    technologies?    : string[]
    skills?          : string[]
    features?        : string[]

    imgSrc?          : string
    codeSrc?         : string
    detailSrc?       : string
    detailComponent? : () => React.ReactNode
}