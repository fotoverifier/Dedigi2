import Title from "@/components/title-component";
const ReflectionConsistencyCheckingPage = () => {
    return (
        <div className="flex flex-col h-screen p-5" >
            <Title title={"Reflection Consistency Checking"} icon={"/ReflectionConsistencyChecking.svg"} className="flex-none" />
            <div className="result_area grow pt-1">
                This tool can show <span className="text-red-600">copied areas</span> in an image even if they have been edited after pasting, such as rotation or resizing or change color.
            </div>
            
        </div>
    )
}
export default ReflectionConsistencyCheckingPage;