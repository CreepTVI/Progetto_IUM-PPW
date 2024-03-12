<?php

namespace App\Mail;

use App\Models\Association;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;

class JoinAssociation extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $association, $user;

    /**
     * Create a new message instance.
     */
    public function __construct(Association $association ,User $user)
    {
        $this->association = $association;
        $this->user = $user;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Sei stato invitato ad unirti ad un associazione!',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.invitation',
            with:[
                'user' => $this->user,
                'association' => $this->association,
                'invite_url' => URL::route('new.member', [$this->association->id, $this->user->id])
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
