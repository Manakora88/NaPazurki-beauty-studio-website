$(document).ready(function() {
    //section "contact" - google maps
        var uluru = {lat: 52.205953, lng: 21.008565};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: uluru
        });

        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });

        var infowindow = new google.maps.InfoWindow({
            content: "<h1>Na Pazurki zapraszają!</h1>"
        });

        marker.addListener("click", function() {
            infowindow.open(map, marker);
        });

    // scroll-to-up
        // When the user scrolls down 500px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                document.querySelector(".scrollup").style.display = "block";
            } else {
                document.querySelector(".scrollup").style.display = "none";
            }
        }

    //scroll-to-section
            //reset scrolla
            $.scrollTo(0);

            $("#link-about").on("click", function() {
                $.scrollTo($("#about"),500);
            });
            $("#link-offer").on("click", function() {
                $.scrollTo($("#offer"),500);
            });
            $("#link-price").on("click", function() {
                $.scrollTo($("#price"),500);
            });
            $("#link-contact").on("click", function() {
                $.scrollTo($("#contact"),500);
            });
            $(".scrollup").on("click", function() {
                $.scrollTo($("body"),1000);
            });
            $("#link-nails").on("click", function() {
                $.scrollTo($("#nails"),500);
            });
            $("#link-makeup").on("click", function() {
                $.scrollTo($("#makeup"),500);
            });
            $("#link-henna").on("click", function() {
                $.scrollTo($("#henna"),500);
            });

        //gallery
            const panels = document.querySelectorAll('.panel');

            function toggleOpen() {
                this.classList.toggle('open');
            }

            panels.forEach(panel => panel.addEventListener('click', toggleOpen));
});
