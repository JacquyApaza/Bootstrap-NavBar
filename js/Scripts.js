                        

// Funciones ------------------------------------------------------------------------------------------------------------------------------------
function Collapse( nOpcion ) {
	$( "#DivRosario01" ).collapse( "hide" );
	$( "#DivRosario02" ).collapse( "hide" );
	$( "#DivRosario03" ).collapse( "hide" );
		
 	$( "#NavRosario01" ).removeClass( 'active' );
 	$( "#NavRosario02" ).removeClass( 'active' );
 	$( "#NavRosario03" ).removeClass( 'active' );
 	
	switch ( nOpcion ) {
    	case 1:
			$( "#DivRosario01" ).collapse( "show" );
    		$( "#NavRosario01" ).addClass( "active" );	
    		
			break;
		case 2:
			$( "#DivRosario02" ).collapse( "show" );
    		$( "#NavRosario02" ).addClass( "active" );	
		    
			break;
		case 3:
			$( "#DivRosario03" ).collapse( "show" );
		    $( "#NavRosario03" ).addClass( "active" );		    
	}				
}			

