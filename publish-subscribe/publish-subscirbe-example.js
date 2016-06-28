//Publish Subscribe Implementations

//please also see observer Pattern

/*
Publish/Subscribe fits in very well in JavaScript ecosystems, largely because
at the core, ECMAScript implementations are event driven.


popular JavaScript libraries such as dojo, jQuery (custom events)
already have utilities that can assist in easily implementing a
Publish/Subscribe system with very little effort.

*/

// Publish

// jQuery: $(obj).trigger("channel", [arg1, arg2, arg3]);
$( el ).trigger( "/login", [{username:"test", userData:"test"}] );

// Dojo: dojo.publish("channel", [arg1, arg2, arg3] );
dojo.publish( "/login", [{username:"test", userData:"test"}] );


// Subscribe

// jQuery: $(obj).on( "channel", [data], fn );
$( el ).on( "/login", function( event ){...} );

// Dojo: dojo.subscribe( "channel", fn);
var handle = dojo.subscribe( "/login", function(data){..} );


// Unsubscribe

// jQuery: $(obj).off( "channel" );
$( el ).off( "/login" );

// Dojo: dojo.unsubscribe( handle );
dojo.unsubscribe( handle );
