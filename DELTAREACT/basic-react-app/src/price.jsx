export default function Price({Prices1,Prices2}){
    let oldStyles={
        textDecorationLine:"Line-through",
    };
    let newstyles={
        fontWeight:"bold",
    };
    let styles={
        backgroundColor:"#c0c367",
        height:"30px",
        width:"200px",
        borderBottomRightRadius:"14px",
         borderBottomLeftRadius:"14px"
    }
    return (
        <div style={styles}>
            <span style={oldStyles}>{Prices1}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newstyles}>{Prices2}</span>
        </div>
    )
}