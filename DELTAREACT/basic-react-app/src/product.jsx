import "./Product.css";
import Price from "./price";
function Product({title,idx}){
    let Prices1=["1000","2000","3000","70000"];
    let Prices2=["4000","5000","6000","9000"];
    let Description=[["8000DPI","5 programmable button"],
    ["intuitive surface","design for iPad pro"],
    ["designed for iPad","intuitive surface"],
    ["wireless","optimal orientation"],]
    // let styles={backgroundColor:price>3000 ? "yellow":""}
    // if(price>3000){
        return (
            <div className="Product" >
                <h4>{title}</h4>
                <p>{Description[idx][0]}</p>
                <p>{Description[idx][1]}</p>
                <Price Prices1={Prices1[idx]} Prices2={Prices2[idx]}/>
                {/* <h3>{title}</h3>
                <h5>price:{price}</h5>
                <p>{features}</p>
                <p>discount is 5%</p> */}
            </div>
        );
    // }else{
    //     return (
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h5>price:{price}</h5>
    //             <p>{features}</p>
    //         </div>
    //     );
    // }
    
}
export default Product;