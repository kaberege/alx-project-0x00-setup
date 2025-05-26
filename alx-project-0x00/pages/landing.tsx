import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className=" text-xl font-extralight my-4">Landing Page</h1>
            <Card />
            <Button width="w-sm" styles="rounded-sm" />
            <Card />
            <Button width="w-md" styles="rounded-md" />
            <Card />
            <Button width="w-lg" styles="rounded-lg" />
            <Card />
            <Button width="w-full" styles="rounded-full" />
        </div>
    )
}
export default Landing