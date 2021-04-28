$(document).ready(function() {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    })
    // emailForm على النموذج validate تطبيق التابع
$(function() {
    $("#emailForm").validate();
});