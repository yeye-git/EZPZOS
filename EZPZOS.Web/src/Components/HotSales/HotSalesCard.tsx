import React from 'react'
import dishImg from '../../Assets/Images/dish.png'
import { LuThumbsUp } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { DefaultHotSaleValues } from "ezpzos.core";

/**
 * This is the HotSalesCard component,including properties of each card which is listed below.
 * 
 * @param props : the properties of card, including:
 * rank: the rank number of the card
 * dishName: the name of the card
 * like_pc: the percentage of the like
 * like_qty: the quantities of the like
 * price: the price of the card
 * @returns 
 */
export default function HotSalesCard(props:{rank:number,dishName:string,like_pc:number,like_qty:number,price:number}) {
  return (
    <div className="w-[146px] h-[205px] bg-white rounded-[7px] relative ml-[5px]">
      <div className="w-[48px] h-[21px] bg-[#fbe6bb] rounded-tl-[7px] rounded-br-[7px] flex justify-center items-center absolute">
        <span className='text-[14px]/[21px] '>{DefaultHotSaleValues.DefaultTag}{props.rank}</span>
      </div>
      <div className="ml-[5px]">
      <div className="w-[135px] h-[110px]   pt-[5px] text-[#4D4D4D] text-[14px] leading-[21px]">
        <img src={dishImg} alt="this is the pictuire of hot sales" className='w-[135px] h-[110px]'/>
        <div className="  leading-[14px] mt-[5px] font-bold">{props.dishName}</div>
        <div className=" font-normal"><LuThumbsUp className=" inline-block"/><span className="ml-[5px]">{props.like_pc}%({props.like_qty})</span></div>
        <div className=''>${props.price}</div>
        <div className='absolute right-[5px] bottom-[5px] w-[30px] h-[30px] bg-gradient-to-t from-[#cd4e23] to-[#f29d50] rounded-full flex justify-center items-center'><FaPlus className="text-white text-[20px]"/></div>
      </div>
      </div>
      
    </div>
  )
}
