function OnBlazorReady() {
    $(".right-button").on("click", function () {
        event.preventDefault();
        $(this).siblings(".slide-cards").animate(
            {
                scrollLeft: "+=300px"
            },
            "slow"
        );
    });

    $(".left-button").on("click", function () {
        event.preventDefault();
        $(this).siblings(".slide-cards").animate(
            {
                scrollLeft: "-=300px"
            },
            "slow"
        );
    });
}