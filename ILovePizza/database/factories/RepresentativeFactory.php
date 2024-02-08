<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Representative;

class RepresentativeFactory extends Factory
{
    protected $model = Representative::class;

    public function definition()
    {
        return [
            'email' => $this->faker->unique()->safeEmail,
            'representative' => $this->faker->name,
            'association' => $this->faker->company,
            'password' => bcrypt('password'), 
            'pizza_type' => $this->faker->word,
        ];
    }
}
