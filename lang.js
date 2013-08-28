<script src="me/js/jquery.min.js"></script>
<script type="text/javascript" language="javascript">
 
$(function() {
    var language = 'fra';
    $.ajax({
        url: 'lang.xml',
        success: function(xml) {
            $(xml).find('translation').each(function(){
                var id = $(this).attr('id');
                var text = $(this).find(language).text();
                $("#" + id).html(text);
            });
        }
    });
});
</script>
