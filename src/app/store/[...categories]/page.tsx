interface Categories {
    params: {
        categories: string[]
    },
    searchParams?: string
}

export default function Categories(props: Categories) {
    console.log(props)
    const { categories } = props.params
    return(
        <>
            <h1>Categories</h1>
            {
                categories.map(category => {
                    return (
                        <span key={category} style={{ border: 'solid 1px', margin: '5px', padding: '2px' }}>{ category }</span>
                    )
                })
            }
        </>
    )
}