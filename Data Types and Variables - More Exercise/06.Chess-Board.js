function chessBoard(num){
    let square = "white";
    console.log("<div class=\"chessboard\">");
    for (let i = 0; i < num; i++){
        console.log("  <div>");
            for (let j = 0; j < num; j++){
               square = square === "white" ? "black" : "white";
                console.log(`    <span class="${square}"></span>`);
            }
            
            if (num % 2 === 0){
                square = i % 2 === 0 ? "black" : "white";
            }
        console.log("  </div>");
    }
    console.log("</div>");
}
chessBoard(3)