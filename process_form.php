<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $adults = $_POST['adults'];
    $children = $_POST['children'] ?? 'N/A';
    $age_children = $_POST['age_children'] ?? 'N/A';
    $start_date = $_POST['start_date'];
    $end_date = $_POST['end_date'];
    $nationality = $_POST['nationality'];
    $accommodation_rating = isset($_POST['accommodation_rating']) ? implode(', ', $_POST['accommodation_rating']) : 'N/A';
    $preferred_hotels = $_POST['preferred_hotels'] ?? 'N/A';
    $contact_preference = isset($_POST['contact_preference']) ? implode(', ', $_POST['contact_preference']) : 'N/A';
    $whatsapp_number = $_POST['whatsapp_number'] ?? 'N/A';
    $hear_about = $_POST['hear_about'] ?? 'N/A';
    $human_verification = $_POST['human_verification'];

    // Human verification check
    if ($human_verification != "7") {
        die("Verification failed. Please check your answer and try again.");
    }

    // Email content
    $to = "elmaramshods@gmail.com, mohameddhamdy407@gmail.com";
    $subject = "New Tour Inquiry from " . $first_name . " " . $last_name;
    $message = "
        Name: $first_name $last_name
        Email: $email
        Adults: $adults
        Children: $children
        Ages of Children: $age_children
        Travel Dates: $start_date to $end_date
        Nationality: $nationality
        Accommodation Rating: $accommodation_rating
        Preferred Hotels: $preferred_hotels
        Contact Preference: $contact_preference
        WhatsApp Number: $whatsapp_number
        How they found us: $hear_about
    ";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your inquiry. We will contact you soon!";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>
