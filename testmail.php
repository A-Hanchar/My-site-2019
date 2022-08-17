<?php
$message = "test php mail";
$message = wordwrap($message, 70);
mail('tema.gon4ar@mail.ru', 'My Subject', $message);
?>