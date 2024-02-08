<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Comment;
use App\Models\Thread;
use App\Models\User;
use App\Models\Member;
use App\Models\Representative;

class CommentFactory extends Factory
{
    protected $model = Comment::class;

    public function definition()
    {
        return [
            'text' => $this->faker->paragraph,
            'thread_id' => Thread::factory(),
            'user_id' => User::factory(),
            'member_id' => Member::factory(),
            'representative_id' => Representative::factory(),
        ];
    }
}