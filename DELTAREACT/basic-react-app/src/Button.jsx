
function printHello(){
    console.log("Hello!");
}
function printBye(){
    console.log("bye bye ");
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello}>click me</button>
            <p onMouseOver={printBye}>this is my first para
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste enim, 
                delectus quaerat aperiam repudiandae 
                esse nemo eum quod perspiciatis distinctio voluptas, quidem
                , eligendi labore optio cum id accusamus alias.
            </p>
        </div>
    );
}