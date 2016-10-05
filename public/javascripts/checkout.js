Stripe.setPublishableKey('pk_test_3uy6McVRkspA3QwvBKXEmmS0');

$(function() {
	var $form = $('#checkout-form');

	$form.submit(function(event) {
		
		$('#charge-error').addClass('hidden-xs-up');

		// Disable the submit button to prevent repeated clicks:
		$form.find('button').prop('disabled', true);

		// Request a token from Stripe:
	    Stripe.card.createToken($form, stripeResponseHandler);

	    // Prevent the form from being submitted:
	    return false;
	});

	function stripeResponseHandler(status, response) {
		if (response.error) { // Problem!

		    // Show the errors on the form:
		    $('#charge-error').removeClass('hidden-xs-up').text(response.error.message);

		    $form.find('button').prop('disabled', false); // Re-enable submission

	  	} else { // Token was created!

		    // Get the token ID:
		    var token = response.id;

		    // Insert the token ID into the form so it gets submitted to the server:
		    $form.append($('<input type="hidden" name="stripeToken">').val(token));

		    // Submit the form:
		    $form.get(0).submit();
	 	 }
	}
});
