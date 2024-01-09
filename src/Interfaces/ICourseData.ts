import ILinkData from "./ILinkData"

export default interface ICourseData {
    id             : number
    name           : string
    overview       : string[]
    mainImgSrc?    : string
    skills?        : string[]
    links?         : ILinkData[]
}