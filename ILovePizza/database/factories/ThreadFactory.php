<?php

namespace Database\Factories;


use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Thread;
use App\Models\Representative;
use App\Models\Member;

class ThreadFactory extends Factory
{
    protected $model = Thread::class;

    public function definition()
    {
        return [
            'text' => $this->faker->paragraph,
            'photo' => $this->faker->imageUrl(),
            'pizza_type' => $this->faker->word,
            'member_id' => Member::factory(),
            'representative_id' => Representative::factory(),
        ];
    }
}