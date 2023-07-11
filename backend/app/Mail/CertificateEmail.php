<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WelcomeEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    public function __construct($user,$publicKey)
    {
        $this->user = $user;
        $this->publicKey = $publicKey;
    }

    public function build()
    {
        return $this->subject('Certificate Ready')
                    ->view('emails.certificate');
    }
}
