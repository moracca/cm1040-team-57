// here we toggle a popup modal identified by "target"
// target can be a CSS selector or an actual modal DOM element
function toggleModal(target) {
    $(target).toggleClass('show');
}

function hideAllModals() {
    $('.modal').removeClass('show');
}

$(function() {
    // add a callback to close the modal when the user clicks outside the modal
    // on the opaque background.  Add the callback to the .modal element, since
    // we can't add a click callback directly to the ::after pseudo element since
    // it is not part of the DOM.
    $(".modal").click(function(e) {
        // check if the click was outside the boundary of the modal div
        if (e.offsetX < 0 || e.offsetX > this.offsetWidth || e.offsetY < 0 || e.offsetY > this.offsetHeight) {
            // close all modals
            hideAllModals();
        }
    });

    // add a callback to modal-toggle links to close its target modal, specified
    // in the data-target attribute
    $(".modal-toggle").click(function(e) { 
        var target_id = $(e.currentTarget).data('target');
        toggleModal(target_id)
    });

    // add callback for escape key to close modals
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            hideAllModals();
        }
    });
});