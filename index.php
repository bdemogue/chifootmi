<?php
    $hmr = isset($_GET['hmr']) ? '//localhost:8080/' : '';
 ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Chifoumi</title>
        <link rel="stylesheet" type="text/css" href="<?php echo $hmr ?>assets/styles/styles.css">   
    </head>
    <body>

        <div class="app">
            <h1><b>Rock</b>, <i>Paper</i>, Scissors</h1>
            <screen-start></screen-start>
        </div>

        <script src="<?php echo $hmr ?>assets/scripts/app.js"></script>

        <script src="http://localhost:35729/livereload.js?snipver=1"></script>
    </body>
</html>