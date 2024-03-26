function calculator(operation) {
    // Lấy giá trị từ 2 ô input
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result;
    var valid = true;

    document.getElementById('tb1').innerHTML = "(*)";
    document.getElementById('tb2').innerHTML = "(*)";
   

    if(isNaN(num1)){
        document.getElementById('tb1').innerHTML = "Vui lòng nhập số!";
        return;
    } 
    if(isNaN(num2)){
        document.getElementById('tb2').innerHTML = "Vui lòng nhập số!";
        return;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'div':
            if(num2 == 0){
                result = "Không thể chia cho 0!";
            }else {
                result = num1 / num2;
            }
            break;
        case 'res':
            if(num2 == 0){
                result = "Không thể chia cho 0!";
            }else {
                result = num1 % num2;
            }
            break;
        default:
            result = "Phép toán không hợp lệ";
    }
    // Hiển thị kết quả
    document.getElementById('result').value = result;    
}