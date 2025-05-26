import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className=" text-xl font-extralight my-4">Landing Page</h1>
            <Card />
            <Button  width="w-sm" styles="rounded-sm" title="Small Rounded" />
            <Card />
            <Button width="w-md" styles="rounded-md" title="Medium Rounded"/>
            <Card />
            <Button width="w-lg" styles="rounded-lg" title="Large Rounded"  />
            <Card />
            <Button width="w-full" styles="rounded-full" title="Full Rounded"  />
        </div>
    )
}
export default Landing