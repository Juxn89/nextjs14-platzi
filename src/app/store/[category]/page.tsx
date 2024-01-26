interface CategoryProps {
    params: {
        category: string
    }
}

export default function category(props: CategoryProps) {
    const { params } = props;

    return(
        <>
            <h1>Category | { params.category }</h1>
        </>
    )
}