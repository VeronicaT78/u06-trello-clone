$("document").ready();

$(".dialog").hide();

$("#sortable-todo, #sortable-doing, #sortable-done")
         .sortable({
           connectWith: '.item-container',
           revert: true,
           cursor: 'move',
           revert: 'invalid',
           snapMode: 'inner'
      })
        .disableSelection();

$(".btn").on('click', function (){
  $(".dialog").dialog(
    {
      resizable: false,
      height: "auto",
      width: "60vw",
      title: "Edit todo",
      show: {
        effect: 'fade',
        duration: 800,
      },
      hide: {
        effect: 'fade',
        duration: 800,
      },
      buttons: [
          {
            text: 'Save',
            id: 'save-btn',
            click: function () {
              $(this).dialog('close');
            },
          },
        ],
    }).open();
});

$( function() {
    $( "#tabs" ).tabs();
} );

$( function() {
    $( "#datepicker" ).datepicker({
        minDate: 0
        });
} );

$( function() {
    $( "#colorpicker" ).colorpicker('#task-container');
} );

$( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );

$( function() {
    $( "#datepicker" ).datepicker();
    $( "#anim" ).on( "change", function() {
      $( "#datepicker" ).datepicker( "slide", "showAnim", $( this ).val() );
    });
  } );

  






