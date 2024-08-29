export declare const First: <T>(dic: {
    [name: string]: T;
}, callback: Function) => T | null;
export declare function Where<T>(dic: {
    [name: string]: T;
}, callback: Function): {
    [name: string]: T;
};
export declare function Where<T>(arr: T[], callback: Function): T[];
export declare function ToArray<T>(dic: {
    [name: string]: T;
}): T[];
export declare function Any<T>(dic: {
    [name: string]: T;
}, callback: Function): Boolean;
export declare function Any<T>(arr: T[], callback: Function): Boolean;
export declare function All<T>(dic: {
    [name: string]: T;
}, callback: Function): Boolean;
export declare function All<T>(arr: T[], callback: Function): Boolean;
export declare function Count<T>(arr: T[], callback: Function): number;
export declare function Max<T>(dic: {
    [name: string]: number;
}): string;
export declare function IndexOf<T>(dic: {
    [name: string]: number;
}, name: string): number;
