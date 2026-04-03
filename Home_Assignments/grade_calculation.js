
function grade (mark)
{

    switch (true){
        case (mark>90):
            console.log("A+")
            break
        case (mark>=71 && mark<=90):
            console.log("A")
            break
        case (mark>=50 && mark<=70):
            console.log("B")
            break
        default:
            console.log("F")
    }
}

grade (95)
grade (75)
grade (51)
grade (49)
