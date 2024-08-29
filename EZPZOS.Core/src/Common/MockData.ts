export const HotSalesList=[
    {Rank:1,DishName:"Stewed beef with potato",Like_Pc:98,Like_Qty:1002,Price:17.2},
    {Rank:2,DishName:"Stewed beef with potato",Like_Pc:98,Like_Qty:1002,Price:17.2},
    {Rank:3,DishName:"Stewed beef with potato",Like_Pc:98,Like_Qty:1002,Price:17.2},
    {Rank:4,DishName:"Stewed beef with tomaaaato",Like_Pc:98,Like_Qty:1002,Price:17.2},
    {Rank:5,DishName:"Stewed beef with potato",Like_Pc:98,Like_Qty:1002,Price:17.2},
    {Rank:6,DishName:"Stewed beef with potato",Like_Pc:98,Like_Qty:1002,Price:17.2},
]

export const BookConfirmInfo = {
    "DishName": "DemoData Sichuan Cuisine",
    "Date": "27 Jun 2024",
    "Time": "17:30",
    "PeopleNum": "4",
    "Introdution": "This is introduction. This is introduction. This is introduction. This is introduction. This is introduction. This is introduction. "
}

export interface Cuisine {
    Id: number,
    Name: string;
    Amount: number;
    DineType: string;
    Price: number;
    ImageUrl: string;
}
export const ClientCartDemoData: Cuisine[] = [
    { Id:1, Name: 'Kung Pao Chicken', Amount: 1, DineType: 'Dine In', Price: 17, ImageUrl:"https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { Id:2, Name: 'Sweet and Sour Pork', Amount: 2, DineType: 'Takeaway', Price: 15, ImageUrl:"https://images.pexels.com/photos/2089712/pexels-photo-2089712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { Id:3, Name: 'Mapo Tofu', Amount: 3, DineType: 'Dine In', Price: 12, ImageUrl:"https://images.pexels.com/photos/699544/pexels-photo-699544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { Id:4, Name: 'Spring Rolls', Amount: 5, DineType: 'Takeaway', Price: 7, ImageUrl:"https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { Id:5, Name: 'Hot and Sour Soup', Amount: 4, DineType: 'Dine In', Price: 10, ImageUrl:"https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { Id:6, Name: 'Beef with Broccoli', Amount: 2, DineType: 'Dine In', Price: 14, ImageUrl:"https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { Id:7, Name: 'General Tso\'s Chicken', Amount: 3, DineType: 'Takeaway', Price: 16, ImageUrl:"https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { Id:8, Name: 'Szechuan Shrimp', Amount: 1, DineType: 'Dine In', Price: 18, ImageUrl:"https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { Id:9, Name: 'Lo Mein', Amount: 4, DineType: 'Takeaway', Price: 11, ImageUrl:"https://images.pexels.com/photos/5409012/pexels-photo-5409012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { Id:10, Name: 'Egg Fried Rice', Amount: 6, DineType: 'Dine In', Price: 8, ImageUrl:"https://images.pexels.com/photos/5848595/pexels-photo-5848595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
];

export const DemoVoucher = {Number: "12165154135", Value: 8};