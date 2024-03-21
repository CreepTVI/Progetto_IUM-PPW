<?php

namespace Database\Factories;

use App\Models\Thread;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Thread>
 */
class ThreadFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'text' => $this->faker->paragraph,
            'user_id' => function (){
                $user = User::role(['representative', 'member'])->inRandomOrder()->first();
                return $user->id;
            }

        ];
    }
    public function configure()
    {
        return $this->afterCreating(function (Thread $thread) {
            $numberOfTags = rand(1, 10);

            $pizzaTypes = [
                'Margherita', 
                'Quattro Stagioni', 
                'Capricciosa', 
                'Diavola', 
                'Prosciutto e Funghi', 
                'Bufalina', 
                'Marinara', 
                'Calzone', 
                'Vegetariana', 
                'Napoletana',
                'Romana',
                'Milanese', 
                'Siciliana', 
                'Gumette'
            ];

            $selectedPizzaTypes = $this->faker->randomElements($pizzaTypes, $numberOfTags);

            foreach ($selectedPizzaTypes as $pizzaType) {
                $thread->tag($pizzaType);
            }

            $numberOfLike = rand(0, 100);
            
            for ($i=0; $i < $numberOfLike; $i++) { 
                $thread->like(User::inRandomOrder()->first()->id);
            }

            $numberOfComment = rand(0, 100);

            for ($i=0; $i < $numberOfComment; $i++) { 
                $thread->commentAsUser(User::inRandomOrder()->first(),$this->faker->paragraph);
            }
        });
    }
}
