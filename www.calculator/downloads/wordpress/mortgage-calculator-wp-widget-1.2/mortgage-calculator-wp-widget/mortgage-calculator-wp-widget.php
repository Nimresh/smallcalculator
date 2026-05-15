<?php
/*
Plugin Name: Mortgage Loan Calculator
Plugin URI: http://www.calculator.net/projects/mortgage-calculator-widget.php
Description: A standard mortgage loan calculator to calculate the monthly mortgage payments, total payments, and interest based on the loan amount, interest rate, loan term, etc.  This calculator can be inserted either to the sidebar or into the post, but not both. Install "Mortgage Loan Calculator" through the WordPress admin menu of Appearance or Design and then widgets to add to the sidebar. Place [calculatornet_mortgage_calculator] in the content to insert into a post.
Author: calculator.net
Version: 1.2
Author URI: http://www.calculator.net
License: GNU GPL see http://www.gnu.org/licenses/licenses.html#GPL
*/

class calculatornet_mortgage_calculator {

    function calc_init() {
    	$class_name = 'calculatornet_mortgage_calculator';
    	$calc_title = 'Mortgage Loan Calculator';
    	$calc_desc = 'A standard mortgage loan calculator to calculate the monthly mortgage payments, total payments, and interest based on the loan amount, interest rate, loan term, etc.';

    	if (!function_exists('wp_register_sidebar_widget')) return;

    	wp_register_sidebar_widget(
    		$class_name,
    		$calc_title,
    		array($class_name, 'calc_widget'),
            array(
            	'classname' => $class_name,
            	'description' => $calc_desc
            )
        );

    	wp_register_widget_control(
    		$class_name,
    		$calc_title,
    		array($class_name, 'calc_control'),
    	    array('width' => '100%')
        );

        add_shortcode(
        	$class_name,
        	array($class_name, 'calc_shortcode')
        );
    }

    function calc_display($is_widget, $args=array()) {
    	if($is_widget){
    		extract($args);
			$options = get_option('calculatornet_mortgage_calculator');
			$title = $options['title'];
			$output[] = $before_widget . $before_title . $title . $after_title;
		}


		$output[] = '<div style="margin-top:5px;">
			<script type="text/javascript">
			function formatAsMoney(num) {
				num = num.toString().replace(/\$|\,/g,"");
				if(isNaN(num))num = "0";
				sign = (num == (num = Math.abs(num)));
				num = Math.floor(num*100+0.50000000001);
				cents = num%100;
				num = Math.floor(num/100).toString();
				if(cents<10)cents = "0" + cents;
				for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) num = num.substring(0,num.length-(4*i+3))+","+num.substring(num.length-(4*i+3));
				return (((sign)?"":"-") + "$" + num + "." + cents);
			}
			function gObj(obj) {
				var theObj;
				if(document.all){
					if(typeof obj=="string"){
						return document.all(obj);
					}else{
						return obj.style;
					}
				}
				if(document.getElementById){
					if(typeof obj=="string"){
						return document.getElementById(obj);
					}else{
						return obj.style;
					}
				}
				return null;
			}
			function trimAll(sString){
				while (sString.substring(0,1) == " "){
					sString = sString.substring(1, sString.length);
				}
				while (sString.substring(sString.length-1, sString.length) == " "){
					sString = sString.substring(0,sString.length-1);
				}
				return sString;
			}
			function isNumber(val){
				val=val+"";
				if (val.length<1) return false;
				if (isNaN(val)){
					return false;
				}else{
					return true;
				}
			}
			function formatNum(inNum){
				outStr = ""+inNum;
				inNum = parseFloat(outStr);
				if ((outStr.length)>10){
					outStr = "" + inNum.toPrecision(10);
				}
				if (outStr.indexOf(".")>-1){
					while (outStr.charAt(outStr.length-1) == "0"){
						outStr = outStr.substr(0,(outStr.length-1));
					}
					if (outStr.charAt(outStr.length-1) == ".") outStr = outStr.substr(0,(outStr.length-1));
					return outStr;
				}else{
					return outStr;
				}
			}
			function showquickmortgagemsg(inStr, isError){
				if (isError) inStr = "<font color=red>" + inStr + "</font>";
				gObj("mortgagecoutput").innerHTML = inStr;
			}
			function mortgagecalc(){
				showquickmortgagemsg("calculating...",true);
				cloanamount = gObj("cloanamount").value;
				cloanterm = gObj("cloanterm").value;
				cinterestrate = gObj("cinterestrate").value;
				cpropertytaxes = gObj("cpropertytaxes").value;
				cpmi = gObj("cpmi").value;
				cothercost = gObj("cothercost").value;

				if (!isNumber(cloanamount)){
					showquickmortgagemsg("loan amount need to be numeric",true);
					return;
				}else if (!isNumber(cloanterm)){
					showquickmortgagemsg("loan term need to be numeric",true);
					return;
				}else if ((cloanterm<1)||(cloanterm>500)){
					showquickmortgagemsg("loan term need to be a number between 0 and 500",true);
					return;
				}else if (!isNumber(cinterestrate)){
					showquickmortgagemsg("interest rate need to be numeric",true);
					return;
				}else if ((cinterestrate<-200)||(cinterestrate>200)){
					showquickmortgagemsg("interest rate needs to be between -200 and 200",true);
					return;
				}else if (!isNumber(cpropertytaxes)){
					showquickmortgagemsg("property taxes need to be numeric",true);
					return;
				}else if (!isNumber(cpmi)){
					showquickmortgagemsg("private mortgage insurance need to be numeric",true);
					return;
				}else if (!isNumber(cothercost)){
					showquickmortgagemsg("other insurance and costs need to be numeric",true);
					return;
				}

				monthlyInterestRate = cinterestrate/100/12;
				if (monthlyInterestRate==0){
					monthlypayment = cloanamount/cloanterm/12.0;
				}else{
					monthlypayment = (monthlyInterestRate/(1-Math.pow((1+monthlyInterestRate),(-cloanterm*12))))*cloanamount;
				}

				cpropertytaxes = parseFloat(cpropertytaxes);
				cpmi = parseFloat(cpmi);
				cothercost = parseFloat(cothercost);
				taxInsuranceCost = cpropertytaxes + cpmi + cothercost;

				summaryOutPut = "<p><b>Results:</b></p><table border=0 cellpadding=0>";
				summaryOutPut += "<tr bgcolor=#dddddd><td><b>monthly pay</b></td><td align=right>" + formatAsMoney(monthlypayment) + "</td></tr>";
				if (taxInsuranceCost >0){
					if (cpropertytaxes > 0)
						summaryOutPut += "<tr><td align=right>prop. tax</td><td align=right>" + formatAsMoney(cpropertytaxes/12) + "</td></tr>";
					if (cpmi > 0)
						summaryOutPut += "<tr><td align=right>pmi</td><td align=right>" + formatAsMoney(cpmi/12) + "</td></tr>";
					if (cothercost > 0)
						summaryOutPut += "<tr><td align=right>other cost</td><td align=right>" + formatAsMoney(cothercost/12) + "</td></tr>";
					summaryOutPut += "<tr bgcolor=#dddddd><td><b>monthly total</b></td><td align=right>" + formatAsMoney(monthlypayment + taxInsuranceCost/12) + "</td></tr>";
				}

				summaryOutPut += "<tr><td>total payments</td><td align=right>" + formatAsMoney(monthlypayment*12*cloanterm) + "</td></tr>";
				summaryOutPut += "<tr><td>total interest</td><td align=right>" + formatAsMoney(monthlypayment*12*cloanterm-cloanamount) + "</td></tr>";
				summaryOutPut += "</table>";

				showquickmortgagemsg(summaryOutPut,false);
			}
			</script>

