import React from 'react';

const TestInfo = ['virus', 'bacteria', 'normal', 'advanced'];

let Test = '';

for (var i = 0; i<TestInfo.length; i++){
	Test+=`<tr>
          	<td>Test ${i+1}</td>
          	<td>${TestInfo[i]}</td>
          </tr>`;
}
export default Test;
