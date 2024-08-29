export declare const HotSalesList: {
    Rank: number;
    DishName: string;
    Like_Pc: number;
    Like_Qty: number;
    Price: number;
}[];
export declare const BookConfirmInfo: {
    DishName: string;
    Date: string;
    Time: string;
    PeopleNum: string;
    Introdution: string;
};
export interface Cuisine {
    Id: number;
    Name: string;
    Amount: number;
    DineType: string;
    Price: number;
    ImageUrl: string;
}
export declare const ClientCartDemoData: Cuisine[];
export declare const DemoVoucher: {
    Number: string;
    Value: number;
};
