<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WelcomeEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;

    public function __construct($user)
    {
        $this->name = $user->name;

    }

    public function build()
    {
        return $this->subject('Welcome to CertifyMe')
                    ->view('emails.welcome');
    }
}
