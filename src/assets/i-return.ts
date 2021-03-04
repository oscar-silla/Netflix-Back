export interface IReturn {
    readonly status: number;
    readonly msg: string;
    readonly data: any;
    readonly code: string;
    readonly validated: boolean;
}