$(document).ready(function(){
    $(".sideMenuToggler").on("click", function(){
        $(".wrapper").toggleClass("active");
    });
    
    $("#myInput").on("keyup",function(){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("myBtn").style.display = "block";
    }else{
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction(){
    document.documentElement.scrollTop = 0;
}