			<!-- Edit the following to change the look and feel of this calculator -->
			<style>
				#calinputtablemort{
					border:0;
				}
				#calinputtablemort td{
					border:0;
					font-size:12px;
					padding:2px;
				}
				#calinputfootermort{
					text-align:center;
				}
			</style>
			<table id="calinputtablemort">
			<form>
				<tr><td>loan amount</td><td align="right" valign="bottom"><input type="text" name="cloanamount" size="4" id="cloanamount" value="300000" style="text-align: right;"></td><td>$</td></tr>
				<tr><td>loan term</td><td align="right"><input type="text" name="cloanterm" size="4" id="cloanterm" value="30" style="text-align: right;"></td><td>yrs</td></tr>
				<tr><td>interest rate</td><td align="right"><input type="text" name="cinterestrate" size="4" id="cinterestrate" value="6" style="text-align: right;"></td><td>%</td></tr>
				<tr><td>property tax</td><td align="right"><input type="text" name="cpropertytaxes" size="4" id="cpropertytaxes" value="0" style="text-align: right;"></td><td>$/yr</td></tr>
				<tr><td>pmi insurance</td><td align="right"><input type="text" name="cpmi" size="4" id="cpmi" value="0" style="text-align: right;"></td><td>$/yr</td></tr>
				<tr><td>other cost</td><td align="right"><input type="text" name="" size="4" id="cothercost" value="0" style="text-align: right;"></td><td>$/yr</td></tr>
				<tr><td colspan="2" align="right"><input type="button" value="Calculate" onclick="mortgagecalc()"></td><td>&nbsp;</td></tr>
			</form>
			</table>
			<div id="mortgagecoutput"></div>
			<div id="calinputfootermort">by <a href="http://www.calculator.net" rel="nofollow">calculator.net</a></div>
		</div>';
    	$output[] = $after_widget;
    	return join($output, "\n");
    }

	function calc_control() {
		$class_name = 'calculatornet_mortgage_calculator';
		$calc_title = 'Mortgage Loan Calculator';

	    $options = get_option($class_name);

		if (!is_array($options)) $options = array('title'=>$calc_title);

		if ($_POST[$class_name.'_submit']) {
			$options['title'] = strip_tags(stripslashes($_POST[$class_name.'_title']));
			update_option($class_name, $options);
		}

		$title = htmlspecialchars($options['title'], ENT_QUOTES);

		echo '<p>Title: <input style="width: 180px;" name="'.$class_name.'_title" type="text" value="'.$title.'" /></p>';
		echo '<input type="hidden" name="'.$class_name.'_submit" value="1" />';
	}

    function calc_shortcode($args, $content=null) {
        return calculatornet_mortgage_calculator::calc_display(false, $args);
    }

    function calc_widget($args) {
        echo calculatornet_mortgage_calculator::calc_display(true, $args);
    }
}

add_action('widgets_init', array('calculatornet_mortgage_calculator', 'calc_init'));

?>