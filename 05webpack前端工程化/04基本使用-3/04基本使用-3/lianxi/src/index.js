import $ from "jquery"
import './css/1.css'
import './css/1.less'
import './css/1.scss'

$(function(){
	$("#app").css("backgroundColor","rgba(0,0,0,0.2)");
})

class Person{
	static info = 'aaa'
}

console.log(Person.info);