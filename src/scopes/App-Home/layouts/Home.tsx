import { CardChips } from "../components/CardChips"

export function Home() {

    return (
        <div className="">
            <div className="my-2">

                <div className="">
                    <CardChips 
                        img='/img/chair.jpg'
                        category = 'CHAIRS'
                        title = 'Modern Yellow Chair'
                        subTitle = 'Tinners House'
                        price = {420}
                        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis quam ac nulla blandit vehicula at vitae ipsum'
                        quantity = {1}
                    />
                </div>

            </div>
        </div>
    )
}
