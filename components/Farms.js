import React from 'react';

const FarmInfo = [
	{'BI Accession Number':'AAA',
		'Flock':'1',
		'Farm Name':'Allen',
		'Age':'45',
		'comments':'',},

	{'BI Accession Number':'BBB',
		'Flock':'2',
		'Farm Name':'Elisa',
		'Age':'20',
		'comments':'NA',
	},
	{'BI Accession Number':'CCC',
		'Flock':'3',
		'Farm Name':'Andrew',
		'Age':'78',
		'comments':'NA',},
];

let Farm = '';

for (var i = 0; i<FarmInfo.length; i++){
	Farm+= `<tr>
                <td>${FarmInfo[i]['BI Accession Number']}</td>
                <td>${FarmInfo[i]['Flock']} </td>
				<td>${FarmInfo[i]['Farm Name']}</td>
                <td>${FarmInfo[i]['Age']}</td>
                <td>${FarmInfo[i]['comments']}</td>
			</tr>`;

}
export default Farm;
