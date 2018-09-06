export interface ILogEntry {
    activity: string,
    notes: string,
    duration: string,
    user: string
    
}

export interface Entry {
    logentry: ILogEntry
}