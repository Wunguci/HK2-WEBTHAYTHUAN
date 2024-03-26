function changeColor() {
    // Lấy giá trị của radio button được chọn
    let radioSelected = document.querySelector('input[name=radio]:checked');
    if(!radioSelected){
        alert("Vui lòng chọn 'Background' hoặc 'Font' trước khi đổi màu.");
        return;
    }

    let selectColor = document.getElementById('selectColor');
    let colorValue = selectColor.value;

    // Đảm bảo một màu được chọn từ dropdown
    if(colorValue === 'Selected') {
        alert("Vui lòng chọn một màu từ dropdown.");
        return;
    }

    // Lấy tất cả các thẻ <p> trong .content
    let paragraphs = document.querySelectorAll('.content p');

    // Áp dụng màu cho background hoặc font của mỗi thẻ <p>
    paragraphs.forEach(function(paragraph) {
        if(radioSelected.value === 'Background') {
            paragraph.style.backgroundColor = colorValue.toLowerCase();
        }else if(radioSelected.value === 'Font') {
            paragraph.style.color = colorValue.toLowerCase();
        }
    });
}