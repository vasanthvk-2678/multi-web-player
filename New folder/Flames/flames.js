$(document).ready(function () {

	$('#flames').on('click',function(){
		var name1 = $('#name1').val() ;
		var name2 = $('#name2').val() ;
		var result = "FLAMES" ;
		if( name2.length==0 || name1.length==1 )
			alert( 'Enter the fields..' ) ;
		else{
			var total = name1.length + name2.length ;
			var match = 0 ;
			
			for( var i=0;i<name1.length;i++ ){
				for( var j=0;j<name2.length;j++ ) {
					if( name1.charAt(i)==name2.charAt(j) ) {
						name2 = name2.substr(0,j)+"*"+name2.substr(j+1)	 ;
						match++ ;
						break ;
					}
				}
			}
			match = total-( 2*match ) ;
			var temp = match-1 ;
			var arr = result.split('') ;
			console.log(arr) ;
			for( var i=1;i<result.length;i++ ) {
				while( temp>=arr.length )
					temp = temp-arr.length ;
				var rem = arr[temp] ;
				console.log(rem) ;
				rem = "#"+rem.toString() ;
				$(rem).css('opacity','.1') ;
				arr.splice(temp,1) ;
				temp = temp + match-1 ;
				
			}
			temp = "#"+arr[0].toString() ;
			$(temp).css('font-size','277%') ;
		}

		if( arr[0]=="F" )
			alert('just FRIENDS') ;
		if( arr[0]=="L" )
			alert('Its LOVE..') ;
		if( arr[0]=="A" )
			alert('nothing but ATTRACTION') ;
		if( arr[0]=="M" )
			alert('-MARRIAGE-') ;
		if( arr[0]=="E" )
			alert('luckly or unluckly ENMIES ') ;
		if( arr[0]=="S" )
			alert('Sister/Brother') ;
		
	});
	$('#refersh').on('click',function(){
		location.reload();
	});

});