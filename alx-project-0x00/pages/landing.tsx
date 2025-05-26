import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button width="w-sm" styles="rounded-sm"/>
            <Card />
            <Button width="w-md" styles="rounded-md"/>
            <Card />
            <Button width="w-lg" styles="rounded-full"/>
        </div>
    )
}
export default Landing