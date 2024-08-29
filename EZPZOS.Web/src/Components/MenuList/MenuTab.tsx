import React from "react";
import HotSales from "../HotSales/HotSales";
// Define the interface for the props
interface MenuTabProps {
  tableNumber: string | null;
  selectedTab: string | null;
}
/**
 * This interface defining the properties for the MenuTabProps
 * @param tableNumber is the table number extracted from /scan page {@link MenuTabProps.tableNumber}
 * @param selectedTab is to show which table customer is currently on {@link MenuTabProps.selectedTab}
 */

const MenuTab: React.FC<MenuTabProps> = ({ tableNumber, selectedTab }) => {
  return (
    <div>
      <HotSales/>
      <h1 className="text-3xl mb-4">
        This is menu page placeholder, for testing purpose
      </h1>
      <h1 className="text-3xl mb-4 text-blue-500">
        you're on **{selectedTab}**!
      </h1>
      <div className="mb-4">Table Number: {tableNumber}</div>
    </div>
  );
};

export default MenuTab;
