 $(document).ready(function () {
            $(".navigation-icon").click(function () {
                $(".side-menu").show();
            });

            $(".close-btn").click(function () {
                $(".side-menu").hide();
            });

            $(".navigation-3").hide();
            $(".menu-button-slide-3").click(function () {
                $(".navigation-3").fadeToggle("slow");
            });

            });