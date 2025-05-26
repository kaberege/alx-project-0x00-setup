import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button width="sm" rounded="sm"/>
            <Card />
            <Button width="md" rounded="md"/>
            <Card />
            <Button width="lg" rounded="full"/>
        </div>
    )
}
export default Landing