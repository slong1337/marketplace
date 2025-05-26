import { useState, useEffect } from "react"

export type CardChipsProps = {
    img: string
    category: string
    title: string
    subTitle: string
    price: number
    description: string
    quantity?: number
    className?: string
}

export const CardChips = (props: CardChipsProps) => {
    const {img, category, title, subTitle, price, description, quantity, className } = props

    const [newQuantity, setQuantity] = useState<number>(() =>
    Number(localStorage.getItem("quantity")) || 1
    )

    useEffect(() => {
        localStorage.setItem("quantity", newQuantity.toString())
    }, [newQuantity])

    const plusQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const minusQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    }

    const updateTotal = newQuantity * price

    return (
        <> 
            <div className="flex flex-col justify-center items-center lg:flex-row text-white w-full max-w-[1440px] mx-auto">

                <div className="w-full lg:w-1/2 flex justify-center items-center flex-col bg-white p-4 relative">

                    <p className="text-[#2D2E3278] absolute lg:top-[-130px] top-4 lg:left-0 left-7 z-10 rounded-xl border-2 px-4 py-1 lg:text-xl text-xs">AD1DAS</p>

                    <img src={img} alt={title} className="w-full max-w-[460px] h-auto"/>

                </div>

                    <div className="bg-[#2D2E32] w-full lg:w-1/2 p-8 lg:my-20 lg:mx-14">
                        <p className="text-yellow-400 text-xl md:text-2xl pb-4">{category}</p>
                        <h1 className="text-2xl md:text-4xl lg:text-[46px] pb-4">{title}</h1>
                        <p className="md:text-3xl text-xl text-[#B9B9B9] italic pb-5">{subTitle}</p>
                        <h2 className="md:text-5xl text-3xl pb-8">${price}</h2>
                        <p className="text-2xl text-[#B9B9B9] max-w-[577px] lg:pb-12 pb-8">{description}</p>

                        <div className="flex flex-col md:flex-row gap-8 pb-14">

                            <div className="">

                                <p className="pb-4 text-xl md:text-2xl">QUANTITY</p>

                                <div className="flex bg-[#26272A] rounded-full justify-center items-center p-2">

                                    <button onClick={minusQuantity} className="text-2xl px-2 -mt-1">-</button>

                                    <p className="px-2 text-[#B9B9B9] text-2xl w-12 text-center">{newQuantity}</p>

                                    <button onClick={plusQuantity} className="text-2xl px-2 -mt-1">+</button>

                                </div>

                            </div>

                            <div>

                                <p className="pb-4 text-xl md:text-2xl">TOTAL PRICE</p>

                                <p className="bg-[#26272A] rounded-full flex justify-center text-[#B9B9B9] p-2 text-2xl">${updateTotal}</p>

                            </div>

                        </div>

                        <div className="flex-col flex gap-6">

                            <button className=" rounded-full mb-8 py-4 text-2xl border-2">ADD TO MY WISHLIST</button>

                            <button className="bg-yellow-500 py-4 rounded-full text-black text-2xl">ADD TO CART</button>

                        </div>

                    </div>
            </div>
        </>
    )
}
