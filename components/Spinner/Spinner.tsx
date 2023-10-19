
export default function Spinner(props: any) {
    const { size, className } = props

    if (size === "sm") {
        return (
            <div className={"flex justify-center items-center " + className}>  
                <div className="w-8 h-8 border-t-6 border-b-4 border-blue-950 rounded-full animate-spin"></div>
            </div>
        )
    } else if (size === "md") {
        return (
            <div className={"flex justify-center items-center " + className}>   
                <div className="w-12 h-12 border-t-6 border-b-4 border-blue-950 rounded-full animate-spin"></div>
            </div>
        )
    } else {
        return (
            <div className={"flex justify-center items-center " + className}>   
                <div className="w-16 h-16 border-t-6 border-b-4 border-blue-950 rounded-full animate-spin"></div>
            </div>
        )
    }
}
