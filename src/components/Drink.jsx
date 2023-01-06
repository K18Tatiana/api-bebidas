const Drink = ( {data} ) => {

    return (
        <div className="drink-card">
            <img src={data.strDrinkThumb} alt="" />
            <div className="info">
                <h2>{data.strDrink}</h2>
                <p>{data.strInstructions}</p>
            </div>
        </div>
    )
}

export default Drink