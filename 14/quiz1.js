var number = parseInt(prompt('입장객은 몇 명인가요?'));
var line = parseInt(prompt('한 줄에 몇명씩 앉습니까?'));
const line_number = (number&line ===0)? number/line : (number/line)+1;

var seat = 0;
document.write('<table>');
for(var i = 0; i<line_number;i++){
	document.write('<tr>');
	for(var j=1; j<=line; j++){
		seat +=1; //좌석번호
		if(seat > number)break;
		document.write("<td>좌석 " + seat + "</td>");
	}
	document.write('</tr>');
}
document.write('</table>');