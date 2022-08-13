//Validate form
$(document).ready(function() {
    $('#authForm').validate({
        rules: {
           tel: 'required',
        },
        messages: {
            tel: 'Số điện thoại không được để trống',
        }
    });
});