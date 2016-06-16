$(document).ready(function(){
if($.inArray('teacher',ENV['current_user_roles']) === 1 && $.inArray('admin',ENV['current_user_roles']) === 2 )
{

    }
else if
  ($.inArray('admin',ENV['current_user_roles']) === 1 ) {

    }
    else if
  ($.inArray('ta',ENV['current_user_roles']) === 1 ) {

    }
else {

    }
});