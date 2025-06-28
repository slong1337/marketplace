import { CardChips } from "../components/CardChips"

export function Home() {

    return (
        <div className="">
            <div className="my-2">

                <div className="">
                    <CardChips 
                        img='img/chair.jpg'
                        category = 'CHAIRS'
                        title = 'Modern Yellow Chair'
                        subTitle = 'Tinners House'
                        price = {420}
                        description = 'Yellow Chair – a vibrant and stylish piece that brightens any space. Its sunny hue adds warmth and works well in modern or retro interiors. Perfect as an accent in living rooms, offices, or kids' rooms.'
                    />
                </div>

            </div>
        </div>
    )
}

// const cart = {
//     title:'Modern Yellow Chair'
//     quantity: 1
// }
