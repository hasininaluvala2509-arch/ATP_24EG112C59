function Product(props){//{x:{productObj:{}}} prop->property recviews data from parent
    //state
    const {productObj}= props;
    //return a react ele
    return(
        <div><h1 className="text-2xl text-blue-300">{productObj.title}</h1>
            <p>{productObj.price}</p>
            <p>{productObj.description}</p>
        </div>
    )
}
export default Product;