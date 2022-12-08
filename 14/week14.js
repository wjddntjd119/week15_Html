var number = parseInt(prompt('입장객은 몇 명인가요?'));
var line = parseInt(prompt('한 줄에 몇명씩 앉습니까?'));
const line_number = (number&line ===0)? number/line : (number/line)+1;

var seat = 0;
document.write('<table>');
for(var i = 0; i<line_number;i++){
	document.write('<tr>');
	makeRowSeat(nowRow);
    const longUser = collApi();
    document.getElementById('user_name'.innerText)=longUser.name;
	document.write('</tr>');
}
document.write('</table>');

function callApi(){
    return fetch("https://naver.com/login")
}
function makeRowSeat(nowRow){
    for (let x=1; x<=seat; x++){
        const seatNo = nowRow * seat + x;
        if(seatNo>number) break;
        document.write('<td>좌석' +seatNo + '</td>');
    }
    retrun true;
    
}