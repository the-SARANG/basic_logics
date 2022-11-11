function mod(num1,num2){
    let total=0
    let i=1
    do{
        total = num2*i
        i++
    }while(total<=num1)
    total = total-num2
    return num1-total
}
