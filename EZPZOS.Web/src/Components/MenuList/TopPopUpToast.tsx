import React from "react";
import { ToastContentProps } from "react-toastify";
import { IoCheckmarkCircle } from "react-icons/io5";

interface TopPopUpToastProps {
  message: string;
  closeToast?: () => void;
  toastProps?: ToastContentProps<{}>;
}
/**
 * This interface defining the properties for the PopUpToast
 * @param message is the message we want to display inthe notification {@link TopPopUpToastProps.message}
 * @param closeToast is the callback function to click on icon to close {@link RTopPopUpToastProps.closeToast}
 * @param toastProps is the properties {@link TopPopUpToastProps.toastProps}
 */

const TopPopUpToast: React.FC<TopPopUpToastProps> = ({
  message,
  closeToast,
}) => {
  return (
    <div className="flex items-center p-4">
      <div className="text-[#235DB5]">{message}</div>
      <div className="ml-4">
        <IoCheckmarkCircle className="text-green-500" size={36} />
      </div>
    </div>
  );
};

export default TopPopUpToast;
