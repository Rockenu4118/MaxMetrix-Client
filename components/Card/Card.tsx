
const Card = (props: any) => {
    const { children, className } = props

    return (
        <div className={"p-4 border border-gray-400 rounded-lg " + className}>
            {children}
        </div>
    )
}

export default Card