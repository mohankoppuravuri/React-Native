import React			 from "react";
import Test				 from "./Test";
import Farm 			 from "./Farms";
const CustomerInfo = {
	'Company Name': 'BI',
	'Complex Name': 'Aggio',
	'State Name':   'Andhra Pradesh',
	'Bird Type':    'Parrot',
	'Sample Type':  'virus'
};

const TestInfo = ['virus', 'bacteria', 'normal', 'advanced'];

const StrVar = `
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<style>
			body {font-family: Arial, Helvetica, sans-serif;}
			* {box-sizing: border-box;}
			
			table {
			font-family: arial, sans-serif;
			border-collapse: collapse;
			width: 100%;
			}

			td, th {
				border: 1px solid #dddddd;
				text-align: left;
				padding: 8px;
			}

			tr:nth-child(even) {
				background-color: #dddddd;
			}
		</style>
	</head>

	<body>
	<div>
		<h1> Poultry Diagnostic Sample Submission Form </h1>
			<div style="padding:20px">
				<div style="width:60%; height: 350px; float:left; margin-right: 10px">
					<h3>Customer Information </h3>
					<table>
						<tr>
							<td>Company Name: </td>
							<td>${CustomerInfo['Company Name']}</td>
						</tr>

						<tr>
							<td>Complex Name:</td>
							<td>${CustomerInfo['Complex Name']}</td>
						</tr>

						<tr>
							<td>State Name:</td>
							<td> ${CustomerInfo['State Name']}</td>
						</tr>
						
						<tr>
							<td>Bird Type:</td>
							<td> ${CustomerInfo['Bird Type']} </td>
						</tr>
						
						<tr>
							<td>Sample Type:</td>
							<td>  ${CustomerInfo['Sample Type']}</td>
						</tr>
						
						<tr>
							<td>Date Submitted:</td>
							<td> ${CustomerInfo['Date Submitted']}</td>
						</tr>
						
						<tr>
							<td>Submitted By:</td>
							<td> ${CustomerInfo['Submitted By']}</td>
						</tr>
						
						<tr>
							<td>Veterinarian:</td>
							<td> ${CustomerInfo['Veterinarian']}</td>
						</tr>
					</table>
				</div>
			
				<div style="width:30%; height: 350px; padding: 20px; display: inline-block;  margin-right: 5px;">
					<div style = "height: 175px;">
						<h3>Shipping Address </h3>
						22-67 
						MainRoad
						Gutnur  
						
					</div>
					<div style = "heigth: 175px">
						<h3>Send Results to</h3>
							mohan@antarx.com;</br>
					</div>
				</div>
			</div>

			<div style = "padding:20px">	
				<table>
					<h3>
					Test(s) Requested
					</h3>
					${Test}
				</table>
			</div>

			<div style = "padding: 20px">
				<table>
					<h3>Farm Information </h3>
					<tr>
						<th>BI Accession No:</th>
						<th>FLock No: </th>
						<th>Farm Name</th>
						<th>Age</th>
						<th>Comments</th>
					</tr>
					${Farm}
				</table>
			</div>
		</div>
	</body>
</html>
`;

export default StrVar;
