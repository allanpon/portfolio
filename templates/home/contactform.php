<?php

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailfrom = $_POST['mail'];
        $message = $_POST['message'];

        $mailto = "allan_ponchaut@ens.univ-artois.fr";
        $headers = "From: ".$mailfrom;
        $txt = "You have received an e-mail from ".$name.".\n\n".$message;

        mail($mailto, $subject, $txt, $headers);
        header("Location: index.php?mailsend");
    }