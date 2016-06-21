# Bower

A package manager for the web

Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.

Bower works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for. Bower keeps track of these packages in a manifest file, bower.json. How you use packages is up to you. Bower provides hooks to facilitate using packages in your tools and workflows.

Bower is optimized for the front-end. Bower uses a flat dependency tree, requiring only one version for each package, reducing page load to a minimum.

<a href="http://bower.io/" target="_blank">http://bower.io/</a>

[code]
bower install jquery underscore moment sprintf -S
[/code]

**HTML `<bower based>`**

[code language="html"]
<script src="./bower_components/jquery/dist/jquery.js"></script>
<script src="./bower_components/moment/moment.js"></script>
<script src="./bower_components/underscore/underscore.js"></script>
<script src="./bower_components/sprintf/src/sprintf.js"></script>
[/code]

**HTML `<cdn based>`**

[code language="html"]
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/sprintf/1.0.3/sprintf.js"></script>
[/code]

