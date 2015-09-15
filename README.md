A bundle that contains a fullscreen loader


# Dependency

This bundle requires:

* jquery
* jquery loader plugin

# Installation

        composer require a5sys/overlay-bundle

In AppKernel.php

        new A5sys\OverlayBundle\OverlayBundle(),

# Files to include in your template

At the beginning of your body:

        {% include '@Overlay/overlay.html.twig' %}

The css to include:

        '@OverlayBundle/Resources/public/css/overlay.css'

The js to include:

        '@OverlayBundle/Resources/public/js/jquery-loading-ajax-body-overlay.js'

# Use

It will display the overlay when an ajax call is done by jQuery.
