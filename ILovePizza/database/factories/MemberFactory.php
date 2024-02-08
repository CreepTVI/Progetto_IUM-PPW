<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Member;
use App\Models\Representative;

class MemberFactory extends Factory
{
    protected $model = Member::class;

    public function definition()
    {
        return [
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), 
            'moderator' => $this->faker->boolean,
            'representative_id' => Representative::factory(),
        ];
    }
}