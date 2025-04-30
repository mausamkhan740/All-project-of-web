import Product from "./product.jsx";
 

function ProductTab(){
    let styles = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    };

    // let options=["hii","durable","fast"];
     return(
        <div style={styles}>
            <h3></h3>
        <Product title="i am title first" idx={0}/>
        <Product title="i am th second" idx={1}/>
        <Product title="i am third" idx={2}/>
        <Product  title="and i an final" idx={3}/>
        </div>

    );
}
 
export default ProductTab;

