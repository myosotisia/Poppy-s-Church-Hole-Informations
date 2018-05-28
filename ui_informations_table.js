$('#main').prepend(`
<style type="text/css">
#infoBubble {border-bottom:3px solid red;width: 100%;color:black;height: auto;display:flex;padding-bottom: 10px;}

.table td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;}
#table-info {background-color: aqua;}
.table .table-cell{vertical-align:top;}
.table th{font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border: 5px solid;overflow:hidden;word-break:normal;}
#last-info, #last-info .table th, #last-info .table td {background-color:aqua;border: 3px solid purple;}
#trollTable, #trollTable .table th, #trollTable .table td  {background-color:aqua;border: 3px solid red;}

#infoBubble div:nth-child(1) {width: 50%;}
#infoBubble div:nth-child(3) {width: 50%;}
#infoBubble div:nth-child(2) {width: 100%;}
#last-info {width: 100%;}
#trollTable {width: 100%;}
</style>
<div id="infoBubble">
	<div>
		<table class="table" id="last-info">
		  <tr>
			<th class="table-cell" colspan="2">Last event information</th>
		  </tr>
		  <tr>
			<td class="table-cell">Event</td>
			<td id="eventCell" class="table-cell"></td>
		  </tr>
		  <tr>
			<td class="table-cell">Time</td>
			<td id="timeCell" class="table-cell"></td>
		  </tr>
		  <tr>
			<td class="table-cell">Player name</td>
			<td id="playerCell" class="table-cell"></td>
		  </tr>
		  <tr>
			<td class="table-cell">UID</td>
			<td id="uid" class="table-cell"></td>
		  </tr>
		</table>
	</div>
	<div id="spacingTable"></div>
	<div>
		<table class="table" id="trollTable">
		  <tr>
			<th class="table-cell" colspan="2">Last one to extinguish the candle (Under 500s)</th>
		  </tr>
		  <tr>
			<td class="table-cell">Event</td>
			<td id="eventCell2" class="table-cell"></td>
		  </tr>
		  <tr>
			<td class="table-cell">Time</td>
			<td id="timeCell2" class="table-cell"></td>
		  </tr>
		  <tr>
			<td class="table-cell">Player name</td>
			<td id="playerCell2" class="table-cell"></td>
		  </tr>
		  <tr>
			<td class="table-cell">UID</td>
			<td id="uid2" class="table-cell"></td>
		  </tr>
		</table>
	</div>
</div>`);
